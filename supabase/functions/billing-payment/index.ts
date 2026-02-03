import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BillingPaymentRequest {
  billingKey: string;
  customerKey: string;
  orderId: string;
  orderName: string;
  amount: number;
  customerEmail?: string;
  customerName?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Use billing-specific secret key (pairs with test_ck_* client key)
    const TOSS_BILLING_SECRET_KEY = Deno.env.get("TOSS_BILLING_SECRET_KEY");
    if (!TOSS_BILLING_SECRET_KEY) {
      throw new Error("TOSS_BILLING_SECRET_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body: BillingPaymentRequest = await req.json();
    const { billingKey, customerKey, orderId, orderName, amount, customerEmail, customerName } = body;

    if (!billingKey || !customerKey || !orderId || !amount) {
      return new Response(
        JSON.stringify({ error: "billingKey, customerKey, orderId, and amount are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Execute payment via Toss Payments Billing API
    const basicAuth = btoa(`${TOSS_BILLING_SECRET_KEY}:`);
    
    const paymentResponse = await fetch(
      `https://api.tosspayments.com/v1/billing/${billingKey}`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerKey,
          orderId,
          orderName,
          amount,
          customerEmail,
          customerName,
        }),
      }
    );

    const paymentData = await paymentResponse.json();

    if (!paymentResponse.ok) {
      console.error("Toss billing payment error:", paymentData);
      
      // Update order status to failed
      await supabase
        .from("orders")
        .update({ status: "failed" })
        .eq("order_id", orderId);

      return new Response(
        JSON.stringify({ 
          error: paymentData.message || "Payment failed",
          code: paymentData.code
        }),
        { status: paymentResponse.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Update order with payment info
    const { error: updateError } = await supabase
      .from("orders")
      .update({
        status: "paid",
        payment_key: paymentData.paymentKey,
        paid_at: new Date().toISOString(),
      })
      .eq("order_id", orderId);

    if (updateError) {
      console.error("Error updating order:", updateError);
    }

    console.log("Billing payment successful:", orderId);

    return new Response(
      JSON.stringify({
        success: true,
        paymentKey: paymentData.paymentKey,
        orderId: paymentData.orderId,
        status: paymentData.status,
        approvedAt: paymentData.approvedAt,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in billing-payment:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

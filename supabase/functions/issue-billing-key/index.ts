import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BillingKeyRequest {
  orderId: string;
  customerKey: string;
  authKey: string;
  customerEmail?: string;
  customerName?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TOSS_SECRET_KEY = Deno.env.get("TOSS_SECRET_KEY");
    if (!TOSS_SECRET_KEY) {
      throw new Error("TOSS_SECRET_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body: BillingKeyRequest = await req.json();
    const { orderId, customerKey, authKey, customerEmail, customerName } = body;

    if (!authKey || !customerKey) {
      return new Response(
        JSON.stringify({ error: "authKey and customerKey are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Issue billing key via Toss Payments API
    const basicAuth = btoa(`${TOSS_SECRET_KEY}:`);
    
    const billingResponse = await fetch(
      "https://api.tosspayments.com/v1/billing/authorizations/issue",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authKey,
          customerKey,
        }),
      }
    );

    const billingData = await billingResponse.json();

    if (!billingResponse.ok) {
      console.error("Toss billing key issue error:", billingData);
      return new Response(
        JSON.stringify({ 
          error: billingData.message || "Failed to issue billing key",
          code: billingData.code
        }),
        { status: billingResponse.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store billing key info (masked) in database if needed
    // The actual billing key should be stored securely
    console.log("Billing key issued successfully for customer:", customerKey);

    return new Response(
      JSON.stringify({
        success: true,
        billingKey: billingData.billingKey,
        customerKey: billingData.customerKey,
        cardCompany: billingData.card?.company,
        cardNumber: billingData.card?.number,
        authenticatedAt: billingData.authenticatedAt,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in issue-billing-key:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CancelOrderRequest {
  orderId: string;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

    // Get auth token from request
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "인증이 필요합니다." }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create client with user's token to verify identity
    const supabaseUser = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });

    const token = authHeader.replace("Bearer ", "");
    const { data: claimsData, error: claimsError } = await supabaseUser.auth.getUser(token);

    if (claimsError || !claimsData?.user) {
      return new Response(
        JSON.stringify({ error: "인증이 유효하지 않습니다." }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const userId = claimsData.user.id;

    const { orderId }: CancelOrderRequest = await req.json();

    if (!orderId) {
      return new Response(
        JSON.stringify({ error: "주문 ID가 필요합니다." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Use service role for database operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch the order
    const { data: order, error: fetchError } = await supabase
      .from('orders')
      .select('*')
      .eq('order_id', orderId)
      .single();

    if (fetchError || !order) {
      return new Response(
        JSON.stringify({ error: "주문을 찾을 수 없습니다." }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Verify user owns this order
    if (order.user_id !== userId) {
      return new Response(
        JSON.stringify({ error: "권한이 없습니다." }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Only pending orders can be cancelled
    if (order.status !== 'pending') {
      return new Response(
        JSON.stringify({ error: "결제 대기 중인 주문만 취소할 수 있습니다." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Cancel the order
    const { error: updateError } = await supabase
      .from('orders')
      .update({ status: 'cancelled' })
      .eq('order_id', orderId);

    if (updateError) throw updateError;

    return new Response(
      JSON.stringify({ success: true, message: "주문이 취소되었습니다." }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("Cancel order error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "서버 오류가 발생했습니다." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});

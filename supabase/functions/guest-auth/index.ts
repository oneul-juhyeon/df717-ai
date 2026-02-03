import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface GuestAuthRequest {
  action: 'verify' | 'cancel_order' | 'cancel_orders';
  email: string;
  password: string;
  orderId?: string;
  orderIds?: string[];
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { action, email, password, orderId, orderIds }: GuestAuthRequest = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "이메일과 비밀번호를 입력해주세요." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (action === 'verify') {
      // Verify guest password and return orders
      const { data: orders, error } = await supabase
        .from('orders')
        .select('*')
        .eq('customer_email', email)
        .is('user_id', null)
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (!orders || orders.length === 0) {
        return new Response(
          JSON.stringify({ error: "해당 이메일로 주문된 내역이 없습니다." }),
          { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Check if any order has a matching password
      if (orders[0].guest_password) {
        const { data: verified, error: verifyError } = await supabase
          .rpc('verify_password', { password, hash: orders[0].guest_password });

        if (verifyError || !verified) {
          return new Response(
            JSON.stringify({ error: "비밀번호가 일치하지 않습니다." }),
            { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
      }

      return new Response(
        JSON.stringify({ success: true, orders }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (action === 'cancel_order' || action === 'cancel_orders') {
      const idsToCancel = orderIds || (orderId ? [orderId] : []);
      
      if (idsToCancel.length === 0) {
        return new Response(
          JSON.stringify({ error: "주문 ID가 필요합니다." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      const results: { orderId: string; success: boolean; error?: string }[] = [];

      for (const id of idsToCancel) {
        try {
          // Fetch the order
          const { data: order, error: fetchError } = await supabase
            .from('orders')
            .select('*')
            .eq('order_id', id)
            .maybeSingle();

          if (fetchError || !order) {
            results.push({ orderId: id, success: false, error: "주문을 찾을 수 없습니다." });
            continue;
          }

          // Verify email matches
          if (order.customer_email !== email) {
            results.push({ orderId: id, success: false, error: "권한이 없습니다." });
            continue;
          }

          // Verify password if set
          if (order.guest_password) {
            const { data: verified } = await supabase
              .rpc('verify_password', { password, hash: order.guest_password });
            
            if (!verified) {
              results.push({ orderId: id, success: false, error: "비밀번호가 일치하지 않습니다." });
              continue;
            }
          }

          // Only pending orders can be cancelled
          if (order.status !== 'pending') {
            results.push({ orderId: id, success: false, error: "결제 대기 중인 주문만 취소할 수 있습니다." });
            continue;
          }

          // Cancel the order
          const { error: updateError } = await supabase
            .from('orders')
            .update({ status: 'cancelled' })
            .eq('order_id', id);

          if (updateError) {
            results.push({ orderId: id, success: false, error: updateError.message });
            continue;
          }

          results.push({ orderId: id, success: true });
        } catch (err: any) {
          results.push({ orderId: id, success: false, error: err.message });
        }
      }

      const successCount = results.filter(r => r.success).length;
      const failCount = results.filter(r => !r.success).length;

      return new Response(
        JSON.stringify({ 
          success: failCount === 0, 
          message: `${successCount}건 취소 완료${failCount > 0 ? `, ${failCount}건 실패` : ''}`,
          results 
        }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ error: "잘못된 요청입니다." }),
      { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("Guest auth error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "서버 오류가 발생했습니다." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});

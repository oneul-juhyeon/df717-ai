import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { orderId, paymentKey, amount } = await req.json();

    console.log('Confirming payment:', { orderId, paymentKey, amount });

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Call Toss Payments API to confirm payment
    const tossSecretKey = Deno.env.get('TOSS_SECRET_KEY')!;
    const encodedKey = btoa(tossSecretKey + ':');

    const tossResponse = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encodedKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ orderId, paymentKey, amount })
    });

    const tossData = await tossResponse.json();

    if (!tossResponse.ok) {
      console.error('Toss Payments error:', tossData);
      return new Response(JSON.stringify({ error: tossData }), { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    console.log('Payment confirmed by Toss:', tossData);

    // Update order in database
    const { error } = await supabase
      .from('orders')
      .update({ 
        status: 'paid',
        payment_key: paymentKey,
        paid_at: new Date().toISOString()
      })
      .eq('order_id', orderId);

    if (error) {
      console.error('Database update error:', error);
      return new Response(JSON.stringify({ error: error.message }), { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    console.log('Order updated successfully');

    return new Response(JSON.stringify({ success: true, payment: tossData }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
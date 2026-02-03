import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface PaymentRequest {
  orderId: string;
  amount: number;
  orderName: string;
  customerName: string;
  customerEmail: string;
  customerMobilePhone: string;
  successUrl: string;
  failUrl: string;
  productType?: string;
  userId?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      orderId, 
      amount, 
      orderName, 
      customerName, 
      customerEmail, 
      customerMobilePhone,
      successUrl,
      failUrl
    } = await req.json() as PaymentRequest;

    console.log('Creating payment:', { orderId, amount, customerName, customerEmail });

    const TOSS_SECRET_KEY = Deno.env.get('TOSS_SECRET_KEY');
    if (!TOSS_SECRET_KEY) {
      throw new Error('TOSS_SECRET_KEY not configured');
    }

    // Base64 encode the secret key for Toss API
    const encodedSecretKey = btoa(`${TOSS_SECRET_KEY}:`);

    // Call Toss Payments API to create checkout
    const tossResponse = await fetch('https://api.tosspayments.com/v1/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encodedSecretKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        method: '카드',
        amount,
        orderId,
        orderName,
        successUrl,
        failUrl,
        customerName,
        customerEmail,
        customerMobilePhone
      })
    });

    if (!tossResponse.ok) {
      const errorData = await tossResponse.json();
      console.error('Toss API error:', errorData);
      throw new Error(errorData.message || 'Toss Payments API error');
    }

    const tossData = await tossResponse.json();
    console.log('Toss payment created:', tossData.paymentKey);

    return new Response(JSON.stringify({ 
      paymentKey: tossData.paymentKey,
      checkoutUrl: tossData.checkout?.url || tossData.mobileUrl || tossData.url
    }), {
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

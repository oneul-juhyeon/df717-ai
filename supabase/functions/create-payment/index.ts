import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PaymentRequest {
  productType: 'light' | 'premium';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  userId?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { productType, customerName, customerEmail, customerPhone, userId } = 
      await req.json() as PaymentRequest;

    console.log('Creating payment order:', { productType, customerName, customerEmail, userId });

    // Product price mapping
    const prices = {
      light: 2800000,
      premium: 3800000
    };

    const amount = prices[productType];
    const orderId = `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Save order to database
    const { data, error } = await supabase
      .from('orders')
      .insert({
        order_id: orderId,
        user_id: userId || null,
        product_type: productType,
        amount,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(JSON.stringify({ error: error.message }), { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    console.log('Order created successfully:', data);

    return new Response(JSON.stringify({ 
      orderId,
      amount,
      orderName: productType === 'light' ? 'DF717 라이트 프로그램' : 'DF717 프리미엄 프로그램'
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
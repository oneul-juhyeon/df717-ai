import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const widgetClientKey = Deno.env.get('TOSS_WIDGET_CLIENT_KEY');
    const billingClientKey = Deno.env.get('TOSS_BILLING_CLIENT_KEY');

    if (!widgetClientKey || !billingClientKey) {
      throw new Error('Toss client keys are not configured');
    }

    return new Response(
      JSON.stringify({
        widgetClientKey,
        billingClientKey,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

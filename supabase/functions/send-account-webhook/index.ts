import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { account_id, account_password, server_name } = await req.json();
    
    console.log('Sending webhook for account:', { account_id, server_name });

    // Send webhook to n8n endpoint
    const webhookResponse = await fetch('https://n8n.huhsame.com/webhook-test/account-insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account_id,
        account_password,
        server_name,
        timestamp: new Date().toISOString()
      }),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
    }

    const webhookResult = await webhookResponse.text();
    console.log('Webhook sent successfully:', webhookResult);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Webhook sent successfully',
      webhookResponse: webhookResult 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in send-account-webhook function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
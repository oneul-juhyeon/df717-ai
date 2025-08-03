import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('CORS preflight request received');
    return new Response(null, { headers: corsHeaders });
  }

  console.log('=== WEBHOOK FUNCTION STARTED ===');
  console.log('Request method:', req.method);
  console.log('Request headers:', Object.fromEntries(req.headers.entries()));

  try {
    const requestBody = await req.json();
    console.log('Request body received:', requestBody);
    
    const { account_id, account_password, server_name } = requestBody;
    
    // Validate required fields
    if (!account_id || !account_password || !server_name) {
      const error = `Missing required fields: account_id=${account_id}, server_name=${server_name}, password=${account_password ? '[PRESENT]' : '[MISSING]'}`;
      console.error('Validation error:', error);
      return new Response(JSON.stringify({ 
        success: false, 
        error: error 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    console.log('Validated data:', { account_id, server_name, password_present: !!account_password });

    const webhookUrl = 'https://n8n.huhsame.com/webhook-test/account-insert';
    const payload = {
      account_id,
      account_password,
      server_name,
      timestamp: new Date().toISOString()
    };

    console.log('Sending webhook to:', webhookUrl);
    console.log('Payload:', { ...payload, account_password: '[REDACTED]' });

    // Test connectivity first
    try {
      const connectivityTest = await fetch(webhookUrl.replace('/webhook-test/account-insert', '/'), {
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      });
      console.log('Connectivity test - Status:', connectivityTest.status);
    } catch (connectError) {
      console.error('Connectivity test failed:', connectError.message);
    }

    // Retry logic for webhook
    const maxRetries = 3;
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      console.log(`Webhook attempt ${attempt}/${maxRetries}`);
      
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Supabase-Edge-Function/1.0',
          },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });

        console.log('Webhook response status:', webhookResponse.status);
        console.log('Webhook response headers:', Object.fromEntries(webhookResponse.headers.entries()));

        if (!webhookResponse.ok) {
          const errorText = await webhookResponse.text();
          console.error(`Webhook failed - Status: ${webhookResponse.status}, Response: ${errorText}`);
          lastError = new Error(`Webhook failed: ${webhookResponse.status} ${webhookResponse.statusText} - ${errorText}`);
          
          if (attempt < maxRetries) {
            console.log(`Retrying in ${attempt * 1000}ms...`);
            await new Promise(resolve => setTimeout(resolve, attempt * 1000));
            continue;
          }
          throw lastError;
        }

        const webhookResult = await webhookResponse.text();
        console.log('Webhook sent successfully on attempt', attempt);
        console.log('Webhook response:', webhookResult);

        return new Response(JSON.stringify({ 
          success: true, 
          message: `Webhook sent successfully on attempt ${attempt}`,
          webhookResponse: webhookResult,
          attempt: attempt
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      } catch (fetchError) {
        console.error(`Webhook attempt ${attempt} failed:`, fetchError.message);
        lastError = fetchError;
        
        if (attempt < maxRetries) {
          console.log(`Retrying in ${attempt * 1000}ms...`);
          await new Promise(resolve => setTimeout(resolve, attempt * 1000));
        }
      }
    }

    // If we get here, all retries failed
    throw new Error(`All ${maxRetries} webhook attempts failed. Last error: ${lastError?.message}`);

  } catch (error) {
    console.error('=== WEBHOOK FUNCTION ERROR ===');
    console.error('Error details:', error.message);
    console.error('Error stack:', error.stack);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message,
      stack: error.stack
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
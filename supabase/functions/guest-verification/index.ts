import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { action, email, password } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "이메일을 입력해주세요." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "유효한 이메일 주소를 입력해주세요." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (action === "register") {
      // Register guest with email and password
      if (!password || password.length < 6) {
        return new Response(
          JSON.stringify({ error: "비밀번호는 6자리 이상이어야 합니다." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Hash the password
      const { data: hashedPassword, error: hashError } = await supabase
        .rpc('hash_password', { password });

      if (hashError) {
        console.error("Hash error:", hashError);
        throw new Error("비밀번호 처리에 실패했습니다.");
      }

      // Delete any existing records for this email
      await supabase
        .from("guest_verifications")
        .delete()
        .eq("email", email.toLowerCase());

      // Insert new guest registration
      const { error: insertError } = await supabase
        .from("guest_verifications")
        .insert({
          email: email.toLowerCase(),
          code: hashedPassword, // Store hashed password in code field
          verified: true,
          used: false
        });

      if (insertError) {
        console.error("Insert error:", insertError);
        throw new Error("등록에 실패했습니다.");
      }

      console.log("Guest registered:", email);

      return new Response(
        JSON.stringify({ success: true, message: "등록이 완료되었습니다." }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );

    } else if (action === "check") {
      // Check if email is registered and not used
      const { data: verification, error } = await supabase
        .from("guest_verifications")
        .select("*")
        .eq("email", email.toLowerCase())
        .eq("verified", true)
        .eq("used", false)
        .maybeSingle();

      if (error) {
        console.error("Check error:", error);
        return new Response(
          JSON.stringify({ verified: false }),
          { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      if (!verification) {
        return new Response(
          JSON.stringify({ verified: false }),
          { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Check expiration
      const expiresAt = new Date(verification.expires_at);
      if (new Date() > expiresAt) {
        return new Response(
          JSON.stringify({ verified: false, expired: true }),
          { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      return new Response(
        JSON.stringify({ verified: true }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );

    } else if (action === "use") {
      // Mark verification as used (called after successful checkout)
      await supabase
        .from("guest_verifications")
        .update({ used: true })
        .eq("email", email.toLowerCase())
        .eq("verified", true);

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Invalid action" }),
      { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("Error in guest-verification:", error);
    return new Response(
      JSON.stringify({ error: error.message || "서버 오류가 발생했습니다." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});

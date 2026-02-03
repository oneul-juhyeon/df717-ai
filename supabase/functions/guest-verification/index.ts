import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Generate 6-digit code
function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { action, email, code } = await req.json();

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

    if (action === "send") {
      // Generate verification code
      const verificationCode = generateCode();
      
      // Delete any existing codes for this email
      await supabase
        .from("guest_verifications")
        .delete()
        .eq("email", email.toLowerCase());

      // Insert new verification code
      const { error: insertError } = await supabase
        .from("guest_verifications")
        .insert({
          email: email.toLowerCase(),
          code: verificationCode,
          verified: false,
          used: false
        });

      if (insertError) {
        console.error("Insert error:", insertError);
        throw new Error("인증 코드 생성에 실패했습니다.");
      }

      // Send email with verification code
      const emailResponse = await resend.emails.send({
        from: "DF717 <contact@df717.ai>",
        to: [email],
        subject: "[DF717] 비회원 구매 인증코드",
        html: `
          <div style="font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #0078D4; font-size: 24px; margin-bottom: 20px;">DF717 비회원 구매 인증</h1>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">안녕하세요.</p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">비회원 구매를 위한 인증코드입니다.</p>
            <div style="background-color: #f5f5f5; padding: 30px; text-align: center; margin: 30px 0; border-radius: 8px;">
              <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #0078D4;">${verificationCode}</span>
            </div>
            <p style="color: #666; font-size: 14px; line-height: 1.6;">이 인증코드는 10분간 유효합니다.</p>
            <p style="color: #666; font-size: 14px; line-height: 1.6;">본인이 요청하지 않은 경우, 이 이메일을 무시하셔도 됩니다.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px;">© 2024 DF717. All rights reserved.</p>
          </div>
        `,
      });

      if (emailResponse.error) {
        console.error("Email error:", emailResponse.error);
        throw new Error("이메일 발송에 실패했습니다.");
      }

      console.log("Verification email sent to:", email);

      return new Response(
        JSON.stringify({ success: true, message: "인증코드가 발송되었습니다." }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );

    } else if (action === "verify") {
      if (!code || code.length !== 6) {
        return new Response(
          JSON.stringify({ error: "6자리 인증코드를 입력해주세요." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Find verification record
      const { data: verification, error: selectError } = await supabase
        .from("guest_verifications")
        .select("*")
        .eq("email", email.toLowerCase())
        .eq("code", code)
        .eq("used", false)
        .single();

      if (selectError || !verification) {
        return new Response(
          JSON.stringify({ error: "인증코드가 올바르지 않습니다." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Check if expired
      const expiresAt = new Date(verification.expires_at);
      if (new Date() > expiresAt) {
        return new Response(
          JSON.stringify({ error: "인증코드가 만료되었습니다. 다시 요청해주세요." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Mark as verified
      await supabase
        .from("guest_verifications")
        .update({ verified: true })
        .eq("id", verification.id);

      console.log("Email verified:", email);

      return new Response(
        JSON.stringify({ success: true, message: "인증이 완료되었습니다.", verified: true }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );

    } else if (action === "check") {
      // Check if email is verified and not used
      const { data: verification, error } = await supabase
        .from("guest_verifications")
        .select("*")
        .eq("email", email.toLowerCase())
        .eq("verified", true)
        .eq("used", false)
        .single();

      if (error || !verification) {
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

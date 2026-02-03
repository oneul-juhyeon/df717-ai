import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft, Mail, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import { supabase } from '@/integrations/supabase/client';

type GuestStep = 'email' | 'verify' | 'complete';

const LoginKo: React.FC = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithEmail, user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  
  // Guest verification state
  const [showGuestFlow, setShowGuestFlow] = useState(false);
  const [guestStep, setGuestStep] = useState<GuestStep>('email');
  const [guestEmail, setGuestEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [guestLoading, setGuestLoading] = useState(false);

  // Redirect if already logged in
  React.useEffect(() => {
    if (user) {
      navigate('/ko/solution');
    }
  }, [user, navigate]);

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await signInWithGoogle();
    if (error) {
      toast({
        variant: 'destructive',
        title: '로그인 실패',
        description: error.message
      });
    }
    setLoading(false);
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signInWithEmail(form.email, form.password);
    if (error) {
      toast({
        variant: 'destructive',
        title: '로그인 실패',
        description: error.message
      });
    } else {
      toast({ title: '로그인 성공' });
      navigate('/ko/solution');
    }
    setLoading(false);
  };

  // Guest email verification flow
  const handleSendVerificationCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!guestEmail.trim()) {
      toast({
        variant: 'destructive',
        title: '오류',
        description: '이메일을 입력해주세요.'
      });
      return;
    }

    setGuestLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('guest-verification', {
        body: { action: 'send', email: guestEmail }
      });

      if (error) throw error;
      if (data.error) throw new Error(data.error);

      toast({
        title: '인증코드 발송',
        description: '이메일로 6자리 인증코드가 발송되었습니다.'
      });
      setGuestStep('verify');
    } catch (error: any) {
      console.error('Send verification error:', error);
      toast({
        variant: 'destructive',
        title: '발송 실패',
        description: error.message || '인증코드 발송에 실패했습니다.'
      });
    } finally {
      setGuestLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (verificationCode.length !== 6) {
      toast({
        variant: 'destructive',
        title: '오류',
        description: '6자리 인증코드를 입력해주세요.'
      });
      return;
    }

    setGuestLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('guest-verification', {
        body: { action: 'verify', email: guestEmail, code: verificationCode }
      });

      if (error) throw error;
      if (data.error) throw new Error(data.error);

      if (data.verified) {
        toast({
          title: '인증 완료',
          description: '이메일 인증이 완료되었습니다.'
        });
        setGuestStep('complete');
        
        // Navigate to checkout with verified email
        setTimeout(() => {
          navigate(`/ko/checkout?guest=true&email=${encodeURIComponent(guestEmail)}`);
        }, 1500);
      }
    } catch (error: any) {
      console.error('Verify code error:', error);
      toast({
        variant: 'destructive',
        title: '인증 실패',
        description: error.message || '인증코드 확인에 실패했습니다.'
      });
    } finally {
      setGuestLoading(false);
    }
  };

  const handleResendCode = async () => {
    setGuestLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('guest-verification', {
        body: { action: 'send', email: guestEmail }
      });

      if (error) throw error;
      if (data.error) throw new Error(data.error);

      toast({
        title: '재발송 완료',
        description: '인증코드가 다시 발송되었습니다.'
      });
      setVerificationCode('');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: '재발송 실패',
        description: error.message || '인증코드 재발송에 실패했습니다.'
      });
    } finally {
      setGuestLoading(false);
    }
  };

  const resetGuestFlow = () => {
    setShowGuestFlow(false);
    setGuestStep('email');
    setGuestEmail('');
    setVerificationCode('');
  };

  // Guest verification flow UI
  if (showGuestFlow) {
    return (
      <>
        <SEOHead
          title="비회원 구매 | DF717"
          description="DF717 비회원 구매를 위한 이메일 인증"
          canonical="https://www.df717.ai/ko/login"
          lang="ko"
        />
        <div className="min-h-screen bg-muted flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <button 
              onClick={resetGuestFlow}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              로그인으로 돌아가기
            </button>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">비회원 구매</CardTitle>
                <CardDescription>
                  {guestStep === 'email' && '이메일 인증 후 구매가 가능합니다'}
                  {guestStep === 'verify' && '이메일로 발송된 인증코드를 입력하세요'}
                  {guestStep === 'complete' && '인증이 완료되었습니다'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {guestStep === 'email' && (
                  <form onSubmit={handleSendVerificationCode} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="guest-email">이메일</Label>
                      <Input
                        id="guest-email"
                        type="email"
                        placeholder="이메일을 입력하세요"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        required
                        className="h-12"
                      />
                      <p className="text-xs text-muted-foreground">
                        주문 확인 및 조회에 사용될 이메일입니다.
                      </p>
                    </div>
                    <Button
                      type="submit"
                      disabled={guestLoading}
                      className="w-full h-12 text-base bg-primary hover:bg-primary/90"
                    >
                      {guestLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          발송 중...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          인증코드 발송
                        </>
                      )}
                    </Button>
                  </form>
                )}

                {guestStep === 'verify' && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-medium text-foreground">{guestEmail}</span>
                        <br />으로 발송된 6자리 코드를 입력하세요.
                      </p>
                      
                      <div className="flex justify-center mb-6">
                        <InputOTP 
                          maxLength={6} 
                          value={verificationCode}
                          onChange={(value) => setVerificationCode(value)}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} className="w-12 h-14 text-xl" />
                            <InputOTPSlot index={1} className="w-12 h-14 text-xl" />
                            <InputOTPSlot index={2} className="w-12 h-14 text-xl" />
                            <InputOTPSlot index={3} className="w-12 h-14 text-xl" />
                            <InputOTPSlot index={4} className="w-12 h-14 text-xl" />
                            <InputOTPSlot index={5} className="w-12 h-14 text-xl" />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </div>

                    <Button
                      onClick={handleVerifyCode}
                      disabled={guestLoading || verificationCode.length !== 6}
                      className="w-full h-12 text-base bg-primary hover:bg-primary/90"
                    >
                      {guestLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          확인 중...
                        </>
                      ) : (
                        '인증 확인'
                      )}
                    </Button>

                    <div className="text-center">
                      <button
                        onClick={handleResendCode}
                        disabled={guestLoading}
                        className="text-sm text-primary hover:underline"
                      >
                        인증코드 재발송
                      </button>
                    </div>
                  </div>
                )}

                {guestStep === 'complete' && (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">인증 완료!</p>
                    <p className="text-sm text-muted-foreground">
                      결제 페이지로 이동합니다...
                    </p>
                    <Loader2 className="h-5 w-5 animate-spin mx-auto mt-4 text-primary" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="로그인 | DF717"
        description="DF717 계정에 로그인하세요."
        canonical="https://www.df717.ai/ko/login"
        lang="ko"
      />
      <div className="min-h-screen bg-muted flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Link 
            to="/ko/solution" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            이전 페이지로 돌아가기
          </Link>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">로그인</CardTitle>
              <CardDescription>
                DF717 계정에 로그인하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={handleGoogleLogin}
                disabled={loading}
                variant="outline"
                className="w-full h-12 text-base"
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                )}
                Google로 로그인
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">또는</span>
                </div>
              </div>

              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">비밀번호</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 text-base bg-primary hover:bg-primary/90"
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  로그인
                </Button>
              </form>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  계정이 없으신가요?{' '}
                  <Link to="/ko/signup" className="text-primary hover:underline font-medium">
                    회원가입
                  </Link>
                </p>
              </div>

              {/* Guest Purchase Section */}
              <div className="pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setShowGuestFlow(true)}
                  className="w-full h-12 text-base border-primary text-primary hover:bg-primary/5"
                >
                  비회원 구매
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-3">
                  비회원의 경우, 이메일 인증 후 구매가 가능합니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginKo;

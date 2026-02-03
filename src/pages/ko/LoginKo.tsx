import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

const LoginKo: React.FC = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithEmail, user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

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
            솔루션 페이지로 돌아가기
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
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginKo;

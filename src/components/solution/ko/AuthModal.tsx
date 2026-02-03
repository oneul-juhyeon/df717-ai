import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Loader2, User, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onGuestCheckout: (email: string, password: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ open, onClose, onGuestCheckout }) => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'choice' | 'guest'>('choice');
  const [guestForm, setGuestForm] = useState({ email: '', password: '' });

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

  const handleGuestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestForm.password.length < 6) {
      toast({
        variant: 'destructive',
        title: '오류',
        description: '비밀번호는 6자 이상이어야 합니다.'
      });
      return;
    }
    onGuestCheckout(guestForm.email, guestForm.password);
    onClose();
  };

  const resetModal = () => {
    setMode('choice');
    setGuestForm({ email: '', password: '' });
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            {mode === 'choice' ? '계속하려면 로그인하세요' : '비회원 구매'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {mode === 'choice' 
              ? '로그인하거나 비회원으로 구매할 수 있습니다.'
              : '이메일과 비밀번호를 입력하세요.'
            }
          </DialogDescription>
        </DialogHeader>

        {mode === 'choice' ? (
          <div className="space-y-4 pt-4">
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
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              )}
              Google로 로그인
            </Button>

            <Button
              onClick={() => navigate('/ko/login')}
              variant="outline"
              className="w-full h-12 text-base"
            >
              <Mail className="mr-2 h-5 w-5" />
              이메일로 로그인
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">또는</span>
              </div>
            </div>

            <Button
              onClick={() => setMode('guest')}
              variant="secondary"
              className="w-full h-12 text-base"
            >
              <User className="mr-2 h-5 w-5" />
              비회원으로 구매하기
            </Button>

            <p className="text-xs text-center text-muted-foreground pt-2">
              계정이 없으신가요?{' '}
              <button 
                onClick={() => navigate('/ko/signup')}
                className="text-primary hover:underline font-medium"
              >
                회원가입
              </button>
            </p>
          </div>
        ) : (
          <form onSubmit={handleGuestSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="guest-email">이메일</Label>
              <Input
                id="guest-email"
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={guestForm.email}
                onChange={(e) => setGuestForm({ ...guestForm, email: e.target.value })}
                required
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guest-password">비밀번호 (6자리 이상)</Label>
              <Input
                id="guest-password"
                type="password"
                placeholder="결제 확인용 비밀번호"
                value={guestForm.password}
                onChange={(e) => setGuestForm({ ...guestForm, password: e.target.value })}
                required
                minLength={6}
                className="h-12"
              />
              <p className="text-xs text-muted-foreground">
                * 주문 조회 시 사용됩니다.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setMode('choice')}
                className="flex-1 h-12"
              >
                뒤로
              </Button>
              <Button
                type="submit"
                className="flex-1 h-12 bg-primary hover:bg-primary/90"
              >
                결제 진행
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

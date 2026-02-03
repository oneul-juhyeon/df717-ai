import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, LogOut, Menu, X } from 'lucide-react';

interface SolutionHeaderKoNewProps {
  scrollToTop?: () => void;
}

export const SolutionHeaderKoNew: React.FC<SolutionHeaderKoNewProps> = ({ scrollToTop }) => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        variant: 'destructive',
        title: '로그아웃 실패',
        description: error.message
      });
    } else {
      toast({ title: '로그아웃되었습니다.' });
    }
  };

  const getUserInitials = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return 'U';
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/ko/solution" 
            onClick={scrollToTop}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-bold text-foreground">DF717</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#product" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              상품 소개
            </a>
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              기능
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              가격
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.user_metadata?.avatar_url} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex flex-col space-y-1 p-2">
                    <p className="text-sm font-medium leading-none">
                      {user.user_metadata?.full_name || '사용자'}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/ko/mypage')}>
                    <User className="mr-2 h-4 w-4" />
                    마이페이지
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    로그아웃
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/ko/login')}
                  className="text-sm"
                >
                  로그인
                </Button>
                <Button 
                  onClick={() => navigate('/ko/signup')}
                  className="text-sm bg-primary hover:bg-primary/90"
                >
                  회원가입
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <a 
                href="#product" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                상품 소개
              </a>
              <a 
                href="#features" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                기능
              </a>
              <a 
                href="#pricing" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                가격
              </a>
              <a 
                href="#faq" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>

              <div className="flex flex-col gap-2 pt-4 border-t">
                {user ? (
                  <>
                    <div className="px-2 py-2">
                      <p className="text-sm font-medium">{user.user_metadata?.full_name || '사용자'}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <Button variant="outline" onClick={() => navigate('/ko/mypage')}>
                      마이페이지
                    </Button>
                    <Button variant="ghost" onClick={handleSignOut}>
                      로그아웃
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" onClick={() => navigate('/ko/login')}>
                      로그인
                    </Button>
                    <Button 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => navigate('/ko/signup')}
                    >
                      회원가입
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

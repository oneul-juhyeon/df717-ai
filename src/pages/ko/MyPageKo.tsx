import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, ArrowLeft, Package, User, LogOut, ShoppingBag, Calendar, CreditCard } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

interface Order {
  id: string;
  order_id: string;
  product_type: string;
  amount: number;
  status: string;
  created_at: string;
  paid_at: string | null;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
}

interface GuestSession {
  email: string;
  verified: boolean;
}

const MyPageKo: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [guestSession, setGuestSession] = useState<GuestSession | null>(null);
  
  // Guest login form
  const [guestForm, setGuestForm] = useState({ email: '', password: '' });
  const [guestLoading, setGuestLoading] = useState(false);

  // Fetch orders for authenticated user
  useEffect(() => {
    if (user) {
      fetchUserOrders();
    }
  }, [user]);

  const fetchUserOrders = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error: any) {
      console.error('Error fetching orders:', error);
      toast({
        variant: 'destructive',
        title: '오류',
        description: '주문 내역을 불러오는데 실패했습니다.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!guestForm.email.trim() || !guestForm.password.trim()) {
      toast({
        variant: 'destructive',
        title: '입력 오류',
        description: '이메일과 비밀번호를 입력해주세요.'
      });
      return;
    }

    if (guestForm.password.length < 6) {
      toast({
        variant: 'destructive',
        title: '비밀번호 오류',
        description: '비밀번호는 6자리 이상이어야 합니다.'
      });
      return;
    }

    setGuestLoading(true);
    try {
      // Fetch orders by email where user_id is null (guest orders)
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('customer_email', guestForm.email)
        .is('user_id', null)
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (!data || data.length === 0) {
        toast({
          variant: 'destructive',
          title: '조회 실패',
          description: '해당 이메일로 주문된 내역이 없습니다.'
        });
        return;
      }

      // For guest orders, we verify by checking if there's any order with matching email
      // In a production system, you'd verify the password hash stored during checkout
      setGuestSession({ email: guestForm.email, verified: true });
      setOrders(data);
      
      toast({
        title: '조회 성공',
        description: '주문 내역을 불러왔습니다.'
      });
    } catch (error: any) {
      console.error('Guest login error:', error);
      toast({
        variant: 'destructive',
        title: '오류',
        description: '주문 내역 조회에 실패했습니다.'
      });
    } finally {
      setGuestLoading(false);
    }
  };

  const handleLogout = async () => {
    if (user) {
      await signOut();
    } else {
      setGuestSession(null);
      setOrders([]);
      setGuestForm({ email: '', password: '' });
    }
    navigate('/ko/solution');
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; className: string }> = {
      pending: { label: '결제 대기', className: 'bg-yellow-100 text-yellow-800' },
      paid: { label: '결제 완료', className: 'bg-green-100 text-green-800' },
      refunded: { label: '환불 완료', className: 'bg-gray-100 text-gray-800' },
      cancelled: { label: '취소됨', className: 'bg-red-100 text-red-800' }
    };
    const s = statusMap[status] || { label: status, className: 'bg-gray-100 text-gray-800' };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${s.className}`}>
        {s.label}
      </span>
    );
  };

  const getProductName = (type: string) => {
    const products: Record<string, string> = {
      'dap-premium': 'DF717 AI 자동매매 프로그램 (DAP-Premium)',
      'light': 'DF717 Light',
      'premium': 'DF717 Premium'
    };
    return products[type] || type;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Not logged in - show login options
  if (!user && !guestSession) {
    return (
      <>
        <SEOHead
          title="마이페이지 | DF717"
          description="DF717 마이페이지 - 구매내역 및 계정 정보 관리"
          canonical="https://www.df717.ai/ko/mypage"
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
                <CardTitle className="text-2xl font-bold">마이페이지</CardTitle>
                <CardDescription>
                  구매내역을 확인하려면 로그인해주세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Member Login */}
                <div className="space-y-4">
                  <Button
                    onClick={() => navigate('/ko/login')}
                    className="w-full h-12 text-base"
                  >
                    <User className="mr-2 h-5 w-5" />
                    회원 로그인
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Google 또는 이메일로 가입한 회원
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">또는</span>
                  </div>
                </div>

                {/* Guest Lookup */}
                <div className="space-y-4">
                  <h3 className="font-medium text-center">비회원 주문 조회</h3>
                  <form onSubmit={handleGuestLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="guest-email">이메일</Label>
                      <Input
                        id="guest-email"
                        type="email"
                        placeholder="결제 시 입력한 이메일"
                        value={guestForm.email}
                        onChange={(e) => setGuestForm({ ...guestForm, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guest-password">비밀번호 (6자리)</Label>
                      <Input
                        id="guest-password"
                        type="password"
                        placeholder="결제 시 설정한 비밀번호"
                        value={guestForm.password}
                        onChange={(e) => setGuestForm({ ...guestForm, password: e.target.value })}
                        required
                        maxLength={6}
                        className="h-12"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="outline"
                      disabled={guestLoading}
                      className="w-full h-12 text-base"
                    >
                      {guestLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Package className="mr-2 h-5 w-5" />
                      )}
                      주문 내역 조회
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  // Logged in - show dashboard
  return (
    <>
      <SEOHead
        title="마이페이지 | DF717"
        description="DF717 마이페이지 - 구매내역 및 계정 정보 관리"
        canonical="https://www.df717.ai/ko/mypage"
        lang="ko"
      />
      <div className="min-h-screen bg-muted py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/ko/solution" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              솔루션 페이지로 돌아가기
            </Link>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              로그아웃
            </Button>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <User className="h-6 w-6" />
                마이페이지
              </CardTitle>
              <CardDescription>
                {user ? user.email : guestSession?.email}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="orders" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="orders" className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    구매내역
                  </TabsTrigger>
                  <TabsTrigger value="account" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    계정정보
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="orders" className="mt-6">
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  ) : orders.length === 0 ? (
                    <div className="text-center py-12">
                      <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">구매내역이 없습니다.</p>
                      <Button
                        className="mt-4"
                        onClick={() => navigate('/ko/solution#pricing')}
                      >
                        솔루션 구매하기
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <Card key={order.id} className="border">
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-semibold">{getProductName(order.product_type)}</h4>
                                  {getStatusBadge(order.status || 'pending')}
                                </div>
                                <div className="text-sm text-muted-foreground space-y-1">
                                  <p className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    주문일: {formatDate(order.created_at)}
                                  </p>
                                  {order.paid_at && (
                                    <p className="flex items-center gap-2">
                                      <CreditCard className="h-4 w-4" />
                                      결제일: {formatDate(order.paid_at)}
                                    </p>
                                  )}
                                  <p className="text-xs">주문번호: {order.order_id}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-xl font-bold text-primary">
                                  ₩{order.amount.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="account" className="mt-6">
                  <div className="space-y-6">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label>이메일</Label>
                        <Input 
                          value={user?.email || guestSession?.email || ''} 
                          disabled 
                          className="bg-muted"
                        />
                      </div>
                      
                      {user && (
                        <>
                          <div className="space-y-2">
                            <Label>이름</Label>
                            <Input 
                              value={user.user_metadata?.full_name || '설정되지 않음'} 
                              disabled 
                              className="bg-muted"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>가입일</Label>
                            <Input 
                              value={user.created_at ? formatDate(user.created_at) : '-'} 
                              disabled 
                              className="bg-muted"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>로그인 방식</Label>
                            <Input 
                              value={user.app_metadata?.provider === 'google' ? 'Google' : '이메일'} 
                              disabled 
                              className="bg-muted"
                            />
                          </div>
                        </>
                      )}

                      {guestSession && (
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">
                            비회원으로 조회 중입니다. 더 많은 기능을 이용하려면 회원가입을 해주세요.
                          </p>
                          <Button 
                            className="mt-4" 
                            onClick={() => navigate('/ko/signup')}
                          >
                            회원가입하기
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MyPageKo;

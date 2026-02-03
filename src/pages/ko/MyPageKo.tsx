import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  Loader2, ArrowLeft, Package, User, LogOut, ShoppingBag, Calendar as CalendarIcon, 
  CreditCard, X, Edit2, Save, Monitor, Server, CheckCircle2, Clock, 
  XCircle, RefreshCw, AlertTriangle, Filter, Trash2
} from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import { format, subDays, subMonths, startOfDay, endOfDay } from 'date-fns';
import { ko } from 'date-fns/locale';

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

interface UserAccount {
  id: number;
  account_id: string;
  server_name: string | null;
  status: string | null;
  created_at: string | null;
}

interface GuestSession {
  email: string;
  password: string;
  verified: boolean;
}

const MyPageKo: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [guestSession, setGuestSession] = useState<GuestSession | null>(null);
  
  // Guest login form
  const [guestForm, setGuestForm] = useState({ email: '', password: '' });
  const [guestLoading, setGuestLoading] = useState(false);
  
  // Account edit state
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [saving, setSaving] = useState(false);
  
  // Cancel order dialog
  const [cancelOrderId, setCancelOrderId] = useState<string | null>(null);
  const [cancelling, setCancelling] = useState(false);
  
  // Bulk selection state
  const [selectedOrderIds, setSelectedOrderIds] = useState<Set<string>>(new Set());
  const [showBulkCancel, setShowBulkCancel] = useState(false);
  
  // Date filter state
  const [dateFilter, setDateFilter] = useState<'all' | '7days' | '30days' | '90days' | 'custom'>('all');
  const [customDateRange, setCustomDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined
  });

  // Fetch orders and accounts for authenticated user
  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      // Fetch orders
      const { data: ordersData, error: ordersError } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (ordersError) throw ordersError;
      setOrders(ordersData || []);

      // Fetch MT accounts
      const { data: accountsData, error: accountsError } = await supabase
        .from('user_accounts')
        .select('id, account_id, server_name, status, created_at')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (accountsError) throw accountsError;
      setAccounts(accountsData || []);
      
      // Set initial edit name
      setEditName(user?.user_metadata?.full_name || '');
    } catch (error: any) {
      console.error('Error fetching user data:', error);
      toast({
        variant: 'destructive',
        title: '오류',
        description: '데이터를 불러오는데 실패했습니다.'
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
      const { data, error } = await supabase.functions.invoke('guest-auth', {
        body: {
          action: 'verify',
          email: guestForm.email,
          password: guestForm.password
        }
      });

      if (error) throw error;
      
      if (data.error) {
        toast({
          variant: 'destructive',
          title: '조회 실패',
          description: data.error
        });
        return;
      }

      setGuestSession({ 
        email: guestForm.email, 
        password: guestForm.password,
        verified: true 
      });
      setOrders(data.orders);
      
      toast({
        title: '조회 성공',
        description: '주문 내역을 불러왔습니다.'
      });
    } catch (error: any) {
      console.error('Guest login error:', error);
      toast({
        variant: 'destructive',
        title: '오류',
        description: error.message || '주문 내역 조회에 실패했습니다.'
      });
    } finally {
      setGuestLoading(false);
    }
  };

  const handleCancelOrder = async () => {
    if (!cancelOrderId) return;
    
    setCancelling(true);
    try {
      if (user) {
        // Authenticated user - use cancel-order edge function
        const { data, error } = await supabase.functions.invoke('cancel-order', {
          body: { orderId: cancelOrderId }
        });
        
        if (error) throw error;
        if (data.error) throw new Error(data.error);
      } else if (guestSession) {
        // Guest user - use guest-auth edge function
        const { data, error } = await supabase.functions.invoke('guest-auth', {
          body: {
            action: 'cancel_order',
            email: guestSession.email,
            password: guestSession.password,
            orderId: cancelOrderId
          }
        });
        
        if (error) throw error;
        if (data.error) throw new Error(data.error);
      }
      
      // Update local state
      setOrders(prev => prev.map(order => 
        order.order_id === cancelOrderId 
          ? { ...order, status: 'cancelled' }
          : order
      ));
      
      toast({
        title: '주문 취소 완료',
        description: '주문이 성공적으로 취소되었습니다.'
      });
    } catch (error: any) {
      console.error('Cancel order error:', error);
      toast({
        variant: 'destructive',
        title: '취소 실패',
        description: error.message || '주문 취소에 실패했습니다.'
      });
    } finally {
      setCancelling(false);
      setCancelOrderId(null);
    }
  };

  // Bulk cancel orders
  const handleBulkCancel = async () => {
    if (selectedOrderIds.size === 0) return;
    
    setCancelling(true);
    try {
      const orderIdsArray = Array.from(selectedOrderIds);
      
      if (user) {
        const { data, error } = await supabase.functions.invoke('cancel-order', {
          body: { orderIds: orderIdsArray }
        });
        
        if (error) throw error;
        if (data.error) throw new Error(data.error);
        
        toast({
          title: '일괄 취소 완료',
          description: data.message
        });
      } else if (guestSession) {
        const { data, error } = await supabase.functions.invoke('guest-auth', {
          body: {
            action: 'cancel_orders',
            email: guestSession.email,
            password: guestSession.password,
            orderIds: orderIdsArray
          }
        });
        
        if (error) throw error;
        if (data.error) throw new Error(data.error);
        
        toast({
          title: '일괄 취소 완료',
          description: data.message
        });
      }
      
      // Update local state
      setOrders(prev => prev.map(order => 
        selectedOrderIds.has(order.order_id) && order.status === 'pending'
          ? { ...order, status: 'cancelled' }
          : order
      ));
      setSelectedOrderIds(new Set());
    } catch (error: any) {
      console.error('Bulk cancel error:', error);
      toast({
        variant: 'destructive',
        title: '일괄 취소 실패',
        description: error.message || '주문 취소에 실패했습니다.'
      });
    } finally {
      setCancelling(false);
      setShowBulkCancel(false);
    }
  };

  // Toggle order selection
  const toggleOrderSelection = (orderId: string) => {
    setSelectedOrderIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(orderId)) {
        newSet.delete(orderId);
      } else {
        newSet.add(orderId);
      }
      return newSet;
    });
  };

  // Select all pending orders
  const selectAllPendingOrders = () => {
    const pendingOrderIds = orders
      .filter(o => o.status === 'pending')
      .map(o => o.order_id);
    setSelectedOrderIds(new Set(pendingOrderIds));
  };

  // Clear selection
  const clearSelection = () => {
    setSelectedOrderIds(new Set());
  };

  // Filter orders by date
  const filteredOrders = useMemo(() => {
    if (dateFilter === 'all') return orders;
    
    const now = new Date();
    let startDate: Date;
    let endDate: Date = endOfDay(now);
    
    switch (dateFilter) {
      case '7days':
        startDate = startOfDay(subDays(now, 7));
        break;
      case '30days':
        startDate = startOfDay(subDays(now, 30));
        break;
      case '90days':
        startDate = startOfDay(subDays(now, 90));
        break;
      case 'custom':
        if (!customDateRange.from) return orders;
        startDate = startOfDay(customDateRange.from);
        endDate = customDateRange.to ? endOfDay(customDateRange.to) : endOfDay(now);
        break;
      default:
        return orders;
    }
    
    return orders.filter(order => {
      const orderDate = new Date(order.created_at);
      return orderDate >= startDate && orderDate <= endDate;
    });
  }, [orders, dateFilter, customDateRange]);

  const handleSaveName = async () => {
    if (!user || !editName.trim()) return;
    
    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({
        data: { full_name: editName.trim() }
      });
      
      if (error) throw error;
      
      setIsEditing(false);
      toast({
        title: '저장 완료',
        description: '이름이 성공적으로 변경되었습니다.'
      });
    } catch (error: any) {
      console.error('Save name error:', error);
      toast({
        variant: 'destructive',
        title: '저장 실패',
        description: error.message || '이름 변경에 실패했습니다.'
      });
    } finally {
      setSaving(false);
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
    const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; icon: React.ReactNode }> = {
      pending: { label: '결제 대기', variant: 'secondary', icon: <Clock className="h-3 w-3" /> },
      paid: { label: '결제 완료', variant: 'default', icon: <CheckCircle2 className="h-3 w-3" /> },
      refunded: { label: '환불 완료', variant: 'outline', icon: <RefreshCw className="h-3 w-3" /> },
      cancelled: { label: '취소됨', variant: 'destructive', icon: <XCircle className="h-3 w-3" /> }
    };
    const config = statusConfig[status] || { label: status, variant: 'outline' as const, icon: null };
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        {config.icon}
        {config.label}
      </Badge>
    );
  };

  const getAccountStatusBadge = (status: string | null) => {
    const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
      active: { label: '활성', variant: 'default' },
      pending: { label: '대기중', variant: 'secondary' },
      inactive: { label: '비활성', variant: 'outline' },
      error: { label: '오류', variant: 'destructive' }
    };
    const config = statusConfig[status || 'pending'] || { label: status || '알 수 없음', variant: 'outline' as const };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getProductName = (type: string) => {
    const products: Record<string, string> = {
      'dap-premium': 'DF717 AI 자동매매 (DAP-Premium)',
      'light': 'DF717 Light',
      'premium': 'DF717 Premium'
    };
    return products[type] || type;
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatShortDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
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
        <div className="min-h-screen bg-gradient-to-b from-muted to-background flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <Link 
              to="/ko/solution" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              솔루션 페이지로 돌아가기
            </Link>

            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">마이페이지</CardTitle>
                <CardDescription>
                  구매내역 및 계정 정보를 확인하세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                {/* Member Login */}
                <Button
                  onClick={() => navigate('/ko/login')}
                  className="w-full h-14 text-base font-semibold"
                  size="lg"
                >
                  <User className="mr-2 h-5 w-5" />
                  회원 로그인
                </Button>
                <p className="text-xs text-center text-muted-foreground -mt-2">
                  Google 또는 이메일로 가입한 회원
                </p>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-4 text-muted-foreground font-medium">비회원 주문 조회</span>
                  </div>
                </div>

                {/* Guest Lookup */}
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
                    <Label htmlFor="guest-password">비밀번호</Label>
                    <Input
                      id="guest-password"
                      type="password"
                      placeholder="결제 시 설정한 비밀번호"
                      value={guestForm.password}
                      onChange={(e) => setGuestForm({ ...guestForm, password: e.target.value })}
                      required
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
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  // Logged in - show dashboard
  const paidOrdersCount = orders.filter(o => o.status === 'paid').length;
  const pendingOrdersCount = orders.filter(o => o.status === 'pending').length;
  const activeAccountsCount = accounts.filter(a => a.status === 'active').length;

  return (
    <>
      <SEOHead
        title="마이페이지 | DF717"
        description="DF717 마이페이지 - 구매내역 및 계정 정보 관리"
        canonical="https://www.df717.ai/ko/mypage"
        lang="ko"
      />
      <div className="min-h-screen bg-gradient-to-b from-muted to-background py-8">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/ko/solution" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              솔루션 페이지
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              로그아웃
            </Button>
          </div>

          {/* Welcome Section */}
          <Card className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">
                      {user?.user_metadata?.full_name || guestSession?.email?.split('@')[0] || '고객'}님, 환영합니다!
                    </h1>
                    <p className="text-muted-foreground">{user?.email || guestSession?.email}</p>
                  </div>
                </div>
                {user && (
                  <Button onClick={() => navigate('/ko/solution#pricing')} className="shrink-0">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    추가 구매하기
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{paidOrdersCount}</p>
                    <p className="text-xs text-muted-foreground">결제 완료</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{pendingOrdersCount}</p>
                    <p className="text-xs text-muted-foreground">결제 대기</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Monitor className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{activeAccountsCount}</p>
                    <p className="text-xs text-muted-foreground">활성 계정</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Server className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{accounts.length}</p>
                    <p className="text-xs text-muted-foreground">총 MT 계정</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Card className="shadow-lg">
            <CardContent className="p-0">
              <Tabs defaultValue="orders" className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0 h-auto">
                  <TabsTrigger 
                    value="orders" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    구매내역
                  </TabsTrigger>
                  {user && (
                    <TabsTrigger 
                      value="accounts" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                    >
                      <Monitor className="h-4 w-4 mr-2" />
                      MT 계정
                    </TabsTrigger>
                  )}
                  <TabsTrigger 
                    value="profile" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                  >
                    <User className="h-4 w-4 mr-2" />
                    계정정보
                  </TabsTrigger>
                </TabsList>

                {/* Orders Tab */}
                <TabsContent value="orders" className="p-6">
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  ) : orders.length === 0 ? (
                    <div className="text-center py-12">
                      <Package className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">구매내역이 없습니다</h3>
                      <p className="text-muted-foreground mb-6">
                        DF717 AI 자동매매 솔루션을 시작해보세요
                      </p>
                      <Button onClick={() => navigate('/ko/solution#pricing')}>
                        솔루션 구매하기
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Filter & Bulk Actions Bar */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Filter className="h-4 w-4 text-muted-foreground" />
                          <Select value={dateFilter} onValueChange={(v) => setDateFilter(v as typeof dateFilter)}>
                            <SelectTrigger className="w-[140px] h-9">
                              <SelectValue placeholder="기간 선택" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">전체 기간</SelectItem>
                              <SelectItem value="7days">최근 7일</SelectItem>
                              <SelectItem value="30days">최근 30일</SelectItem>
                              <SelectItem value="90days">최근 90일</SelectItem>
                              <SelectItem value="custom">직접 설정</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          {dateFilter === 'custom' && (
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" size="sm" className="h-9">
                                  <CalendarIcon className="h-4 w-4 mr-2" />
                                  {customDateRange.from ? (
                                    customDateRange.to ? (
                                      <>
                                        {format(customDateRange.from, 'MM/dd', { locale: ko })} - {format(customDateRange.to, 'MM/dd', { locale: ko })}
                                      </>
                                    ) : (
                                      format(customDateRange.from, 'yyyy-MM-dd', { locale: ko })
                                    )
                                  ) : (
                                    '날짜 선택'
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="range"
                                  selected={{ from: customDateRange.from, to: customDateRange.to }}
                                  onSelect={(range) => setCustomDateRange({ from: range?.from, to: range?.to })}
                                  locale={ko}
                                  numberOfMonths={2}
                                />
                              </PopoverContent>
                            </Popover>
                          )}
                          
                          <span className="text-sm text-muted-foreground">
                            {filteredOrders.length}건
                          </span>
                        </div>
                        
                        {/* Bulk Actions */}
                        <div className="flex items-center gap-2">
                          {selectedOrderIds.size > 0 ? (
                            <>
                              <span className="text-sm text-muted-foreground">
                                {selectedOrderIds.size}건 선택
                              </span>
                              <Button variant="ghost" size="sm" onClick={clearSelection}>
                                선택 해제
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => setShowBulkCancel(true)}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                일괄 취소
                              </Button>
                            </>
                          ) : (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={selectAllPendingOrders}
                              disabled={!orders.some(o => o.status === 'pending')}
                            >
                              결제 대기 전체 선택
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Order List */}
                      {filteredOrders.length === 0 ? (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">선택한 기간에 주문 내역이 없습니다.</p>
                        </div>
                      ) : (
                        filteredOrders.map((order) => (
                          <Card key={order.id} className={`border overflow-hidden transition-colors ${selectedOrderIds.has(order.order_id) ? 'ring-2 ring-primary' : ''}`}>
                            <CardContent className="p-0">
                              <div className="flex flex-col lg:flex-row">
                                {/* Checkbox for pending orders */}
                                {order.status === 'pending' && (
                                  <div className="flex items-center justify-center p-4 lg:p-6 lg:pr-0">
                                    <Checkbox
                                      checked={selectedOrderIds.has(order.order_id)}
                                      onCheckedChange={() => toggleOrderSelection(order.order_id)}
                                      aria-label={`주문 ${order.order_id} 선택`}
                                    />
                                  </div>
                                )}
                                
                                {/* Order Info */}
                                <div className="flex-1 p-4 lg:p-6">
                                  <div className="flex items-start justify-between mb-3">
                                    <div>
                                      <h4 className="font-semibold text-lg">{getProductName(order.product_type)}</h4>
                                      <p className="text-xs text-muted-foreground mt-1">주문번호: {order.order_id}</p>
                                    </div>
                                    {getStatusBadge(order.status || 'pending')}
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <p className="text-muted-foreground">주문일</p>
                                      <p className="font-medium">{formatShortDate(order.created_at)}</p>
                                    </div>
                                    {order.paid_at && (
                                      <div>
                                        <p className="text-muted-foreground">결제일</p>
                                        <p className="font-medium">{formatShortDate(order.paid_at)}</p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                {/* Price & Actions */}
                                <div className="bg-muted/30 p-4 lg:p-6 lg:w-64 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-4 border-t lg:border-t-0 lg:border-l">
                                  <div className="text-center">
                                    <p className="text-sm text-muted-foreground">결제 금액</p>
                                    <p className="text-2xl font-bold text-primary">
                                      ₩{order.amount.toLocaleString()}
                                    </p>
                                  </div>
                                  
                                  {order.status === 'pending' && (
                                    <Button 
                                      variant="outline" 
                                      size="sm"
                                      className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                                      onClick={() => setCancelOrderId(order.order_id)}
                                    >
                                      <X className="h-4 w-4 mr-1" />
                                      취소
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      )}
                    </div>
                  )}
                </TabsContent>

                {/* MT Accounts Tab */}
                {user && (
                  <TabsContent value="accounts" className="p-6">
                    {loading ? (
                      <div className="flex items-center justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                      </div>
                    ) : accounts.length === 0 ? (
                      <div className="text-center py-12">
                        <Monitor className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">등록된 MT 계정이 없습니다</h3>
                        <p className="text-muted-foreground mb-6">
                          솔루션 구매 후 MT 계정을 등록하시면 여기에 표시됩니다
                        </p>
                        <Button onClick={() => navigate('/ko/get-started')}>
                          계정 등록하기
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {accounts.map((account) => (
                          <Card key={account.id} className="border">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="p-3 bg-primary/10 rounded-lg">
                                    <Monitor className="h-6 w-6 text-primary" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold">{account.account_id}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {account.server_name || '서버 미지정'}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  {getAccountStatusBadge(account.status)}
                                  <span className="text-sm text-muted-foreground hidden md:block">
                                    등록일: {formatShortDate(account.created_at)}
                                  </span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </TabsContent>
                )}

                {/* Profile Tab */}
                <TabsContent value="profile" className="p-6">
                  <div className="max-w-lg space-y-6">
                    {user ? (
                      <>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>이메일</Label>
                            <Input 
                              value={user.email || ''} 
                              disabled 
                              className="bg-muted"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label>이름</Label>
                              {!isEditing && (
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => setIsEditing(true)}
                                >
                                  <Edit2 className="h-4 w-4 mr-1" />
                                  수정
                                </Button>
                              )}
                            </div>
                            {isEditing ? (
                              <div className="flex gap-2">
                                <Input 
                                  value={editName}
                                  onChange={(e) => setEditName(e.target.value)}
                                  placeholder="이름을 입력하세요"
                                  className="flex-1"
                                />
                                <Button onClick={handleSaveName} disabled={saving}>
                                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                                </Button>
                                <Button 
                                  variant="outline" 
                                  onClick={() => {
                                    setIsEditing(false);
                                    setEditName(user.user_metadata?.full_name || '');
                                  }}
                                >
                                  취소
                                </Button>
                              </div>
                            ) : (
                              <Input 
                                value={user.user_metadata?.full_name || '설정되지 않음'} 
                                disabled 
                                className="bg-muted"
                              />
                            )}
                          </div>
                          
                          <Separator />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>가입일</Label>
                              <Input 
                                value={formatShortDate(user.created_at)} 
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
                          </div>
                        </div>
                      </>
                    ) : guestSession && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>이메일</Label>
                          <Input 
                            value={guestSession.email} 
                            disabled 
                            className="bg-muted"
                          />
                        </div>
                        
                        <Card className="bg-primary/5 border-primary/20">
                          <CardContent className="pt-4">
                            <div className="flex items-start gap-3">
                              <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold mb-1">비회원으로 조회 중입니다</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                  회원가입을 하시면 MT 계정 관리, 실시간 알림 등 더 많은 기능을 이용하실 수 있습니다.
                                </p>
                                <Button onClick={() => navigate('/ko/signup')}>
                                  회원가입하기
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cancel Order Dialog */}
      <AlertDialog open={!!cancelOrderId} onOpenChange={(open) => !open && setCancelOrderId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>주문을 취소하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              결제 대기 중인 주문을 취소합니다. 이 작업은 되돌릴 수 없습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={cancelling}>취소</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleCancelOrder}
              disabled={cancelling}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {cancelling ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              주문 취소
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bulk Cancel Dialog */}
      <AlertDialog open={showBulkCancel} onOpenChange={setShowBulkCancel}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>선택한 주문을 일괄 취소하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              {selectedOrderIds.size}건의 결제 대기 중인 주문을 취소합니다. 이 작업은 되돌릴 수 없습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={cancelling}>취소</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleBulkCancel}
              disabled={cancelling}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {cancelling ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              {selectedOrderIds.size}건 일괄 취소
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default MyPageKo;

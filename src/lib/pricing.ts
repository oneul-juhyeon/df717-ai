// Pricing configuration for DAP-Premium
export type PlanType = 'monthly' | 'yearly';

export interface PlanConfig {
  type: PlanType;
  name: string;
  price: number;
  displayPrice: string;
  period: string;
  description: string;
  isSubscription: boolean;
  productType: string; // For database storage
}

export const plans: Record<PlanType, PlanConfig> = {
  monthly: {
    type: 'monthly',
    name: 'DAP-Premium 월간 구독',
    price: 500000,
    displayPrice: '₩500,000',
    period: '/월',
    description: '매월 자동 결제 (정기구독)',
    isSubscription: true,
    productType: 'dap-premium-monthly',
  },
  yearly: {
    type: 'yearly',
    name: 'DAP-Premium 연간 구매',
    price: 5000000,
    displayPrice: '₩416,667',
    period: '/월',
    description: '12개월 할부 시 (37% 할인)',
    isSubscription: false,
    productType: 'dap-premium',
  },
};

export const getPlanFromSearchParams = (searchParams: URLSearchParams): PlanType => {
  const plan = searchParams.get('plan');
  return plan === 'monthly' ? 'monthly' : 'yearly';
};

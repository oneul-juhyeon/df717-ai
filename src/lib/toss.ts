// Toss Payments configuration and utilities
export const TOSS_CLIENT_KEY = import.meta.env.VITE_TOSS_CLIENT_KEY || '';
export const SUPABASE_URL = 'https://xvvfguvqeyymquhihkim.supabase.co';

export interface ProductInfo {
  type: 'light' | 'premium';
  name: string;
  price: number;
  originalPrice: number;
  features: string[];
  asMonths: number;
  monthlyPayment: number;
}

export const products: Record<'light' | 'premium', ProductInfo> = {
  light: {
    type: 'light',
    name: '라이트',
    price: 2800000,
    originalPrice: 5800000,
    asMonths: 60,
    monthlyPayment: 233000,
    features: [
      '라이트 프로그램 (상승 전략)',
      '60일 무상 AS',
      '1:1 설치 지원',
      '평생 업데이트'
    ]
  },
  premium: {
    type: 'premium',
    name: '프리미엄',
    price: 3800000,
    originalPrice: 7800000,
    asMonths: 90,
    monthlyPayment: 316000,
    features: [
      '라이트 + 프리미엄 (상승+하락 전략)',
      '90일 무상 AS',
      '1:1 설치 지원',
      '평생 업데이트',
      '전담 매니저 배정'
    ]
  }
};
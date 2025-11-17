import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { PurchaseModal } from './PurchaseModal';
import { LoginModal } from '@/components/auth/LoginModal';
import { useAuth } from '@/hooks/useAuth';
import { products } from '@/lib/toss';
import { Button } from '@/components/ui/button';

export const PurchaseSection: React.FC = () => {
  const { user } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState<'light' | 'premium' | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const handlePurchaseClick = (productType: 'light' | 'premium') => {
    setSelectedProduct(productType);
    if (!user) {
      // Show login prompt but allow guest purchase
      setShowPurchaseModal(true);
    } else {
      setShowPurchaseModal(true);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full mb-6">
            🎁 4차 모집 특별 패키지
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            지금 시작하세요
          </h2>
          <p className="text-xl text-gray-300">
            11월 한정 특별 할인
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ProductCard
            product={products.light}
            onPurchase={() => handlePurchaseClick('light')}
          />
          <ProductCard
            product={products.premium}
            onPurchase={() => handlePurchaseClick('premium')}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 inline-block">
            <p className="text-white mb-2">
              <span className="text-gray-400">현재까지 신청:</span>{' '}
              <span className="text-2xl font-bold text-purple-400">387명</span>
            </p>
            <p className="text-white">
              <span className="text-gray-400">남은 자리:</span>{' '}
              <span className="text-2xl font-bold text-blue-400">113명</span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-green-400 text-lg">
            <span>💯</span>
            <span className="font-semibold">2개월 무수익 시 100% 환불 보장</span>
          </div>

          {!user && (
            <div className="pt-4">
              <p className="text-gray-400 mb-3">이미 계정이 있으신가요?</p>
              <Button
                onClick={() => setShowLoginModal(true)}
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                로그인하기
              </Button>
            </div>
          )}
        </motion.div>
      </div>

      {selectedProduct && (
        <PurchaseModal
          open={showPurchaseModal}
          onClose={() => setShowPurchaseModal(false)}
          product={products[selectedProduct]}
          isLoggedIn={!!user}
          userEmail={user?.email}
          userName={user?.user_metadata?.full_name}
          userId={user?.id}
        />
      )}

      <LoginModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </section>
  );
};
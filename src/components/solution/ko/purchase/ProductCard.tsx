import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductInfo } from '@/lib/toss';

interface ProductCardProps {
  product: ProductInfo;
  onPurchase: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPurchase }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-[#1a1a1a] border-gray-700 hover:border-purple-500 transition-all duration-300 h-full">
        <CardContent className="p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-400 line-through">
                정상가: ₩{product.originalPrice.toLocaleString()}
              </p>
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ₩{product.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-300">
                12개월 할부: 월 {product.monthlyPayment.toLocaleString()}원
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-white font-semibold">포함 구성:</p>
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={onPurchase}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-6 text-lg"
          >
            {product.name} 구매하기
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
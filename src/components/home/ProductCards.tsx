import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCard {
  title: string;
  description: string;
  link: string;
}

const ProductCards: React.FC = () => {
  const cardsSectionRef = useRef(null);
  
  const cards: ProductCard[] = [
    {
      title: "DF717",
      description: "Fully-automated trading system powered by advanced AI algorithms.",
      link: "/robot"
    },
    {
      title: "AXI CFD",
      description: "Contract for Difference trading with enhanced accuracy and risk management.",
      link: "/axi-cfd"
    },
    {
      title: "API Integration",
      description: "Seamlessly integrate our algorithms with your existing trading platforms.",
      link: "#"
    }
  ];

  return (
    <motion.div 
      ref={cardsSectionRef}
      className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      {cards.map((card, index) => (
        <motion.div 
          key={index}
          className="bg-[#1a1a1a] p-8 border-t-2 border-red-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 + (0.1 * index), duration: 0.5 }}
          whileHover={{ 
            y: -10,
            boxShadow: "0 10px 30px rgba(255, 0, 0, 0.1)"
          }}
        >
          <h3 className="text-xl font-medium text-white mb-4">
            {card.title}
          </h3>
          <p className="text-gray-300 mb-8 h-24">
            {card.description}
          </p>
          <Link to={card.link}>
            <motion.div
              whileHover={{ x: 5 }}
            >
              <Button variant="ghost" className="text-red-500 hover:text-white hover:bg-red-600 px-0 group">
                Explore
                <motion.span 
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductCards;

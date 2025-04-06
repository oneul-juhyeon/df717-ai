
import React from "react";

const GoldWhatIs: React.FC = () => {
  return (
    <section className="mb-12">
      <h1 className="text-4xl font-bold mb-6">What is gold?</h1>
      <p className="mb-4">
        Gold is a precious metal prized by humans throughout history due to its lustrous appearance and scarcity. 
        It has been used widely throughout history in jewellery and as money and has recently found applications in electronics, 
        medicine, and even gourmet cuisine.
      </p>
      <p className="mb-4">
        Used historically as currency, gold was used to establish the gold standard, in which paper money was redeemable for gold. 
        In the past, several countries pegged their currencies to gold. While this is no longer the case, it remains a form of 
        liquid reserve for a portion of central banks' savings.
      </p>
      
      <div className="my-8">
        <img 
          src="/gold2.png" 
          alt="Gold bullion and coins" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <p className="mb-4">
        Although its use as a medium of exchange has been superseded by more modern methods of payment, gold remains universally 
        recognized as a reliable store of value. It plays a vital role in the world of finance and investing, operating as a hedge 
        against economic uncertainty and demonstrating its ability to generate substantial returns for investors.
      </p>
      <p className="mb-4">
        Gold is extracted through a costly mining procedure. Newly mined gold supplements the current supply. Unlike other commodities, 
        such as oil, which is only used once, gold cannot be destroyed, and the quantities produced remain in circulation and can, 
        at least in theory, be recycled and reused in the future.
      </p>
    </section>
  );
};

export default GoldWhatIs;

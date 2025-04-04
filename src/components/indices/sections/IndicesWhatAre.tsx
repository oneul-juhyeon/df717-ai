
import React from "react";

const IndicesWhatAre: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-8 mb-4">What are indices?</h2>
      <p className="mb-4 text-left">
        An index is a way to measure the performance of a group of assets. In trading, this involves publicly traded companies and their stock prices.
      </p>
      <p className="mb-8 text-left">
        One of the best-performing and most widely known indices in the world is the Dow Jones index. The Dow Jones Industrial Average (DJIA) tracks the overall performance of the 30 largest companies in the US. If the average price of the 30 companies goes up, the DJIA also climbs higher. If the average price of the 30 companies drops, the DJIA will decline too.
      </p>

      {/* Market Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/indices2.png" 
          alt="Dow Jones Index Performance" 
          className="w-full h-auto rounded-lg"
        />
      </div>
    </>
  );
};

export default IndicesWhatAre;

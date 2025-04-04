
import React from "react";

const CryptoWhatIs: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What is cryptocurrency?</h2>
      <p className="mb-4">
        A cryptocurrency is a digital or virtual currency that uses cryptography to secure and verify transactions and control the creation of new currency units. Because they only exist digitally, cryptocurrencies do not have a physical form like notes or coins.
      </p>
      <p className="mb-4">
        Unlike traditional currencies, which are typically issued and governed by a central authority, such as the US Federal Reserve or the European Central Bank, cryptocurrencies are decentralised. This means they operate independently of a central bank and are instead managed by a network of computers around the world.
      </p>
      <p className="mb-4">
        The first cryptocurrency and the largest in terms of market capitalisation is Bitcoin. It was created in 2009 by an individual or group under the pseudonym Satoshi Nakamoto, and since then, thousands of other cryptocurrencies have been developed.
      </p>
    </section>
  );
};

export default CryptoWhatIs;

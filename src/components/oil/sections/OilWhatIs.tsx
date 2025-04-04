
import React from "react";

const OilWhatIs: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What is oil?</h2>
      <p className="mb-4">
        Oil is a highly valued commodity that is crucial for many industries worldwide. As a non-renewable energy resource, oil comes in different forms, 
        such as crude oil, which is extracted from the ground, and refined oil products like gasoline, diesel, and jet fuel. The price of oil is influenced 
        by factors such as supply and demand, geopolitical events, and economic conditions.
      </p>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/oil2.png" 
          alt="Oil barrels and production facility" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <h3 className="text-2xl font-bold mb-4">What is crude oil?</h3>
      <p className="mb-4">
        The main type of oil traded in markets is crude oil, a naturally occurring, unrefined petroleum product that is extracted from the earth. 
        The makeup of crude oil can vary significantly depending on its source, which means there are different types or "grades" of crude oil. Here are some of the major types of crude oil:
      </p>
      <p className="mb-4">
        <strong>Brent Crude:</strong> Brent crude oil is one of the most widely traded and benchmarked types of crude oil. It is primarily composed of a blend of oil from multiple oil fields in the region and is extracted from oil fields in the North Sea, which makes it convenient to transport via tanker. Brent crude is known for its relatively low sulphur content and high American Petroleum Institute (API) gravity, a measure of how heavy or light a petroleum liquid is compared to water. This makes it a "light" and "sweet" crude oil. It is commonly used as a reference price for global oil trading.
      </p>
      <p className="mb-4">
        <strong>West Texas Intermediate (WTI):</strong> WTI is another popular benchmark for crude oil. It is extracted from the United States, primarily from oil fields in Texas and surrounding areas. As these oil fields are landlocked, transporting WTI oil is relatively expensive compared to Brent. WTI crude oil is considered a light and sweet crude, like Brent. It is known for its high API gravity and low sulphur content. WTI is traded on the New York Mercantile Exchange (NYMEX) and serves as a pricing reference for crude oil in North America.
      </p>
      <p className="mb-4">
        <strong>Dubai Crude:</strong> Dubai crude is a medium-grade crude oil primarily produced in the Middle East. It is a benchmark for oil pricing in the Asian market. Dubai crude has a higher sulphur content and a lower API gravity compared to Brent and WTI. It is often used as a reference for pricing Middle Eastern and Asian crude oil grades.
      </p>
      <p className="mb-4">
        <strong>Louisiana Light Sweet (LLS):</strong> LLS is a type of crude oil produced in the Gulf of Mexico region of the United States. It is a light and sweet crude, like Brent and WTI. LLS is commonly used as a benchmark for pricing U.S. Gulf Coast-produced crude oil.
      </p>
      <p className="mb-4">
        <strong>OPEC Basket:</strong> The Organization of the Petroleum Exporting Countries (OPEC) calculates an average price for a basket of crude oils produced by its member countries. This basket includes various crude oil grades from countries like Saudi Arabia, Iran, Iraq, Kuwait, and Venezuela. The OPEC basket serves as a reference for pricing OPEC-produced crude oil.
      </p>
      <p className="mb-4">
        <strong>Canadian Crude:</strong> Canada is a significant producer of crude oil, and different types of crude are extracted from its oil sands and conventional oil reserves. The types of Canadian crude include Western Canadian Select (WCS), Syncrude, and Cold Lake Blend. Canadian crude oils are generally heavy and contain higher levels of sulphur compared to light, sweet crude oils like Brent and WTI.
      </p>
    </section>
  );
};

export default OilWhatIs;

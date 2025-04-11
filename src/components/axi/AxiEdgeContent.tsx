import React from "react";
const AxiEdgeContent: React.FC = () => {
  return <section className="py-16 text-white bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">Trade your edge</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Whether you're new or a pro, if gold is your goal or
            analytics are your answer, there's one thing that every
            trader looks for. Edge. At Axi, we've got all the trading
            tools to help you unleash yours.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-red-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="relative z-10 overflow-hidden rounded-xl shadow-lg aspect-video w-full">
              <iframe src="https://www.youtube.com/embed/BKvaiKZga0s?modestbranding=1&showinfo=0&controls=0&rel=0" title="Axi Edge Video" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AxiEdgeContent;
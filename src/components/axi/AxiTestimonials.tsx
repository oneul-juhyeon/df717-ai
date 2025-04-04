
import React from "react";

const AxiTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Extremely polite and helpful",
      stars: 5,
      source: "Trustpilot"
    },
    {
      name: "Experience",
      stars: 5,
      source: "Trusted"
    },
    {
      name: "Great broker",
      stars: 5,
      source: "Verified"
    }
  ];

  return (
    <div className="mt-12 p-6 bg-[#232323] rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <span className="text-lg font-bold text-white">Excellent</span>
            <div className="flex ml-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-green-500">★</span>
              ))}
            </div>
          </div>
          <p className="text-gray-400 text-sm">Based on 3,119 reviews</p>
        </div>
        
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="flex">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <span key={i} className="text-green-500">★</span>
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-sm truncate max-w-[200px]">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiTestimonials;

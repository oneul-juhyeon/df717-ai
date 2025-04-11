
import React from "react";
import { Star } from "lucide-react";

const AxiTestimonials: React.FC = () => {
  const testimonials = [{
    name: "Extremely polite and helpful",
    stars: 5,
    source: "Trustpilot"
  }, {
    name: "Experience",
    stars: 5,
    source: "Trusted"
  }, {
    name: "Great broker",
    stars: 5,
    source: "Verified"
  }];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mt-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white/5 p-6 rounded-xl">
          <div className="flex items-center mb-3">
            {[...Array(testimonial.stars)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
            ))}
          </div>
          <h3 className="text-xl font-medium text-white mb-2">{testimonial.name}</h3>
          <p className="text-sm text-gray-400">Source: {testimonial.source}</p>
        </div>
      ))}
    </div>
  );
};

export default AxiTestimonials;

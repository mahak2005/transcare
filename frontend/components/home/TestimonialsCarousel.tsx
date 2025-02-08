"use client";

import React from "react";

const testimonials = [
  {
    text: "TransCare Navigator has revolutionized how I manage my healthcare journey. The resources and support are unmatched.",
    name: "Alex Johnson",
    role: "Community Advocate",
  },
  {
    text: "Finding gender-affirming care has never been easier. The platform is intuitive and incredibly helpful.",
    name: "Jordan Smith",
    role: "Healthcare Seeker",
  },
  {
    text: "This platform has provided a sense of community and support that I didn't realize I was missing.",
    name: "Taylor Williams",
    role: "Mental Health Supporter",
  },
  {
    text: "The telemedicine feature allowed me to connect with understanding professionals from the comfort of my home.",
    name: "Riley Brown",
    role: "Telemedicine User",
  },
];

const TestimonialsCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-purple-50">
      <h2 className="text-2xl font-bold text-center mb-4">
        Loved by our community
      </h2>
      <div className="relative flex items-center">
        <div className="flex animate-scroll space-x-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="w-64 p-4 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-indigo-50 hover:shadow-lg"
            >
              <p className="text-gray-700">{testimonial.text}</p>
              <div className="mt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 15s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCarousel;

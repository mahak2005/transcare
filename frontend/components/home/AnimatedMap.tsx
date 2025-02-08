"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedMap: React.FC = () => {
  // Animation variants for the lines
  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">23,000+</h1>
        <p className="text-xl">Happy customers worldwide</p>
      </div>

      <div className="relative">
        <svg
          width="100%"
          height="400"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          style={{ backgroundColor: '#f0f0f0' }} // Add a background color to make the map visible
        >
          {/* Example animated lines */}
          <motion.path
            d="M100,200 Q250,100 400,200 T700,200"
            stroke="#00cc88"
            strokeWidth="4"
            fill="none"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M100,300 Q250,400 400,300 T700,300"
            stroke="#ff6699"
            strokeWidth="4"
            fill="none"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>

        <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Interview candidates</h2>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Find proven leads</h2>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Filter select, enjoy</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMap;
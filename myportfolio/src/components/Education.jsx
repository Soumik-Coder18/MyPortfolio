import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const educationData = [
  { title: 'Primary School', institute: 'Domjur Margaret School', year: '2012' },
  { title: 'Secondary', institute: 'Uttar Jhapordah Sri Siksha Niketan', year: '2020', result: '92%' },
  { title: 'Higher Secondary', institute: 'Jhapordah Duke Institution', year: '2022', result: '91.6%' },
  { title: 'B.Tech IT', institute: 'Techno Main Saltlake', year: '2026 (expected)', result: '7.67(6th sem)' },
];

const CircularCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768);
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % educationData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getCircularIndex = (offset) =>
    (activeIndex + offset + educationData.length) % educationData.length;

  // Determine how many cards to show
  const visibleIndexes = isMobile
    ? [getCircularIndex(0)]
    : [getCircularIndex(-1), getCircularIndex(0), getCircularIndex(1)];

  return (
    <section
    id="education"
    className="min-h-screen w-full bg-[#121010] text-white flex flex-col items-center justify-center relative px-4 sm:px-6 overflow-hidden font-display">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#CFF3E8] neon-glow mb-20 z-10 text-center">
        My Education Journey
      </h2>

      <div className="flex items-center justify-center relative w-full max-w-7xl min-h-[320px]">
        {visibleIndexes.map((index, pos) => {
          const isCenter = !isMobile ? pos === 1 : true;
          const scale = isCenter ? 1.10 : 0.50;
          const zIndex = isCenter ? 10 : 5;
          const cardWidth = isMobile ? 'w-[80vw]' : 'w-[260px]';

          const data = educationData[index];

          return (
            <motion.div
              key={index}
              animate={{ scale }}
              transition={{ type: 'spring', stiffness: 60, damping: 16 }}
              className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
                isMobile
                  ? 'left-1/2 -translate-x-1/2 max-w-[90vw]'
                  : pos === 0
                  ? 'left-[8%]'
                  : pos === 1
                  ? 'left-1/2 -translate-x-1/2'
                  : 'right-[8%]'
              }`}
              style={{ zIndex }}
            >
              <div
                className={`${cardWidth} max-w-full h-[260px] bg-[#1B1B1B]/80 border border-[#A7C1A8]/30 rounded-xl shadow-[0_0_20px_#A7C1A8] backdrop-blur-md flex flex-col justify-center items-center text-center p-6 hover:scale-105 transition-all duration-300`}
              >
                <motion.h3
                  animate={{ scale: isCenter ? 1.08 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={`font-bold text-[#EEEFE0] ${
                    isCenter ? 'text-3xl mb-2' : 'text-xl mb-1'
                  }`}
                >
                  {data.title}
                </motion.h3>
                <p className={`${isCenter ? 'text-base' : 'text-sm'} text-[#A7C1A8] mb-1`}>
                  {data.institute}
                </p>
                <p className={`${isCenter ? 'text-sm' : 'text-xs'} text-[#9FBAB3] mb-1`}>
                  {data.year}
                </p>
                {data.result && (
                  <p className={`${isCenter ? 'text-base' : 'text-sm'} text-[#D1D8BE] font-semibold`}>
                    Score: {data.result}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="text-[#A7C1A8]/70 italic mt-24 max-w-xl text-center text-base z-10 px-4">
        “Every step in my education lights up a new constellation in the sky of learning.”
      </p>
    </section>
  );
};

export default CircularCarousel;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const educationData = [
  { title: 'Primary School', institute: 'Domjur Margaret School', year: '2012' },
  { title: 'Secondary', institute: 'Uttar Jhapordah Sri Siksha Niketan', year: '2020', result: '92%' },
  { title: 'Higher Secondary', institute: 'Jhapordah Duke Institution', year: '2022', result: '91.6%' },
  { title: 'B.Tech IT', institute: 'Techno Main Saltlake', year: '2026 (expected)' },
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
    <section className="min-h-screen w-full bg-[#121010] text-white flex flex-col items-center justify-center relative px-4 sm:px-6 overflow-hidden font-display">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#CFF3E8] neon-glow mb-20 z-10 text-center">
        🪐 My Education Journey
      </h2>

      <div className="flex items-center justify-center relative w-full max-w-7xl min-h-[320px]">
        {visibleIndexes.map((index, pos) => {
          const isCenter = !isMobile ? pos === 1 : true;
          const scale = isCenter ? 1.34 : 0.60;
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
                  ? 'left-1/2 -translate-x-1/2'
                  : pos === 0
                  ? 'left-[8%]'
                  : pos === 1
                  ? 'left-1/2 -translate-x-1/2'
                  : 'right-[8%]'
              }`}
              style={{ zIndex }}
            >
              <div
                className={`${cardWidth} h-[260px] bg-[#1B1B1B]/80 border border-[#A7C1A8]/30 rounded-xl shadow-[0_0_20px_#A7C1A8] backdrop-blur-md flex flex-col justify-center items-center text-center p-6 hover:scale-105 transition-all duration-300`}
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





// import React from 'react';
// import { motion } from 'framer-motion';

// const educationData = [
//   {
//     title: 'Primary School',
//     institute: 'Domjur Margaret School',
//     year: '',
//     result: '',
//     align: 'left',
//   },
//   {
//     title: 'Secondary Education',
//     institute: 'Uttar Jhapordah Sri Siksha Niketan',
//     year: '2020',
//     result: '92%',
//     align: 'right',
//   },
//   {
//     title: 'Higher Secondary',
//     institute: 'Jhapordah Duke Institution',
//     year: '2022',
//     result: '91.6%',
//     align: 'left',
//   },
//   {
//     title: 'Undergraduate (B.Tech IT)',
//     institute: 'Techno Main Saltlake',
//     year: '2026 (Expected)',
//     result: '',
//     align: 'right',
//   },
// ];

// const EducationCard = ({ data, index }) => {
//   const isLeft = data.align === 'left';
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//       viewport={{ once: true }}
//       className={`w-full md:w-1/2 px-4 py-6 relative z-10 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
//     >
//       <div className="bg-[#A7C1A8]/10 border border-[#A7C1A8] backdrop-blur-lg rounded-lg p-5 shadow-[0_0_25px_#819A91] glitch-box">
//         <h3 className="text-2xl font-bold glitch-text">{data.title}</h3>
//         <p className="text-[#D1D8BE] font-medium">{data.institute}</p>
//         <p className="text-sm text-[#819A91]">{data.year}</p>
//         {data.result && <p className="text-sm text-[#819A91]">Score: {data.result}</p>}
//       </div>
//       <div
//         className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-[#819A91] border-2 border-[#A7C1A8] ${
//           isLeft ? 'right-[-10px]' : 'left-[-10px]'
//         }`}
//       ></div>
//     </motion.div>
//   );
// };

// const RetroDecor = () => (
//   <>
//     {/* Floating shapes */}
//     <motion.div
//       className="absolute top-12 left-8 w-8 h-8 bg-[#819A91] rotate-45 opacity-20"
//       animate={{ y: [0, 15, 0] }}
//       transition={{ repeat: Infinity, duration: 4 }}
//     />
//     <motion.div
//       className="absolute bottom-24 right-12 w-12 h-12 border-2 border-[#A7C1A8] rounded-full opacity-10"
//       animate={{ scale: [1, 1.1, 1] }}
//       transition={{ repeat: Infinity, duration: 6 }}
//     />
//     <motion.div
//       className="absolute top-[35%] left-2 w-[60px] h-[2px] bg-[#A7C1A8]"
//       animate={{ x: [0, 15, 0] }}
//       transition={{ repeat: Infinity, duration: 2 }}
//     />
//     <motion.div
//       className="absolute bottom-[30%] right-2 w-[60px] h-[2px] bg-[#A7C1A8]"
//       animate={{ x: [0, -15, 0] }}
//       transition={{ repeat: Infinity, duration: 2 }}
//     />

//     {/* Scanlines overlay */}
//     <div className="absolute inset-0 pointer-events-none z-0 scanlines mix-blend-overlay"></div>

//     {/* Grid floor */}
//     <div className="absolute bottom-0 left-0 w-full h-40 grid-pattern opacity-10 z-0" />
//   </>
// );

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="min-h-screen bg-gradient-to-b from-[#EEEFE0] to-[#D1D8BE] dark:from-[#0f0f0f] dark:to-black text-[#819A91] font-mono py-24 px-6 md:px-16 relative overflow-hidden"
//     >
//       <RetroDecor />

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-6xl mx-auto relative z-10"
//       >
//         <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 neon-glow">
//           Education Journey
//         </h2>

//         <div className="relative flex flex-col md:flex-row items-center">
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#819A91] rounded"></div>
//           <div className="w-full">
//             {educationData.map((item, index) => (
//               <div key={index} className="flex md:justify-between items-center w-full mb-12 relative">
//                 {item.align === 'left' && <EducationCard data={item} index={index} />}
//                 <div className="hidden md:block w-1 bg-transparent h-28"></div>
//                 {item.align === 'right' && <EducationCard data={item} index={index} />}
//               </div>
//             ))}
//           </div>
//         </div>

//         <p className="text-center text-[#A7C1A8] italic mt-16 text-lg font-light z-10 relative">
//           From childhood dreams to creative code — always in motion.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default Education;

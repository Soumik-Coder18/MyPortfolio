import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: 'Primary School',
    institute: 'Domjur Margaret School',
    year: '',
    result: '',
    align: 'left',
  },
  {
    title: 'Secondary Education',
    institute: 'Uttar Jhapordah Sri Siksha Niketan',
    year: '2020',
    result: '92%',
    align: 'right',
  },
  {
    title: 'Higher Secondary',
    institute: 'Jhapordah Duke Institution',
    year: '2022',
    result: '91.6%',
    align: 'left',
  },
  {
    title: 'Undergraduate (B.Tech IT)',
    institute: 'Techno Main Saltlake',
    year: '2026 (Expected)',
    result: '',
    align: 'right',
  },
];

const EducationCard = ({ data, index }) => {
  const isLeft = data.align === 'left';
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`w-full md:w-1/2 px-4 py-6 relative z-10 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
    >
      <div className="bg-[#A7C1A8]/10 border border-[#A7C1A8] backdrop-blur-lg rounded-lg p-5 shadow-[0_0_25px_#819A91] glitch-box">
        <h3 className="text-2xl font-bold glitch-text">{data.title}</h3>
        <p className="text-[#D1D8BE] font-medium">{data.institute}</p>
        <p className="text-sm text-[#819A91]">{data.year}</p>
        {data.result && <p className="text-sm text-[#819A91]">Score: {data.result}</p>}
      </div>
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-[#819A91] border-2 border-[#A7C1A8] ${
          isLeft ? 'right-[-10px]' : 'left-[-10px]'
        }`}
      ></div>
    </motion.div>
  );
};

const RetroDecor = () => (
  <>
    {/* Floating shapes */}
    <motion.div
      className="absolute top-12 left-8 w-8 h-8 bg-[#819A91] rotate-45 opacity-20"
      animate={{ y: [0, 15, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
    />
    <motion.div
      className="absolute bottom-24 right-12 w-12 h-12 border-2 border-[#A7C1A8] rounded-full opacity-10"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 6 }}
    />
    <motion.div
      className="absolute top-[35%] left-2 w-[60px] h-[2px] bg-[#A7C1A8]"
      animate={{ x: [0, 15, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    />
    <motion.div
      className="absolute bottom-[30%] right-2 w-[60px] h-[2px] bg-[#A7C1A8]"
      animate={{ x: [0, -15, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    />

    {/* Scanlines overlay */}
    <div className="absolute inset-0 pointer-events-none z-0 scanlines mix-blend-overlay"></div>

    {/* Grid floor */}
    <div className="absolute bottom-0 left-0 w-full h-40 grid-pattern opacity-10 z-0" />
  </>
);

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-b from-[#EEEFE0] to-[#D1D8BE] dark:from-[#0f0f0f] dark:to-black text-[#819A91] font-mono py-24 px-6 md:px-16 relative overflow-hidden"
    >
      <RetroDecor />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 neon-glow">
          Education Journey
        </h2>

        <div className="relative flex flex-col md:flex-row items-center">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#819A91] rounded"></div>
          <div className="w-full">
            {educationData.map((item, index) => (
              <div key={index} className="flex md:justify-between items-center w-full mb-12 relative">
                {item.align === 'left' && <EducationCard data={item} index={index} />}
                <div className="hidden md:block w-1 bg-transparent h-28"></div>
                {item.align === 'right' && <EducationCard data={item} index={index} />}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[#A7C1A8] italic mt-16 text-lg font-light z-10 relative">
          From childhood dreams to creative code — always in motion.
        </p>
      </motion.div>
    </section>
  );
};

export default Education;

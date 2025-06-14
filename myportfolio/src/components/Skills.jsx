import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const coreSkills = [
  'Vite + React',
  'Node.js',
  'Tailwind CSS',
  'Three.js',
  'Figma',
  'C++',
  'SQL',
  'REST APIs',
];

const basicSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Git',
  'Design',
  'Firebase',
  'Framer Motion',
  'VS Code',
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const CommandLineSkill = ({ skill, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    viewport={{ once: true }}
    className="font-mono text-[#EEEFE0] bg-[#A7C1A8]/10 border border-[#819A91] px-4 py-2 rounded-lg shadow-[0_0_10px_#819A91] w-full hover:scale-[1.03] transition duration-200 cursor-default backdrop-blur-md"
  >
    <span className="text-[#A7C1A8]">$</span> install <span className="text-[#D1D8BE]">{skill}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-16 py-20 bg-gradient-to-br from-[#EEEFE0] via-[#D1D8BE] to-[#A7C1A8] dark:from-black dark:via-[#111] dark:to-[#0f0f0f] font-mono text-[#819A91] relative overflow-hidden"
    >
      {/* Terminal Grid Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#819A91_0%,transparent_70%)] opacity-[0.05] z-0 pointer-events-none" />

      <motion.div
        {...fadeUp}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center neon-glow glitch">
          Terminal Skills Log
        </h2>

        {/* Terminal Prompt - Core */}
        <motion.div {...fadeUp} className="text-left text-lg md:text-xl text-[#D1D8BE] mb-8">
          <span className="text-[#A7C1A8]">~/core-skills</span>
          <span className="text-[#EEEFE0]"> ❯</span> <span className="animate-blink">█</span>
        </motion.div>

        {/* Core Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {coreSkills.map((skill, i) => (
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              key={i}
            >
              <CommandLineSkill skill={skill} delay={i * 0.15} />
            </Tilt>
          ))}
        </div>

        {/* Divider */}
        <motion.div {...fadeUp} className="border-t border-[#819A91]/40 my-8 w-3/4 mx-auto" />

        {/* Terminal Prompt - Basics */}
        <motion.div {...fadeUp} className="text-left text-lg md:text-xl text-[#D1D8BE] mb-6">
          <span className="text-[#A7C1A8]">~/basic-skills</span>
          <span className="text-[#EEEFE0]"> ❯</span> <span className="animate-blink">█</span>
        </motion.div>

        {/* Basic Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {basicSkills.map((skill, i) => (
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              key={i}
            >
              <CommandLineSkill skill={skill} delay={i * 0.1} />
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

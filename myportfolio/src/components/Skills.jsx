import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const coreSkills = [
  'Vite + React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Tailwind CSS',
  'Three.js',
  'Figma',
  'C++',
  'SQL',
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

const communicationSkills = [
  'Teamwork',
  'Clear Communication',
  'Project Planning',
  'Writing Documentation',
  'Listening to Feedback',
  'Public Speaking',
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const SkillCard = ({ skill, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    viewport={{ once: true }}
    className="font-mono text-[#EEEFE0] relative bg-[#A7C1A8]/10 border border-[#A7C1A8]/30 px-5 py-3 rounded-xl shadow-[0_0_20px_#819A91]/20 backdrop-blur-md hover:scale-[1.03] transition duration-300 cursor-default group"
  >
    <div className="absolute inset-0 rounded-xl border border-[#A7C1A8]/10 group-hover:border-[#A7C1A8]/40 transition-all duration-300 animate-pulse blur-sm" />
    <div className="relative z-10">
      <span className="text-[#A7C1A8]">$</span>{' '}
      <span className="text-[#EEEFE0]">install</span>{' '}
      <span className="text-[#CFF3E8]">{skill}</span>
    </div>
    <div className="w-full h-[2px] mt-2 bg-gradient-to-r from-transparent via-[#A7C1A8]/40 to-transparent animate-[pulse_1.8s_infinite]" />
  </motion.div>
);

const SectionHeading = ({ label, path }) => (
  <motion.div {...fadeUp} className="text-left text-lg md:text-xl text-[#D1D8BE] mb-8">
    <span className="text-[#A7C1A8]">~/{path}</span>
    <span className="text-[#EEEFE0]"> ❯</span>{' '}
    <span className="animate-blink">█</span>{' '}
    <span className="text-[#A7C1A8]/60 text-sm"># {label}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-16 py-24 bg-gradient-to-br from-[#0f0f0f] to-black text-[#819A91] font-mono relative overflow-hidden"
    >
      {/* Grid and Glow */}
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-[0.04] mix-blend-soft-light pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#A7C1A8_0%,transparent_80%)] opacity-[0.03]" />

      <motion.div {...fadeUp} className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-20 text-center text-[#CFF3E8] glitch neon-glow tracking-wide">
          Developer Skillstream
        </h2>

        {/* Core Skills */}
        <SectionHeading label="Core Stack & Frameworks" path="core-skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {coreSkills.map((skill, i) => (
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              key={i}
            >
              <SkillCard skill={skill} delay={i * 0.1} />
            </Tilt>
          ))}
        </div>

        {/* Basic Skills */}
        <SectionHeading label="Basics, Tools & Workflow" path="basic-skills" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16">
          {basicSkills.map((skill, i) => (
            <Tilt
              glareEnable
              glareMaxOpacity={0.15}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              key={i}
            >
              <SkillCard skill={skill} delay={i * 0.08} />
            </Tilt>
          ))}
        </div>

        {/* Communication Skills */}
        <SectionHeading label="Communication & Teaming" path="communication" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {communicationSkills.map((skill, i) => (
            <Tilt
              glareEnable
              glareMaxOpacity={0.15}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              key={i}
            >
              <SkillCard skill={skill} delay={i * 0.07} />
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;







// import React from 'react';
// import { motion } from 'framer-motion';
// import Tilt from 'react-parallax-tilt';

// const skillGroups = [
//   {
//     title: '⚙️ Core Stack & Frameworks',
//     path: 'core-skills',
//     items: [
//       'Vite + React',
//       'Node.js',
//       'Express.js',
//       'MongoDB',
//       'Tailwind CSS',
//       'Three.js',
//       'Figma',
//       'C++',
//       'SQL',
//     ],
//   },
//   {
//     title: '🧰 Tools & Basics',
//     path: 'basic-skills',
//     items: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'Git',
//       'Design',
//       'Firebase',
//       'Framer Motion',
//       'VS Code',
//     ],
//   },
//   {
//     title: '🗣️ Communication & Teaming',
//     path: 'communication',
//     items: [
//       'Teamwork',
//       'Clear Communication',
//       'Project Planning',
//       'Writing Documentation',
//       'Listening to Feedback',
//       'Public Speaking',
//     ],
//   },
// ];

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true },
// };

// const SkillCard = ({ skill, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ delay, duration: 0.4 }}
//     viewport={{ once: true }}
//   >
//     <Tilt
//       glareEnable
//       glareMaxOpacity={0.2}
//       tiltMaxAngleX={10}
//       tiltMaxAngleY={10}
//       className="group"
//     >
//       <div className="bg-[#181818] border border-[#CFF3E8]/20 p-5 rounded-xl backdrop-blur-md shadow-[0_0_12px_#CFF3E8]/10 hover:scale-[1.05] transition duration-300 text-center font-mono text-[#EEEFE0] relative overflow-hidden">
//         <div className="text-sm sm:text-base font-semibold tracking-wide z-10 relative">
//           <span className="text-[#CFF3E8]">$</span> install{' '}
//           <span className="text-[#9BD9C9]">{skill}</span>
//         </div>
//         <div className="absolute -bottom-1 left-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#A7C1A8]/40 to-transparent animate-pulse -translate-x-1/2" />
//       </div>
//     </Tilt>
//   </motion.div>
// );

// const SectionHeading = ({ title, path }) => (
//   <motion.div {...fadeUp} className="mb-10">
//     <h3 className="text-[#A7C1A8] text-sm sm:text-base font-mono mb-1">~/{path}</h3>
//     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CFF3E8]">
//       {title}
//     </h2>
//   </motion.div>
// );

// const Skills = () => {
//   return (
//     <section className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] px-6 sm:px-10 md:px-16 py-24 font-mono relative overflow-hidden text-[#EEEFE0]">
//       <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none z-0" />
//       <motion.div
//         {...fadeUp}
//         className="max-w-6xl mx-auto relative z-10 text-center mb-20"
//       >
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#CFF3E8] neon-glow">
//           🚀 Developer Skillstream
//         </h1>
//         <p className="text-[#9FBAB3] mt-4 text-sm sm:text-base max-w-2xl mx-auto">
//           A constellation of tools, languages, and frameworks that empower my daily development.
//         </p>
//       </motion.div>

//       {skillGroups.map((group, i) => (
//         <div key={group.title} className="mb-20">
//           <SectionHeading title={group.title} path={group.path} />
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
//             {group.items.map((skill, j) => (
//               <SkillCard skill={skill} key={j} delay={j * 0.1} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Skills;

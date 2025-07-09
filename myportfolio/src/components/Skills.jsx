
// import React from 'react';
// import { motion } from 'framer-motion';
// import Tilt from 'react-parallax-tilt';

// const coreSkills = [
//   'Vite + React',
//   'Node.js',
//   'Express.js',
//   'MongoDB',
//   'Tailwind CSS',
//   'Three.js',
//   'Figma',
//   'C++',
//   'SQL',
// ];

// const basicSkills = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'Git',
//   'Design',
//   'Firebase',
//   'Framer Motion',
//   'VS Code',
// ];

// const communicationSkills = [
//   'Teamwork',
//   'Clear Communication',
//   'Project Planning',
//   'Writing Documentation',
//   'Listening to Feedback',
//   'Public Speaking',
// ];

// const knowledgeLevels = {
//   'Vite + React': 90,
//   'Node.js': 80,
//   'Express.js': 75,
//   'MongoDB': 78,
//   'Tailwind CSS': 85,
//   'Three.js': 65,
//   'Figma': 82,
//   'C++': 70,
//   'SQL': 72,
//   'HTML': 95,
//   'CSS': 90,
//   'JavaScript': 88,
//   'Git': 86,
//   'Design': 80,
//   'Firebase': 60,
//   'Framer Motion': 75,
//   'VS Code': 92,
//   'Teamwork': 95,
//   'Clear Communication': 88,
//   'Project Planning': 83,
//   'Writing Documentation': 87,
//   'Listening to Feedback': 90,
//   'Public Speaking': 80,
// };

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true },
// };

// const SkillCard = ({ skill, delay }) => {
//   const percent = knowledgeLevels[skill] || 60;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay, duration: 0.4 }}
//       viewport={{ once: true }}
//       className="font-mono text-[#EEEFE0] relative bg-[#A7C1A8]/10 border border-[#A7C1A8]/30 px-5 py-4 rounded-xl shadow-[0_0_20px_#819A91]/20 backdrop-blur-md hover:scale-[1.03] transition duration-300 cursor-default group"
//     >
//       <div className="absolute inset-0 rounded-xl border border-[#A7C1A8]/10 group-hover:border-[#A7C1A8]/40 transition-all duration-300 animate-pulse blur-sm" />
//       <div className="relative z-10">
//         <div>
//           <span className="text-[#A7C1A8]">$</span>{' '}
//           <span className="text-[#EEEFE0]">install</span>{' '}
//           <span className="text-[#CFF3E8]">{skill}</span>
//         </div>

//         {/* Retro Percentage Bar */}
//         <div className="mt-3">
//           <div className="text-xs text-[#A7C1A8]/70 mb-1">
//             [{percent}% Knowledge]
//           </div>
//           <div className="w-full h-2 rounded-md bg-[#273730] overflow-hidden">
//             <div
//               className="h-full bg-gradient-to-r from-[#CFF3E8] to-[#819A91] animate-pulse"
//               style={{ width: `${percent}%` }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const SectionHeading = ({ label, path }) => (
//   <motion.div {...fadeUp} className="text-left text-lg md:text-xl text-[#D1D8BE] mb-8">
//     <span className="text-[#A7C1A8]">~/{path}</span>
//     <span className="text-[#EEEFE0]"> ❯</span>{' '}
//     <span className="animate-blink">█</span>{' '}
//     <span className="text-[#A7C1A8]/60 text-sm"># {label}</span>
//   </motion.div>
// );

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="min-h-screen px-6 md:px-16 py-24 bg-gradient-to-br from-[#0f0f0f] to-black text-[#819A91] font-mono relative overflow-hidden"
//     >
//       {/* Grid and Glow */}
//       <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-[0.04] mix-blend-soft-light pointer-events-none" />
//       <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#A7C1A8_0%,transparent_80%)] opacity-[0.03]" />

//       <motion.div {...fadeUp} className="relative z-10 max-w-6xl mx-auto">
//         <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-20 text-center text-[#CFF3E8] glitch neon-glow tracking-wide">
//           Developer Skillstream
//         </h2>

//         {/* Core Skills */}
//         <SectionHeading label="Core Stack & Frameworks" path="core-skills" />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
//           {coreSkills.map((skill, i) => (
//             <Tilt
//               glareEnable
//               glareMaxOpacity={0.2}
//               tiltMaxAngleX={10}
//               tiltMaxAngleY={10}
//               key={i}
//             >
//               <SkillCard skill={skill} delay={i * 0.1} />
//             </Tilt>
//           ))}
//         </div>

//         {/* Basic Skills */}
//         <SectionHeading label="Basics, Tools & Workflow" path="basic-skills" />
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16">
//           {basicSkills.map((skill, i) => (
//             <Tilt
//               glareEnable
//               glareMaxOpacity={0.15}
//               tiltMaxAngleX={8}
//               tiltMaxAngleY={8}
//               key={i}
//             >
//               <SkillCard skill={skill} delay={i * 0.08} />
//             </Tilt>
//           ))}
//         </div>

//         {/* Communication Skills */}
//         <SectionHeading label="Communication & Teaming" path="communication" />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {communicationSkills.map((skill, i) => (
//             <Tilt
//               glareEnable
//               glareMaxOpacity={0.15}
//               tiltMaxAngleX={6}
//               tiltMaxAngleY={6}
//               key={i}
//             >
//               <SkillCard skill={skill} delay={i * 0.07} />
//             </Tilt>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Updated Skill Sections
const sections = {
  "Frontend & UI Tools": [
    { name: 'Vite + React', level: 92 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Three.js', level: 70 },
    { name: 'Framer Motion', level: 85 },
    { name: 'HTML', level: 89 },
    { name: 'CSS', level: 91 },
    { name: 'JavaScript', level: 80 },
    { name: 'Figma', level: 78 },
    { name: 'Canva', level: 90}
  ],
  "Backend & Dev Tools": [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQL', level: 90 },
    { name: 'Git', level: 85 },
    { name: 'VS Code', level: 90 },
  ],
  "Programming Languages": [
    { name: 'C++', level: 88 },
    { name: 'JavaScript', level: 80 },
    { name: 'C', level: 90 },
  ],
  "Soft Skill Sync": [
    { name: 'Teamwork', level: 90 },
    { name: 'Clear Communication', level: 88 },
    { name: 'Project Planning', level: 90 },
    { name: 'Writing Docs', level: 92 },
    { name: 'Feedback Listening', level: 87 },
    { name: 'Public Speaking', level: 80 },
  ],
  "Linguistic Bandwidth": [
    { name: 'Bengali', level: 100 },
    { name: 'English', level: 90 },
    { name: 'Hindi', level: 85 },
  ],
};

// Animation settings
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

// Skill bar component
const SkillBar = ({ name, level, delay }) => (
  <motion.div {...fadeIn} transition={{ delay, duration: 0.6 }} className="space-y-1">
    <div className="flex justify-between text-sm text-[#F0F2EB] font-medium">
      <span>{name}</span>
      <span className="text-[#99E2C0]">{level}%</span>
    </div>
    <div className="w-full h-2 bg-[#1a1a1a] border border-[#5a5a5a] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, delay }}
        className="h-full bg-gradient-to-r from-[#A7C1A8] via-[#CFF3E8] to-[#A7C1A8] shadow-md rounded-full"
      />
    </div>
  </motion.div>
);

// Reusable section
const SkillSection = ({ title, path, skills }) => (
  <div className="mb-20">
    <motion.div {...fadeIn} className="mb-6">
      <div className="text-xl md:text-2xl font-semibold text-[#CFF3E8] tracking-wide">
        ❯ {title}
      </div>
      <div className="text-[#819A91] text-sm">~/skills/{path}</div>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skills.map((skill, i) => (
        <Tilt key={skill.name} glareEnable glareMaxOpacity={0.1} tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <div className="bg-[#0D0D0D]/50 border border-[#1E1E1E] rounded-2xl p-4 shadow-lg backdrop-blur-sm hover:shadow-[#A7C1A8]/30 transition duration-300">
            <SkillBar name={skill.name} level={skill.level} delay={i * 0.07} />
          </div>
        </Tilt>
      ))}
    </div>
  </div>
);

// Main Skills component
const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-16 py-24 bg-gradient-to-br from-[#0f0f0f] to-black text-[#DDECE4] font-mono relative overflow-hidden"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-[0.03] mix-blend-soft-light pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#99E2C0_0%,transparent_70%)] opacity-[0.03]" />

      <motion.div {...fadeIn} className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-20 text-[#CFF3E8] neon-glow tracking-wide">
          Developer Skillstream
        </h2>

        {/* Render all sections */}
        {Object.entries(sections).map(([title, skills]) => (
          <SkillSection
            key={title}
            title={title}
            path={title.toLowerCase().replace(/\s+/g, '-')}
            skills={skills}
          />
        ))}
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

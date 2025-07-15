import React from 'react';
import { motion } from 'framer-motion';
import CalImg from '../assets/CalculatorApp.png';
import ColImg from '../assets/ColorChanger.png';
import CurrImg from '../assets/CurrencyConv.png';
import AgroConnect from '../assets/AgroConnect.jpeg';
import MyOTT from '../assets/myOTT.png';
import Event from '../assets/Event.png';

const majorProjects = [
  {
    title: 'AgroConnect',
    description: 'A full-stack platform connecting farmers directly with consumers to ensure fair trade and fresh produce.',
    image: AgroConnect,
    demo: 'https://agro-connectt.vercel.app/',
    github: 'https://github.com/SobhanBose/AgroConnect'
  },
  {
    title: 'Event Management Platform',
    description: 'Organize, host, and manage events with seamless RSVP, scheduling, and notifications.',
    image: Event,
    demo: '',
    github: 'https://github.com/subhradeep09/Divertion-1.0'
  },
  {
    title: 'WhisperFrame',
    description: 'A sleek OTT platform to explore, favorite, and interact with curated movies and shows.',
    image: MyOTT,
    demo: 'https://whisperframeott.vercel.app/',
    github: 'https://github.com/your-username/ott-platform'
  },
];

const basicProjects = [
  {
    title: 'Calculator App',
    description: 'A digital calculator with clean logic and design.',
    image: CalImg,
    demo: 'https://calculator-5pq.pages.dev/',
    github: 'https://github.com/Soumik-Coder18/React-Small-Projects/tree/main/Calculator'
  },
  {
    title: 'Color Changer',
    description: 'An interactive color flipper that cycles through vibrant hues with one click.',
    image: ColImg,
    demo: 'https://bgcolorchanger.pages.dev/',
    github: 'https://github.com/Soumik-Coder18/React-Small-Projects/tree/main/BgColorChanger'
  },
  {
    title: 'Currency Converter',
    description: 'Real-time currency conversion tool with UI.',
    image: CurrImg,
    demo: 'https://currencyconverter-a5c.pages.dev/',
    github: 'https://github.com/Soumik-Coder18/React-Small-Projects/tree/main/CurrencyConverter'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.1, rotate: -1 }}
    transition={{ type: 'spring', stiffness: 120 }}
    className="bg-[#A7C1A8]/10 backdrop-blur-lg border border-[#A7C1A8] rounded-xl overflow-hidden shadow-[0_0_20px_#819A91] hover:shadow-[0_0_25px_#A7C1A8] transition-all"
  >
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-4 text-[#EEEFE0] font-mono space-y-2">
      <h3 className="text-xl font-bold text-[#A7C1A8]">{project.title}</h3>
      <p className="text-sm text-[#D1D8BE]">{project.description}</p>
      <div className="flex justify-between pt-2">
        {project.demo !== '' ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#819A91] hover:text-[#A7C1A8] underline"
          >
            Live Demo
          </a>
        ) : (
          <span className="text-[#819A91] opacity-50 cursor-not-allowed">Live Demo</span>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#819A91] hover:text-[#A7C1A8] underline"
        >
          GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen px-6 md:px-16 py-20 bg-gradient-to-b from-[#EEEFE0] to-[#D1D8BE] dark:from-[#0f0f0f] dark:to-black text-[#819A91] font-mono"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 neon-glow text-center">
          Projects
        </h2>

        <h3 className="text-2xl md:text-3xl text-[#A7C1A8] mb-6 font-bold">Major Projects</h3>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {majorProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        <h3 className="text-2xl md:text-3xl text-[#A7C1A8] mb-6 font-bold">Basic Projects</h3>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {basicProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;

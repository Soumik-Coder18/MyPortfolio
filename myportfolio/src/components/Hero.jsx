import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { TypeAnimation } from 'react-type-animation';
import * as THREE from 'three';
import SoumikImage from '../assets/Soumik.jpg'; // ✅ Import image from src/assets

const Hero = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const wire = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0x819a91 });
    const sphere = new THREE.LineSegments(wire, material);
    scene.add(sphere);

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.004;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      className="relative pt-20 md:pt-24 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 bg-black text-white overflow-hidden"
      id="hero"
    >
      {/* 3D Retro Wireframe Sphere */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-10 text-center md:text-left space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-mono glow-text">
          Hi, I’m <span className="text-[#A7C1A8]">Soumik Bag</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
          I’m an{' '}
          <TypeAnimation
            sequence={[
              'B.Tech Student',
              1500,
              'MERN Stack Developer',
              1500,
              'Creative Technologist',
              1500,
              'Team Project Collaborator',
              1500,
              'Problem Solver (C++)',
              1500,
              'UI/UX Enthusiast',
              1500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-[#819A91] font-semibold"
          />
        </h2>
         <p
            className="mt-4 text-base sm:text-lg max-w-lg text-[#EEEFE0] mx-auto md:mx-0 leading-relaxed"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
        >
            I build immersive web experiences, capture emotion through imagery, and breathe life into code with style.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-6 py-3 bg-[#819A91] hover:bg-[#A7C1A8] text-white rounded-lg transition"
        >
          Let’s Connect
        </a>
      </motion.div>

      {/* Retro Photo */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex-1 z-10 mt-10 md:mt-0 w-full flex justify-center"
>
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.4}
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    scale={1.05}
  >
    <div className="relative rounded-xl overflow-hidden retro-frame border-4 border-[#A7C1A8] w-[240px] sm:w-[280px] md:w-[300px] h-[240px] sm:h-[280px] md:h-[300px] shadow-xl">
      <img
        src={SoumikImage}
        alt="Soumik Bag"
        className="w-full h-full object-cover brightness-[1.15] contrast-[1.05] saturate-[0.85] retro-image"
      />
      <div className="absolute inset-0 retro-scanlines pointer-events-none"></div>
    </div>
  </Tilt>
</motion.div>

    </section>
  );
};

export default Hero;

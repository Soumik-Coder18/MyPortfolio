import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const Terminal = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const containerRef = useRef();
  const index = useRef(0);
  const charIndex = useRef(0);

  const terminalLines = [
    'booting system...',
    '- accessing Soumik.exe...',
    '- initializing creativity core...',
    '- loading modules:',
    '- photography',
    '- web dev',
    '- music theory',
    '- executing imagination.exe...',
    '- decrypting personality...',
    '- bio loaded:',
    '- Name: Soumik Bag',
    '- Location: Domjur, Howrah',
    '- Mission: Craft immersive digital experiences',
    '- Running diagnostics...',
    '- Status: Optimistic ✅',
    '- Motivation: 110%',
    '- System theme: dark.mode',
    '- Passions injected ✔',
    '- Running system introspection...',
    '- "Creativity is not a skill. It’s a mood."',
    '- Loading retro vibes...',
    '- Engaging chill mode... 🎶',
    '- Message: Hello, human. Let’s make something great together!',
    '- >>> system ready.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const line = terminalLines[index.current];

      if (!line) {
        clearInterval(interval);
        return;
      }

      if (charIndex.current < line.length) {
        setCurrentLine((prev) => prev + line.charAt(charIndex.current));
        charIndex.current++;
      } else {
        setDisplayedLines((prev) => [...prev, currentLine + line.charAt(charIndex.current)]);
        setCurrentLine('');
        charIndex.current = 0;
        index.current++;
      }

      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, 45);

    return () => clearInterval(interval);
  }, [currentLine]);

  return (
    <div
      ref={containerRef}
      className="bg-black/50 backdrop-blur-md text-[#A7C1A8] font-mono text-sm p-4 rounded-xl h-[400px] w-full overflow-auto shadow-2xl border border-[#819A91] animate-flicker"
    >
      {displayedLines.map((line, idx) => (
        <div key={idx}>$ {line}</div>
      ))}
      {currentLine && <div>$ {currentLine}_</div>}
    </div>
  );
};

const About = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
      0.5,
      0.5,
      0
    );

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(bloomPass);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    const geometry = new THREE.IcosahedronGeometry(1.2, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x819A91,
      wireframe: true,
      emissive: 0xA7C1A8,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.7,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      mesh.rotation.x = elapsed * 0.2;
      mesh.rotation.y = elapsed * 0.3;
      controls.update();
      composer.render();
    };
    animate();

    const handleResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      composer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      controls.dispose();
      composer.dispose();
    };
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-[#EEEFE0] to-[#D1D8BE] dark:from-[#0f0f0f] dark:to-black flex items-center justify-center px-6 md:px-16 py-20 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20 z-0 pointer-events-none"
      />

      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Terminal */}
          <div className="order-1">
            <Terminal />
          </div>

          {/* Right Stylized Text */}
<div className="order-2">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-snug text-[#819A91] font-mono flicker"
    style={{ fontFamily: "'Major Mono Display', monospace" }}
  >
    Who am <span className="text-[#A7C1A8]">I</span>?
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.2 }}
    className="text-xl md:text-2xl lg:text-3xl text-[#4b4b4b] dark:text-[#D1D8BE] mb-6 font-light"
    style={{ fontFamily: "'Share Tech Mono', monospace" }}
  >
    I’m <span className="font-semibold text-[#A7C1A8]">Soumik Bag</span>, a creative developer from <span className="font-semibold text-[#819A91]">Domjur, Howrah</span>.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.4 }}
    className="text-lg md:text-xl text-[#4b4b4b] dark:text-[#D1D8BE] mb-6"
    style={{ fontFamily: "'Share Tech Mono', monospace" }}
  >
    I blend code with creativity — crafting digital experiences from UI animation to experimental visuals.
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.6 }}
    className="text-lg md:text-xl text-[#A7C1A8] italic tracking-wide"
    style={{ fontFamily: "'Major Mono Display', monospace" }}
  >
    “Creativity is not a skill. It’s a mood.”
  </motion.p>
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;

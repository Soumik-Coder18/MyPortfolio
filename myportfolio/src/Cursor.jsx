import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const sparkleColor = '#A7C1A8';
    const maxParticles = 100;
    let particles = [];

    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'neon-sparkle';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      document.body.appendChild(sparkle);
      particles.push(sparkle);

      setTimeout(() => {
        sparkle.remove();
        particles = particles.filter(p => p !== sparkle);
      }, 500);
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < 2; i++) {
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        createSparkle(e.clientX + offsetX, e.clientY + offsetY);
      }

      // Limit number of sparkles on screen
      if (particles.length > maxParticles) {
        const extra = particles.splice(0, particles.length - maxParticles);
        extra.forEach(p => p.remove());
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
};

export default Cursor;
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const maxParticles = 45; // reduced from 100
    let particles = [];
    let lastMove = 0;

    const colors = [
      "#E09A72",
      "#C96F4F",
      "#B9573D",
      "#F0C39B",
      "#D88963",
    ];

    // Cursor glow
    const cursorGlow = document.createElement("div");
    cursorGlow.className = "bengal-cursor-glow";
    document.body.appendChild(cursorGlow);

    const createParticle = (x, y) => {
      const particle = document.createElement("div");

      const size = Math.random() * 3 + 1.5; // smaller
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 22 + 8; // less spread

      const driftX = Math.cos(angle) * distance;
      const driftY = Math.sin(angle) * distance;

      const color =
        colors[Math.floor(Math.random() * colors.length)];

      particle.className = "bengal-cursor-particle";

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = color;

      particle.style.setProperty("--particle-color", color);
      particle.style.setProperty("--drift-x", `${driftX}px`);
      particle.style.setProperty("--drift-y", `${driftY}px`);

      // Fewer diamond particles
      if (Math.random() > 0.85) {
        particle.classList.add("bengal-diamond");
      }

      document.body.appendChild(particle);
      particles.push(particle);

      setTimeout(() => {
        particle.remove();
        particles = particles.filter((p) => p !== particle);
      }, 850);
    };

    const handleMouseMove = (e) => {
      const now = performance.now();

      if (now - lastMove < 20) return; // slightly less frequent
      lastMove = now;

      // Move glow
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;

      // Create fewer particles
      for (let i = 0; i < 1; i++) {
        createParticle(
          e.clientX + (Math.random() - 0.5) * 10,
          e.clientY + (Math.random() - 0.5) * 10
        );
      }

      if (particles.length > maxParticles) {
        const extra = particles.splice(
          0,
          particles.length - maxParticles
        );

        extra.forEach((particle) => particle.remove());
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      cursorGlow.remove();

      particles.forEach((particle) =>
        particle.remove()
      );
    };
  }, []);

  return (
    <style>
      {`
        /* =========================================
           SUBTLE BENGALI CURSOR GLOW
        ========================================= */

        .bengal-cursor-glow {
          position: fixed;
          z-index: 9998;
          width: 26px;
          height: 26px;
          pointer-events: none;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(224, 154, 114, 0.18) 0%,
              rgba(201, 111, 79, 0.09) 35%,
              rgba(169, 79, 57, 0.04) 60%,
              transparent 75%
            );

          box-shadow:
            0 0 12px rgba(201, 111, 79, 0.12),
            0 0 24px rgba(169, 79, 57, 0.06);

          transition:
            left 0.05s linear,
            top 0.05s linear;
        }


        /* =========================================
           SUBTLE TERRACOTTA PARTICLES
        ========================================= */

        .bengal-cursor-particle {
          position: fixed;
          z-index: 9999;

          pointer-events: none;

          border-radius: 50%;

          opacity: 0;

          transform:
            translate(-50%, -50%)
            scale(0.5);

          background: var(--particle-color);

          box-shadow:
            0 0 3px var(--particle-color),
            0 0 7px var(--particle-color),
            0 0 12px rgba(201, 111, 79, 0.25);

          animation:
            bengalParticleFloat
            850ms
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }


        /* =========================================
           SUBTLE DIAMOND
        ========================================= */

        .bengal-diamond {
          border-radius: 1px;

          box-shadow:
            0 0 3px var(--particle-color),
            0 0 8px var(--particle-color),
            0 0 14px rgba(224, 154, 114, 0.25);

          transform:
            translate(-50%, -50%)
            rotate(45deg)
            scale(0.7);
        }


        @keyframes bengalParticleFloat {

          0% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(0.3);
          }

          10% {
            opacity: 0.75;
            transform:
              translate(-50%, -50%)
              scale(0.8);
          }

          35% {
            opacity: 0.65;
          }

          65% {
            opacity: 0.35;
          }

          100% {
            opacity: 0;
            transform:
              translate(
                calc(-50% + var(--drift-x)),
                calc(-50% + var(--drift-y))
              )
              scale(0.1);
          }
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 768px) {
          .bengal-cursor-glow,
          .bengal-cursor-particle {
            display: none;
          }
        }


        @media (prefers-reduced-motion: reduce) {
          .bengal-cursor-glow,
          .bengal-cursor-particle {
            display: none;
          }
        }
      `}
    </style>
  );
};

export default Cursor;
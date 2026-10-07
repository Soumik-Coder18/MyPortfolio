import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Code2,
  Music2,
} from "lucide-react";

import SoumikImage from "../assets/Soumik2.png";
import SoumikDevelopment from "../assets/SoumikDevelopment.png";
import SoumikPhotgrapher from "../assets/SoumikPhotgrapher.png";
import SoumikMusic from "../assets/SoumikMusic.png";
import Soumik3 from "../assets/Soumik3.png";

const BACKGROUND_VIDEO =
  "https://www.pexels.com/download/video/33824729/";

const disciplines = [
  {
    id: "01",
    english: "Development",
    bengali: "কোড",
    description:
      "I build immersive interfaces where clean engineering meets motion, atmosphere and thoughtful interaction.",
    icon: Code2,
    image: SoumikDevelopment,
  },
  {
    id: "02",
    english: "Photography",
    bengali: "ছবি",
    description:
      "I look for light, composition and emotion — moments that can tell a story without saying a word.",
    icon: Camera,
    image: SoumikPhotgrapher,
  },
  {
    id: "03",
    english: "Music",
    bengali: "সুর",
    description:
      "Rhythm and sound influence the way I think about movement, timing and emotion in digital experiences.",
    icon: Music2,
    image: SoumikMusic,
  },
];

const About = () => {
  /*
   * Section 2 image:
   *
   * 0 = Development
   * 1 = Photography
   * 2 = Music
   */

  const [active, setActive] = useState(0);

  /*
   * When leaving Creative DNA,
   * return to Development.
   */

  const handleMouseLeave = () => {
    setActive(0);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#100806] text-[#ead8c2]"
    >
      {/* ========================================================
          CINEMATIC BACKGROUND SYSTEM
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* ======================================================
            PEXELS VIDEO ATMOSPHERE

            Extremely subtle.
            It should feel like moving light / Kolkata atmosphere,
            not like a visible video playing behind the website.
        ====================================================== */}

        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 scale-[1.08] object-cover opacity-[0.16] blur-[18px]"
          >
            <source
              src={BACKGROUND_VIDEO}
              type="video/mp4"
            />
          </video>
        </div>

        {/* ======================================================
            DARK CINEMATIC VEIL

            This makes sure the video never fights with content.
        ====================================================== */}

        <div className="absolute inset-0 bg-[#100806]/70" />

        {/* ======================================================
            WARM TERRACOTTA ATMOSPHERE
        ====================================================== */}

        <div className="absolute left-[-20%] top-[5%] h-[70vw] w-[70vw] rounded-full bg-[#8e4938]/10 blur-[150px]" />

        <div className="absolute right-[-20%] top-[35%] h-[65vw] w-[65vw] rounded-full bg-[#a95d43]/10 blur-[150px]" />

        <div className="absolute left-[20%] top-[42%] h-[45vw] w-[45vw] rounded-full bg-[#c17b55]/[0.035] blur-[130px]" />

        {/* ======================================================
            CENTER ATMOSPHERE
        ====================================================== */}

        <div className="absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d3956d]/[0.025] blur-[140px]" />

        {/* ======================================================
            CINEMATIC VIGNETTE
        ====================================================== */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_8%,rgba(12,6,4,0.18)_42%,rgba(4,2,1,0.86)_100%)]" />

        {/* ======================================================
            TOP / BOTTOM CINEMA SHADOW
        ====================================================== */}

        <div className="absolute inset-x-0 top-0 h-[20vh] bg-gradient-to-b from-[#090403]/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[25vh] bg-gradient-to-t from-[#080403]/75 to-transparent" />

        {/* ======================================================
            FILM GRAIN
        ====================================================== */}

        <div
          className="absolute inset-0 opacity-[0.075]"
          style={{
            backgroundImage: `
              radial-gradient(
                rgba(225,178,132,0.8) 0.5px,
                transparent 0.5px
              )
            `,
            backgroundSize: "5px 5px",
          }}
        />

        {/* ======================================================
            ARCHITECTURAL LINES
        ====================================================== */}

        <div className="absolute left-[7%] top-0 h-full w-px bg-[#c17b55]/[0.07]" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-[#c17b55]/[0.07]" />

        <div className="absolute left-[7%] right-[7%] top-[100vh] h-px bg-[#c17b55]/[0.05]" />

        <div className="absolute left-[7%] right-[7%] top-[200vh] h-px bg-[#c17b55]/[0.05]" />

        {/* ======================================================
            LARGE BENGALI WATERMARK
        ====================================================== */}

        <div
          className="absolute -right-[4vw] top-[13%] select-none text-[34vw] leading-none text-[#b65e43]/[0.025]"
          style={{
            fontFamily: "'Noto Serif Bengali', serif",
          }}
        >
          ক
        </div>

        <div
          className="absolute -left-[8vw] top-[62%] select-none text-[30vw] leading-none text-[#b65e43]/[0.018]"
          style={{
            fontFamily: "'Noto Serif Bengali', serif",
          }}
        >
          স
        </div>
      </div>

      {/* ========================================================
          DESKTOP
          
          340VH TOTAL
          
          SECTION 1 = 0 → 100VH
          SECTION 2 = 100 → 200VH
          SECTION 3 = 200 → 340VH
      ========================================================= */}

      <div className="relative hidden h-[340vh] lg:block">
        {/* ======================================================
            SECTION 1
           
            SOUMIK2 IMAGE
            IMAGE LEFT
            TEXT RIGHT
        ====================================================== */}

        <section className="absolute inset-x-0 top-0 h-screen">
          <div className="mx-auto grid h-full w-full max-w-[1500px] grid-cols-2 px-16">
            {/* ==================================================
                IMAGE
            ================================================== */}

            <div className="flex h-full items-center justify-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.985,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex h-[70vh] w-auto items-center justify-center"
              >
                {/* Soft glow behind portrait */}

                <div className="absolute inset-[10%] rounded-full bg-[#a95d43]/10 blur-[80px]" />

                <img
                  src={SoumikImage}
                  alt="Soumik Bag"
                  className="relative z-10 h-full w-auto max-w-[52vw] object-contain"
                />

                {/* Minimal frame */}

                <div className="absolute -inset-5 border border-[#c17b55]/10" />

                <div className="absolute -left-5 -top-5 h-12 w-12 border-l border-t border-[#c88965]/45" />

                <div className="absolute -bottom-5 -right-5 h-12 w-12 border-b border-r border-[#c88965]/45" />
              </motion.div>
            </div>

            {/* ==================================================
                TEXT
            ================================================== */}

            <div className="flex h-full items-center pl-16">
              <div className="w-full max-w-[700px]">
                <SectionLabel
                  number="02"
                  bengali="আমার কথা"
                />

                <MainStory />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            SECTION 2
           
            DEVELOPMENT DEFAULT
            PHOTOGRAPHY HOVER
            MUSIC HOVER
           
            TEXT LEFT
            IMAGE RIGHT
        ====================================================== */}

        <section className="absolute inset-x-0 top-[100vh] h-screen">
          <div className="mx-auto grid h-full w-full max-w-[1500px] grid-cols-2 px-16">
            {/* ==================================================
                TEXT
            ================================================== */}

            <div className="flex h-full items-center pr-16">
              <div className="w-full max-w-[620px] pt-[50px]">
                <CreativeDNA
                  active={active}
                  setActive={setActive}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </div>

            {/* ==================================================
                IMAGE
            ================================================== */}

            <div className="relative flex h-full items-center justify-center">
              {/* Image atmosphere */}

              <div className="absolute h-[55vh] w-[30vw] rounded-full bg-[#9b523d]/10 blur-[100px]" />

              <motion.div
                key={disciplines[active].id}
                initial={{
                  opacity: 0,
                  scale: 0.965,
                  y: 18,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 flex h-[70vh] w-auto items-center justify-center"
              >
                <img
                  src={disciplines[active].image}
                  alt={disciplines[active].english}
                  className="h-full w-auto max-w-[52vw] object-contain"
                />

                {/* Frame */}

                <div className="absolute -inset-5 border border-[#c17b55]/10" />

                <div className="absolute -left-5 -top-5 h-12 w-12 border-l border-t border-[#c88965]/40" />

                <div className="absolute -bottom-5 -right-5 h-12 w-12 border-b border-r border-[#c88965]/40" />

                {/* Image label */}

                <div className="absolute -bottom-9 left-5 border border-[#c17b55]/15 bg-[#120907]/80 px-4 py-2 backdrop-blur-md">
                  <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#c17b55]/60">
                    {disciplines[active].id} /{" "}
                    {disciplines[active].english}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ======================================================
            SECTION 3
           
            SOUMIK3
            ABOVE FINAL STATEMENT
        ====================================================== */}

        <section className="absolute inset-x-0 top-[200vh] h-[140vh]">
          <div className="flex h-full flex-col items-center">
            {/* ==================================================
                SOUMIK3 IMAGE
            ================================================== */}

            <div className="flex h-[78vh] w-full items-center justify-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.985,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex h-[70vh] w-auto items-center justify-center"
              >
                {/* Glow */}

                <div className="absolute inset-[12%] rounded-full bg-[#a95d43]/10 blur-[100px]" />

                <img
                  src={Soumik3}
                  alt="Soumik Bag"
                  className="relative z-10 h-full w-auto max-w-[52vw] object-contain"
                />

                {/* Cinematic frame */}

                <div className="absolute -inset-5 border border-[#c17b55]/10" />

                <div className="absolute -left-5 -top-5 h-12 w-12 border-l border-t border-[#c88965]/45" />

                <div className="absolute -bottom-5 -right-5 h-12 w-12 border-b border-r border-[#c88965]/45" />
              </motion.div>
            </div>

            {/* ==================================================
                FINAL STATEMENT
            ================================================== */}

            <div className="w-full">
              <FinalStatement />
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================
          MOBILE
      ========================================================= */}

      <div className="relative z-20 lg:hidden">
        {/* ======================================================
            MOBILE SECTION 1
        ====================================================== */}

        <section className="flex min-h-screen flex-col justify-center px-6 py-28">
          <div className="mb-16">
            <SectionLabel
              number="02"
              bengali="আমার কথা"
            />
          </div>

          <MobilePortrait
            src={SoumikImage}
            alt="Soumik Bag"
          />

          <div className="mt-20">
            <MainStory />
          </div>
        </section>

        {/* ======================================================
            MOBILE SECTION 2
        ====================================================== */}

        <section
          className="min-h-screen px-6 py-28"
          onMouseLeave={handleMouseLeave}
        >
          <CreativeDNA
            active={active}
            setActive={setActive}
          />

          <div className="mt-16 flex justify-center">
            <motion.div
              key={disciplines[active].id}
              initial={{
                opacity: 0,
                scale: 0.97,
                filter: "blur(7px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-[390px]"
            >
              <img
                src={disciplines[active].image}
                alt={disciplines[active].english}
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* ======================================================
            MOBILE SECTION 3
        ====================================================== */}

        <section className="flex min-h-screen flex-col items-center justify-center px-6 py-28 text-center">
          <MobilePortrait
            src={Soumik3}
            alt="Soumik Bag"
          />

          <div className="mt-16">
            <FinalStatement />
          </div>
        </section>
      </div>
    </section>
  );
};

/* ===============================================================
   SECTION LABEL
================================================================ */

const SectionLabel = ({ number, bengali }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mb-16 flex items-center gap-4"
    >
      <span className="font-mono text-[8px] uppercase tracking-[0.35em] text-[#c18461]/60">
        {number} / ABOUT
      </span>

      <span className="h-px w-12 bg-[#c17b55]/25" />

      <span
        className="text-sm text-[#c18461]/80"
        style={{
          fontFamily:
            "'Noto Serif Bengali', serif",
        }}
      >
        {bengali}
      </span>
    </motion.div>
  );
};

/* ===============================================================
   MAIN STORY
================================================================ */

const MainStory = () => {
  return (
    <div className="max-w-[700px]">
      <motion.p
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mb-5 text-xl text-[#b86c4d]/80 md:text-2xl"
        style={{
          fontFamily:
            "'Noto Serif Bengali', serif",
        }}
      >
        আমি সৌমিক।
      </motion.p>

      <motion.h2
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="text-[4rem] font-normal leading-[0.9] tracking-[-0.055em] text-[#ead8c2] md:text-[6rem]"
        style={{
          fontFamily:
            "'Playfair Display', Georgia, serif",
        }}
      >
        I build
        <br />

        <span className="italic text-[#b86c4d]">
          experiences.
        </span>

        <br />

        I tell
        <br />

        <span className="relative inline-block">
          stories.

          <span className="absolute -bottom-2 left-0 h-px w-[60%] bg-[#c17b55]/50" />
        </span>
      </motion.h2>

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "100%",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.1,
          delay: 0.3,
        }}
        className="my-10 h-px max-w-xl bg-[#c17b55]/20"
      />

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="max-w-xl text-lg leading-[1.8] text-[#c6ae96]"
      >
        I'm{" "}
        <span className="text-[#d69a76]">
          Soumik Bag
        </span>
        , a developer from Howrah who likes to bring
        technology and visual storytelling into the same
        frame.
      </motion.p>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.45,
        }}
        className="mt-6 max-w-xl text-base leading-[1.9] text-[#927a68]"
      >
        I enjoy creating interfaces that don't simply
        function — they have atmosphere, rhythm and a
        reason to be remembered.
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          x: -20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.9,
          delay: 0.6,
        }}
        className="mt-10 flex gap-5"
      >
        <div className="w-px bg-[#b86c4d]" />

        <div>
          <p
            className="text-lg text-[#c58261]"
            style={{
              fontFamily:
                "'Noto Serif Bengali', serif",
            }}
          >
            সৃষ্টির মধ্যে গল্প থাকে।
          </p>

          <p className="mt-2 font-serif text-xs italic text-[#846e5e]">
            There is a story inside creation.
          </p>
        </div>
      </motion.div>

      <motion.a
        href="#projects"
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.75,
        }}
        whileHover={{
          x: 5,
        }}
        className="group mt-12 inline-flex items-center gap-4"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b86c4d]/40 transition-all duration-500 group-hover:bg-[#8e4938]">
          <ArrowUpRight
            size={15}
            strokeWidth={1.2}
            className="text-[#b86c4d] group-hover:text-[#ead8c2]"
          />
        </span>

        <span>
          <span className="block font-mono text-[8px] uppercase tracking-[0.3em] text-[#c5a58b]/50">
            Discover
          </span>

          <span
            className="mt-1 block text-sm text-[#c88965]"
            style={{
              fontFamily:
                "'Noto Serif Bengali', serif",
            }}
          >
            আমার কাজ
          </span>
        </span>
      </motion.a>
    </div>
  );
};

/* ===============================================================
   CREATIVE DNA
================================================================ */

const CreativeDNA = ({
  active,
  setActive,
  onMouseLeave,
}) => {
  return (
    <div
      className="max-w-[620px]"
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.35em] text-[#b86c4d]/60">
          Creative DNA
        </span>

        <h3
          className="mt-4 text-4xl font-normal tracking-[-0.03em] text-[#ead8c2] md:text-5xl"
          style={{
            fontFamily:
              "'Playfair Display', Georgia, serif",
          }}
        >
          More than just code.
        </h3>

        <p
          className="mt-4 text-lg text-[#b86c4d]/60"
          style={{
            fontFamily:
              "'Noto Serif Bengali', serif",
          }}
        >
          সৃষ্টি · ছবি · সুর
        </p>
      </motion.div>

      {/* ========================================================
          DISCIPLINES
      ======================================================== */}

      <div className="mt-12 border-y border-[#b86c4d]/15">
        {disciplines.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === index;

          return (
            <button
              key={item.id}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={`group flex w-full items-center justify-between border-b border-[#b86c4d]/10 px-2 py-7 text-left transition-all duration-500 last:border-0 ${
                isActive
                  ? "bg-[#8e4938]/10"
                  : "hover:bg-[#8e4938]/5"
              }`}
            >
              <div className="flex items-center gap-5">
                <span className="font-mono text-[8px] text-[#b86c4d]/40">
                  {item.id}
                </span>

                <div>
                  <p
                    className={`text-xl transition-colors duration-500 ${
                      isActive
                        ? "text-[#d79a76]"
                        : "text-[#cbb49e]"
                    }`}
                    style={{
                      fontFamily:
                        "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {item.english}
                  </p>

                  <p
                    className="mt-1 text-xs text-[#a7654d]/70"
                    style={{
                      fontFamily:
                        "'Noto Serif Bengali', serif",
                    }}
                  >
                    {item.bengali}
                  </p>
                </div>
              </div>

              <Icon
                size={16}
                strokeWidth={1}
                className={`transition-all duration-500 ${
                  isActive
                    ? "rotate-[-8deg] text-[#c17b55]"
                    : "text-[#c17b55]/25"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* ========================================================
          ACTIVE DESCRIPTION
      ======================================================== */}

      <motion.div
        key={active}
        initial={{
          opacity: 0,
          y: 20,
          filter: "blur(5px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.6,
        }}
        className="mt-10"
      >
        <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#b86c4d]/40">
          Discipline / {disciplines[active].id}
        </span>

        <p
          className="mt-6 text-5xl text-[#b86c4d]/10"
          style={{
            fontFamily:
              "'Noto Serif Bengali', serif",
          }}
        >
          {disciplines[active].bengali}
        </p>

        <p className="mt-2 max-w-lg text-sm leading-[1.9] text-[#927a68]">
          {disciplines[active].description}
        </p>
      </motion.div>
    </div>
  );
};

/* ===============================================================
   FINAL STATEMENT
================================================================ */

const FinalStatement = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mx-auto w-full max-w-[900px] px-6 text-center"
    >
      {/* Ornament */}

      <div className="mb-8 flex items-center justify-center gap-4">
        <span className="h-px w-16 bg-[#b86c4d]/20" />

        <span className="h-2 w-2 rotate-45 border border-[#c17b55]/50" />

        <span className="h-px w-16 bg-[#b86c4d]/20" />
      </div>

      {/* Bengali statement */}

      <p
        className="text-3xl leading-[1.5] text-[#c37e5d] sm:text-4xl md:text-5xl lg:text-6xl"
        style={{
          fontFamily:
            "'Noto Serif Bengali', serif",
        }}
      >
        যেখানে সংস্কৃতি
        <br />
        মেশে প্রযুক্তির সাথে।
      </p>

      {/* English */}

      <p
        className="mt-5 text-lg italic text-[#80695B]"
        style={{
          fontFamily:
            "'Playfair Display', Georgia, serif",
        }}
      >
        Where culture meets technology.
      </p>

      {/* Bottom ornament */}

      <div className="mt-9 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-[#b86c4d]/15" />

        <span
          className="text-xs text-[#b86c4d]/50"
          style={{
            fontFamily:
              "'Noto Serif Bengali', serif",
          }}
        >
          কলকাতা
        </span>

        <span className="h-px w-8 bg-[#b86c4d]/15" />
      </div>
    </motion.div>
  );
};

/* ===============================================================
   MOBILE PORTRAIT
================================================================ */

const MobilePortrait = ({ src, alt }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.985,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative mx-auto w-full max-w-[390px]"
    >
      {/* Glow */}

      <div className="absolute inset-[15%] rounded-full bg-[#9b523d]/10 blur-[80px]" />

      {/* Frame */}

      <div className="absolute -inset-4 border border-[#c17b55]/15" />

      <img
        src={src}
        alt={alt}
        className="relative z-10 h-auto w-full object-contain grayscale-[8%]"
      />

      {/* Corners */}

      <div className="absolute -left-4 -top-4 z-20 h-10 w-10 border-l border-t border-[#c88965]/40" />

      <div className="absolute -bottom-4 -right-4 z-20 h-10 w-10 border-b border-r border-[#c88965]/40" />
    </motion.div>
  );
};

export default About;
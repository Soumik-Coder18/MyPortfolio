import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Database,
  Languages,
  Users,
  Sparkles,
  MousePointer2,
} from "lucide-react";

/* ============================================================
   BACKGROUND VIDEO
============================================================ */

const VIDEO_BG =
  "https://www.pexels.com/download/video/29441003/";

/* ============================================================
   SKILLS DATA
============================================================ */

const sections = [
  {
    id: "01",
    title: "Frontend & UI Tools",
    subtitle: "Where interfaces become experiences.",
    icon: Code2,
    skills: [
      { name: "Vite + React", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Three.js", level: 70 },
      { name: "Framer Motion", level: 85 },
      { name: "HTML", level: 89 },
      { name: "CSS", level: 91 },
      { name: "JavaScript", level: 80 },
      { name: "Figma", level: 78 },
      { name: "Canva", level: 90 },
    ],
  },

  {
    id: "02",
    title: "Backend & Dev Tools",
    subtitle: "The architecture beneath the surface.",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 90 },
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },

  {
    id: "03",
    title: "Programming Languages",
    subtitle: "Languages I use to make ideas executable.",
    icon: Code2,
    skills: [
      { name: "C++", level: 88 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "C", level: 90 },
    ],
  },

  {
    id: "04",
    title: "Soft Skills",
    subtitle: "The human layer behind the work.",
    icon: Users,
    skills: [
      { name: "Teamwork", level: 90 },
      { name: "Clear Communication", level: 88 },
      { name: "Project Planning", level: 90 },
      { name: "Writing Docs", level: 92 },
      { name: "Feedback Listening", level: 87 },
      { name: "Public Speaking", level: 80 },
    ],
  },

  {
    id: "05",
    title: "Languages",
    subtitle: "Languages that shape how I communicate.",
    icon: Languages,
    skills: [
      { name: "Bengali", level: 100 },
      { name: "English", level: 90 },
      { name: "Hindi", level: 85 },
    ],
  },
];

/* ============================================================
   MAIN SKILLS
============================================================ */

export default function Skills() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeSkill, setActiveSkill] = useState(0);

  const chapter = sections[activeChapter];

  const selected = chapter.skills[activeSkill];

  /* ----------------------------------------------------------
     Automatic focus interval
  ---------------------------------------------------------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((current) => {
        return (current + 1) % chapter.skills.length;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [activeChapter, chapter.skills.length]);

  /* ----------------------------------------------------------
     Chapter navigation
  ---------------------------------------------------------- */

  const changeChapter = (index) => {
    setActiveChapter(index);
    setActiveSkill(0);
  };

  const nextChapter = () => {
    setActiveChapter((current) => {
      return (current + 1) % sections.length;
    });

    setActiveSkill(0);
  };

  const previousChapter = () => {
    setActiveChapter((current) => {
      return (
        (current - 1 + sections.length) %
        sections.length
      );
    });

    setActiveSkill(0);
  };

  /* ----------------------------------------------------------
     Keyboard support
  ---------------------------------------------------------- */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextChapter();
      }

      if (event.key === "ArrowLeft") {
        previousChapter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      id="skills"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-[#030100]
        text-[#f1dcc4]
      "
    >
      {/* ======================================================
          VIDEO BACKGROUND
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-50 overflow-hidden">
        <video
          src={VIDEO_BG}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* ======================================================
          VIDEO COLOR GRADE
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-40
          bg-[#120704]/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-40
          bg-[radial-gradient(
            ellipse_at_center,
            rgba(125,51,29,.16),
            rgba(25,7,3,.20)_45%,
            rgba(2,0,0,.66)_100%
          )]
        "
      />

      {/* ======================================================
          AMBER ATMOSPHERIC LIGHT
      ======================================================= */}

      <motion.div
        animate={{
          x: [0, 90, -20, 0],
          y: [0, -35, 20, 0],
          opacity: [0.12, 0.24, 0.13, 0.12],
          scale: [1, 1.08, 0.98, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-52
          top-[12%]
          -z-30
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#9b4025]
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, -70, 20, 0],
          y: [0, 40, -20, 0],
          opacity: [0.09, 0.18, 0.10, 0.09],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-[2%]
          -z-30
          h-[580px]
          w-[580px]
          rounded-full
          bg-[#74301e]
          blur-[150px]
        "
      />

      {/* ======================================================
          CENTER AMBER LIGHT
      ======================================================= */}

      <motion.div
        animate={{
          opacity: [0.05, 0.13, 0.05],
          scale: [0.85, 1.12, 0.85],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[56%]
          -z-30
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c0643d]
          blur-[130px]
        "
      />

      {/* ======================================================
          CINEMATIC VIGNETTE
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_24%,
            rgba(3,1,0,.28)_57%,
            rgba(0,0,0,.84)_100%
          )]
        "
      />

      {/* Bottom darkness */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          -z-20
          h-[28%]
          bg-gradient-to-t
          from-[#020100]
          via-[#050201]/65
          to-transparent
        "
      />

      {/* ======================================================
          FILM GRAIN
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.025]
          mix-blend-screen
          [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22 viewBox=%220 0 180 180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.7%22/%3E%3C/svg%3E')]
        "
      />

      {/* ======================================================
          OUTER FRAME
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          z-50
          border
          border-[#a45a3e]/35
          sm:inset-6
          lg:inset-8
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-8
          z-50
          hidden
          border
          border-[#c17b59]/[0.07]
          sm:block
          lg:inset-12
        "
      />

      {/* Corner details */}

      <FrameCorner className="left-0 top-0 border-l border-t" />

      <FrameCorner className="right-0 top-0 border-r border-t" />

      <FrameCorner className="bottom-0 left-0 border-b border-l" />

      <FrameCorner className="bottom-0 right-0 border-b border-r" />

      {/* ======================================================
          MAIN CONTENT
      ======================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          min-h-screen
          max-w-[1800px]
          px-6
          pb-8
          pt-24
          sm:px-10
          lg:px-16
          lg:pt-28
        "
      >
        {/* ====================================================
            TOP BRAND
        ===================================================== */}

        <div className="flex items-start justify-between">
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex items-center gap-4"
          >
            {/* Symbol */}

            <div
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#a85d40]/60
                bg-[#090302]/65
                shadow-[0_0_35px_rgba(172,78,45,.2)]
                backdrop-blur-md
              "
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-2
                  rotate-45
                  border
                  border-[#c17351]/55
                "
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[6px]
                  rounded-full
                  border
                  border-dashed
                  border-[#9d543b]/40
                "
              />

              <Sparkles
                size={15}
                strokeWidth={1}
                className="text-[#d58a65]"
              />
            </div>

            <div>
              <p
                className="
                  text-[8px]
                  tracking-[0.48em]
                  text-[#9d624b]
                "
              >
                03 / DISCIPLINE
              </p>

              <h2
                className="
                  mt-1
                  font-serif
                  text-2xl
                  tracking-[-0.03em]
                  text-[#f0dac3]
                "
              >
                Skills & Expertise
              </h2>
            </div>
          </motion.div>

          {/* Right identity */}

          <div className="hidden items-start gap-6 sm:flex">
            <div className="text-right">
              <p
                className="
                  text-[7px]
                  tracking-[0.42em]
                  text-[#805343]
                "
              >
                DISCIPLINE
              </p>

              <p
                className="
                  mt-2
                  max-w-[110px]
                  font-serif
                  text-sm
                  leading-5
                  text-[#bc8368]
                "
              >
                creates
                <br />
                reality.
              </p>
            </div>

            <div className="h-10 w-px bg-[#70402f]/60" />

            <p
              className="
                font-serif
                text-base
                italic
                text-[#9f664e]
              "
            >
              দক্ষতা
            </p>
          </div>
        </div>

        {/* ====================================================
            CHAPTER NAVIGATION
        ===================================================== */}

        <div
          className="
            relative
            mt-6
            border-y
            border-[#713d2b]/45
            bg-[#050201]/55
            backdrop-blur-md
          "
        >
          <div className="flex overflow-x-auto scrollbar-none">
            {sections.map((item, index) => {
              const Icon = item.icon;

              const active =
                activeChapter === index;

              return (
                <button
                  key={item.id}
                  onClick={() => changeChapter(index)}
                  className={`
                    relative
                    flex
                    min-w-max
                    flex-1
                    items-center
                    justify-center
                    gap-3
                    border-r
                    border-[#6e3d2c]/35
                    px-5
                    py-4
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-[#32130b]/45 text-[#efd0b1]"
                        : "text-[#765044] hover:bg-[#1b0805]/40 hover:text-[#bd927b]"
                    }
                  `}
                >
                  <Icon
                    size={15}
                    strokeWidth={1}
                    className={
                      active
                        ? "text-[#d27f5b]"
                        : "text-[#6c493e]"
                    }
                  />

                  <span
                    className="
                      text-[8px]
                      tracking-[0.25em]
                    "
                  >
                    {item.id}
                  </span>

                  <span
                    className="
                      hidden
                      text-[11px]
                      tracking-[0.04em]
                      md:block
                    "
                  >
                    {item.title}
                  </span>

                  {active && (
                    <motion.span
                      layoutId="chapterLine"
                      className="
                        absolute
                        bottom-0
                        left-5
                        right-5
                        h-[2px]
                        bg-[#c47552]
                        shadow-[0_0_12px_rgba(196,117,82,.9)]
                      "
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            CONTENT STAGE
        ===================================================== */}

        <div
          className="
            relative
            mt-0
            overflow-hidden
            border-x
            border-[#8a4d36]/30
            bg-[#070201]/30
          "
        >
          {/* Decorative horizontal line */}

          <div
            className="
              pointer-events-none
              absolute
              left-[3%]
              right-[3%]
              top-[14px]
              h-px
              bg-[#a55c42]/20
            "
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={chapter.id}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* =================================================
                  HEADING
              ================================================== */}

              <div
                className="
                  relative
                  z-20
                  flex
                  flex-col
                  gap-5
                  px-7
                  pb-2
                  pt-9
                  sm:px-12
                  lg:flex-row
                  lg:items-end
                  lg:justify-between
                  lg:px-16
                  lg:pt-11
                "
              >
                <div>
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        h-px
                        w-10
                        bg-[#c16f4e]
                        shadow-[0_0_7px_rgba(193,111,78,.5)]
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        tracking-[0.45em]
                        text-[#a36850]
                      "
                    >
                      {chapter.id} / CATEGORY
                    </span>
                  </div>

                  <h3
                    className="
                      mt-3
                      font-serif
                      text-[clamp(2.2rem,4.6vw,4.7rem)]
                      font-medium
                      leading-[0.9]
                      tracking-[-0.055em]
                      text-[#f0dac2]
                    "
                  >
                    {chapter.title}
                  </h3>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-[7px]
                        tracking-[0.45em]
                        text-[#765044]
                      "
                    >
                      TURN IDEAS INTO EXPERIENCES
                    </span>

                    <span className="h-px w-16 bg-[#76412f]/50" />

                    <Sparkles
                      size={10}
                      strokeWidth={1}
                      className="text-[#c37655]"
                    />
                  </div>
                </div>

                <div className="lg:pb-1">
                  <p
                    className="
                      max-w-[330px]
                      font-serif
                      text-sm
                      italic
                      leading-6
                      text-[#9a705f]
                      lg:text-right
                    "
                  >
                    “{chapter.subtitle}”
                  </p>

                  <p
                    className="
                      mt-3
                      text-right
                      text-[7px]
                      tracking-[0.35em]
                      text-[#67463b]
                    "
                  >
                    CRAFT · DESIGN · MOTION
                  </p>
                </div>
              </div>

              {/* =================================================
                  DESKTOP SKILL FIELD
              ================================================== */}

              <div
                className="
                  relative
                  hidden
                  h-[620px]
                  md:block
                "
              >
                {/* Central core */}

                <MysticCore
                  chapter={chapter}
                  selected={selected}
                />

                {/* All skill nodes */}

                <SkillConstellation
                  skills={chapter.skills}
                  activeSkill={activeSkill}
                  onSelect={setActiveSkill}
                />

                {/* Side text */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-7
                    top-1/2
                    hidden
                    -translate-y-1/2
                    flex-col
                    gap-4
                    lg:flex
                  "
                >
                  <VerticalText>
                    CODE · CREATE · EVOLVE
                  </VerticalText>
                </div>

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-7
                    top-1/2
                    hidden
                    -translate-y-1/2
                    flex-col
                    gap-4
                    lg:flex
                  "
                >
                  <VerticalText>
                    GOOD UX IS KIND OF MAGIC
                  </VerticalText>
                </div>

                {/* Bottom hint */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-1/2
                    -translate-x-1/2
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      border
                      border-[#74402e]/45
                      bg-[#080302]/70
                      px-5
                      py-2.5
                      backdrop-blur-md
                    "
                  >
                    <motion.span
                      animate={{
                        y: [0, 3, 0],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="text-[#c47754]"
                    >
                      ↓
                    </motion.span>

                    <span
                      className="
                        text-[7px]
                        tracking-[0.38em]
                        text-[#785043]
                      "
                    >
                      CLICK TO EXPLORE · AUTO FOCUS
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  MOBILE
              ================================================== */}

              <div className="px-5 pb-6 pt-5 md:hidden">
                <div className="grid gap-2">
                  {chapter.skills.map(
                    (skill, index) => {
                      const active =
                        activeSkill === index;

                      return (
                        <motion.button
                          key={skill.name}
                          whileTap={{
                            scale: 0.985,
                          }}
                          onClick={() =>
                            setActiveSkill(index)
                          }
                          className={`
                            relative
                            overflow-hidden
                            border
                            p-4
                            text-left
                            ${
                              active
                                ? "border-[#b96a4b]/70 bg-[#3a160c]/55"
                                : "border-[#6c3d2c]/35 bg-[#080302]/70"
                            }
                          `}
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-4
                            "
                          >
                            <div
                              className="
                                flex
                                min-w-0
                                items-center
                                gap-3
                              "
                            >
                              <span
                                className={`
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  text-[8px]
                                  ${
                                    active
                                      ? "border-[#c27653] text-[#d78a67]"
                                      : "border-[#70402f]/50 text-[#775145]"
                                  }
                                `}
                              >
                                {String(
                                  index + 1
                                ).padStart(2, "0")}
                              </span>

                              <span
                                className={`
                                  truncate
                                  font-serif
                                  text-base
                                  ${
                                    active
                                      ? "text-[#f1d2b5]"
                                      : "text-[#b9947e]"
                                  }
                                `}
                              >
                                {skill.name}
                              </span>
                            </div>

                            <span
                              className="
                                shrink-0
                                text-[9px]
                                tracking-[0.25em]
                                text-[#c07453]
                              "
                            >
                              {skill.level}%
                            </span>
                          </div>

                          <div
                            className="
                              mt-3
                              h-[2px]
                              overflow-hidden
                              bg-[#29150e]
                            "
                          >
                            <motion.div
                              animate={{
                                width: `${skill.level}%`,
                              }}
                              transition={{
                                duration: 0.8,
                              }}
                              className="
                                h-full
                                bg-[#ad6347]
                                shadow-[0_0_8px_rgba(173,99,71,.65)]
                              "
                            />
                          </div>
                        </motion.button>
                      );
                    }
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ====================================================
              BOTTOM CONTROL BAR
          ===================================================== */}

          <div
            className="
              relative
              z-50
              flex
              items-center
              justify-between
              gap-5
              border-t
              border-[#713f2d]/45
              bg-[#040201]/80
              px-6
              py-4
              backdrop-blur-lg
              sm:px-10
              lg:px-14
            "
          >
            {/* Current focus */}

            <div className="flex min-w-0 items-center gap-4">
              <div
                className="
                  relative
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ae6247]/60
                "
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-1
                    rounded-full
                    border
                    border-dashed
                    border-[#9e573f]/45
                  "
                />

                <MousePointer2
                  size={13}
                  strokeWidth={1}
                  className="text-[#cf7d5b]"
                />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    text-[6px]
                    tracking-[0.4em]
                    text-[#68483d]
                  "
                >
                  CURRENT FOCUS
                </p>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={selected.name}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 10,
                    }}
                    className="
                      mt-1
                      truncate
                      font-serif
                      text-lg
                      text-[#efd0b2]
                      sm:text-xl
                    "
                  >
                    {selected.name}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Proficiency */}

            <div className="hidden items-center gap-5 sm:flex">
              <div className="h-7 w-px bg-[#6d3b2b]/50" />

              <div>
                <p
                  className="
                    text-[6px]
                    tracking-[0.35em]
                    text-[#66463b]
                  "
                >
                  MASTERY
                </p>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={selected.level}
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      mt-0.5
                      font-serif
                      text-lg
                      text-[#c87856]
                    "
                  >
                    {selected.level}%
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}

            <div className="flex shrink-0 gap-2">
              <button
                onClick={previousChapter}
                aria-label="Previous skills category"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-[#70402f]/50
                  bg-[#0b0402]/50
                  text-[#9d624c]
                  transition-all
                  hover:border-[#b96b4b]
                  hover:bg-[#35150d]
                  hover:text-[#e2b99d]
                "
              >
                <ArrowLeft
                  size={15}
                  strokeWidth={1}
                />
              </button>

              <button
                onClick={nextChapter}
                aria-label="Next skills category"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-[#70402f]/50
                  bg-[#0b0402]/50
                  text-[#9d624c]
                  transition-all
                  hover:border-[#b96b4b]
                  hover:bg-[#35150d]
                  hover:text-[#e2b99d]
                "
              >
                <ArrowRight
                  size={15}
                  strokeWidth={1}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ====================================================
            FOOTER LINE
        ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            pt-5
          "
        >
          <p
            className="
              font-serif
              text-sm
              italic
              text-[#9b604b]
            "
          >
            শিখি · তৈরি করি · এগিয়ে যাই
          </p>

          <div
            className="
              hidden
              items-center
              gap-3
              sm:flex
            "
          >
            <span
              className="
                text-[7px]
                tracking-[0.35em]
                text-[#64443a]
              "
            >
              {chapter.id} / 05
            </span>

            <span className="h-px w-12 bg-[#6d3d2d]" />

            <span
              className="
                text-[7px]
                tracking-[0.35em]
                text-[#64443a]
              "
            >
              SOUMIK BAG
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SKILL CONSTELLATION
============================================================ */

function SkillConstellation({
  skills,
  activeSkill,
  onSelect,
}) {
  /*
   * Deliberately custom positions rather than a mathematically
   * perfect circle. This gives the section the same editorial
   * composition as the reference.
   */

  const positions = useMemo(() => {
    const count = skills.length;

    if (count === 9) {
      return [
        {
          left: "50%",
          top: "11%",
        },
        {
          left: "79%",
          top: "27%",
        },
        {
          left: "84%",
          top: "51%",
        },
        {
          left: "78%",
          top: "76%",
        },
        {
          left: "63%",
          top: "91%",
        },
        {
          left: "37%",
          top: "91%",
        },
        {
          left: "22%",
          top: "76%",
        },
        {
          left: "16%",
          top: "51%",
        },
        {
          left: "21%",
          top: "27%",
        },
      ];
    }

    if (count === 6) {
      return [
        {
          left: "50%",
          top: "12%",
        },
        {
          left: "80%",
          top: "30%",
        },
        {
          left: "80%",
          top: "72%",
        },
        {
          left: "50%",
          top: "89%",
        },
        {
          left: "20%",
          top: "72%",
        },
        {
          left: "20%",
          top: "30%",
        },
      ];
    }

    if (count === 4) {
      return [
        {
          left: "50%",
          top: "15%",
        },
        {
          left: "82%",
          top: "50%",
        },
        {
          left: "50%",
          top: "85%",
        },
        {
          left: "18%",
          top: "50%",
        },
      ];
    }

    return skills.map((_, index) => {
      const angle =
        (index / count) * Math.PI * 2 -
        Math.PI / 2;

      return {
        left: `${50 + Math.cos(angle) * 35}%`,
        top: `${50 + Math.sin(angle) * 35}%`,
      };
    });
  }, [skills]);

  return (
    <>
      {skills.map((skill, index) => {
        const active =
          activeSkill === index;

        const position = positions[index];

        return (
          <motion.button
            key={skill.name}
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: active ? 1 : 0.92,
              scale: active ? 1.04 : 1,
              left: position.left,
              top: position.top,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.06,
            }}
            onClick={() => onSelect(index)}
            className="
              group
              absolute
              z-30
              flex
              w-[235px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              gap-3
              text-left
              outline-none
              lg:w-[255px]
            "
          >
            {/* ==================================================
                CONNECTING LINE
            =================================================== */}

            <div
              className={`
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-px
                w-[150px]
                -translate-y-1/2
                bg-gradient-to-r
                from-[#a85a40]/0
                via-[#b86748]/45
                to-[#a85a40]/0
                transition-opacity
                duration-500
                ${
                  active
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            />

            {/* ==================================================
                ICON ORB
            =================================================== */}

            <motion.div
              animate={{
                boxShadow: active
                  ? [
                      "0 0 10px rgba(189,103,69,.18)",
                      "0 0 35px rgba(189,103,69,.45)",
                      "0 0 10px rgba(189,103,69,.18)",
                    ]
                  : "0 0 0 rgba(0,0,0,0)",
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`
                relative
                flex
                h-[62px]
                w-[62px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                backdrop-blur-md
                transition-all
                duration-300
                ${
                  active
                    ? "border-[#ca7c58]/85 bg-[#38150c]/85"
                    : "border-[#87503a]/55 bg-[#0b0402]/75 group-hover:border-[#b86b4c]/80"
                }
              `}
            >
              <div
                className="
                  absolute
                  inset-2
                  rounded-full
                  border
                  border-dashed
                  border-[#8d4b35]/45
                "
              />

              <div
                className={`
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  font-serif
                  text-sm
                  ${
                    active
                      ? "border-[#cf815d] bg-[#542012] text-[#f0c7a7]"
                      : "border-[#70402f]/50 text-[#a66b54]"
                  }
                `}
              >
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </div>
            </motion.div>

            {/* ==================================================
                INFORMATION
            =================================================== */}

            <div
              className="
                relative
                min-w-0
                flex-1
              "
            >
              <div
                className={`
                  relative
                  overflow-hidden
                  border
                  px-4
                  py-3
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-[#b96b4c]/75 bg-[#160704]/85 shadow-[0_0_30px_rgba(127,48,27,.22)]"
                      : "border-[#70402f]/40 bg-[#080302]/75 group-hover:border-[#a25b42]/65 group-hover:bg-[#120503]/85"
                  }
                `}
              >
                {/* Top glow */}

                {active && (
                  <motion.div
                    animate={{
                      x: [
                        "-100%",
                        "200%",
                      ],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      left-0
                      top-0
                      h-px
                      w-1/2
                      bg-[#e2a47f]
                      shadow-[0_0_10px_rgba(226,164,127,.8)]
                    "
                  />
                )}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <span
                    className={`
                      truncate
                      font-serif
                      text-[16px]
                      tracking-[-0.02em]
                      ${
                        active
                          ? "text-[#f5d7bb]"
                          : "text-[#d0af9b] group-hover:text-[#efd1b5]"
                      }
                    `}
                  >
                    {skill.name}
                  </span>

                  <span
                    className={`
                      shrink-0
                      rounded-full
                      px-2.5
                      py-1
                      text-[8px]
                      tracking-[0.2em]
                      ${
                        active
                          ? "bg-[#d1855f] text-[#210a04]"
                          : "bg-[#32140c] text-[#a96c53]"
                      }
                    `}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[6px]
                      tracking-[0.3em]
                      text-[#704b3e]
                    "
                  >
                    {active
                      ? "EXPLORE"
                      : "SKILL"}
                  </span>

                  <span
                    className={`
                      text-[7px]
                      tracking-[0.2em]
                      transition-colors
                      ${
                        active
                          ? "text-[#c87857]"
                          : "text-[#63453a]"
                      }
                    `}
                  >
                    →
                  </span>
                </div>

                {/* Progress */}

                <div
                  className="
                    mt-2
                    h-[1px]
                    overflow-hidden
                    bg-[#351b13]
                  "
                >
                  <motion.div
                    animate={{
                      width: `${skill.level}%`,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="
                      h-full
                      bg-[#a75d43]
                    "
                  />
                </div>
              </div>
            </div>
          </motion.button>
        );
      })}
    </>
  );
}

/* ============================================================
   CENTRAL MYSTIC CORE
============================================================ */

function MysticCore({
  chapter,
  selected,
}) {
  return (
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-[52%]
        z-10
        h-[450px]
        w-[450px]
        -translate-x-1/2
        -translate-y-1/2
        lg:h-[500px]
        lg:w-[500px]
      "
    >
      {/* ======================================================
          CENTER AURA
      ======================================================= */}

      <motion.div
        animate={{
          opacity: [
            0.12,
            0.28,
            0.12,
          ],
          scale: [
            0.88,
            1.08,
            0.88,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-[20%]
          rounded-full
          bg-[#b05232]/40
          blur-[75px]
        "
      />

      {/* ======================================================
          OUTER RING
      ======================================================= */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          rounded-full
          border
          border-[#a85c42]/35
        "
      />

      {/* Outer dotted */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-[7%]
          rounded-full
          border
          border-dashed
          border-[#c27452]/40
        "
      />

      {/* Middle */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-[16%]
          rounded-full
          border
          border-[#a96045]/45
        "
      />

      {/* ======================================================
          ROTATING DIAMOND
      ======================================================= */}

      <motion.div
        animate={{
          rotate: [45, 405],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[72%]
          w-[72%]
          -translate-x-1/2
          -translate-y-1/2
          border
          border-[#a75b41]/25
        "
      />

      {/* ======================================================
          SECOND DIAMOND
      ======================================================= */}

      <motion.div
        animate={{
          rotate: [-45, -405],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[55%]
          w-[55%]
          -translate-x-1/2
          -translate-y-1/2
          rotate-45
          border
          border-[#c07150]/20
        "
      />

      {/* ======================================================
          CROSS
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-[3%]
          h-[94%]
          w-px
          -translate-x-1/2
          bg-[#a55b41]/22
        "
      />

      <div
        className="
          absolute
          left-[3%]
          top-1/2
          h-px
          w-[94%]
          -translate-y-1/2
          bg-[#a55b41]/22
        "
      />

      {/* ======================================================
          ORBITING POINTS
      ======================================================= */}

      {[
        "left-1/2 top-[7%]",
        "right-[7%] top-1/2",
        "left-1/2 bottom-[7%]",
        "left-[7%] top-1/2",
      ].map((position, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [
              0.35,
              1,
              0.35,
            ],
            scale: [
              0.8,
              1.25,
              0.8,
            ],
          }}
          transition={{
            duration:
              2.1 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`
            absolute
            h-3
            w-3
            -translate-x-1/2
            -translate-y-1/2
            rotate-45
            border
            border-[#d38a67]
            bg-[#6f2c1b]
            shadow-[0_0_12px_rgba(207,124,88,.8)]
            ${position}
          `}
        />
      ))}

      {/* ======================================================
          INNER GLOW
      ======================================================= */}

      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(189,87,51,.2)",
            "0 0 65px rgba(189,87,51,.55)",
            "0 0 20px rgba(189,87,51,.2)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[190px]
          w-[190px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#c47a59]/70
          bg-[#080302]/95
        "
      />

      {/* ======================================================
          INNER RING
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[175px]
          w-[175px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
          border-[#a65a40]/45
        "
      />

      {/* ======================================================
          CENTER
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-[148px]
          w-[148px]
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-[#d28a65]/65
          bg-[#070201]/95
          shadow-[inset_0_0_35px_rgba(127,51,30,.35)]
        "
      >
        <span
          className="
            text-[7px]
            tracking-[0.45em]
            text-[#795043]
          "
        >
          {chapter.id}
        </span>

        <AnimatePresence mode="wait">
          <motion.p
            key={selected.name}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            className="
              mt-2
              max-w-[115px]
              truncate
              text-center
              font-serif
              text-[20px]
              tracking-[-0.02em]
              text-[#f4d5b7]
              [text-shadow:0_0_18px_rgba(214,137,99,.65)]
            "
          >
            {selected.name}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={selected.level}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              mt-2
              font-serif
              text-[28px]
              text-[#d48761]
              [text-shadow:0_0_15px_rgba(211,126,88,.5)]
            "
          >
            {selected.level}%
          </motion.p>
        </AnimatePresence>

        <span
          className="
            mt-1
            text-[6px]
            tracking-[0.4em]
            text-[#795043]
          "
        >
          MASTERY
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   VERTICAL TEXT
============================================================ */

function VerticalText({ children }) {
  return (
    <div
      className="
        text-[7px]
        tracking-[0.42em]
        text-[#745043]
        [writing-mode:vertical-rl]
      "
    >
      {children}
    </div>
  );
}

/* ============================================================
   FRAME CORNER
============================================================ */

function FrameCorner({ className }) {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        z-50
        h-7
        w-7
        border-[#c07957]/65
        sm:h-10
        sm:w-10
        ${className}
      `}
    />
  );
}
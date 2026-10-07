import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ============================================================
   SECTION ASSETS
   ============================================================ */

import ProjectBg from "../assets/ProjectBg.png";
import ProjectSoumik from "../assets/ProjectSoumik.png";

/* ============================================================
   PROJECT DATA
   ============================================================ */

const projects = [
  {
    id: "01",
    title: "SnackyChef",
    category: "Recipe Platform",
    type: "FEATURED",
    description:
      "A recipe browsing platform where users can discover, filter, create, and learn from recipes with dynamically adjustable ingredients, nutrition information, and video guidance.",
    media:
      "https://www.pexels.com/download/video/39014224/",
    demo: "https://snacky-chef.vercel.app",
    github:
      "https://github.com/Soumik-Coder18/SnackyChef",
  },

  {
    id: "02",
    title: "AgroConnect",
    category: "Full Stack",
    type: "FEATURED",
    description:
      "A full-stack platform connecting farmers directly with consumers to ensure fair trade and fresh produce.",
    media:
      "https://www.pexels.com/download/video/34688386/",
    demo: "https://agro-connectt.vercel.app/",
    github:
      "https://github.com/SobhanBose/AgroConnect",
  },

  {
    id: "03",
    title: "WhisperFrame",
    category: "OTT Platform",
    type: "FEATURED",
    description:
      "A sleek OTT platform to explore, favorite, and interact with curated movies and shows.",
    media:
      "https://www.pexels.com/download/video/32154101/",
    demo: "https://whisperframeott.vercel.app/",
    github:
      "https://github.com/your-username/ott-platform",
  },

  {
    id: "04",
    title: "Calculator",
    category: "React",
    type: "BASIC",
    description:
      "A digital calculator with clean logic and design.",
    media:
      "https://www.pexels.com/download/video/9056550/",
    demo: "https://calculator-5pq.pages.dev/",
    github:
      "https://github.com/Soumik-Coder18/React-Small-Projects/tree/main/Calculator",
  },

  {
    id: "05",
    title: "Color Changer",
    category: "React",
    type: "BASIC",
    description:
      "An interactive color flipper that cycles through vibrant hues with one click.",
    media:
      "https://www.pexels.com/download/video/3191354/",
    demo: "https://bgcolorchanger.pages.dev/",
    github:
      "https://github.com/Soumik-Coder18/React-Small-Projects/tree/main/BgColorChanger",
  },

  {
    id: "06",
    title: "Currency Converter",
    category: "React",
    type: "BASIC",
    description:
      "Real-time currency conversion tool with UI.",
    media:
      "https://www.pexels.com/download/video/4112783/",
    demo: "https://currencyconverter-a5c.pages.dev/",
    github:
      "https://github.com/Soumik-Coder18/React-Small-Projects/tree/main/CurrencyConverter",
  },
];

/* ============================================================
   PROJECT MEDIA
   ============================================================ */

const ProjectMedia = ({ project }) => {
  return (
    <video
      key={project.media}
      src={project.media}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="
        h-full
        w-full
        object-cover
      "
    />
  );
};

/* ============================================================
   PROJECT CARD
   ============================================================ */

const ProjectCard = ({
  project,
  active,
  onClick,
}) => {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 28,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onClick}
      className={`
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-[8px]
        border
        transition-all
        duration-500
        ${
          active
            ? "border-[#c27a57]/75 bg-[#281006]/85 shadow-[0_18px_45px_rgba(0,0,0,.4)]"
            : "border-[#774532]/45 bg-[#170805]/70 hover:border-[#a86246]/70 hover:bg-[#210d07]/80"
        }
      `}
    >
      {/* ======================================================
          MEDIA
      ======================================================= */}

      <div
        className="
          relative
          aspect-[16/9]
          w-full
          overflow-hidden
          bg-[#0b0302]
        "
      >
        <ProjectMedia project={project} />

        {/* Media color grade */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[#1b0804]/20
          "
        />

        {/* Bottom cinematic fade */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[55%]
            bg-gradient-to-t
            from-[#120503]/85
            via-[#120503]/20
            to-transparent
          "
        />

        {/* Number */}

        <div
          className="
            absolute
            left-3
            top-3
            z-10
            flex
            items-center
            gap-2
          "
        >
          <span
            className="
              font-serif
              text-sm
              text-[#f1d5bd]
              drop-shadow-[0_2px_8px_rgba(0,0,0,.8)]
            "
          >
            {project.id}
          </span>

          <span
            className="
              h-px
              w-5
              bg-[#c07553]/70
            "
          />
        </div>

        {/* Play */}

        <span
          className="
            absolute
            right-3
            top-3
            z-10
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            border
            border-[#e3c4ad]/45
            bg-[#170704]/65
            text-[#ecd0b9]
            backdrop-blur-sm
            transition-all
            duration-300
            group-hover:border-[#d48b68]/75
            group-hover:bg-[#572316]/70
          "
        >
          <Play
            size={10}
            fill="currentColor"
            strokeWidth={1}
          />
        </span>

        {/* Media label */}

        <span
          className="
            absolute
            bottom-3
            left-3
            z-10
            text-[6px]
            tracking-[0.32em]
            text-[#d8b39a]
          "
        >
          PROJECT PREVIEW
        </span>
      </div>

      {/* ======================================================
          CONTENT
      ======================================================= */}

      <div className="p-3.5 sm:p-4">
        {/* Type */}

        <span
          className={`
            inline-flex
            rounded-full
            px-2.5
            py-1
            text-[6px]
            font-medium
            tracking-[0.2em]
            ${
              project.type === "FEATURED"
                ? "bg-[#8c3926] text-[#f3d9c3]"
                : "bg-[#76502f] text-[#f0d9bd]"
            }
          `}
        >
          {project.type}
        </span>

        {/* Title */}

        <h3
          className="
            mt-2.5
            truncate
            font-serif
            text-[18px]
            font-medium
            leading-tight
            tracking-[-0.035em]
            text-[#f0d4bc]
          "
        >
          {project.title}
        </h3>

        {/* Category */}

        <p
          className="
            mt-1
            text-[8px]
            tracking-[0.08em]
            text-[#a97158]
          "
        >
          {project.category}
        </p>

        {/* Description */}

        <p
          className="
            mt-2.5
            line-clamp-3
            min-h-[48px]
            text-[10px]
            leading-[1.5]
            text-[#bd9a84]
          "
        >
          {project.description}
        </p>

        {/* ==================================================
            ACTIONS
        =================================================== */}

        <div
          className="
            mt-3.5
            flex
            items-center
            gap-2
          "
        >
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                group/demo
                inline-flex
                items-center
                gap-1.5
                rounded-md
                bg-[#ead3b9]
                px-3
                py-1.5
                text-[7px]
                font-medium
                tracking-[0.12em]
                text-[#35170d]
                transition-all
                duration-300
                hover:bg-[#f5e2cf]
              "
            >
              LIVE DEMO

              <ArrowUpRight
                size={10}
                strokeWidth={1.2}
                className="
                  transition-transform
                  duration-300
                  group-hover/demo:-translate-y-0.5
                  group-hover/demo:translate-x-0.5
                "
              />
            </a>
          ) : (
            <span
              className="
                rounded-md
                border
                border-[#754331]/60
                px-3
                py-1.5
                text-[7px]
                tracking-[0.12em]
                text-[#765145]
              "
            >
              NO LIVE DEMO
            </span>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) =>
              event.stopPropagation()
            }
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-md
              border
              border-[#814b36]/65
              px-3
              py-1.5
              text-[7px]
              tracking-[0.12em]
              text-[#d0ab93]
              transition-all
              duration-300
              hover:border-[#bd7656]
              hover:bg-[#74331f]/25
              hover:text-[#efd3bd]
            "
          >
            <Github
              size={10}
              strokeWidth={1.2}
            />

            GITHUB
          </a>
        </div>
      </div>

      {/* Active line */}

      <motion.div
        animate={{
          width: active ? "100%" : "0%",
          opacity: active ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          bg-[#c47755]
          shadow-[0_0_10px_rgba(196,119,85,.65)]
        "
      />
    </motion.article>
  );
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

const Projects = () => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("ALL");
  const [direction, setDirection] = useState(1);

  const current = projects[active];

  /* ==========================================================
     FILTERED PROJECTS
     ========================================================== */

  const filteredProjects =
    filter === "ALL"
      ? projects
      : projects.filter(
          (project) =>
            project.type === filter
        );

  /* ==========================================================
     CHANGE PROJECT
     ========================================================== */

  const changeProject = (index) => {
    if (index === active) return;

    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  /* ==========================================================
     FILTER CHANGE
     ========================================================== */

  const changeFilter = (newFilter) => {
    setFilter(newFilter);

    const matches =
      newFilter === "ALL"
        ? projects
        : projects.filter(
            (project) =>
              project.type === newFilter
          );

    if (!matches.length) return;

    const currentExists =
      matches.some(
        (project) =>
          projects.indexOf(project) === active
      );

    if (!currentExists) {
      setDirection(1);
      setActive(
        projects.indexOf(matches[0])
      );
    }
  };

  /* ==========================================================
     NEXT
     ========================================================== */

  const nextProject = () => {
    setDirection(1);

    setActive((previous) => {
      const position =
        filteredProjects.findIndex(
          (project) =>
            projects.indexOf(project) ===
            previous
        );

      const nextPosition =
        (position + 1) %
        filteredProjects.length;

      return projects.indexOf(
        filteredProjects[nextPosition]
      );
    });
  };

  /* ==========================================================
     PREVIOUS
     ========================================================== */

  const previousProject = () => {
    setDirection(-1);

    setActive((previous) => {
      const position =
        filteredProjects.findIndex(
          (project) =>
            projects.indexOf(project) ===
            previous
        );

      const previousPosition =
        (position -
          1 +
          filteredProjects.length) %
        filteredProjects.length;

      return projects.indexOf(
        filteredProjects[previousPosition]
      );
    });
  };

  /* ==========================================================
     KEYBOARD
     ========================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextProject();
      }

      if (event.key === "ArrowLeft") {
        previousProject();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [active, filter]);

  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0d0503]
        text-[#f0dac7]
      "
    >
      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <div className="absolute inset-0">
        <motion.img
          initial={{
            scale: 1.06,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
          }}
          src={ProjectBg}
          alt=""
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Dark cinematic layer */}

        <div
          className="
            absolute
            inset-0
            bg-[#0e0402]/55
          "
        />

        {/* Left readability */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[68%]
            bg-gradient-to-r
            from-[#080302]/90
            via-[#100503]/70
            to-transparent
          "
        />

        {/* Portrait side darkness */}

        <div
          className="
            absolute
            inset-y-0
            right-0
            w-[45%]
            bg-gradient-to-l
            from-transparent
            via-[#0c0302]/10
            to-transparent
          "
        />

        {/* Warm central atmosphere */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(
              ellipse_at_38%_42%,
              rgba(158,74,43,.15),
              transparent_52%
            )]
          "
        />

        {/* Bottom */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[38%]
            bg-gradient-to-t
            from-[#050201]
            via-[#090302]/70
            to-transparent
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(
              ellipse_at_center,
              transparent_30%,
              rgba(3,1,0,.38)_70%,
              rgba(2,1,0,.82)_100%
            )]
          "
        />
      </div>

      {/* ======================================================
          OUTER FRAME
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          border
          border-[#a96045]/20
          sm:inset-7
          lg:inset-9
        "
      />

      {/* ======================================================
          CINEMATIC PORTRAIT
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 120,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.8,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-3%]
          right-[-14%]
          z-20
          hidden
          h-[86%]
          w-[56%]
          lg:block
          xl:right-[-10%]
          xl:w-[51%]
        "
      >
        {/* Ambient portrait light */}

        <motion.div
          animate={{
            opacity: [0.22, 0.34, 0.22],
            scale: [0.96, 1.05, 0.96],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[34%]
            top-[32%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#a14f32]/20
            blur-[125px]
          "
        />

        {/* Portrait */}

        <img
          src={ProjectSoumik}
          alt="Soumik Bag"
          className="
            absolute
            bottom-0
            left-1/2
            h-full
            w-full
            -translate-x-1/2
            object-contain
            object-bottom
            brightness-[1.04]
            saturate-[1.05]
          "
        />

        {/* Subtle edge atmosphere */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-l
            from-transparent
            via-transparent
            to-[#4b1c10]/10
          "
        />
      </motion.div>

      {/* ======================================================
          MAIN CONTENT
      ======================================================= */}

      <div
        className="
          relative
          z-30
          mx-auto
          min-h-screen
          max-w-[1550px]
          px-7
          pb-8
          pt-24
          sm:px-10
          lg:px-16
          lg:pt-28
          xl:px-20
        "
      >
        {/* ====================================================
            HEADER
        ===================================================== */}

        <header
          className="
            relative
            z-40
            max-w-[700px]
          "
        >
          {/* Section label */}

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
              duration: 0.7,
            }}
            className="
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-10
                bg-[#b86a4a]
              "
            />

            <span
              className="
                text-[8px]
                tracking-[0.45em]
                text-[#c18a72]
              "
            >
              AMAR — 04 / PROJECTS
            </span>
          </motion.div>

          {/* Heading */}

          <div className="mt-4 overflow-hidden">
            <motion.h2
              initial={{
                y: "110%",
              }}
              whileInView={{
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-serif
                text-[clamp(4rem,6.7vw,7rem)]
                font-medium
                leading-[0.8]
                tracking-[-0.075em]
                text-[#f1d5bc]
              "
            >
              Projects
            </motion.h2>
          </div>

          {/* Bengali subtitle */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="
              mt-3
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                font-serif
                text-lg
                italic
                text-[#b96d50]
                sm:text-xl
              "
            >
              ভাবনায় বাংলা, কাজে প্রযুক্তি
            </span>

            <span
              className="
                hidden
                h-px
                w-16
                bg-[#754130]
                sm:block
              "
            />
          </motion.div>

          <p
            className="
              mt-1
              text-[10px]
              text-[#8e6757]
            "
          >
            Ideas that create impact.
          </p>
        </header>

        {/* ====================================================
            FILTERS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.45,
          }}
          className="
            relative
            z-40
            mt-6
            flex
            items-center
            gap-2
          "
        >
          {["ALL", "FEATURED", "BASIC"].map(
            (item) => {
              const isActive =
                filter === item;

              return (
                <button
                  key={item}
                  onClick={() =>
                    changeFilter(item)
                  }
                  className={`
                    relative
                    rounded-full
                    border
                    px-4
                    py-1.5
                    text-[7px]
                    tracking-[0.18em]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "border-[#b76242] bg-[#8d3825] text-[#f5dcc7]"
                        : "border-[#774532]/50 bg-[#170805]/45 text-[#9b725f] hover:border-[#a55f43] hover:text-[#d4ad95]"
                    }
                  `}
                >
                  {item}
                </button>
              );
            }
          )}
        </motion.div>

        {/* ====================================================
            PROJECT GRID
        ===================================================== */}

        <div
          className="
            relative
            z-40
            mt-6
            w-full
            max-w-[900px]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-3.5
            "
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(
                (project) => {
                  const index =
                    projects.indexOf(project);

                  return (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      active={
                        active === index
                      }
                      onClick={() =>
                        changeProject(index)
                      }
                    />
                  );
                }
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ====================================================
            CURRENT PROJECT / NAVIGATION
        ===================================================== */}

        <div
          className="
            relative
            z-40
            mt-5
            flex
            w-full
            max-w-[900px]
            items-center
            justify-between
            border-t
            border-[#754331]/35
            pt-4
          "
        >
          {/* Current */}

          <div className="flex items-center gap-4">
            <motion.span
              key={current.id}
              initial={{
                opacity: 0,
                x: -8,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="
                font-serif
                text-xl
                text-[#bd7455]
              "
            >
              {current.id}
            </motion.span>

            <div>
              <p
                className="
                  text-[6px]
                  tracking-[0.35em]
                  text-[#765044]
                "
              >
                CURRENT PROJECT
              </p>

              <motion.p
                key={current.title}
                initial={{
                  opacity: 0,
                  y: 4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  mt-0.5
                  font-serif
                  text-xs
                  text-[#c4a087]
                "
              >
                {current.title}
              </motion.p>
            </div>
          </div>

          {/* Navigation */}

          <div className="flex items-center gap-1.5">
            <button
              onClick={previousProject}
              aria-label="Previous project"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#754331]/55
                text-[#9d6d58]
                transition-all
                duration-300
                hover:border-[#bd7152]
                hover:bg-[#74321f]/25
                hover:text-[#e0bda5]
              "
            >
              <ChevronLeft
                size={13}
                strokeWidth={1.1}
              />
            </button>

            <button
              onClick={nextProject}
              aria-label="Next project"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#754331]/55
                text-[#9d6d58]
                transition-all
                duration-300
                hover:border-[#bd7152]
                hover:bg-[#74321f]/25
                hover:text-[#e0bda5]
              "
            >
              <ChevronRight
                size={13}
                strokeWidth={1.1}
              />
            </button>
          </div>
        </div>

        {/* ====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div
          className="
            relative
            z-40
            mt-5
            flex
            w-full
            max-w-[900px]
            items-end
            justify-between
          "
        >
          <div>
            <p
              className="
                font-serif
                text-sm
                italic
                leading-6
                text-[#9f624b]
              "
            >
              স্বপ্ন দেখা।
              <br />
              তৈরি করা।
              <br />
              এগিয়ে যাওয়া...
            </p>
          </div>

          <div
            className="
              hidden
              text-right
              sm:block
            "
          >
            <p
              className="
                text-[7px]
                tracking-[0.3em]
                text-[#9f735e]
              "
            >
              BUILT WITH PASSION
            </p>

            <p
              className="
                mt-1
                text-[6px]
                tracking-[0.28em]
                text-[#62463b]
              "
            >
              FOR A BETTER TOMORROW
            </p>

            <span
              className="
                mt-2
                ml-auto
                block
                h-px
                w-20
                bg-[#70402f]
              "
            />
          </div>
        </div>
      </div>

      {/* ======================================================
          PORTRAIT LABEL
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        className="
          pointer-events-none
          absolute
          bottom-10
          right-7
          z-30
          hidden
          text-right
          lg:block
          xl:right-14
        "
      >
        <p
          className="
            text-[7px]
            tracking-[0.35em]
            text-[#b67c63]
          "
        >
          SOUMIK BAG
        </p>

        <p
          className="
            mt-1
            font-serif
            text-[10px]
            italic
            text-[#704c40]
          "
        >
          developer · creator
        </p>
      </motion.div>

      {/* ======================================================
          FILM GRAIN
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-50
          opacity-[0.022]
          mix-blend-screen
          [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22 viewBox=%220 0 180 180%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%22.8%22/%3E%3C/svg%3E')]
        "
      />
    </section>
  );
};

export default Projects;
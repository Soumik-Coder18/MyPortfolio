import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MapPin,
} from "lucide-react";

import EducationBg from "../assets/EducationBg.png";

/* ============================================================
   EDUCATION DATA
============================================================ */

const educationData = [
  {
    id: "01",
    year: "2012",
    bengaliYear: "ভিত্তি",
    title: "Primary School",
    bengaliTitle: "প্রথম অধ্যায়",
    institute: "Domjur Margaret School",
    location: "Domjur, West Bengal",
    result: "Foundation",
    status: "COMPLETED",
    description:
      "The beginning of my academic journey — where curiosity, discipline and the habit of learning started taking shape.",
    quote: "Every journey begins with a first step.",
  },

  {
    id: "02",
    year: "2020",
    bengaliYear: "আবিষ্কার",
    title: "Secondary",
    bengaliTitle: "নতুন দিগন্ত",
    institute: "Uttar Jhapordah Sri Siksha Niketan",
    location: "Jhapordah, West Bengal",
    result: "92%",
    status: "COMPLETED",
    description:
      "A formative stage that strengthened my fundamentals and taught me to approach problems with patience, consistency and curiosity.",
    quote: "ধৈর্য আর ধারাবাহিকতাই সাফল্যের আসল চাবিকাঠি।",
  },

  {
    id: "03",
    year: "2022",
    bengaliYear: "দিশা",
    title: "Higher Secondary",
    bengaliTitle: "একটি নতুন দিশা",
    institute: "Jhapordah Duke Institution",
    location: "Jhapordah, West Bengal",
    result: "91.6%",
    status: "COMPLETED",
    description:
      "A transition from foundational learning toward a more focused technical direction and a growing interest in technology.",
    quote:
      "Learning becomes meaningful when curiosity finds direction.",
  },

  {
    id: "04",
    year: "2026",
    bengaliYear: "নির্মাণ",
    title: "B.Tech IT",
    bengaliTitle: "বর্তমান অধ্যায়",
    institute: "Techno Main Saltlake",
    location: "Salt Lake, West Bengal",
    result: "7.88 CGPA",
    status: "COMPLETED",
    description:
      "The culmination of my academic journey — combining computer science, software development, problem solving and creative technology into practical experiences.",
    quote:
      "Learning is not preparation for life. Learning is life itself.",
  },
];

/* ============================================================
   SETTINGS
============================================================ */

const AUTO_PLAY_TIME = 6000;

const ease = [0.22, 1, 0.36, 1];

/* ============================================================
   EDUCATION
============================================================ */

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [direction, setDirection] = useState(1);

  const active = educationData[activeIndex];

  /* ----------------------------------------------------------
     CHANGE CHAPTER
  ---------------------------------------------------------- */

  const changeChapter = useCallback(
    (index, dir = 1) => {
      if (index === activeIndex) return;

      setDirection(dir);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  /* ----------------------------------------------------------
     NEXT CHAPTER
  ---------------------------------------------------------- */

  const nextChapter = useCallback(() => {
    const next =
      (activeIndex + 1) % educationData.length;

    changeChapter(next, 1);
  }, [activeIndex, changeChapter]);

  /* ----------------------------------------------------------
     PREVIOUS CHAPTER
  ---------------------------------------------------------- */

  const previousChapter = useCallback(() => {
    const previous =
      activeIndex === 0
        ? educationData.length - 1
        : activeIndex - 1;

    changeChapter(previous, -1);
  }, [activeIndex, changeChapter]);

  /* ----------------------------------------------------------
     AUTOMATIC CHAPTER CHANGE
  ---------------------------------------------------------- */

  useEffect(() => {
    const timer = setTimeout(() => {
      nextChapter();
    }, AUTO_PLAY_TIME);

    return () => clearTimeout(timer);
  }, [activeIndex, nextChapter]);

  return (
    <section
      id="education"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080302]
        text-[#f0ddcb]
      "
    >
      {/* ======================================================
          BACKGROUND IMAGE
      ======================================================= */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{
            scale: 1.03,
          }}
          animate={{
            scale: [1.03, 1.055, 1.03],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -inset-[3%]
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url(${EducationBg})`,
          }}
        />
      </div>

      {/* ======================================================
          WARM OVERLAY
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#160704]/25
        "
      />

      {/* ======================================================
          LEFT DARK GRADIENT
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-gradient-to-r
          from-black/80
          via-black/45
          to-black/10
        "
      />

      {/* ======================================================
          TOP / BOTTOM CINEMATIC GRADIENT
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-gradient-to-b
          from-black/75
          via-transparent
          to-black/80
        "
      />

      {/* ======================================================
          WARM LIGHT
      ======================================================= */}

      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          scale: [0.9, 1.08, 0.9],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[68%]
          top-[42%]
          z-[2]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#d36e3f]
          blur-[150px]
        "
      />

      {/* ======================================================
          VIGNETTE
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,.2)_60%,rgba(0,0,0,.75)_100%)]
        "
      />

      {/* ======================================================
          DECORATIVE FRAME
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          z-40
          border
          border-[#b56b4c]/30
          sm:inset-5
          lg:inset-7
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-7
          z-40
          hidden
          border
          border-[#c07957]/10
          sm:block
          lg:inset-11
        "
      />

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
          max-w-[1500px]
          px-6
          pb-8
          pt-10
          sm:px-10
          sm:pt-14
          lg:px-16
          lg:pt-16
        "
      >
        {/* ====================================================
            HERO
        ===================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1fr_190px]
          "
        >
          {/* HERO LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease,
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  h-px
                  w-12
                  bg-[#c27653]
                "
              />

              <span
                className="
                  text-[7px]
                  tracking-[0.5em]
                  text-[#a2674f]
                "
              >
                04 / EDUCATION
              </span>
            </div>

            <h1
              className="
                mt-5
                max-w-[900px]
                font-serif
                text-[clamp(3.3rem,7vw,7.4rem)]
                font-medium
                leading-[.88]
                tracking-[-.07em]
                text-[#f1dfcc]
              "
            >
              শেখার পথে
              <br />

              <span className="text-[#c17452]">
                একটি যাত্রা।
              </span>
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <span
                className="
                  text-[7px]
                  tracking-[0.42em]
                  text-[#825546]
                "
              >
                ACADEMIC ARCHIVE
              </span>

              <span
                className="
                  h-px
                  w-16
                  bg-[#814631]/70
                "
              />
            </div>
          </motion.div>

          {/* HERO RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease,
            }}
            className="
              hidden
              text-right
              lg:block
            "
          >
            <p
              className="
                font-serif
                text-xl
                leading-8
                text-[#d5b39c]
              "
            >
              মাটি, মানুষ,
              <br />
              শেখা আর স্বপ্ন
              <br />
              আমার বাংলা।
            </p>

            <div
              className="
                ml-auto
                mt-4
                h-px
                w-12
                bg-[#a55c43]
              "
            />

            <p
              className="
                mt-4
                text-[7px]
                tracking-[0.35em]
                text-[#8b5947]
              "
            >
              SOUMIK BAG
            </p>
          </motion.div>
        </div>

        {/* ====================================================
            ARCHIVE
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[240px_1fr]
            xl:grid-cols-[270px_1fr]
          "
        >
          {/* ==================================================
              LEFT TIMELINE
          =================================================== */}

          <aside className="hidden lg:block">
            <div>
              <p
                className="
                  mb-6
                  font-serif
                  text-lg
                  text-[#d0aa91]
                "
              >
                অধ্যায় নির্বাচন করুন
              </p>

              <div
                className="
                  relative
                  border-l
                  border-[#94543d]/60
                "
              >
                {/* PROGRESS LINE */}

                <motion.div
                  animate={{
                    height: `${
                      ((activeIndex + 1) /
                        educationData.length) *
                      100
                    }%`,
                  }}
                  transition={{
                    duration: 0.7,
                    ease,
                  }}
                  className="
                    absolute
                    left-[-1px]
                    top-0
                    w-[2px]
                    bg-[#d17a55]
                    shadow-[0_0_14px_rgba(209,122,85,.65)]
                  "
                />

                {educationData.map(
                  (item, index) => {
                    const isActive =
                      index === activeIndex;

                    return (
                      <button
                        key={item.id}
                        onClick={() =>
                          changeChapter(
                            index,
                            index > activeIndex
                              ? 1
                              : -1
                          )
                        }
                        className="
                          group
                          relative
                          flex
                          w-full
                          items-center
                          gap-5
                          py-4
                          pl-7
                          text-left
                        "
                      >
                        {/* DOT */}

                        <motion.span
                          animate={{
                            width: isActive
                              ? 16
                              : 7,
                            height: isActive
                              ? 16
                              : 7,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="
                            absolute
                            left-[-8px]
                            rounded-full
                            border
                            border-[#ce7955]
                            bg-[#180804]
                          "
                        />

                        {/* ACTIVE GLOW */}

                        {isActive && (
                          <motion.span
                            layoutId="educationPointGlow"
                            className="
                              absolute
                              left-[-14px]
                              h-7
                              w-7
                              rounded-full
                              border
                              border-[#b86a4b]/30
                              shadow-[0_0_22px_rgba(190,104,73,.3)]
                            "
                          />
                        )}

                        <div>
                          <p
                            className={`
                              font-serif
                              text-xl
                              ${
                                isActive
                                  ? "text-[#f0d1b8]"
                                  : "text-[#815647] group-hover:text-[#b18771]"
                              }
                            `}
                          >
                            {item.year}
                          </p>

                          <p
                            className={`
                              mt-0.5
                              text-[7px]
                              tracking-[0.28em]
                              ${
                                isActive
                                  ? "text-[#c47754]"
                                  : "text-[#674439]"
                              }
                            `}
                          >
                            {item.bengaliYear}
                          </p>
                        </div>

                        {isActive && (
                          <motion.span
                            initial={{
                              opacity: 0,
                              x: -8,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            className="
                              ml-auto
                              mr-5
                              text-[#d07b56]
                            "
                          >
                            →
                          </motion.span>
                        )}
                      </button>
                    );
                  }
                )}
              </div>

              {/* COUNTER */}

              <div
                className="
                  mt-7
                  border-t
                  border-[#75412f]/50
                  pt-5
                "
              >
                <p
                  className="
                    text-[6px]
                    tracking-[0.4em]
                    text-[#70483c]
                  "
                >
                  ACADEMIC CHAPTERS
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span
                    className="
                      font-serif
                      text-3xl
                      text-[#b66c4f]
                    "
                  >
                    {String(
                      activeIndex + 1
                    ).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      pb-1
                      text-[8px]
                      tracking-[0.25em]
                      text-[#70483c]
                    "
                  >
                    / 04
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* ==================================================
              MAIN CARD
          =================================================== */}

          <div className="min-w-0">
            {/* MOBILE SELECTOR */}

            <div
              className="
                mb-4
                grid
                grid-cols-4
                border-y
                border-[#75422f]/50
                bg-[#080302]/70
                lg:hidden
              "
            >
              {educationData.map(
                (item, index) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      changeChapter(
                        index,
                        index > activeIndex
                          ? 1
                          : -1
                      )
                    }
                    className={`
                      relative
                      py-3
                      ${
                        index === activeIndex
                          ? "bg-[#35140b]/70"
                          : ""
                      }
                    `}
                  >
                    <span
                      className={`
                        font-serif
                        text-base
                        ${
                          index === activeIndex
                            ? "text-[#dd906c]"
                            : "text-[#795044]"
                        }
                      `}
                    >
                      {item.year}
                    </span>

                    {index === activeIndex && (
                      <motion.span
                        layoutId="mobileActiveLine"
                        className="
                          absolute
                          bottom-0
                          left-3
                          right-3
                          h-[2px]
                          bg-[#c27653]
                        "
                      />
                    )}
                  </button>
                )
              )}
            </div>

            {/* =================================================
                FEATURE CARD
            ================================================== */}

            <div
              className="
                relative
                min-h-[590px]
                overflow-hidden
                border
                border-[#96543c]/60
                bg-[#080302]/72
                backdrop-blur-[2px]
              "
            >
              {/* INNER FRAME */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  border
                  border-[#c07957]/10
                "
              />

              {/* LARGE BACKGROUND YEAR */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{
                    opacity: 0,
                    x: direction * 100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction * -70,
                  }}
                  transition={{
                    duration: 0.8,
                    ease,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    right-[-2%]
                    top-[-5%]
                    font-serif
                    text-[clamp(10rem,22vw,24rem)]
                    font-medium
                    leading-none
                    tracking-[-.12em]
                    text-[#d07955]/[.055]
                  "
                >
                  {active.year}
                </motion.div>
              </AnimatePresence>

              {/* CARD TOP BAR */}

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#76412f]/50
                  bg-[#070201]/50
                  px-6
                  py-3
                  sm:px-8
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      text-[7px]
                      tracking-[0.4em]
                      text-[#754b3e]
                    "
                  >
                    অধ্যায়
                  </span>

                  <span
                    className="
                      font-serif
                      text-sm
                      text-[#c07857]
                    "
                  >
                    {active.id}
                  </span>

                  <span
                    className="
                      h-px
                      w-8
                      bg-[#814631]
                    "
                  />

                  <span
                    className="
                      text-[7px]
                      tracking-[0.28em]
                      text-[#805345]
                    "
                  >
                    {active.bengaliYear}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#a55e44]
                      bg-[#32150c]
                    "
                  >
                    <Check
                      size={10}
                      strokeWidth={1.5}
                      className="text-[#dc9775]"
                    />
                  </span>

                  <span
                    className="
                      text-[6px]
                      tracking-[0.32em]
                      text-[#8c5b49]
                    "
                  >
                    {active.status}
                  </span>
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <AnimatePresence
                mode="wait"
                custom={direction}
              >
                <motion.div
                  key={active.id}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction * 70,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction * -45,
                  }}
                  transition={{
                    duration: 0.75,
                    ease,
                  }}
                  className="
                    relative
                    z-10
                    flex
                    min-h-[535px]
                    flex-col
                    justify-between
                    p-6
                    sm:p-9
                    lg:p-12
                    xl:p-14
                  "
                >
                  <div className="max-w-[800px]">
                    {/* YEAR */}

                    <p
                      className="
                        font-serif
                        text-[clamp(5.5rem,11vw,10rem)]
                        font-medium
                        leading-[.72]
                        tracking-[-.09em]
                        text-[#ce7b57]
                      "
                    >
                      {active.year}
                    </p>

                    {/* BENGALI TITLE */}

                    <div className="mt-7 flex items-center gap-3">
                      <span
                        className="
                          h-px
                          w-10
                          bg-[#c27653]
                        "
                      />

                      <span
                        className="
                          font-serif
                          text-sm
                          text-[#ae765d]
                        "
                      >
                        {active.bengaliTitle}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h2
                      className="
                        mt-3
                        font-serif
                        text-[clamp(2.5rem,5vw,5rem)]
                        font-medium
                        leading-[.9]
                        tracking-[-.065em]
                        text-[#f4e1cf]
                      "
                    >
                      {active.title}
                    </h2>

                    {/* INSTITUTE */}

                    <p
                      className="
                        mt-6
                        font-serif
                        text-lg
                        leading-7
                        text-[#c29179]
                        sm:text-xl
                      "
                    >
                      {active.institute}
                    </p>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-5
                        max-w-[680px]
                        text-sm
                        leading-7
                        text-[#98705f]
                        sm:text-[15px]
                      "
                    >
                      {active.description}
                    </p>

                    {/* QUOTE */}

                    <div
                      className="
                        mt-7
                        flex
                        max-w-[650px]
                        gap-4
                      "
                    >
                      <span
                        className="
                          w-[2px]
                          shrink-0
                          bg-[#bd704f]
                          shadow-[0_0_10px_rgba(189,112,79,.35)]
                        "
                      />

                      <p
                        className="
                          font-serif
                          text-base
                          italic
                          leading-7
                          text-[#c39a83]
                        "
                      >
                        “{active.quote}”
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      DETAILS
                  ================================================== */}

                  <div
                    className="
                      mt-10
                      grid
                      gap-5
                      border-t
                      border-[#75412f]/50
                      pt-6
                      sm:grid-cols-3
                    "
                  >
                    {/* LOCATION */}

                    <div>
                      <p
                        className="
                          text-[6px]
                          tracking-[0.4em]
                          text-[#70483c]
                        "
                      >
                        LOCATION
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <MapPin
                          size={13}
                          strokeWidth={1}
                          className="text-[#bd704f]"
                        />

                        <span
                          className="
                            font-serif
                            text-sm
                            text-[#bc9079]
                          "
                        >
                          {active.location}
                        </span>
                      </div>
                    </div>

                    {/* RESULT */}

                    <div>
                      <p
                        className="
                          text-[6px]
                          tracking-[0.4em]
                          text-[#70483c]
                        "
                      >
                        RESULT
                      </p>

                      <p
                        className="
                          mt-2
                          font-serif
                          text-lg
                          text-[#d18461]
                        "
                      >
                        {active.result}
                      </p>
                    </div>

                    {/* STATUS */}

                    <div>
                      <p
                        className="
                          text-[6px]
                          tracking-[0.4em]
                          text-[#70483c]
                        "
                      >
                        STATUS
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <span
                          className="
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#99553e]/70
                            bg-[#1c0804]
                          "
                        >
                          <Check
                            size={10}
                            strokeWidth={1.5}
                            className="text-[#ca7c5a]"
                          />
                        </span>

                        <span
                          className="
                            text-[7px]
                            tracking-[0.25em]
                            text-[#9b7563]
                          "
                        >
                          {active.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  AUTO PROGRESS
              ================================================== */}

              <motion.div
                key={`progress-${active.id}`}
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: AUTO_PLAY_TIME / 1000,
                  ease: "linear",
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  h-[2px]
                  bg-[#c27653]
                  shadow-[0_0_12px_rgba(194,118,83,.65)]
                "
              />
            </div>

            {/* =================================================
                CONTROLS
            ================================================== */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
              "
            >
              {/* JOURNEY */}

              <div className="flex items-center gap-4">
                <span
                  className="
                    hidden
                    text-[6px]
                    tracking-[0.4em]
                    text-[#70483b]
                    sm:block
                  "
                >
                  JOURNEY
                </span>

                <div className="flex gap-1">
                  {educationData.map(
                    (item, index) => (
                      <button
                        key={item.id}
                        onClick={() =>
                          changeChapter(
                            index,
                            index > activeIndex
                              ? 1
                              : -1
                          )
                        }
                        className="p-1"
                        aria-label={`Go to ${item.year}`}
                      >
                        <motion.span
                          animate={{
                            width:
                              index ===
                              activeIndex
                                ? 42
                                : 18,
                            opacity:
                              index ===
                              activeIndex
                                ? 1
                                : 0.45,
                          }}
                          className="
                            block
                            h-[2px]
                            bg-[#b76b4c]
                          "
                        />
                      </button>
                    )
                  )}
                </div>

                <span
                  className="
                    hidden
                    text-[7px]
                    tracking-[0.25em]
                    text-[#795246]
                    sm:block
                  "
                >
                  {String(
                    activeIndex + 1
                  ).padStart(2, "0")}{" "}
                  / 04
                </span>
              </div>

              {/* ARROWS */}

              <div className="flex gap-2">
                <button
                  onClick={previousChapter}
                  aria-label="Previous education"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-[#794530]/60
                    bg-[#090302]/75
                    text-[#b06d52]
                    transition-all
                    hover:border-[#bd7050]
                    hover:bg-[#301109]
                    hover:text-[#e4bca3]
                  "
                >
                  <ArrowLeft
                    size={14}
                    strokeWidth={1}
                  />
                </button>

                <button
                  onClick={nextChapter}
                  aria-label="Next education"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-[#794530]/60
                    bg-[#090302]/75
                    text-[#b06d52]
                    transition-all
                    hover:border-[#bd7050]
                    hover:bg-[#301109]
                    hover:text-[#e4bca3]
                  "
                >
                  <ArrowRight
                    size={14}
                    strokeWidth={1}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            BOTTOM
        ===================================================== */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-[#70402f]/35
            pt-5
          "
        >
          <p
            className="
              font-serif
              text-sm
              italic
              text-[#a36850]
            "
          >
            শেখা · বেড়ে ওঠা · এগিয়ে যাওয়া
          </p>

          <p
            className="
              hidden
              text-[7px]
              tracking-[0.4em]
              text-[#70483c]
              sm:block
            "
          >
            A BENGALI MIND · A BRIGHTER TOMORROW
          </p>
        </div>
      </div>

      {/* ======================================================
          AUTO JOURNEY
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-4
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          items-center
          gap-2
          md:flex
        "
      >
        <motion.span
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="
            h-1
            w-1
            rounded-full
            bg-[#c67a59]
          "
        />

        <span
          className="
            text-[6px]
            tracking-[0.38em]
            text-[#70483c]
          "
        >
          AUTO JOURNEY
        </span>
      </div>
    </section>
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
        z-40
        h-7
        w-7
        border-[#c07957]/60
        sm:h-10
        sm:w-10
        ${className}
      `}
    />
  );
}
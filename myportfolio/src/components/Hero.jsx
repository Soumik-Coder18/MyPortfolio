import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import HeroPage from "../assets/HeroPage.png";
import SoumikImage from "../assets/Soumik.png";

/* ============================================================
   HERO
============================================================ */

const Hero = () => {
  const imageRef = useRef(null);

  const [introDone, setIntroDone] =
    useState(false);

  const [imageLoaded, setImageLoaded] =
    useState(false);

  const [imageOffset, setImageOffset] =
    useState({
      x: 0,
      y: 0,
    });

  const [introImageOffset, setIntroImageOffset] =
    useState({
      x: 0,
      y: 0,
    });

  /* ==========================================================
     CALCULATE PORTRAIT POSITIONS
  ========================================================== */

  const calculateImagePosition = () => {
    const image = imageRef.current;

    if (
      !image ||
      !image.naturalWidth ||
      !image.naturalHeight
    ) {
      return;
    }

    const viewportWidth =
      window.innerWidth;

    const viewportHeight =
      window.innerHeight;

    const desktop =
      viewportWidth >= 1024;

    /* --------------------------------------------------------
       IMAGE SIZE
    -------------------------------------------------------- */

    const imageHeight = desktop
      ? Math.min(
          viewportHeight * 0.88,
          760
        )
      : Math.min(
          viewportHeight * 0.52,
          470
        );

    const imageWidth =
      imageHeight *
      (image.naturalWidth /
        image.naturalHeight);

    /* --------------------------------------------------------
       INTRO POSITION

       Slightly right of center.

       This gives the opening frame:
       
       LEFT      PORTRAIT      RIGHT INFO

       instead of:

       LEFT      PORTRAIT             EMPTY
    -------------------------------------------------------- */

    const introX = desktop
      ? viewportWidth * 0.055
      : 0;

    const introY = desktop
      ? -viewportHeight * 0.015
      : viewportHeight * 0.17;

    setIntroImageOffset({
      x: introX,
      y: introY,
    });

    /* --------------------------------------------------------
       FINAL HERO POSITION
    -------------------------------------------------------- */

    if (!desktop) {
      setImageOffset({
        x: 0,
        y:
          viewportHeight * 0.18,
      });

      return;
    }

    const finalRight =
      viewportWidth >= 1280
        ? -5
        : viewportWidth * 0.02;

    const finalCenterX =
      viewportWidth +
      finalRight -
      imageWidth / 2;

    const finalCenterY =
      viewportHeight -
      imageHeight / 2;

    setImageOffset({
      x:
        finalCenterX -
        viewportWidth / 2,

      y:
        finalCenterY -
        viewportHeight / 2,
    });
  };

  /* ==========================================================
     RESIZE
  ========================================================== */

  useEffect(() => {
    if (!imageLoaded) return;

    calculateImagePosition();

    window.addEventListener(
      "resize",
      calculateImagePosition
    );

    return () => {
      window.removeEventListener(
        "resize",
        calculateImagePosition
      );
    };
  }, [imageLoaded]);

  /* ==========================================================
     INTRO TIMER
  ========================================================== */

  useEffect(() => {
    if (!imageLoaded) return;

    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 3200);

    return () =>
      clearTimeout(timer);
  }, [imageLoaded]);

  return (
    <section
      id="hero"
      className="
        relative
        h-[100dvh]
        min-h-[620px]
        max-h-[100dvh]
        overflow-hidden
        bg-[#100806]
        text-[#f4ead9]
      "
    >
      {/* ======================================================
          BASE
      ======================================================= */}

      <div
        className="
          absolute
          inset-0
          z-0
          bg-[#100806]
        "
      />

      {/* ======================================================
          HERO BACKGROUND
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 1.07,
        }}
        animate={{
          opacity: introDone ? 1 : 0,
          scale: introDone ? 1 : 1.07,
        }}
        transition={{
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          pointer-events-none
          absolute
          -inset-8
          z-[5]
        "
      >
        <img
          src={HeroPage}
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* ======================================================
          FINAL HERO COLOR GRADE
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: introDone ? 1 : 0,
        }}
        transition={{
          duration: 1.4,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-[7]
          bg-gradient-to-r
          from-[#100806]/95
          via-[#170b08]/68
          to-transparent
        "
      />

      {/* ======================================================
          FINAL HERO BOTTOM VIGNETTE
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: introDone ? 1 : 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[8]
          h-64
          bg-gradient-to-t
          from-[#100806]
          via-[#100806]/55
          to-transparent
        "
      />

      {/* ======================================================
          INTRO ENVIRONMENT
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: introDone ? 0 : 1,
        }}
        transition={{
          duration: 1.35,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-[20]
          overflow-hidden
          bg-[#100806]
        "
      >
        {/* -----------------------------------------------
            SOFT CENTER LIGHT
        ------------------------------------------------ */}

        <div
          className="
            absolute
            left-[54%]
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#9a4632]/[0.08]
            blur-[150px]
          "
        />

        {/* -----------------------------------------------
            SOFT RIGHT LIGHT
        ------------------------------------------------ */}

        <div
          className="
            absolute
            right-[-180px]
            top-[20%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#7d3325]/[0.07]
            blur-[150px]
          "
        />

        {/* -----------------------------------------------
            CINEMATIC HORIZONTAL GRID
        ------------------------------------------------ */}

        <div
          className="
            absolute
            left-[5%]
            right-[5%]
            top-[15%]
            h-px
            bg-[#a66b4d]/[0.18]
          "
        />

        <div
          className="
            absolute
            left-[5%]
            right-[5%]
            bottom-[12%]
            h-px
            bg-[#a66b4d]/[0.14]
          "
        />

        {/* -----------------------------------------------
            VERTICAL GRID
        ------------------------------------------------ */}

        <div
          className="
            absolute
            bottom-0
            left-[5%]
            top-0
            w-px
            bg-[#a66b4d]/[0.10]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-[5%]
            top-0
            w-px
            bg-[#a66b4d]/[0.10]
          "
        />

        {/* -----------------------------------------------
            CENTER DIVIDER
        ------------------------------------------------ */}

        <div
          className="
            absolute
            bottom-[15%]
            left-1/2
            top-[15%]
            hidden
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#9d6749]/[0.13]
            to-transparent
            lg:block
          "
        />

        {/* -----------------------------------------------
            SMALL CORNER MARKS
        ------------------------------------------------ */}

        <span
          className="
            absolute
            left-[5%]
            top-[15%]
            h-3
            w-3
            border-l
            border-t
            border-[#b17a59]/30
          "
        />

        <span
          className="
            absolute
            right-[5%]
            top-[15%]
            h-3
            w-3
            border-r
            border-t
            border-[#b17a59]/30
          "
        />

        <span
          className="
            absolute
            bottom-[12%]
            left-[5%]
            h-3
            w-3
            border-b
            border-l
            border-[#b17a59]/25
          "
        />

        <span
          className="
            absolute
            bottom-[12%]
            right-[5%]
            h-3
            w-3
            border-b
            border-r
            border-[#b17a59]/25
          "
        />
      </motion.div>

      {/* ======================================================
          INTRO TOP BAR
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: introDone ? 0 : 1,
          y: introDone ? -15 : 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
        className="
          pointer-events-none
          absolute
          left-[7%]
          right-[7%]
          top-[8%]
          z-[40]
          hidden
          items-center
          justify-between
          lg:flex
        "
      >
        {/* LEFT */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#b75b42]
            "
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.48em]
              text-[#c2a58a]/55
            "
          >
            Portfolio / 2026
          </span>
        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            items-center
            gap-6
          "
        >
          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.4em]
              text-[#a58b74]/40
            "
          >
            Kolkata
          </span>

          <span
            className="
              h-px
              w-8
              bg-[#ad7354]/30
            "
          />

          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.4em]
              text-[#a58b74]/40
            "
          >
            West Bengal
          </span>
        </div>
      </motion.div>

      {/* ======================================================
          INTRO LEFT CONTENT
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -35,
        }}
        animate={{
          opacity: introDone ? 0 : 1,
          x: introDone ? -40 : 0,
        }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-[45]
          flex
          w-full
          items-center
        "
      >
        <div
          className="
            ml-[8%]
            w-[330px]
            sm:w-[390px]
            lg:ml-[9%]
            lg:w-[400px]
          "
        >
          {/* -----------------------------------------------
              SMALL LABEL
          ------------------------------------------------ */}

          <div
            className="
              mb-7
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-10
                bg-[#c08a5c]
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.5em]
                text-[#c1a58b]/60
              "
            >
              An introduction
            </span>
          </div>

          {/* -----------------------------------------------
              BENGALI GREETING
          ------------------------------------------------ */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: introDone ? 0 : 1,
              y: introDone ? -15 : 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              text-[28px]
              leading-none
              text-[#d3a267]
              sm:text-[32px]
            "
            style={{
              fontFamily:
                "'Noto Serif Bengali', Georgia, serif",
            }}
          >
            নমস্কার
          </motion.p>

          {/* -----------------------------------------------
              TITLE
          ------------------------------------------------ */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: introDone ? 0 : 1,
              y: introDone ? -20 : 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.35,
            }}
            className="
              mt-4
              text-[clamp(3.2rem,5vw,5.2rem)]
              font-medium
              leading-[0.88]
              tracking-[-0.055em]
              text-[#f2e5d3]
            "
            style={{
              fontFamily:
                "'Playfair Display', Georgia, serif",
            }}
          >
            Welcome
            <br />
            <span className="italic text-[#c46c4c]">
              to my world.
            </span>
          </motion.h2>

          {/* -----------------------------------------------
              DIVIDER
          ------------------------------------------------ */}

          <motion.div
            initial={{
              scaleX: 0,
              transformOrigin: "left",
            }}
            animate={{
              scaleX: introDone ? 0 : 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.65,
            }}
            className="
              mt-7
              h-px
              w-24
              bg-[#bd895b]
            "
          />

          {/* -----------------------------------------------
              DESCRIPTION
          ------------------------------------------------ */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: introDone ? 0 : 1,
              y: introDone ? -12 : 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="
              mt-6
              max-w-[350px]
              text-[12px]
              leading-7
              tracking-[0.015em]
              text-[#d0c0ad]/60
            "
          >
            I create digital experiences where
            technology, visual storytelling and
            thoughtful interaction come together.
          </motion.p>

          {/* -----------------------------------------------
              IDENTITY
          ------------------------------------------------ */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: introDone ? 0 : 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.95,
            }}
            className="
              mt-9
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.42em]
                text-[#c3a68b]/45
              "
            >
              Soumik Bag
            </span>

            <span className="text-[#ad4a38]">
              ◆
            </span>

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.42em]
                text-[#c3a68b]/45
              "
            >
              Developer / Visual Creator
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ======================================================
          INTRO RIGHT PROFESSIONAL PANEL
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 35,
        }}
        animate={{
          opacity: introDone ? 0 : 1,
          x: introDone ? 35 : 0,
        }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-1/2
          z-[42]
          hidden
          w-[250px]
          -translate-y-1/2
          lg:block
        "
      >
        {/* -----------------------------------------------
            TOP LABEL
        ------------------------------------------------ */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#9d684b]/25
            pb-4
          "
        >
          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.42em]
              text-[#ad8e76]/45
            "
          >
            Creative Practice
          </span>

          <span
            className="
              text-[7px]
              tracking-[0.25em]
              text-[#bd7555]/55
            "
          >
            01—03
          </span>
        </div>

        {/* -----------------------------------------------
            LARGE NUMBER
        ------------------------------------------------ */}

        <div className="mt-8">
          <span
            className="
              block
              font-serif
              text-[82px]
              font-light
              leading-[0.8]
              tracking-[-0.08em]
              text-[#d8c1a5]/[0.13]
            "
          >
            01
          </span>

          <p
            className="
              mt-4
              text-[9px]
              uppercase
              tracking-[0.42em]
              text-[#c39a77]/65
            "
          >
            Digital Experiences
          </p>
        </div>

        {/* -----------------------------------------------
            DISCIPLINES
        ------------------------------------------------ */}

        <div
          className="
            mt-7
            border-t
            border-[#9d684b]/20
          "
        >
          <IntroRow
            number="01"
            label="Development"
          />

          <IntroRow
            number="02"
            label="Photography"
          />

          <IntroRow
            number="03"
            label="Visual Design"
          />

          <IntroRow
            number="04"
            label="Creative Technology"
          />
        </div>

        {/* -----------------------------------------------
            LOCATION
        ------------------------------------------------ */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-[#9d684b]/20
            pt-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <MapPin
              size={11}
              strokeWidth={1}
              className="text-[#b87758]"
            />

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.34em]
                text-[#b79a81]/45
              "
            >
              Kolkata, India
            </span>
          </div>

          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.32em]
              text-[#b79a81]/35
            "
          >
            Available
          </span>
        </div>
      </motion.div>

      {/* ======================================================
          PORTRAIT

          ONE SINGLE IMAGE

          INTRO → HERO

          NEVER FADES
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-[100]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <motion.div
          initial={{
            x: introImageOffset.x,
            y: introImageOffset.y,
            scale: 0.91,
          }}
          animate={{
            x: introDone
              ? imageOffset.x
              : introImageOffset.x,

            y: introDone
              ? imageOffset.y
              : introImageOffset.y,

            scale: introDone
              ? 1
              : 0.91,
          }}
          transition={{
            duration: 2.05,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            relative
            flex
            items-end
            justify-center
          "
        >
          {/* -----------------------------------------------
              PORTRAIT LIGHT
          ------------------------------------------------ */}

          <div
            className="
              absolute
              bottom-[9%]
              left-1/2
              h-[360px]
              w-[360px]
              -translate-x-1/2
              rounded-full
              bg-[#a14a36]/[0.10]
              blur-[110px]
            "
          />

          {/* -----------------------------------------------
              SUBTLE IMAGE FRAME
          ------------------------------------------------ */}

          <div
            className="
              absolute
              bottom-[12%]
              left-1/2
              h-[78%]
              w-[72%]
              -translate-x-1/2
              border
              border-[#bd895e]/[0.10]
            "
          />

          <img
            ref={imageRef}
            src={SoumikImage}
            alt="Soumik Bag"
            onLoad={() =>
              setImageLoaded(true)
            }
            className="
              relative
              z-10
              h-[70vh]
              max-h-[680px]
              w-auto
              object-contain
              drop-shadow-[0_42px_80px_rgba(0,0,0,0.9)]
              lg:h-[88vh]
              lg:max-h-[760px]
            "
          />
        </motion.div>
      </div>

      {/* ======================================================
          PORTRAIT SMALL LABEL
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: introDone ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-1/2
          z-[110]
          hidden
          -translate-x-1/2
          items-center
          gap-3
          lg:flex
        "
      >
        <span
          className="
            h-px
            w-8
            bg-[#a96d4e]/30
          "
        />

        <span
          className="
            text-[6px]
            uppercase
            tracking-[0.5em]
            text-[#b79b80]/40
          "
        >
          Soumik Bag
        </span>

        <span
          className="
            h-px
            w-8
            bg-[#a96d4e]/30
          "
        />
      </motion.div>

      {/* ======================================================
          FINAL HERO CONTENT
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -55,
        }}
        animate={{
          opacity: introDone ? 1 : 0,
          x: introDone ? 0 : -55,
        }}
        transition={{
          duration: 1.25,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          z-[60]
          flex
          items-center
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1380px]
            px-6
            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              w-full
              lg:w-[53%]
            "
          >
            {/* -----------------------------------------------
                LABEL
            ------------------------------------------------ */}

            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-xl
                  text-[#d1a86d]
                "
              >
                ❧
              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-[#d5bd98]/70
                "
              >
                Namaskar · Welcome
              </span>

              <span
                className="
                  h-px
                  w-12
                  bg-[#bd9159]/45
                "
              />
            </div>

            {/* -----------------------------------------------
                BENGALI LINE
            ------------------------------------------------ */}

            <p
              className="
                mb-2
                text-base
                text-[#d5a86d]
                sm:text-lg
              "
              style={{
                fontFamily:
                  "'Noto Serif Bengali', Georgia, serif",
              }}
            >
              স্বপ্ন দেখি, সৃষ্টি করি
            </p>

            {/* -----------------------------------------------
                NAME
            ------------------------------------------------ */}

            <h1
              className="
                text-[clamp(3.6rem,6.7vw,6.7rem)]
                font-medium
                leading-[0.84]
                tracking-[-0.055em]
                text-[#f3e5d0]
              "
              style={{
                fontFamily:
                  "'Playfair Display', Georgia, serif",
              }}
            >
              Soumik
              <br />

              <span className="text-[#a93d31]">
                Bag.
              </span>
            </h1>

            {/* -----------------------------------------------
                DIVIDER
            ------------------------------------------------ */}

            <div
              className="
                my-5
                h-px
                w-[145px]
                bg-gradient-to-r
                from-[#d2a468]
                to-transparent
              "
            />

            {/* -----------------------------------------------
                ROLE
            ------------------------------------------------ */}

            <div
              className="
                min-h-[32px]
                text-lg
                text-[#e9dbc6]
                sm:text-xl
              "
            >
              I'm a{" "}

              <span className="text-[#d29a62]">
                <TypeAnimation
                  sequence={[
                    "B.Tech Student",
                    1700,

                    "MERN Stack Developer",
                    1700,

                    "Creative Technologist",
                    1700,

                    "Team Project Collaborator",
                    1700,

                    "Problem Solver (C++)",
                    1700,

                    "UI/UX Enthusiast",
                    1700,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                />
              </span>
            </div>

            {/* -----------------------------------------------
                DESCRIPTION
            ------------------------------------------------ */}

            <p
              className="
                mt-3
                max-w-[530px]
                text-sm
                leading-7
                text-[#ddd0bd]/75
                sm:text-[15px]
              "
            >
              I build immersive web experiences,
              capture emotion through imagery,
              and breathe life into code with style.
            </p>

            {/* -----------------------------------------------
                ACTIONS
            ------------------------------------------------ */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-3
              "
            >
              <motion.a
                href="#contact"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  rounded-full
                  bg-[#96382d]
                  px-7
                  py-3
                  text-xs
                  tracking-[0.08em]
                  text-[#fff0dd]
                  shadow-[0_12px_35px_rgba(86,25,18,0.35)]
                  transition-shadow
                  hover:shadow-[0_15px_45px_rgba(120,40,28,0.45)]
                "
              >
                Let's Connect

                <span className="ml-3">
                  →
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  rounded-full
                  border
                  border-[#d0b184]/35
                  px-7
                  py-[11px]
                  text-xs
                  tracking-[0.08em]
                  text-[#e5d6c0]
                  transition
                  hover:border-[#d0b184]/70
                  hover:bg-white/[0.04]
                "
              >
                View My Work

                <span className="ml-3 text-[#d4a467]">
                  ↗
                </span>
              </motion.a>
            </div>

            {/* -----------------------------------------------
                STATS
            ------------------------------------------------ */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-6
                sm:gap-9
              "
            >
              <Stat
                number="10+"
                label="Projects"
              />

              <Divider />

              <Stat
                number="2+"
                label="Years Learning"
              />

              <Divider />

              <Stat
                number="∞"
                label="Curiosity"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ======================================================
          FINAL DECORATIVE CIRCLE
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
        }}
        animate={{
          opacity: introDone ? 1 : 0,
          scale: introDone ? 1 : 0.92,
        }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
        className="
          pointer-events-none
          absolute
          bottom-[11%]
          right-[4%]
          z-[30]
          hidden
          h-[480px]
          w-[480px]
          rounded-full
          border
          border-dashed
          border-[#d2a66c]/10
          lg:block
        "
      />

      {/* ======================================================
          BOTTOM LEFT
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: introDone ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="
          absolute
          bottom-6
          left-6
          z-[70]
          hidden
          items-center
          gap-3
          text-[8px]
          uppercase
          tracking-[0.38em]
          text-[#d2bd9e]/50
          sm:flex
          lg:left-12
        "
      >
        <span>
          Rooted in Culture
        </span>

        <span className="text-[#a94436]">
          ◆
        </span>

        <span>
          Driven by Technology
        </span>
      </motion.div>

      {/* ======================================================
          SCROLL
      ======================================================= */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: introDone ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="
          absolute
          bottom-6
          right-6
          z-[70]
          flex
          items-center
          gap-3
          lg:right-12
        "
      >
        <span
          className="
            hidden
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-[#d2bd9e]/50
            sm:block
          "
        >
          Scroll
        </span>

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-8
            w-5
            items-start
            justify-center
            rounded-full
            border
            border-[#d1ae79]/45
            p-1
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#d6ac70]
            "
          />
        </motion.span>
      </motion.a>
    </section>
  );
};

/* ============================================================
   INTRO ROW
============================================================ */

const IntroRow = ({
  number,
  label,
}) => {
  return (
    <div
      className="
        group
        flex
        items-center
        justify-between
        border-b
        border-[#9d684b]/15
        py-3
      "
    >
      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <span
          className="
            text-[7px]
            tracking-[0.2em]
            text-[#a77d64]/35
          "
        >
          {number}
        </span>

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.24em]
            text-[#c3aa91]/55
          "
        >
          {label}
        </span>
      </div>

      <span
        className="
          h-px
          w-5
          bg-[#b87353]/25
        "
      />
    </div>
  );
};

/* ============================================================
   STAT
============================================================ */

const Stat = ({
  number,
  label,
}) => {
  return (
    <div>
      <div
        className="
          text-xl
          font-medium
          leading-none
          text-[#e1b978]
          sm:text-2xl
        "
        style={{
          fontFamily:
            "'Playfair Display', Georgia, serif",
        }}
      >
        {number}
      </div>

      <div
        className="
          mt-1.5
          text-[8px]
          uppercase
          tracking-[0.16em]
          text-[#d7c6ad]/55
          sm:text-[9px]
        "
      >
        {label}
      </div>
    </div>
  );
};

/* ============================================================
   DIVIDER
============================================================ */

const Divider = () => {
  return (
    <div
      className="
        h-9
        w-px
        bg-white/15
      "
    />
  );
};

export default Hero;
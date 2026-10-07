import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "emailjs-com";
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Send,
  PhoneCall,
} from "lucide-react";

import CallBg from "../assets/CallBg.png";
import SoumikCall from "../assets/SoumikCall.png";

/* ============================================================
   EMAILJS
============================================================ */

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/* ============================================================
   CONTACT
============================================================ */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  /* ==========================================================
     INPUT
  =========================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  /* ==========================================================
     SUBMIT
  =========================================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Email sending failed:", err);

      setError(
        "Message পাঠানো যায়নি। একটু পরে আবার চেষ্টা করুন।"
      );
    } finally {
      setSending(false);
    }
  };

  /* ==========================================================
     SEND ANOTHER
  =========================================================== */

  const sendAnother = () => {
    setSubmitted(false);
    setError("");
  };

  return (
    <section
      id="contact"
      className="
        relative
        isolate
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#120604]
        text-[#f2ddca]
        lg:h-[100svh]
        lg:min-h-[760px]
      "
    >
      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <div className="absolute inset-0 -z-50 overflow-hidden">
        <motion.div
          initial={{
            scale: 1.04,
          }}
          animate={{
            scale: [1.02, 1.035, 1.02],
            x: [0, -8, 0],
            y: [0, -4, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-[-2%]
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url(${CallBg})`,
          }}
        />
      </div>

      {/* ======================================================
          CINEMATIC COLOR GRADE
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-40
          bg-[#1a0703]/25
        "
      />

      {/* LEFT / CENTER / RIGHT BALANCE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-[linear-gradient(
            90deg,
            rgba(10,3,1,.58)_0%,
            rgba(20,7,3,.20)_25%,
            rgba(22,8,3,.04)_47%,
            rgba(22,8,3,.04)_60%,
            rgba(8,2,1,.76)_100%
          )]
        "
      />

      {/* BOTTOM GRADE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-[linear-gradient(
            180deg,
            rgba(3,1,0,.28)_0%,
            rgba(5,1,0,0)_43%,
            rgba(3,1,0,.82)_100%
          )]
        "
      />

      {/* ======================================================
          WARM CINEMATIC LIGHT
      ======================================================= */}

      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[34%]
          top-[58%]
          -z-20
          h-[460px]
          w-[460px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#d36d45]
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
          -z-10
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_30%,
            rgba(0,0,0,.18)_63%,
            rgba(0,0,0,.82)_100%
          )]
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
          z-40
          opacity-[0.025]
          mix-blend-screen
          [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22 viewBox=%220 0 180 180%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%22.7%22/%3E%3C/svg%3E')]
        "
      />

      {/* ======================================================
          OUTER FRAME
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          z-50
          border
          border-[#c27652]/25
          sm:inset-5
          lg:inset-7
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-7
          z-50
          hidden
          border
          border-[#b8684a]/10
          lg:block
        "
      />

      {/* ======================================================
          TOP META
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: -12,
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
        className="
          absolute
          left-7
          right-7
          top-24
          z-[60]
          flex
          items-center
          justify-between
          sm:left-10
          sm:right-10
          lg:left-[5.2%]
          lg:right-[4.5%]
          lg:top-24
        "
      >
        {/* LEFT META */}

        <div className="flex items-center gap-3">
          <span
            className="
              h-px
              w-9
              bg-[#b76548]
            "
          />

          <span
            className="
              text-[7px]
              tracking-[0.5em]
              text-[#a66a55]
            "
          >
            05 / CONTACT
          </span>
        </div>

        {/* RIGHT META */}

        <div
          className="
            hidden
            items-center
            gap-2
            lg:flex
          "
        >
          <MapPin
            size={11}
            strokeWidth={1}
            className="text-[#bd7354]"
          />

          <span
            className="
              text-[7px]
              tracking-[0.34em]
              text-[#98634f]
            "
          >
            KOLKATA · WEST BENGAL
          </span>
        </div>
      </motion.div>

      {/* ======================================================
          DESKTOP COMPOSITION
      ======================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          hidden
          h-full
          w-full
          max-w-[1536px]
          lg:block
        "
      >
        {/* ====================================================
            LEFT EDITORIAL TEXT

            IMPORTANT:
            This is positioned on the blank wall area,
            ABOVE the Soumik cutout.
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-[15.5%]
            top-[14%]
            z-30
            w-[39%]
            max-w-[540px]
          "
        >
          {/* =================================================
              SMALL LABEL
          ================================================== */}

          <div className="flex items-center gap-3">
            <span
              className="
                text-[7px]
                tracking-[0.46em]
                text-[#9a5943]
              "
            >
              THE FINAL CHAPTER
            </span>

            <span
              className="
                h-px
                w-14
                bg-[#74402e]/70
              "
            />
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1
            className="
              mt-5
              max-w-[520px]
              font-serif
              text-[clamp(3.2rem,4.35vw,5rem)]
              font-medium
              leading-[0.84]
              tracking-[-0.075em]
              text-[#f3e0ce]
            "
          >
            Let's create
            <br />

            <span className="text-[#c87552]">
              something
            </span>

            <br />

            meaningful.
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <div
            className="
              mt-7
              flex
              max-w-[500px]
              items-start
              gap-4
            "
          >
            <span
              className="
                mt-1
                h-[74px]
                w-[2px]
                shrink-0
                bg-[#b56547]
              "
            />

            <p
              className="
                max-w-[450px]
                font-serif
                text-[14px]
                leading-[1.65]
                text-[#d0a994]
                xl:text-[15px]
              "
            >
              আপনি যদি কোনো idea নিয়ে কাজ করতে চান,
              কোনো project নিয়ে কথা বলতে চান,
              অথবা শুধু একটি ভালো conversation শুরু
              করতে চান — আমি শুনছি।
            </p>
          </div>

          {/* =================================================
              BENGALI CTA
          ================================================== */}

          <div
            className="
              mt-7
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                font-serif
                text-[23px]
                italic
                text-[#c97958]
              "
            >
              যোগাযোগ করুন
            </span>

            <span
              className="
                h-px
                w-16
                bg-[#75412f]
              "
            />
          </div>

          {/* =================================================
              SMALL EDITORIAL FOOTNOTE
          ================================================== */}

          <div
            className="
              mt-7
              flex
              max-w-[390px]
              items-center
              gap-4
              border-t
              border-[#70402f]/40
              pt-4
            "
          >
            <div className="space-y-1">
              <p
                className="
                  text-[6px]
                  tracking-[0.38em]
                  text-[#765044]
                "
              >
                IDEAS
              </p>

              <p
                className="
                  text-[6px]
                  tracking-[0.38em]
                  text-[#765044]
                "
              >
                PEOPLE
              </p>

              <p
                className="
                  text-[6px]
                  tracking-[0.38em]
                  text-[#765044]
                "
              >
                CULTURE
              </p>
            </div>

            <span
              className="
                h-10
                w-px
                bg-[#70402f]/50
              "
            />

            <p
              className="
                font-serif
                text-[11px]
                leading-4
                text-[#8f6554]
              "
            >
              Good ideas deserve
              <br />
              a place to begin.
            </p>
          </div>
        </motion.div>

        {/* ====================================================
            SOUMIK PORTRAIT
            POSITION UNCHANGED
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -45,
            y: 90,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.35,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            pointer-events-none
            absolute
            bottom-[-1%]
            left-[34%]
            z-40
            w-[35%]
            max-w-[535px]
            -translate-x-1/2
          "
        >
          {/* =================================================
              PORTRAIT HALO
          ================================================== */}

          <motion.div
            animate={{
              opacity: [0.07, 0.15, 0.07],
              scale: [0.94, 1.06, 0.94],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[15%]
              left-1/2
              h-[45%]
              w-[60%]
              -translate-x-1/2
              rounded-full
              bg-[#c76743]
              blur-[70px]
            "
          />

          {/* =================================================
              GROUND SHADOW
          ================================================== */}

          <motion.div
            animate={{
              opacity: [0.22, 0.32, 0.22],
              scaleX: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[1%]
              left-1/2
              h-7
              w-[72%]
              -translate-x-1/2
              rounded-full
              bg-black/85
              blur-2xl
            "
          />

          {/* =================================================
              PERSON
          ================================================== */}

          <motion.img
            src={SoumikCall}
            alt="Soumik Bag"
            draggable="false"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-20
              block
              h-auto
              w-full
              select-none
              object-contain
              drop-shadow-[0_25px_35px_rgba(0,0,0,.78)]
            "
          />

          {/* =================================================
              PORTRAIT LABEL
          ================================================== */}

          <div
            className="
              absolute
              bottom-[15%]
              right-[-5%]
              z-30
              border-r
              border-[#a86249]/45
              pr-3
              text-right
            "
          >
            <p
              className="
                text-[6px]
                tracking-[0.42em]
                text-[#805243]
              "
            >
              SOUMIK BAG
            </p>

            <p
              className="
                mt-1
                font-serif
                text-xs
                text-[#ae826d]
              "
            >
              Always listening.
            </p>
          </div>
        </motion.div>

        {/* ====================================================
            RIGHT CONTACT PANEL
            POSITION UNCHANGED
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 65,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            right-[4.5%]
            top-[10%]
            z-30
            w-[38%]
            max-w-[600px]
          "
        >
          <div
            className="
              relative
              h-[calc(100svh-145px)]
              max-h-[680px]
              min-h-[620px]
              overflow-hidden
              rounded-[18px]
              border
              border-[#a35a40]/65
              bg-[#160704]/78
              shadow-[0_30px_80px_rgba(0,0,0,.48)]
              backdrop-blur-[2px]
            "
          >
            {/* =================================================
                TOP ICON
            ================================================== */}

            <div
              className="
                absolute
                left-1/2
                top-0
                z-20
                flex
                h-12
                w-12
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#a96247]/70
                bg-[#190704]
              "
            >
              <PhoneCall
                size={14}
                strokeWidth={1}
                className="text-[#c37756]"
              />
            </div>

            {/* =================================================
                LOCATION
            ================================================== */}

            <div
              className="
                absolute
                right-8
                top-10
                z-10
                hidden
                items-center
                gap-2
                xl:flex
              "
            >
              <MapPin
                size={10}
                strokeWidth={1}
                className="text-[#a8644c]"
              />

              <span
                className="
                  text-[6px]
                  tracking-[0.36em]
                  text-[#95604d]
                "
              >
                KOLKATA · WEST BENGAL
              </span>
            </div>

            {/* =================================================
                FORM HEADER
            ================================================== */}

            <div
              className="
                border-b
                border-[#77432f]/45
                px-6
                pb-5
                pt-9
                sm:px-8
              "
            >
              <p
                className="
                  text-[7px]
                  tracking-[0.45em]
                  text-[#9a5943]
                "
              >
                BEGIN THE CONVERSATION
              </p>

              <div className="mt-3 min-h-[48px]">
                <h2
                  className="
                    font-serif
                    text-[clamp(1.9rem,2.65vw,3rem)]
                    font-medium
                    leading-[0.92]
                    tracking-[-0.06em]
                    text-[#f1dac7]
                  "
                >
                  <Typewriter
                    words={[
                      "Let's work together.",
                      "Build something.",
                      "Bring ideas to life.",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={65}
                    deleteSpeed={35}
                    delaySpeed={2200}
                  />
                </h2>
              </div>

              <p
                className="
                  mt-2
                  font-serif
                  text-base
                  text-[#b97457]
                "
              >
                আপনার ভাবনা, আমার ক্যানভাস।
              </p>
            </div>

            {/* =================================================
                FORM / SUCCESS
            ================================================== */}

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  onSubmit={handleSubmit}
                  className="
                    px-6
                    py-5
                    sm:px-8
                    sm:py-6
                  "
                >
                  {/* NAME */}

                  <ContactField
                    number="01"
                    icon={<UserIcon />}
                    label="YOUR NAME"
                    placeholder="How should I address you?"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  {/* EMAIL */}

                  <div className="mt-4">
                    <ContactField
                      number="02"
                      icon={
                        <Mail
                          size={17}
                          strokeWidth={1}
                        />
                      }
                      label="EMAIL ADDRESS"
                      placeholder="Where can I reach you?"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* MESSAGE */}

                  <div
                    className="
                      group
                      mt-4
                      overflow-hidden
                      rounded-xl
                      border
                      border-[#824934]/55
                      bg-[#100301]/45
                      transition-all
                      duration-300
                      focus-within:border-[#b86a4d]/80
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        px-4
                        pt-3
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            font-serif
                            text-[10px]
                            text-[#a55f46]
                          "
                        >
                          03
                        </span>

                        <span
                          className="
                            text-[7px]
                            tracking-[0.32em]
                            text-[#95604d]
                          "
                        >
                          YOUR MESSAGE
                        </span>
                      </div>

                      <span
                        className="
                          text-[6px]
                          tracking-[0.22em]
                          text-[#624237]
                        "
                      >
                        REQUIRED
                      </span>
                    </div>

                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a little about your idea, project or opportunity..."
                      className="
                        w-full
                        resize-none
                        bg-transparent
                        px-4
                        pb-4
                        pt-2
                        font-serif
                        text-[15px]
                        leading-6
                        text-[#ead2bf]
                        outline-none
                        placeholder:text-[#68473c]
                      "
                    />
                  </div>

                  {/* ERROR */}

                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -6,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="
                          mt-3
                          rounded-lg
                          border
                          border-[#8d4936]/50
                          bg-[#230a05]/70
                          px-4
                          py-3
                          text-xs
                          text-[#c58269]
                        "
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* =================================================
                      SEND BUTTON
                  ================================================== */}

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    className="
                      group
                      relative
                      mt-4
                      flex
                      h-[50px]
                      w-full
                      items-center
                      justify-center
                      gap-4
                      overflow-hidden
                      rounded-xl
                      border
                      border-[#b4694c]/70
                      bg-[#71301d]
                      font-serif
                      text-sm
                      tracking-[0.28em]
                      text-[#f1d6c1]
                      shadow-[0_10px_30px_rgba(87,32,17,.25)]
                      transition-all
                      duration-300
                      hover:border-[#d08766]
                      hover:bg-[#823a22]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {/* SHIMMER */}

                    <motion.span
                      initial={{
                        x: "-130%",
                      }}
                      whileHover={{
                        x: "130%",
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        w-1/3
                        skew-x-[-18deg]
                        bg-white/10
                        blur-md
                      "
                    />

                    <span className="relative z-10">
                      {sending
                        ? "SENDING..."
                        : "SEND MESSAGE"}
                    </span>

                    <Send
                      size={15}
                      strokeWidth={1}
                      className="
                        relative
                        z-10
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                    {/* CORNER LINES */}

                    <span
                      className="
                        absolute
                        left-2
                        top-2
                        h-3
                        w-3
                        border-l
                        border-t
                        border-[#d18b69]/35
                      "
                    />

                    <span
                      className="
                        absolute
                        bottom-2
                        right-2
                        h-3
                        w-3
                        border-b
                        border-r
                        border-[#d18b69]/35
                      "
                    />
                  </motion.button>

                  {/* =================================================
                      FORM FOOTER
                  ================================================== */}

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#6e3e2d]/35
                      pt-3
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#c77b59]
                          shadow-[0_0_9px_rgba(199,123,89,.7)]
                        "
                      />

                      <span
                        className="
                          text-[6px]
                          tracking-[0.28em]
                          text-[#765044]
                        "
                      >
                        CHANNEL OPEN
                      </span>
                    </div>

                    <span
                      className="
                        text-[6px]
                        tracking-[0.25em]
                        text-[#624238]
                      "
                    >
                      PERSONAL · DIRECT
                    </span>
                  </div>
                </motion.form>
              ) : (
                /* =================================================
                   SUCCESS
                ================================================== */

                <motion.div
                  key="success"
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    min-h-[430px]
                    flex-col
                    items-center
                    justify-center
                    px-8
                    text-center
                  "
                >
                  {/* SUCCESS ICON */}

                  <div
                    className="
                      relative
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#bd704f]/60
                      bg-[#3b1208]
                    "
                  >
                    <motion.div
                      initial={{
                        scale: 0,
                        rotate: -45,
                      }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        type: "spring",
                        stiffness: 130,
                        damping: 12,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#d18a68]/70
                      "
                    >
                      <Check
                        size={20}
                        strokeWidth={1.3}
                        className="text-[#e2b093]"
                      />
                    </motion.div>

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        inset-1
                        rounded-full
                        border
                        border-dashed
                        border-[#b66a4b]/30
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-7
                      text-[7px]
                      tracking-[0.42em]
                      text-[#98604a]
                    "
                  >
                    MESSAGE RECEIVED
                  </p>

                  <h3
                    className="
                      mt-3
                      font-serif
                      text-4xl
                      text-[#f0d6c2]
                    "
                  >
                    ধন্যবাদ।
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[380px]
                      font-serif
                      text-base
                      leading-7
                      text-[#a87d68]
                    "
                  >
                    আপনার message পৌঁছে গেছে।
                    <br />
                    খুব শীঘ্রই কথা হবে।
                  </p>

                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span className="h-px w-8 bg-[#77432f]" />

                    <span
                      className="
                        font-serif
                        text-sm
                        italic
                        text-[#bc7656]
                      "
                    >
                      — Soumik Bag
                    </span>

                    <span className="h-px w-8 bg-[#77432f]" />
                  </div>

                  <button
                    onClick={sendAnother}
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      text-[7px]
                      tracking-[0.3em]
                      text-[#97604b]
                      transition-colors
                      hover:text-[#cf8b69]
                    "
                  >
                    SEND ANOTHER MESSAGE

                    <ArrowUpRight
                      size={11}
                      strokeWidth={1}
                    />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ====================================================
            BOTTOM RIGHT
        ===================================================== */}

        <div
          className="
            absolute
            bottom-5
            right-[4.5%]
            z-50
            hidden
            xl:block
          "
        >
          <span
            className="
              text-[6px]
              tracking-[0.4em]
              text-[#604137]
            "
          >
            KOLKATA · INDIA · 2026
          </span>
        </div>
      </div>

      {/* ======================================================
          MOBILE
      ======================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          block
          max-w-xl
          px-6
          pb-12
          pt-28
          lg:hidden
        "
      >
        {/* ====================================================
            MOBILE HEADING
        ===================================================== */}

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
            duration: 0.9,
          }}
        >
          <p
            className="
              text-[7px]
              tracking-[0.45em]
              text-[#965844]
            "
          >
            THE FINAL CHAPTER
          </p>

          <h1
            className="
              mt-5
              font-serif
              text-[clamp(3.5rem,15vw,5.5rem)]
              leading-[0.84]
              tracking-[-0.07em]
              text-[#f3e0ce]
            "
          >
            Let's create
            <br />

            <span className="text-[#c87552]">
              something
            </span>

            <br />

            meaningful.
          </h1>

          <div
            className="
              mt-6
              flex
              gap-4
            "
          >
            <span
              className="
                h-14
                w-[2px]
                shrink-0
                bg-[#b56547]
              "
            />

            <p
              className="
                font-serif
                text-base
                leading-7
                text-[#c5a08b]
              "
            >
              আপনি যদি কোনো idea নিয়ে কাজ করতে চান,
              কোনো project নিয়ে কথা বলতে চান,
              অথবা শুধু একটি ভালো conversation শুরু
              করতে চান — আমি শুনছি।
            </p>
          </div>
        </motion.div>

        {/* ====================================================
            MOBILE PORTRAIT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            mx-auto
            mt-8
            w-[82%]
            max-w-[440px]
          "
        >
          {/* MOBILE HALO */}

          <motion.div
            animate={{
              opacity: [0.07, 0.14, 0.07],
              scale: [0.94, 1.05, 0.94],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[15%]
              left-1/2
              h-[45%]
              w-[60%]
              -translate-x-1/2
              rounded-full
              bg-[#c76743]
              blur-[65px]
            "
          />

          <motion.img
            src={SoumikCall}
            alt="Soumik Bag"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              block
              h-auto
              w-full
              object-contain
              drop-shadow-[0_25px_35px_rgba(0,0,0,.7)]
            "
          />
        </motion.div>

        {/* ====================================================
            MOBILE FORM
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            mt-5
            overflow-hidden
            rounded-[18px]
            border
            border-[#a35a40]/60
            bg-[#160704]/80
          "
        >
          {/* MOBILE FORM HEADER */}

          <div
            className="
              border-b
              border-[#77432f]/45
              px-6
              pb-6
              pt-8
            "
          >
            <p
              className="
                text-[7px]
                tracking-[0.45em]
                text-[#9a5943]
              "
            >
              BEGIN THE CONVERSATION
            </p>

            <h2
              className="
                mt-3
                font-serif
                text-4xl
                leading-none
                tracking-[-0.06em]
                text-[#f1dac7]
              "
            >
              Let's work together.
            </h2>

            <p
              className="
                mt-3
                font-serif
                text-base
                text-[#b97457]
              "
            >
              আপনার ভাবনা, আমার ক্যানভাস।
            </p>
          </div>

          {/* MOBILE FORM BODY */}

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="mobile-form"
                onSubmit={handleSubmit}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="
                  space-y-4
                  p-6
                "
              >
                {/* NAME */}

                <ContactField
                  number="01"
                  icon={<UserIcon />}
                  label="YOUR NAME"
                  placeholder="How should I address you?"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />

                {/* EMAIL */}

                <ContactField
                  number="02"
                  icon={
                    <Mail
                      size={17}
                      strokeWidth={1}
                    />
                  }
                  label="EMAIL ADDRESS"
                  placeholder="Where can I reach you?"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {/* MESSAGE */}

                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#824934]/55
                    bg-[#100301]/50
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      px-4
                      pt-3
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-[10px]
                        text-[#a55f46]
                      "
                    >
                      03
                    </span>

                    <span
                      className="
                        text-[7px]
                        tracking-[0.32em]
                        text-[#95604d]
                      "
                    >
                      YOUR MESSAGE
                    </span>
                  </div>

                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your idea..."
                    className="
                      w-full
                      resize-none
                      bg-transparent
                      px-4
                      pb-4
                      pt-2
                      font-serif
                      text-base
                      leading-6
                      text-[#ead2bf]
                      outline-none
                      placeholder:text-[#68473c]
                    "
                  />
                </div>

                {/* MOBILE ERROR */}

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="
                        rounded-lg
                        border
                        border-[#914b36]/50
                        bg-[#230a05]/70
                        px-4
                        py-3
                        text-xs
                        text-[#c58269]
                      "
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* SEND */}

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-[#b4694c]/70
                    bg-[#71301d]
                    font-serif
                    text-sm
                    tracking-[0.25em]
                    text-[#f1d6c1]
                    disabled:opacity-60
                  "
                >
                  {sending
                    ? "SENDING..."
                    : "SEND MESSAGE"}

                  <Send
                    size={15}
                    strokeWidth={1}
                  />
                </motion.button>

                {/* MOBILE FORM FOOTER */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#6e3e2d]/35
                    pt-3
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#c77b59]
                      "
                    />

                    <span
                      className="
                        text-[6px]
                        tracking-[0.28em]
                        text-[#765044]
                      "
                    >
                      CHANNEL OPEN
                    </span>
                  </div>

                  <span
                    className="
                      text-[6px]
                      tracking-[0.25em]
                      text-[#624238]
                    "
                  >
                    PERSONAL · DIRECT
                  </span>
                </div>
              </motion.form>
            ) : (
              /* =================================================
                 MOBILE SUCCESS
              ================================================== */

              <motion.div
                key="mobile-success"
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="
                  flex
                  min-h-[400px]
                  flex-col
                  items-center
                  justify-center
                  px-7
                  text-center
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#bd704f]/60
                    bg-[#3b1208]
                  "
                >
                  <Check
                    size={22}
                    strokeWidth={1.3}
                    className="text-[#e2b093]"
                  />
                </div>

                <p
                  className="
                    mt-6
                    text-[7px]
                    tracking-[0.42em]
                    text-[#98604a]
                  "
                >
                  MESSAGE RECEIVED
                </p>

                <h3
                  className="
                    mt-3
                    font-serif
                    text-4xl
                    text-[#f0d6c2]
                  "
                >
                  ধন্যবাদ।
                </h3>

                <p
                  className="
                    mt-4
                    font-serif
                    leading-7
                    text-[#a87d68]
                  "
                >
                  আপনার message পৌঁছে গেছে।
                  <br />
                  খুব শীঘ্রই কথা হবে।
                </p>

                <button
                  onClick={sendAnother}
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-[7px]
                    tracking-[0.3em]
                    text-[#97604b]
                  "
                >
                  SEND ANOTHER MESSAGE

                  <ArrowUpRight
                    size={11}
                    strokeWidth={1}
                  />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* MOBILE FOOTER */}

        <div
          className="
            mt-8
            border-t
            border-[#70402f]/35
            pt-4
          "
        >
          <p
            className="
              font-serif
              text-sm
              italic
              text-[#9f624c]
            "
          >
            দেখা হবে · কথা হবে · কিছু তৈরি হবে
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT FIELD
============================================================ */

function ContactField({
  number,
  icon,
  label,
  placeholder,
  name,
  type,
  value,
  onChange,
}) {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border
        border-[#824934]/55
        bg-[#100301]/50
        transition-all
        duration-300
        focus-within:border-[#bd6f50]/80
        focus-within:bg-[#170603]/70
      "
    >
      {/* FIELD HEADER */}

      <div
        className="
          flex
          items-center
          gap-3
          px-4
          pt-3
        "
      >
        <span
          className="
            font-serif
            text-[10px]
            text-[#a55f46]
          "
        >
          {number}
        </span>

        <span className="text-[#a96348]">
          {icon}
        </span>

        <span
          className="
            text-[7px]
            tracking-[0.32em]
            text-[#95604d]
          "
        >
          {label}
        </span>

        <span
          className="
            ml-auto
            text-[6px]
            tracking-[0.2em]
            text-[#624237]
          "
        >
          REQUIRED
        </span>
      </div>

      {/* INPUT */}

      <input
        id={name}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          bg-transparent
          px-4
          pb-4
          pt-2
          font-serif
          text-[15px]
          text-[#ead2bf]
          outline-none
          placeholder:text-[#69473c]
        "
      />
    </div>
  );
}

/* ============================================================
   USER ICON
============================================================ */

function UserIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="12"
        cy="8"
        r="3.5"
      />

      <path d="M5 20c.7-3.2 3.2-5 7-5s6.3 1.8 7 5" />
    </svg>
  );
}
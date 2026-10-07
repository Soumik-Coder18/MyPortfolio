import React, { useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";

/* ============================================================
   FOOTER MUSIC
============================================================ */

const YOUTUBE_VIDEO_ID = "Mbzw09t7YiM";

/*
 * Start music from 00:25
 */
const AUDIO_START_TIME = 25;

/*
 * Maximum music volume.
 * Kept subtle so it feels like cinematic BGM.
 */
const AUDIO_VOLUME = 28;

/* ============================================================
   SOCIAL LINKS
============================================================ */

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/Soumik-Coder18",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/soumik-bag-0b9900253/",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "https://x.com/SoumikBag6?t=T1nxPg-bMj7MGNyNpEZQzQ&s=09",
    label: "Twitter",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/soumik_bag_18/",
    label: "Instagram",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/share/16QNnn76wM/",
    label: "Facebook",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:bagsoumik6@gmail.com",
    label: "Email",
  },
];

/* ============================================================
   ALPANA CORNER
   Subtle Bengali-inspired geometric ornament
============================================================ */

function AlpanaCorner({ position }) {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        ${position}
        h-20
        w-20
        opacity-35
      `}
    >
      {/* Outer diamond */}

      <span
        className="
          absolute
          inset-2
          rotate-45
          border
          border-[#b76547]/45
        "
      />

      {/* Inner diamond */}

      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          rotate-45
          border
          border-[#c27652]/45
        "
      />

      {/* Center */}

      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c27652]/45
        "
      />

      {/* Horizontal / vertical lines */}

      <span className="absolute left-0 top-1/2 h-px w-5 bg-[#b76547]/40" />

      <span className="absolute right-0 top-1/2 h-px w-5 bg-[#b76547]/40" />

      <span className="absolute left-1/2 top-0 h-5 w-px bg-[#b76547]/40" />

      <span className="absolute bottom-0 left-1/2 h-5 w-px bg-[#b76547]/40" />
    </div>
  );
}

/* ============================================================
   FOOTER AUDIO PLAYER
============================================================ */

function FooterAudio() {
  const playerRef = useRef(null);
  const playerMountRef = useRef(null);

  const isInsideRef = useRef(false);
  const apiReadyRef = useRef(false);

  const fadeFrameRef = useRef(null);
  const stopTimeoutRef = useRef(null);
  const apiIntervalRef = useRef(null);

  /* ----------------------------------------------------------
     FADE VOLUME
  ---------------------------------------------------------- */

  const fadeVolume = (
    targetVolume,
    duration = 1500
  ) => {
    const player = playerRef.current;

    if (
      !player ||
      !apiReadyRef.current
    ) {
      return;
    }

    if (fadeFrameRef.current) {
      cancelAnimationFrame(
        fadeFrameRef.current
      );
    }

    let startVolume = 0;

    try {
      startVolume =
        typeof player.getVolume === "function"
          ? player.getVolume()
          : 0;
    } catch {
      startVolume = 0;
    }

    const startTime =
      performance.now();

    const animate = (currentTime) => {
      const elapsed =
        currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      /*
       * Smooth ease-in-out.
       */
      const eased =
        progress < 0.5
          ? 2 *
            progress *
            progress
          : 1 -
            Math.pow(
              -2 * progress + 2,
              2
            ) /
              2;

      const volume =
        startVolume +
        (targetVolume -
          startVolume) *
          eased;

      try {
        player.setVolume(
          volume
        );
      } catch {
        return;
      }

      if (progress < 1) {
        fadeFrameRef.current =
          requestAnimationFrame(
            animate
          );
      } else {
        fadeFrameRef.current =
          null;
      }
    };

    fadeFrameRef.current =
      requestAnimationFrame(
        animate
      );
  };

  /* ----------------------------------------------------------
     START AUDIO
  ---------------------------------------------------------- */

  const startAudio = () => {
    const player =
      playerRef.current;

    if (
      !player ||
      !apiReadyRef.current ||
      !isInsideRef.current
    ) {
      return;
    }

    if (stopTimeoutRef.current) {
      clearTimeout(
        stopTimeoutRef.current
      );

      stopTimeoutRef.current =
        null;
    }

    try {
      /*
       * Always begin from 00:25.
       */
      player.seekTo(
        AUDIO_START_TIME,
        true
      );

      /*
       * Start muted.
       *
       * Browsers are much more likely
       * to permit muted autoplay.
       */
      player.mute();

      player.setVolume(0);

      player.playVideo();

      /*
       * Give YouTube time to begin playback.
       */
      setTimeout(() => {
        if (
          !isInsideRef.current ||
          !playerRef.current
        ) {
          return;
        }

        try {
          /*
           * Attempt to restore sound.
           */
          player.unMute();

          player.setVolume(0);

          fadeVolume(
            AUDIO_VOLUME,
            1800
          );
        } catch (error) {
          console.warn(
            "Footer audio could not be unmuted:",
            error
          );
        }
      }, 800);
    } catch (error) {
      console.warn(
        "Footer audio failed to start:",
        error
      );
    }
  };

  /* ----------------------------------------------------------
     STOP AUDIO
  ---------------------------------------------------------- */

  const stopAudio = () => {
    const player =
      playerRef.current;

    if (
      !player ||
      !apiReadyRef.current
    ) {
      return;
    }

    if (fadeFrameRef.current) {
      cancelAnimationFrame(
        fadeFrameRef.current
      );
    }

    /*
     * Fade out.
     */
    fadeVolume(
      0,
      1000
    );

    /*
     * Pause after fade.
     */
    stopTimeoutRef.current =
      setTimeout(() => {
        /*
         * Footer became visible again
         * before fade completed.
         */
        if (
          isInsideRef.current
        ) {
          return;
        }

        try {
          player.pauseVideo();

          /*
           * Reset position.
           */
          player.seekTo(
            AUDIO_START_TIME,
            true
          );

          player.mute();

          player.setVolume(0);
        } catch {}
      }, 1050);
  };

  /* ----------------------------------------------------------
     CREATE YOUTUBE PLAYER
  ---------------------------------------------------------- */

  useEffect(() => {
    let destroyed = false;

    const createPlayer = () => {
      if (
        destroyed ||
        !playerMountRef.current ||
        !window.YT ||
        !window.YT.Player ||
        playerRef.current
      ) {
        return;
      }

      playerRef.current =
        new window.YT.Player(
          playerMountRef.current,
          {
            width: "300",
            height: "169",

            videoId:
              YOUTUBE_VIDEO_ID,

            playerVars: {
              autoplay: 0,
              controls: 0,
              disablekb: 1,
              fs: 0,
              playsinline: 1,
              rel: 0,
              modestbranding: 1,
              iv_load_policy: 3,

              /*
               * Initial position.
               */
              start:
                AUDIO_START_TIME,

              /*
               * Required for some browsers.
               */
              origin:
                window.location.origin,
            },

            events: {
              /* ==========================================
                 READY
              ========================================== */

              onReady: (event) => {
                if (destroyed) {
                  return;
                }

                apiReadyRef.current =
                  true;

                try {
                  event.target.mute();

                  event.target.setVolume(
                    0
                  );

                  event.target.seekTo(
                    AUDIO_START_TIME,
                    true
                  );

                  /*
                   * Footer might already be
                   * visible when player loads.
                   */
                  if (
                    isInsideRef.current
                  ) {
                    startAudio();
                  }
                } catch {}
              },

              /* ==========================================
                 STATE CHANGE
              ========================================== */

              onStateChange: (
                event
              ) => {
                if (
                  !window.YT
                ) {
                  return;
                }

                /*
                 * If track reaches its end
                 * while Footer is visible,
                 * restart at 00:25.
                 */
                if (
                  event.data ===
                    window.YT
                      .PlayerState
                      .ENDED &&
                  isInsideRef.current
                ) {
                  try {
                    event.target.seekTo(
                      AUDIO_START_TIME,
                      true
                    );

                    event.target.playVideo();

                    setTimeout(() => {
                      if (
                        !isInsideRef.current
                      ) {
                        return;
                      }

                      try {
                        event.target.unMute();

                        fadeVolume(
                          AUDIO_VOLUME,
                          1000
                        );
                      } catch {}
                    }, 500);
                  } catch {}
                }
              },

              /* ==========================================
                 AUTOPLAY BLOCKED
              ========================================== */

              onAutoplayBlocked: () => {
                console.warn(
                  "YouTube blocked Footer audio autoplay. User interaction may be required before audible playback."
                );
              },

              /* ==========================================
                 ERROR
              ========================================== */

              onError: (event) => {
                console.warn(
                  "YouTube Footer audio error:",
                  event.data
                );

                /*
                 * Error 150 means the video
                 * cannot be played in an embed.
                 */
                if (
                  event.data ===
                  150
                ) {
                  console.warn(
                    "YouTube error 150: this video does not allow embedded playback."
                  );
                }
              },
            },
          }
        );
    };

    /* ------------------------------------------------------
       API ALREADY LOADED
    ------------------------------------------------------ */

    if (
      window.YT &&
      window.YT.Player
    ) {
      createPlayer();
    } else {
      /*
       * Don't add duplicate API scripts.
       */
      const existingScript =
        document.querySelector(
          'script[src="https://www.youtube.com/iframe_api"]'
        );

      if (!existingScript) {
        const script =
          document.createElement(
            "script"
          );

        script.src =
          "https://www.youtube.com/iframe_api";

        script.async = true;

        document.body.appendChild(
          script
        );
      }

      /*
       * Wait for YouTube API.
       */
      apiIntervalRef.current =
        setInterval(() => {
          if (
            window.YT &&
            window.YT.Player
          ) {
            clearInterval(
              apiIntervalRef.current
            );

            apiIntervalRef.current =
              null;

            createPlayer();
          }
        }, 100);
    }

    /* ------------------------------------------------------
       CLEANUP
    ------------------------------------------------------ */

    return () => {
      destroyed = true;

      if (
        apiIntervalRef.current
      ) {
        clearInterval(
          apiIntervalRef.current
        );

        apiIntervalRef.current =
          null;
      }

      if (
        fadeFrameRef.current
      ) {
        cancelAnimationFrame(
          fadeFrameRef.current
        );
      }

      if (
        stopTimeoutRef.current
      ) {
        clearTimeout(
          stopTimeoutRef.current
        );
      }

      if (playerRef.current) {
        try {
          playerRef.current.stopVideo();
          playerRef.current.destroy();
        } catch {}
      }

      playerRef.current = null;

      apiReadyRef.current =
        false;
    };
  }, []);

  /* ----------------------------------------------------------
     FOOTER INTERSECTION OBSERVER
  ---------------------------------------------------------- */

  useEffect(() => {
    const footer =
      document.getElementById(
        "site-footer"
      );

    if (!footer) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const entry =
            entries[0];

          /*
           * FOOTER ENTERED
           *
           * At least 50% visible.
           */
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >=
              0.5
          ) {
            if (
              !isInsideRef.current
            ) {
              isInsideRef.current =
                true;

              startAudio();
            }
          }

          /*
           * FOOTER LEFT
           */
          else {
            if (
              isInsideRef.current
            ) {
              isInsideRef.current =
                false;

              stopAudio();
            }
          }
        },
        {
          threshold: [
            0,
            0.5,
            0.75,
          ],
        }
      );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Invisible YouTube player.
   *
   * It is kept at a valid player size instead
   * of 1px × 1px.
   */
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        left-[-9999px]
        top-[-9999px]
        h-[300px]
        w-[300px]
        overflow-hidden
        opacity-0
      "
    >
      <div
        ref={playerMountRef}
      />
    </div>
  );
}

/* ============================================================
   FOOTER
============================================================ */

const Footer = () => {
  const year =
    new Date().getFullYear();

  /* ----------------------------------------------------------
     BACK TO TOP
  ---------------------------------------------------------- */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="site-footer"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#100604]
        text-[#eedbca]
      "
    >
      {/* ======================================================
          FOOTER AUDIO
      ======================================================= */}

      <FooterAudio />

      {/* ======================================================
          DEEP BACKGROUND
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-[radial-gradient(
            ellipse_at_50%_0%,
            rgba(117,45,25,.20),
            rgba(34,10,5,.12)_35%,
            rgba(8,2,1,.88)_100%
          )]
        "
      />

      {/* ======================================================
          TERRACOTTA LIGHT
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-120px]
          -z-20
          h-[420px]
          w-[720px]
          -translate-x-1/2
          rounded-full
          bg-[#a94f31]/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[12%]
          -z-20
          h-[240px]
          w-[240px]
          rounded-full
          bg-[#702b1c]/10
          blur-[120px]
        "
      />

      {/* ======================================================
          DARK GRADIENT
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(
            to_bottom,
            rgba(16,6,4,.20),
            rgba(16,6,4,.40)_40%,
            rgba(8,2,1,.94)_100%
          )]
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
          shadow-[inset_0_0_180px_rgba(0,0,0,.75)]
        "
      />

      {/* ======================================================
          SUBTLE GRAIN
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
          border
          border-[#a45a40]/20
          sm:inset-5
          lg:inset-7
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-7
          hidden
          border
          border-[#9b5038]/10
          lg:block
        "
      />

      {/* ======================================================
          ALPANA CORNERS
      ======================================================= */}

      <AlpanaCorner position="left-8 top-8" />

      <AlpanaCorner position="right-8 top-8" />

      <AlpanaCorner position="left-8 bottom-8" />

      <AlpanaCorner position="right-8 bottom-8" />

      {/* ======================================================
          MAIN
      ======================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-8
          py-14
          sm:px-12
          sm:py-16
          lg:px-20
          lg:py-20
        "
      >
        {/* ====================================================
            TOP IDENTIFIER
        ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#74402f]/35
            pb-5
          "
        >
          <div className="flex items-center gap-4">
            <span
              className="
                h-px
                w-10
                bg-[#b96749]
              "
            />

            <span
              className="
                text-[7px]
                tracking-[0.5em]
                text-[#9b5e48]
              "
            >
              SOUMIK BAG
            </span>
          </div>

          <div
            className="
              hidden
              items-center
              gap-2
              sm:flex
            "
          >
            <MapPin
              size={11}
              strokeWidth={1}
              className="text-[#a9674f]"
            />

            <span
              className="
                text-[7px]
                tracking-[0.34em]
                text-[#795043]
              "
            >
              KOLKATA · WEST BENGAL
            </span>
          </div>
        </div>

        {/* ====================================================
            HERO FOOTER MESSAGE
        ===================================================== */}

        <div
          className="
            relative
            py-16
            sm:py-20
            lg:py-24
          "
        >
          {/* Bengali mark */}

          <div
            className="
              absolute
              left-1/2
              top-8
              flex
              -translate-x-1/2
              items-center
              gap-4
            "
          >
            <span className="h-px w-14 bg-[#79422f]/50" />

            <span
              className="
                font-serif
                text-xl
                text-[#b96849]
              "
            >
              ❖
            </span>

            <span className="h-px w-14 bg-[#79422f]/50" />
          </div>

          {/* Chapter */}

          <p
            className="
              text-center
              text-[7px]
              tracking-[0.52em]
              text-[#8e5542]
            "
          >
            শেষ অধ্যায় · THE LAST FRAME
          </p>

          {/* Main Bengali statement */}

          <h2
            className="
              mx-auto
              mt-6
              max-w-[1000px]
              text-center
              font-serif
              text-[clamp(3rem,7vw,7rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.055em]
              text-[#f1dfce]
            "
          >
            গল্প শেষ নয়,
            <br />

            <span className="text-[#c06d4e]">
              আবার দেখা হবে।
            </span>
          </h2>

          {/* English support */}

          <p
            className="
              mx-auto
              mt-7
              max-w-[620px]
              text-center
              font-serif
              text-base
              leading-7
              text-[#9d7563]
              sm:text-lg
            "
          >
            The work may end here,
            but every good idea leaves
            a reason to begin again.
          </p>

          {/* Bengali line */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-8 bg-[#804632]" />

            <p
              className="
                font-serif
                text-sm
                italic
                text-[#b87558]
                sm:text-base
              "
            >
              দেখা হবে · কথা হবে · কিছু তৈরি হবে
            </p>

            <span className="h-px w-8 bg-[#804632]" />
          </div>
        </div>

        {/* ====================================================
            SOCIAL / CONNECT STRIP
        ===================================================== */}

        <div
          className="
            border-y
            border-[#74402f]/35
            py-7
          "
        >
          <div
            className="
              flex
              flex-col
              gap-7
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* LEFT */}

            <div>
              <p
                className="
                  text-[7px]
                  tracking-[0.45em]
                  text-[#8e5542]
                "
              >
                STAY CONNECTED
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-lg
                  text-[#c0947e]
                "
              >
                চলুন, নতুন কিছু শুরু করি।
              </p>
            </div>

            {/* SOCIALS */}

            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map(
                (link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={
                      link.url.startsWith(
                        "http"
                      )
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      link.url.startsWith(
                        "http"
                      )
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={
                      link.label
                    }
                    className="
                      group
                      relative
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#8a4c37]/45
                      bg-[#160704]/70
                      text-[#9e6a55]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#bd7252]/80
                      hover:bg-[#281009]
                      hover:text-[#e1ad92]
                    "
                  >
                    {/* Inner ring */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-1
                        rounded-full
                        border
                        border-[#9e5940]/10
                        transition-all
                        duration-300
                        group-hover:border-[#b9694b]/30
                      "
                    />

                    {/* Glow */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        bg-[#a95336]/10
                        opacity-0
                        blur-md
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    <span className="relative z-10 text-[15px]">
                      {link.icon}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* ====================================================
            BOTTOM INFORMATION
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-6
            lg:grid-cols-3
            lg:items-center
          "
        >
          {/* LEFT */}

          <div>
            <p
              className="
                text-[6px]
                tracking-[0.4em]
                text-[#63443a]
              "
            >
              © {year} SOUMIK BAG
            </p>

            <p
              className="
                mt-2
                text-[6px]
                tracking-[0.28em]
                text-[#594039]
              "
            >
              ALL RIGHTS RESERVED
            </p>
          </div>

          {/* CENTER */}

          <div className="text-center">
            <p
              className="
                font-serif
                text-[13px]
                italic
                text-[#795245]
              "
            >
              মাটি · মানুষ · স্মৃতি · প্রযুক্তি
            </p>
          </div>

          {/* RIGHT */}

          <div className="flex justify-start lg:justify-end">
            <button
              onClick={
                scrollToTop
              }
              className="
                group
                flex
                items-center
                gap-3
                border
                border-[#8b4c37]/45
                bg-[#160604]/60
                px-5
                py-3
                text-[7px]
                tracking-[0.3em]
                text-[#96604c]
                transition-all
                duration-300
                hover:border-[#b96b4d]/75
                hover:bg-[#241008]
                hover:text-[#d19a7d]
              "
            >
              BACK TO TOP

              <ArrowUpRight
                size={13}
                strokeWidth={1}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </button>
          </div>
        </div>

        {/* ====================================================
            FINAL SIGNATURE
        ===================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-[#74402f]/45" />

            <span
              className="
                font-serif
                text-2xl
                italic
                text-[#b36a4d]
              "
            >
              Soumik Bag
            </span>

            <span className="h-px w-16 bg-[#74402f]/45" />
          </div>

          <p
            className="
              mt-3
              text-[6px]
              tracking-[0.45em]
              text-[#5d4037]
            "
          >
            BUILT WITH CURIOSITY · CRAFTED WITH CULTURE
          </p>
        </div>
      </div>

      {/* ======================================================
          BOTTOM LINE
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[75%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#a45b42]/45
          to-transparent
        "
      />
    </footer>
  );
};

export default Footer;
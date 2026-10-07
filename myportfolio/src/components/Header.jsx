import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    bengali: "ঘর",
    href: "#hero",
  },
  {
    name: "About",
    bengali: "আমার কথা",
    href: "#about",
  },
  {
    name: "Skills",
    bengali: "দক্ষতা",
    href: "#skills",
  },
  {
    name: "Projects",
    bengali: "কাজ",
    href: "#projects",
  },
  {
    name: "Education",
    bengali: "শিক্ষা",
    href: "#education",
  },
  {
    name: "Contact",
    bengali: "যোগাযোগ",
    href: "#contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-[200]
        transition-all
        duration-700
        ${
          scrolled
            ? "bg-[#1b0d09]/90 backdrop-blur-[10px]"
            : "bg-gradient-to-b from-[#160a07]/55 via-[#160a07]/20 to-transparent"
        }
      `}
    >
      {/* =====================================================
          TOP TERRACOTTA HAIRLINE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px]">
        <div
          className="
            h-full
            bg-gradient-to-r
            from-transparent
            via-[#c17b55]/75
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-[42px]
          max-w-[1450px]
          items-center
          justify-between
          px-6
          sm:px-8
          lg:px-12
        "
      >
        {/* =================================================
            LOGO
        ================================================== */}

        <a
          href="#hero"
          className="
            group
            relative
            flex
            items-center
          "
        >
          {/* Terracotta seal */}

          <div
            className="
              relative
              flex
              h-[43px]
              w-[43px]
              items-center
              justify-center
            "
          >
            {/* outer carved circle */}

            <span
              className="
                absolute
                inset-[3px]
                rounded-full
                border
                border-[#c88964]/45
              "
            />

            {/* four architectural marks */}

            <span
              className="
                absolute
                left-0
                top-1/2
                h-[1px]
                w-2
                bg-[#d09a73]/50
              "
            />

            <span
              className="
                absolute
                right-0
                top-1/2
                h-[1px]
                w-2
                bg-[#d09a73]/50
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-0
                h-2
                w-[1px]
                bg-[#d09a73]/50
              "
            />

            <span
              className="
                absolute
                bottom-0
                left-1/2
                h-2
                w-[1px]
                bg-[#d09a73]/50
              "
            />

            {/* inner lotus/terracotta motif */}

            <span
              className="
                absolute
                h-[19px]
                w-[19px]
                rotate-45
                border
                border-[#d6a077]/65
                transition-transform
                duration-700
                group-hover:rotate-[225deg]
              "
            />

            <span
              className="
                absolute
                h-[7px]
                w-[7px]
                rotate-45
                bg-[#a94f39]
                shadow-[0_0_12px_rgba(169,79,57,0.25)]
              "
            />
          </div>

          {/* logo typography */}

          <div className="ml-3">
            <div
              className="
                text-[17px]
                leading-none
                tracking-[0.08em]
                text-[#ecd7bd]
                transition-colors
                duration-500
                group-hover:text-[#f3c994]
              "
              style={{
                fontFamily:
                  "'Playfair Display', Georgia, serif",
              }}
            >
              SOUMIK
            </div>

            <div
              className="
                mt-[5px]
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.42em]
                  text-[#c7a17e]/55
                "
              >
                BAG
              </span>

              <span className="h-px w-5 bg-[#b86d4e]/40" />

              <span
                className="
                  text-[6px]
                  uppercase
                  tracking-[0.25em]
                  text-[#c7a17e]/35
                "
              >
                Bengal
              </span>
            </div>
          </div>
        </a>

        {/* =================================================
            DESKTOP NAV
        ================================================== */}

        <nav className="hidden md:flex">
          <div className="flex items-center gap-7 lg:gap-9">
            {navLinks.map(
              ({ name, bengali, href }) => (
                <a
                  key={name}
                  href={href}
                  className="
                    group
                    relative
                    flex
                    h-[38px]
                    min-w-[48px]
                    items-center
                    justify-center
                  "
                >
                  {/* English */}

                  <span
                    className="
                      absolute
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#e5d2b9]/65
                      transition-all
                      duration-300
                      group-hover:translate-y-[-7px]
                      group-hover:opacity-0
                    "
                  >
                    {name}
                  </span>

                  {/* Bengali hover */}

                  <span
                    className="
                      absolute
                      translate-y-[7px]
                      text-[13px]
                      text-[#e9b981]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                    style={{
                      fontFamily:
                        "'Noto Serif Bengali', serif",
                    }}
                  >
                    {bengali}
                  </span>

                  {/* carved underline */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-[#c4835d]
                      to-transparent
                      transition-all
                      duration-500
                      group-hover:w-8
                    "
                  />
                </a>
              )
            )}
          </div>
        </nav>

        {/* =================================================
            CINEMATIC CTA
        ================================================== */}

        <a
          href="#contact"
          className="
            group
            relative
            hidden
            md:block
          "
        >
          {/* shadow */}

          <span
            className="
              absolute
              inset-0
              translate-x-[3px]
              translate-y-[3px]
              bg-[#3b1b13]
            "
          />

          {/* sign */}

          <span
            className="
              relative
              block
              border
              border-[#c88c67]/45
              bg-[#713427]/90
              px-5
              py-2.5
              transition-all
              duration-500
              group-hover:-translate-y-[2px]
              group-hover:bg-[#833d2e]
            "
          >
            {/* inner frame */}

            <span
              className="
                pointer-events-none
                absolute
                inset-[3px]
                border
                border-[#e0ae87]/15
              "
            />

            {/* English default */}

            <span
              className="
                relative
                block
                text-center
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-[#ead1b4]
                transition-all
                duration-300
                group-hover:opacity-0
              "
            >
              Let's Talk
            </span>

            {/* Bengali hover */}

            <span
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                text-[13px]
                text-[#f1c99f]
                opacity-0
                transition-all
                duration-300
                group-hover:opacity-100
              "
              style={{
                fontFamily:
                  "'Noto Serif Bengali', serif",
              }}
            >
              চলো কথা বলি
            </span>
          </span>
        </a>

        {/* =================================================
            MOBILE MENU
        ================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-[#c88c67]/35
            bg-[#351a12]/60
            text-[#e8c8a5]
            transition-all
            duration-300
            hover:border-[#dfa77d]/60
            md:hidden
          "
        >
          {menuOpen ? (
            <X size={18} strokeWidth={1.3} />
          ) : (
            <Menu size={18} strokeWidth={1.3} />
          )}
        </button>
      </div>

      {/* =====================================================
          TERRACOTTA ARCHITECTURAL ORNAMENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          relative
          mx-auto
          h-[14px]
          max-w-[1450px]
          overflow-hidden
        "
      >
        {/* long architectural line */}

        <div
          className="
            absolute
            left-6
            right-6
            top-[6px]
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#b87554]/30
            to-transparent
            sm:left-8
            sm:right-8
            lg:left-12
            lg:right-12
          "
        />

        {/* central terracotta carving */}

        <div
          className="
            absolute
            left-1/2
            top-[2px]
            flex
            -translate-x-1/2
            items-center
          "
        >
          <span className="h-px w-16 bg-[#b87554]/25" />

          <span
            className="
              mx-2
              h-[7px]
              w-[7px]
              rotate-45
              border
              border-[#c88865]/45
            "
          />

          <span
            className="
              h-[3px]
              w-[3px]
              rounded-full
              bg-[#b2553e]/60
            "
          />

          <span
            className="
              mx-2
              h-[7px]
              w-[7px]
              rotate-45
              border
              border-[#c88865]/45
            "
          />

          <span className="h-px w-16 bg-[#b87554]/25" />
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          overflow-hidden
          bg-[#1b0d09]/97
          backdrop-blur-xl
          transition-all
          duration-500
          md:hidden
          ${
            menuOpen
              ? "max-h-[600px] border-b border-[#c48764]/20 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="px-6 pb-7 pt-2">
          {navLinks.map(
            ({ name, bengali, href }) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#d09a75]/10
                  py-4
                "
              >
                <div>
                  <div
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-[#e4d0b5]/65
                      transition-colors
                      group-hover:text-[#efc28f]
                    "
                  >
                    {name}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[11px]
                      text-[#b97957]/60
                    "
                    style={{
                      fontFamily:
                        "'Noto Serif Bengali', serif",
                    }}
                  >
                    {bengali}
                  </div>
                </div>

                <span
                  className="
                    text-[#b65e45]/60
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            )
          )}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-5
              inline-block
              border
              border-[#c88c67]/40
              bg-[#713427]
              px-5
              py-2.5
              text-[#f0cfad]
            "
            style={{
              fontFamily:
                "'Noto Serif Bengali', serif",
            }}
          >
            চলো কথা বলি →
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
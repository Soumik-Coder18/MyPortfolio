// src/components/GameWidget.jsx

import React, { useMemo, useState } from "react";
import {
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

/* ============================================================
   BENGALI CALENDAR — WEST BENGAL / BISHUDDHA SIDDHANTA
   1433 বঙ্গাব্দ
============================================================ */

const BENGALI_MONTHS = [
  {
    name: "বৈশাখ",
    english: "Boishakh",
    start: "2026-04-15",
  },
  {
    name: "জ্যৈষ্ঠ",
    english: "Jyoishtho",
    start: "2026-05-16",
  },
  {
    name: "আষাঢ়",
    english: "Asharh",
    start: "2026-06-16",
  },
  {
    name: "শ্রাবণ",
    english: "Shrabon",
    start: "2026-07-18",
  },
  {
    name: "ভাদ্র",
    english: "Bhadro",
    start: "2026-08-19",
  },
  {
    name: "আশ্বিন",
    english: "Ashwin",
    start: "2026-09-19",
  },
  {
    name: "কার্তিক",
    english: "Kartik",
    start: "2026-10-19",
  },
  {
    name: "অগ্রহায়ণ",
    english: "Agrahayon",
    start: "2026-11-18",
  },
  {
    name: "পৌষ",
    english: "Poush",
    start: "2026-12-17",
  },
  {
    name: "মাঘ",
    english: "Magh",
    start: "2027-01-16",
  },
  {
    name: "ফাল্গুন",
    english: "Falgun",
    start: "2027-02-15",
  },
  {
    name: "চৈত্র",
    english: "Choitro",
    start: "2027-03-16",
  },
];

/* ============================================================
   WEEKDAYS
============================================================ */

const WEEKDAYS = [
  "রবি",
  "সোম",
  "মঙ্গল",
  "বুধ",
  "বৃহস্পতি",
  "শুক্র",
  "শনি",
];

/* ============================================================
   BENGALI NUMBERS
============================================================ */

const BENGALI_DIGITS = [
  "০",
  "১",
  "২",
  "৩",
  "৪",
  "৫",
  "৬",
  "৭",
  "৮",
  "৯",
];

const toBengaliNumber = (number) => {
  return String(number)
    .split("")
    .map(
      (digit) =>
        BENGALI_DIGITS[Number(digit)] ?? digit
    )
    .join("");
};

/* ============================================================
   DATE HELPERS
============================================================ */

const parseDate = (value) => {
  const [year, month, day] =
    value.split("-").map(Number);

  return new Date(year, month - 1, day);
};

const formatISODate = (date) => {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const differenceInDays = (first, second) => {
  const oneDay = 1000 * 60 * 60 * 24;

  return Math.round(
    (second.getTime() - first.getTime()) /
      oneDay
  );
};

/* ============================================================
   BENGALI DATE
============================================================ */

const getBengaliDate = (gregorianDate) => {
  const date = new Date(
    gregorianDate.getFullYear(),
    gregorianDate.getMonth(),
    gregorianDate.getDate()
  );

  const currentYearStart =
    parseDate("2026-04-15");

  if (date < currentYearStart) {
    return {
      day: null,
      monthIndex: null,
      year: 1432,
    };
  }

  let monthIndex = 0;

  for (
    let index = 0;
    index < BENGALI_MONTHS.length;
    index++
  ) {
    const start = parseDate(
      BENGALI_MONTHS[index].start
    );

    if (date >= start) {
      monthIndex = index;
    }
  }

  const monthStart = parseDate(
    BENGALI_MONTHS[monthIndex].start
  );

  const day =
    differenceInDays(
      monthStart,
      date
    ) + 1;

  return {
    day,
    monthIndex,
    year: 1433,
  };
};

/* ============================================================
   DAYS IN MONTH
============================================================ */

const getMonthDays = (monthIndex) => {
  const currentStart = parseDate(
    BENGALI_MONTHS[monthIndex].start
  );

  const nextStart =
    monthIndex ===
    BENGALI_MONTHS.length - 1
      ? parseDate("2027-04-15")
      : parseDate(
          BENGALI_MONTHS[
            monthIndex + 1
          ].start
        );

  return differenceInDays(
    currentStart,
    nextStart
  );
};

/* ============================================================
   FESTIVALS / IMPORTANT DATES
============================================================ */

const FESTIVALS = {
  "2026-04-15": {
    title: "পয়লা বৈশাখ",
    reason:
      "বাংলা নববর্ষের প্রথম দিন। নতুন বছরকে স্বাগত জানানো হয় উৎসব, শুভেচ্ছা ও নতুন শুরুর মাধ্যমে।",
  },

  "2026-05-09": {
    title: "রবীন্দ্র জয়ন্তী",
    reason:
      "কবিগুরু রবীন্দ্রনাথ ঠাকুরের জন্মজয়ন্তী। বাংলা সাহিত্য, সংগীত ও সংস্কৃতির অন্যতম গুরুত্বপূর্ণ দিন।",
  },

  "2026-08-15": {
    title: "স্বাধীনতা দিবস",
    reason:
      "ভারতের স্বাধীনতা দিবস। দেশজুড়ে স্বাধীনতা ও দেশের ইতিহাসকে স্মরণ করা হয়।",
  },

  "2026-09-14": {
    title: "গণেশ চতুর্থী",
    reason:
      "ভগবান গণেশের জন্মোৎসব হিসেবে পালিত একটি গুরুত্বপূর্ণ হিন্দু উৎসব।",
  },

  "2026-10-17": {
    title: "মহাষষ্ঠী",
    reason:
      "দুর্গাপূজার সূচনা পর্ব। বাঙালির সবচেয়ে বড় সাংস্কৃতিক উৎসবের আনুষ্ঠানিক আবহ শুরু হয়।",
  },

  "2026-10-18": {
    title: "মহাসপ্তমী",
    reason:
      "দুর্গাপূজার সপ্তমী তিথি। নবপত্রিকা স্নান ও পূজার বিশেষ আচার পালিত হয়।",
  },

  "2026-10-19": {
    title: "মহাষ্টমী",
    reason:
      "দুর্গাপূজার অন্যতম প্রধান দিন। অষ্টমীর অঞ্জলি ও সন্ধিপূজা বাঙালি সংস্কৃতিতে বিশেষ গুরুত্বপূর্ণ।",
  },

  "2026-10-20": {
    title: "মহানবমী",
    reason:
      "দুর্গাপূজার নবমী তিথি। পূজার শেষ পর্বের অন্যতম গুরুত্বপূর্ণ দিন।",
  },

  "2026-10-21": {
    title: "বিজয়া দশমী",
    reason:
      "দুর্গাপূজার সমাপ্তি। দেবী দুর্গার বিসর্জনের সঙ্গে বাঙালির বিজয়ার শুভেচ্ছা বিনিময়ের ঐতিহ্য জড়িয়ে আছে।",
  },

  "2026-11-04": {
    title: "কালীপূজা",
    reason:
      "বাংলার অন্যতম প্রধান উৎসব। দীপ, পূজা ও আলোর মাধ্যমে রাতকে উৎসবমুখর করে তোলা হয়।",
  },

  "2026-11-05": {
    title: "ভ্রাতৃদ্বিতীয়া",
    reason:
      "ভাই-বোনের সম্পর্ক উদযাপনের ঐতিহ্যবাহী বাঙালি উৎসব।",
  },

  "2026-12-25": {
    title: "বড়দিন",
    reason:
      "খ্রিস্টান সম্প্রদায়ের প্রধান উৎসব এবং কলকাতার সাংস্কৃতিক ক্যালেন্ডারেরও একটি পরিচিত দিন।",
  },

  "2027-01-23": {
    title: "সরস্বতী পূজা",
    reason:
      "বিদ্যা, জ্ঞান, সংগীত ও শিল্পের দেবী সরস্বতীর পূজা। বাংলায় এটি শিক্ষার্থী ও সংস্কৃতিপ্রেমীদের বিশেষ উৎসব।",
  },

  "2027-03-08": {
    title: "দোল পূর্ণিমা",
    reason:
      "রঙ ও বসন্তের উৎসব। বাংলার সাংস্কৃতিক জীবনে দোলের বিশেষ ঐতিহ্য রয়েছে।",
  },
};

/* ============================================================
   BUILD CALENDAR
============================================================ */

const buildCalendar = (monthIndex) => {
  const start = parseDate(
    BENGALI_MONTHS[monthIndex].start
  );

  const totalDays =
    getMonthDays(monthIndex);

  const firstWeekday =
    start.getDay();

  const cells = [];

  for (
    let i = 0;
    i < firstWeekday;
    i++
  ) {
    cells.push(null);
  }

  for (
    let day = 1;
    day <= totalDays;
    day++
  ) {
    const currentDate = new Date(start);

    currentDate.setDate(
      start.getDate() + day - 1
    );

    cells.push({
      day,
      date: currentDate,
      iso: formatISODate(
        currentDate
      ),
    });
  }

  return cells;
};

/* ============================================================
   TERRACOTTA SEAL
============================================================ */

const BengaliSeal = () => {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <span
        className="
          absolute inset-1
          rounded-full
          border border-[#c58661]/50
        "
      />

      <span
        className="
          absolute inset-2
          rounded-full
          border border-[#a95b42]/30
        "
      />

      <span
        className="
          absolute h-4 w-4
          rotate-45
          border border-[#d19a70]/60
        "
      />

      <span
        className="
          absolute h-1.5 w-1.5
          rotate-45
          bg-[#a94735]
        "
      />
    </div>
  );
};

/* ============================================================
   CALENDAR WIDGET
============================================================ */

const GameWidget = () => {
  const today = useMemo(
    () => new Date(),
    []
  );

  const currentBengali =
    useMemo(
      () => getBengaliDate(today),
      [today]
    );

  const [
    monthIndex,
    setMonthIndex,
  ] = useState(
    currentBengali.monthIndex ?? 4
  );

  const [open, setOpen] =
    useState(false);

  /*
   * Selected date.
   * Clicking any date highlights it.
   */

  const [
    selectedDate,
    setSelectedDate,
  ] = useState(
    formatISODate(today)
  );

  const cells = useMemo(
    () =>
      buildCalendar(monthIndex),
    [monthIndex]
  );

  const month =
    BENGALI_MONTHS[monthIndex];

  /* ==========================================================
     NAVIGATION
  ========================================================== */

  const previousMonth = () => {
    setMonthIndex(
      (current) =>
        current === 0
          ? BENGALI_MONTHS.length - 1
          : current - 1
    );

    setSelectedDate(null);
  };

  const nextMonth = () => {
    setMonthIndex(
      (current) =>
        current ===
        BENGALI_MONTHS.length - 1
          ? 0
          : current + 1
    );

    setSelectedDate(null);
  };

  const goToday = () => {
    if (
      currentBengali.monthIndex !== null
    ) {
      setMonthIndex(
        currentBengali.monthIndex
      );

      setSelectedDate(
        formatISODate(today)
      );
    }
  };

  /* ==========================================================
     SELECT DATE
  ========================================================== */

  const handleDateClick = (cell) => {
    setSelectedDate(cell.iso);
  };

  /* ==========================================================
     SELECTED DATE INFO
  ========================================================== */

  const selectedFestival =
    selectedDate
      ? FESTIVALS[selectedDate]
      : null;

  const selectedCell =
    cells.find(
      (cell) =>
        cell?.iso === selectedDate
    );

  const selectedDateObject =
    selectedCell?.date;

  const selectedBengali =
    selectedDateObject
      ? getBengaliDate(
          selectedDateObject
        )
      : null;

  const selectedMonthName =
    selectedBengali?.monthIndex !==
    null &&
    selectedBengali?.monthIndex !==
      undefined
      ? BENGALI_MONTHS[
          selectedBengali.monthIndex
        ].name
      : month.name;

  return (
    <>
      {/* ==================================================
          FLOATING CALENDAR BUTTON
      ================================================== */}

      <button
        type="button"
        onClick={() =>
          setOpen(
            (previous) => !previous
          )
        }
        aria-label="Open Bengali calendar"
        title="বাংলা পঞ্জিকা"
        className="
          group
          fixed
          bottom-5
          right-5
          z-[150]

          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full
          border
          border-[#c48661]/45

          bg-[#24100b]/95
          text-[#d6a073]

          shadow-[0_12px_35px_rgba(0,0,0,0.5)]
          backdrop-blur-md

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#d49a72]/75
          hover:bg-[#35160f]
        "
      >
        <span
          className="
            pointer-events-none
            absolute
            inset-[4px]
            rounded-full
            border border-[#a95b42]/20

            transition-transform
            duration-500
            group-hover:rotate-45
          "
        />

        {open ? (
          <FaTimes
            size={16}
            className="relative z-10"
          />
        ) : (
          <FaCalendarAlt
            size={16}
            className="relative z-10"
          />
        )}
      </button>

      {/* ==================================================
          CALENDAR PANEL
      ================================================== */}

      {open && (
        <div
          className="
            fixed
            bottom-[70px]
            right-4
            z-[160]

            w-[330px]
            max-w-[calc(100vw-24px)]

            overflow-hidden

            border
            border-[#a9674b]/35

            bg-[#160806]/[0.98]
            text-[#ead9c4]

            shadow-[0_20px_60px_rgba(0,0,0,0.65)]
            backdrop-blur-xl

            sm:w-[350px]
          "
        >
          {/* =================================================
              TOP LINE
          ================================================== */}

          <div
            className="
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-[#b96748]
              to-transparent
            "
          />

          {/* =================================================
              HEADER — COMPACT
          ================================================== */}

          <div className="px-4 pb-3 pt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <BengaliSeal />

                <div>
                  <p
                    className="
                      text-[6px]
                      uppercase
                      tracking-[0.4em]
                      text-[#9f7059]/60
                    "
                  >
                    Bengal Panjika
                  </p>

                  <h2
                    className="
                      mt-0.5
                      text-[18px]
                      leading-tight
                      text-[#eedcc5]
                    "
                    style={{
                      fontFamily:
                        "'Noto Serif Bengali', Georgia, serif",
                    }}
                  >
                    বাংলা পঞ্জিকা
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setOpen(false)
                }
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center

                  border
                  border-[#a9674b]/25

                  text-[#9f735e]

                  transition-colors
                  hover:border-[#c98765]/55
                  hover:text-[#e0ae88]
                "
              >
                <FaTimes size={10} />
              </button>
            </div>

            {/* Year */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-between

                border-y
                border-[#a9674b]/15

                py-2
              "
            >
              <div>
                <span
                  className="
                    text-[6px]
                    uppercase
                    tracking-[0.35em]
                    text-[#98715e]/55
                  "
                >
                  বঙ্গাব্দ
                </span>

                <p
                  className="
                    mt-0.5
                    text-[16px]
                    leading-none
                    text-[#c88963]
                  "
                  style={{
                    fontFamily:
                      "'Noto Serif Bengali', serif",
                  }}
                >
                  ১৪৩৩
                </p>
              </div>

              <button
                type="button"
                onClick={goToday}
                className="
                  border
                  border-[#ae684b]/30
                  px-2.5
                  py-1.5

                  text-[6px]
                  uppercase
                  tracking-[0.22em]

                  text-[#b98365]

                  transition-all
                  hover:border-[#c78966]/60
                  hover:text-[#dfae88]
                "
              >
                আজ
              </button>
            </div>
          </div>

          {/* =================================================
              MONTH NAVIGATION
          ================================================== */}

          <div
            className="
              flex
              items-center
              justify-between

              border-y
              border-[#a9674b]/15

              px-4
              py-2.5
            "
          >
            <button
              type="button"
              onClick={previousMonth}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center

                border
                border-[#a9674b]/25

                text-[#a97156]

                transition-all

                hover:border-[#c78966]/55
                hover:text-[#e0ab85]
              "
            >
              <FaChevronLeft size={9} />
            </button>

            <div className="text-center">
              <h3
                className="
                  text-[17px]
                  leading-none
                  text-[#ecd8bf]
                "
                style={{
                  fontFamily:
                    "'Noto Serif Bengali', Georgia, serif",
                }}
              >
                {month.name}
              </h3>

              <p
                className="
                  mt-1
                  text-[6px]
                  uppercase
                  tracking-[0.3em]
                  text-[#9c705b]/55
                "
              >
                {month.english} · ১৪৩৩
              </p>
            </div>

            <button
              type="button"
              onClick={nextMonth}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center

                border
                border-[#a9674b]/25

                text-[#a97156]

                transition-all

                hover:border-[#c78966]/55
                hover:text-[#e0ab85]
              "
            >
              <FaChevronRight size={9} />
            </button>
          </div>

          {/* =================================================
              CALENDAR
          ================================================== */}

          <div className="px-4 pb-3 pt-2.5">
            {/* Weekdays */}

            <div
              className="
                mb-1
                grid
                grid-cols-7
                gap-1
              "
            >
              {WEEKDAYS.map(
                (day, index) => (
                  <div
                    key={day}
                    className={`
                      py-1
                      text-center
                      text-[7px]

                      ${
                        index === 0 ||
                        index === 6
                          ? "text-[#a85b45]/65"
                          : "text-[#a88a75]/55"
                      }
                    `}
                    style={{
                      fontFamily:
                        "'Noto Serif Bengali', serif",
                    }}
                  >
                    {day}
                  </div>
                )
              )}
            </div>

            {/* Date Grid */}

            <div
              className="
                grid
                grid-cols-7
                gap-1
              "
            >
              {cells.map(
                (cell, index) => {
                  if (!cell) {
                    return (
                      <div
                        key={`empty-${index}`}
                        className="h-8"
                      />
                    );
                  }

                  const isToday =
                    cell.iso ===
                    formatISODate(
                      today
                    );

                  const isSelected =
                    cell.iso ===
                    selectedDate;

                  const festival =
                    FESTIVALS[
                      cell.iso
                    ];

                  const dayOfWeek =
                    cell.date.getDay();

                  const weekend =
                    dayOfWeek === 0 ||
                    dayOfWeek === 6;

                  return (
                    <button
                      key={cell.iso}
                      type="button"
                      onClick={() =>
                        handleDateClick(
                          cell
                        )
                      }
                      title={
                        festival?.title ||
                        "তারিখ নির্বাচন করুন"
                      }
                      className={`
                        group
                        relative

                        flex
                        h-8
                        items-center
                        justify-center

                        border

                        font-serif
                        transition-all
                        duration-200

                        ${
                          isSelected
                            ? `
                              border-[#d29a70]
                              bg-[#8a3d2b]
                              text-[#ffe3c4]
                              shadow-[0_0_15px_rgba(166,76,52,.25)]
                            `
                            : festival
                            ? `
                              border-[#a9694e]/35
                              bg-[#24100b]
                              text-[#d49a70]

                              hover:border-[#c78966]/65
                              hover:bg-[#35150e]
                            `
                            : `
                              border-transparent
                              text-[#c9b29a]/65

                              hover:border-[#a9674b]/35
                              hover:bg-[#29110b]
                              hover:text-[#e2bc98]
                            `
                        }

                        ${
                          weekend &&
                          !isSelected
                            ? "text-[#ad694e]/75"
                            : ""
                        }
                      `}
                    >
                      <span
                        className="
                          relative
                          z-10
                          text-[11px]
                        "
                        style={{
                          fontFamily:
                            "'Noto Serif Bengali', serif",
                        }}
                      >
                        {toBengaliNumber(
                          cell.day
                        )}
                      </span>

                      {/* Festival marker */}

                      {festival && (
                        <span
                          className="
                            absolute
                            bottom-[3px]
                            left-1/2

                            h-[3px]
                            w-[3px]

                            -translate-x-1/2
                            rotate-45

                            bg-[#c27b59]
                          "
                        />
                      )}

                      {/* Today marker */}

                      {isToday && (
                        <span
                          className="
                            absolute
                            right-[2px]
                            top-[2px]

                            h-[3px]
                            w-[3px]

                            rounded-full
                            bg-[#efbc88]
                          "
                        />
                      )}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* =================================================
              SELECTED DATE INFORMATION
          ================================================== */}

          {selectedDate && (
            <div
              className="
                mx-4
                mb-3

                border
                border-[#a9674b]/25

                bg-[#1d0b08]

                px-3
                py-2.5
              "
            >
              <div className="flex items-start gap-3">
                {/* Date number */}

                <div
                  className="
                    flex
                    h-9
                    min-w-9
                    items-center
                    justify-center

                    border
                    border-[#a9674b]/35

                    bg-[#26100b]

                    text-[#d49a70]
                  "
                >
                  <span
                    className="text-[13px]"
                    style={{
                      fontFamily:
                        "'Noto Serif Bengali', serif",
                    }}
                  >
                    {selectedBengali?.day
                      ? toBengaliNumber(
                          selectedBengali.day
                        )
                      : "—"}
                  </span>
                </div>

                {/* Information */}

                <div className="min-w-0 flex-1">
                  <p
                    className="
                      text-[6px]
                      uppercase
                      tracking-[0.3em]
                      text-[#8e6756]/55
                    "
                  >
                    নির্বাচিত তারিখ
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[13px]
                      leading-tight
                      text-[#e4c8aa]
                    "
                    style={{
                      fontFamily:
                        "'Noto Serif Bengali', serif",
                    }}
                  >
                    {selectedBengali?.day
                      ? `${toBengaliNumber(
                          selectedBengali.day
                        )} ${selectedMonthName}`
                      : "তারিখ"}
                  </p>

                  {selectedFestival ? (
                    <>
                      <p
                        className="
                          mt-1
                          text-[10px]
                          text-[#d19a70]
                        "
                        style={{
                          fontFamily:
                            "'Noto Serif Bengali', serif",
                        }}
                      >
                        {selectedFestival.title}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[8px]
                          leading-[1.45]
                          text-[#aa8a73]/75
                        "
                        style={{
                          fontFamily:
                            "'Noto Serif Bengali', serif",
                        }}
                      >
                        {selectedFestival.reason}
                      </p>
                    </>
                  ) : (
                    <p
                      className="
                        mt-1
                        text-[8px]
                        leading-[1.45]
                        text-[#9c7c68]/65
                      "
                      style={{
                        fontFamily:
                          "'Noto Serif Bengali', serif",
                      }}
                    >
                      এই তারিখে পঞ্জিকায়
                      কোনো প্রধান উৎসব বা
                      বিশেষ দিন তালিকাভুক্ত নেই।
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* =================================================
              FOOTER
          ================================================== */}

          <div
            className="
              flex
              items-center
              justify-between

              border-t
              border-[#a9674b]/15

              px-4
              py-2
            "
          >
            <span
              className="
                text-[5.5px]
                uppercase
                tracking-[0.35em]
                text-[#806052]/45
              "
            >
              মাটি · মানুষ · ঋতু
            </span>

            <span
              className="
                text-[5.5px]
                uppercase
                tracking-[0.25em]
                text-[#806052]/40
              "
            >
              বাংলা ১৪৩৩
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default GameWidget;
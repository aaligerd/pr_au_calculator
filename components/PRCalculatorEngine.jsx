"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";

// 1. Official Schedule 6D Points Mapping (Static Module Level)
const AGE_POINTS_MAP = {
  "18-24": 25,
  "25-32": 30,
  "33-39": 25,
  "40-44": 15,
  "45+": 0,
};

const ENGLISH_POINTS_MAP = {
  competent: 0,
  proficient: 10,
  superior: 20,
};

const OVERSEAS_EXP_POINTS_MAP = {
  "0": 0,    // < 3 years
  "3-4": 5,  // 3-4 years
  "5-7": 10, // 5-7 years
  "8+": 15,  // 8+ years
};

const AUSTRALIAN_EXP_POINTS_MAP = {
  "0": 0,    // < 1 year
  "1-2": 5,  // 1-2 years
  "3-4": 10, // 3-4 years
  "5-7": 15, // 5-7 years
  "8+": 20,  // 8+ years
};

const EDUCATION_POINTS_MAP = {
  doctorate: 20,
  bachelor: 15,
  diploma: 10,
  skills_assessed: 10,
  none: 0,
};

const PARTNER_POINTS_MAP = {
  single: 10,
  partner_skilled: 10,
  partner_english: 5,
  partner_none: 0,
};

const NOMINATION_POINTS_MAP = {
  "189": 0,
  "190": 5,
  "491": 15,
};

export default function PRCalculatorEngine({ initialSubclass = "" } = {}) {
  // 2. Reactive State Definitions
  const [visaSubclass, setVisaSubclass] = useState(initialSubclass || "189"); // "189" | "190" | "491"
  const [prevInitialSubclass, setPrevInitialSubclass] = useState(initialSubclass);

  // Synchronize state when initialSubclass prop changes without useEffect cascading renders
  if (initialSubclass !== prevInitialSubclass) {
    setPrevInitialSubclass(initialSubclass);
    setVisaSubclass(initialSubclass || "189");
  }

  const [ageBand, setAgeBand] = useState(""); // "" | "18-24" | "25-32" | "33-39" | "40-44" | "45+"
  const [englishLevel, setEnglishLevel] = useState(""); // "" | "competent" | "proficient" | "superior"
  const [overseasExp, setOverseasExp] = useState(""); // "" | "0" | "3-4" | "5-7" | "8+"
  const [australianExp, setAustralianExp] = useState(""); // "" | "0" | "1-2" | "3-4" | "5-7" | "8+"
  const [education, setEducation] = useState(""); // "" | "doctorate" | "bachelor" | "diploma" | "skills_assessed" | "none"

  // Boolean Bonus Toggles
  const [stemQualification, setStemQualification] = useState(false);
  const [studyRequirement, setStudyRequirement] = useState(false);
  const [cclCertified, setCclCertified] = useState(false);
  const [regionalStudy, setRegionalStudy] = useState(false);
  const [professionalYear, setProfessionalYear] = useState(false);

  // Partner Skills
  const [partnerSkills, setPartnerSkills] = useState(""); // "" | "single" | "partner_skilled" | "partner_english" | "partner_none"

  // Feedback & UI Drawers
  const [copySuccess, setCopySuccess] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isBreakdownExpanded, setIsBreakdownExpanded] = useState(true);

  // Prevent background scrolling when mobile breakdown drawer is open
  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileDrawerOpen]);

  // 3. Reset All Form Fields
  const handleReset = () => {
    setVisaSubclass(initialSubclass || "189");
    setAgeBand("");
    setEnglishLevel("");
    setOverseasExp("");
    setAustralianExp("");
    setEducation("");
    setPartnerSkills("");
    setStemQualification(false);
    setStudyRequirement(false);
    setCclCertified(false);
    setRegionalStudy(false);
    setProfessionalYear(false);
  };

  // 4. Dynamic Calculation Engine
  const breakdown = useMemo(() => {
    const agePts = AGE_POINTS_MAP[ageBand] || 0;
    const englishPts = ENGLISH_POINTS_MAP[englishLevel] || 0;

    const oExpPts = OVERSEAS_EXP_POINTS_MAP[overseasExp] || 0;
    const aExpPts = AUSTRALIAN_EXP_POINTS_MAP[australianExp] || 0;
    const rawExpPts = oExpPts + aExpPts;
    // Hard statutory cap of 20 points combined for work experience
    const combinedExpPts = Math.min(20, rawExpPts);

    const eduPts = EDUCATION_POINTS_MAP[education] || 0;
    const stemPts = stemQualification ? 10 : 0;
    const studyPts = studyRequirement ? 5 : 0;
    const cclPts = cclCertified ? 5 : 0;
    const regionalPts = regionalStudy ? 5 : 0;
    const pyPts = professionalYear ? 5 : 0;

    const partnerPts = PARTNER_POINTS_MAP[partnerSkills] || 0;

    // Subtotal of applicant's independent base score
    const basePoints =
      agePts +
      englishPts +
      combinedExpPts +
      eduPts +
      stemPts +
      studyPts +
      cclPts +
      regionalPts +
      pyPts +
      partnerPts;

    // Subclass specific scores
    const score189 = basePoints;
    const score190 = basePoints + 5;
    const score491 = basePoints + 15;

    const nominationPts = NOMINATION_POINTS_MAP[visaSubclass] || 0;
    const totalScore = basePoints + nominationPts;

    const isAgeIneligible = ageBand === "45+";
    const meetsThreshold = totalScore >= 65 && !isAgeIneligible;
    const isCompetitive = totalScore >= 85 && !isAgeIneligible;
    const pointsNeeded = Math.max(0, 65 - totalScore);

    return {
      age: agePts,
      english: englishPts,
      overseasExp: oExpPts,
      australianExp: aExpPts,
      rawExp: rawExpPts,
      combinedExp: combinedExpPts,
      education: eduPts,
      stem: stemPts,
      study: studyPts,
      ccl: cclPts,
      regional: regionalPts,
      py: pyPts,
      partner: partnerPts,
      nomination: nominationPts,
      base: basePoints,
      score189,
      score190,
      score491,
      total: totalScore,
      isAgeIneligible,
      meetsThreshold,
      isCompetitive,
      pointsNeeded,
    };
  }, [
    visaSubclass,
    ageBand,
    englishLevel,
    overseasExp,
    australianExp,
    education,
    stemQualification,
    studyRequirement,
    cclCertified,
    regionalStudy,
    professionalYear,
    partnerSkills,
  ]);

  // 5. Intelligent Recommendations Engine
  const recommendations = useMemo(() => {
    const list = [];

    // English language upgrade
    if (englishLevel === "competent" || englishLevel === "") {
      list.push({
        id: "rec_superior",
        title: "Upgrade to Superior English (PTE 79+ / IELTS 8.0)",
        points: "+20 pts",
        desc: "Achieving Superior English adds 20 points, compared to 0 points for Competent. This is the single biggest score accelerator.",
      });
      list.push({
        id: "rec_proficient",
        title: "Achieve Proficient English (PTE 65 / IELTS 7.0)",
        points: "+10 pts",
        desc: "Proficient English instantly gives you 10 points to unlock eligibility.",
      });
    } else if (englishLevel === "proficient") {
      list.push({
        id: "rec_superior_up",
        title: "Aim for Superior English (PTE 79+ / IELTS 8.0)",
        points: "+10 more pts",
        desc: "Upgrading from Proficient to Superior English gives you an extra 10 points to compete with top candidates.",
      });
    }

    // NAATI CCL
    if (!cclCertified) {
      list.push({
        id: "rec_ccl",
        title: "Pass the NAATI CCL Examination",
        points: "+5 pts",
        desc: "The online Credentialled Community Language test takes ~20 minutes and awards 5 points in over 50 community languages.",
      });
    }

    // Partner status optimization
    if (partnerSkills === "partner_none" || partnerSkills === "") {
      list.push({
        id: "rec_partner_eng",
        title: "Partner Obtains Competent English",
        points: "+5 pts",
        desc: "If your spouse or de facto partner sits a PTE (50+) or IELTS (6.0), you claim 5 bonus points.",
      });
      list.push({
        id: "rec_partner_skill",
        title: "Partner Skills Assessment + English",
        points: "+10 pts",
        desc: "If your partner clears a skills assessment in an eligible occupation and has Competent English, you claim 10 points.",
      });
    } else if (partnerSkills === "partner_english") {
      list.push({
        id: "rec_partner_skill_up",
        title: "Add Partner Skills Assessment",
        points: "+5 more pts",
        desc: "Completing a skills assessment for your partner increases your claim from +5 to +10 points.",
      });
    }

    // Professional Year
    if (!professionalYear) {
      list.push({
        id: "rec_py",
        title: "Complete an Approved Professional Year",
        points: "+5 pts",
        desc: "For Australian graduates in Accounting, Engineering, or ICT, a 44-week PY grants 5 verified points.",
      });
    }

    // Visa Subclass pathway upgrade
    if (visaSubclass === "189") {
      list.push({
        id: "rec_sub_190",
        title: "Seek Subclass 190 State Nomination",
        points: "+5 pts",
        desc: "Australian State and Territory Governments award an automatic +5 points to nominated candidates.",
      });
      list.push({
        id: "rec_sub_491",
        title: "Consider Subclass 491 Regional Sponsorship",
        points: "+15 pts",
        desc: "Regional nomination or sponsorship by an eligible relative grants an immediate +15 points boost.",
      });
    } else if (visaSubclass === "190") {
      list.push({
        id: "rec_sub_491_up",
        title: "Switch to Subclass 491 Regional Nomination",
        points: "+10 more pts",
        desc: "Regional sponsorship provides +15 points (+10 more than the +5 from Subclass 190).",
      });
    }

    return list;
  }, [englishLevel, cclCertified, partnerSkills, professionalYear, visaSubclass]);

  // 6. Formatted Summary Clipboard Copy
  const handleCopySummary = () => {
    const summaryLines = [
      `================================================`,
      `AUSTRALIA PR POINTS SCORECARD - 2026/2027`,
      `Verified via: ausprcalculator.com`,
      `================================================`,
      `Target Visa: Subclass ${visaSubclass} (${
        visaSubclass === "189"
          ? "Skilled Independent"
          : visaSubclass === "190"
          ? "Skilled Nominated (+5 pts)"
          : "Skilled Work Regional (+15 pts)"
      })`,
      `Calculated Total Score: ${breakdown.total} Points (Pass mark: 65 pts)`,
      `Status: ${
        breakdown.isAgeIneligible
          ? "INELIGIBLE (Applicants must be under 45 at invitation)"
          : breakdown.meetsThreshold
          ? "ELIGIBLE TO LODGE EXPRESSION OF INTEREST (EOI)"
          : `BELOW 65 PTS THRESHOLD (Needs ${breakdown.pointsNeeded} more points)`
      }`,
      `------------------------------------------------`,
      `CATEGORY BREAKDOWN:`,
      `1. Age: ${ageBand || "Not selected"} -> ${breakdown.age} pts`,
      `2. English Language Ability: ${englishLevel ? englishLevel.toUpperCase() : "Not selected"} -> ${breakdown.english} pts`,
      `3. Skilled Employment (20 pts combined cap):`,
      `   - Overseas (outside AU): ${overseasExp ? `${overseasExp} yrs` : "0"} -> ${breakdown.overseasExp} pts`,
      `   - Australian (inside AU): ${australianExp ? `${australianExp} yrs` : "0"} -> ${breakdown.australianExp} pts`,
      `   - Combined Work Experience Claimed: ${breakdown.combinedExp} pts`,
      `4. Highest Educational Qualification: ${education || "Not selected"} -> ${breakdown.education} pts`,
      `5. Partner Skills / Status: ${partnerSkills || "Not selected"} -> ${breakdown.partner} pts`,
      `6. Additional Qualification & Bonus Toggles:`,
      `   - Specialist STEM Master/PhD: ${stemQualification ? "+10 pts" : "0 pts"}`,
      `   - Australian Study Requirement (2 yrs): ${studyRequirement ? "+5 pts" : "0 pts"}`,
      `   - Credentialled Community Language (NAATI CCL): ${cclCertified ? "+5 pts" : "0 pts"}`,
      `   - Study in Regional Australia: ${regionalStudy ? "+5 pts" : "0 pts"}`,
      `   - Professional Year (PY): ${professionalYear ? "+5 pts" : "0 pts"}`,
      `7. State / Regional Nomination:`,
      `   - Subclass ${visaSubclass} Nomination Bonus: +${breakdown.nomination} pts`,
      `------------------------------------------------`,
      `ALL SUBCLASS SCORES:`,
      `- Subclass 189 (Independent): ${breakdown.score189} points`,
      `- Subclass 190 (State Nominated): ${breakdown.score190} points (+5 state bonus)`,
      `- Subclass 491 (Regional Sponsored): ${breakdown.score491} points (+15 regional bonus)`,
      `================================================`,
      `Generated on: ${new Date().toLocaleDateString("en-AU")}`,
    ];

    navigator.clipboard.writeText(summaryLines.join("\n")).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2200);
    });
  };

  return (
    <div className="relative">
      {/* Age Ineligibility Warning Banner */}
      {breakdown.isAgeIneligible && (
        <div
          role="alert"
          className="mb-8 rounded-2xl border border-rose-300 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 p-4 sm:p-5 text-rose-900 dark:text-rose-200 shadow-xs flex items-start gap-3.5"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-rose-600 text-white font-bold text-sm">
            !
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base">
              Age Limit Exceeded for General Skilled Migration
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-rose-800 dark:text-rose-300 leading-relaxed">
              Under Australian Department of Home Affairs regulations, applicants must be{" "}
              <strong>under 45 years of age</strong> at the time of invitation to apply for Subclass
              189, 190, or 491 visas. You may consider alternative pathways such as the Employer
              Nomination Scheme (Subclass 186/482), Global Talent Visa (GTV), or business innovation
              streams.
            </p>
          </div>
        </div>
      )}

      {/* Main Grid: Form Controls (Left 7 cols) & Live Results Panel (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Input Form Section */}
        {/* ========================================================= */}
        <section
          aria-labelledby="calculator-inputs-heading"
          className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xs"
        >
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-150 dark:border-zinc-800">
            <div>
              <h2
                id="calculator-inputs-heading"
                className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white flex items-center gap-2.5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-600 text-white text-sm font-black shadow-xs">
                  1
                </span>
                Criteria &amp; Eligibility Factors
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Department of Home Affairs Schedule 6D points test
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 border border-rose-200/60 dark:border-rose-900/40 px-3.5 py-2 rounded-xl transition-all active:scale-95 cursor-pointer min-h-[44px]"
              aria-label="Reset all calculator inputs to defaults"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.25"
                />
              </svg>
              Reset
            </button>
          </div>

          <div className="space-y-6">
            {/* 1. Target Visa Subclass Selector */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="block text-sm font-bold text-zinc-850 dark:text-zinc-200">
                  Target Visa Subclass
                </label>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                  <span>Guides:</span>
                  <Link
                    href="/subclass-189"
                    className="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                  >
                    189
                  </Link>
                  <span>•</span>
                  <Link
                    href="/subclass-190"
                    className="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                  >
                    190
                  </Link>
                  <span>•</span>
                  <Link
                    href="/subclass-491"
                    className="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                  >
                    491
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    id: "189",
                    name: "Subclass 189",
                    desc: "Skilled Independent",
                    bonus: "0 pts",
                  },
                  {
                    id: "190",
                    name: "Subclass 190",
                    desc: "State Nominated",
                    bonus: "+5 pts",
                  },
                  {
                    id: "491",
                    name: "Subclass 491",
                    desc: "Regional Sponsored",
                    bonus: "+15 pts",
                  },
                ].map((sub) => {
                  const isSelected = visaSubclass === sub.id;
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setVisaSubclass(sub.id)}
                      className={`flex flex-col text-left p-3.5 rounded-2xl border transition-all cursor-pointer min-h-[58px] justify-center relative ${
                        isSelected
                          ? "border-teal-500 bg-teal-50/60 dark:bg-teal-950/30 text-teal-950 dark:text-teal-100 ring-2 ring-teal-500/30"
                          : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-950/40 text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-bold text-sm">{sub.name}</span>
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-teal-600 text-white"
                              : "bg-zinc-200 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-400"
                          }`}
                        >
                          {sub.bonus}
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                        {sub.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Subclass Context Callout */}
              {visaSubclass === "190" && (
                <div className="mt-2.5 p-3 rounded-xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200/50 dark:border-teal-900/30 text-xs text-teal-800 dark:text-teal-300 flex items-center gap-2">
                  <span className="font-bold">✓ State Nomination Factored:</span> +5 bonus points
                  are automatically credited to your score.
                </div>
              )}
              {visaSubclass === "491" && (
                <div className="mt-2.5 p-3 rounded-xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200/50 dark:border-teal-900/30 text-xs text-teal-800 dark:text-teal-300 flex items-center gap-2">
                  <span className="font-bold">✓ Regional Sponsorship Factored:</span> +15 bonus
                  points are automatically credited to your score.
                </div>
              )}
            </div>

            {/* 2. Age Criteria */}
            <div>
              <label
                htmlFor="ageSelect"
                className="block text-sm font-bold text-zinc-850 dark:text-zinc-200 mb-1.5"
              >
                Age at Time of Invitation
              </label>
              <select
                id="ageSelect"
                value={ageBand}
                onChange={(e) => setAgeBand(e.target.value)}
                className={`w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950 px-4 py-3 min-h-[48px] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm transition-all ${
                  !ageBand ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-900 dark:text-zinc-100"
                }`}
              >
                <option value="" disabled>
                  -- Select Your Age Range --
                </option>
                <option value="18-24">18 to 24 years (25 points)</option>
                <option value="25-32">25 to 32 years (30 points - Maximum)</option>
                <option value="33-39">33 to 39 years (25 points)</option>
                <option value="40-44">40 to 44 years (15 points)</option>
                <option value="45+">45 years or older (0 points - Ineligible for GSM)</option>
              </select>
            </div>

            {/* 3. English Language Skills */}
            <div>
              <label
                htmlFor="englishSelect"
                className="block text-sm font-bold text-zinc-850 dark:text-zinc-200 mb-1.5"
              >
                English Language Skills (IELTS / PTE Academic / CELPIP)
              </label>
              <select
                id="englishSelect"
                value={englishLevel}
                onChange={(e) => setEnglishLevel(e.target.value)}
                className={`w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950 px-4 py-3 min-h-[48px] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm transition-all ${
                  !englishLevel
                    ? "text-zinc-400 dark:text-zinc-500"
                    : "text-zinc-900 dark:text-zinc-100"
                }`}
              >
                <option value="" disabled>
                  -- Select English Competency Level --
                </option>
                <option value="competent">
                  Competent English (IELTS 6.0 / PTE 50 / CELPIP 7) (0 points)
                </option>
                <option value="proficient">
                  Proficient English (IELTS 7.0 / PTE 65 / CELPIP 8) (+10 points)
                </option>
                <option value="superior">
                  Superior English (IELTS 8.0 / PTE 79 / CELPIP 9) (+20 points)
                </option>
              </select>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1.5">
                Must be achieved within the 3 years immediately before invitation date.
              </p>
            </div>

            {/* 4. Skilled Employment Experience */}
            <div className="bg-zinc-50/70 dark:bg-zinc-950/50 rounded-2xl p-4 sm:p-5 border border-zinc-150 dark:border-zinc-855">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3.5">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Skilled Employment Experience (Past 10 Years)
                </h3>
                <span className="self-start sm:self-center text-[10px] font-mono uppercase tracking-wider font-bold text-teal-700 dark:text-teal-300 bg-teal-100/60 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-200/50 dark:border-teal-800/40">
                  Combined Cap: 20 pts Max
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Overseas Experience */}
                <div>
                  <label
                    htmlFor="overseasExpSelect"
                    className="block text-xs font-bold text-zinc-650 dark:text-zinc-350 mb-1.5"
                  >
                    Overseas (Outside Australia)
                  </label>
                  <select
                    id="overseasExpSelect"
                    value={overseasExp}
                    onChange={(e) => setOverseasExp(e.target.value)}
                    className={`w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-2.5 min-h-[44px] focus:border-teal-500 outline-none text-xs transition-all ${
                      overseasExp === ""
                        ? "text-zinc-400 dark:text-zinc-500"
                        : "text-zinc-900 dark:text-zinc-100"
                    }`}
                  >
                    <option value="" disabled>
                      -- Overseas Skilled Work --
                    </option>
                    <option value="0">Less than 3 years (0 points)</option>
                    <option value="3-4">3 to 4 years (5 points)</option>
                    <option value="5-7">5 to 7 years (10 points)</option>
                    <option value="8+">8 or more years (15 points)</option>
                  </select>
                </div>

                {/* Australian Experience */}
                <div>
                  <label
                    htmlFor="australianExpSelect"
                    className="block text-xs font-bold text-zinc-650 dark:text-zinc-350 mb-1.5"
                  >
                    Australian (In Australia)
                  </label>
                  <select
                    id="australianExpSelect"
                    value={australianExp}
                    onChange={(e) => setAustralianExp(e.target.value)}
                    className={`w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-2.5 min-h-[44px] focus:border-teal-500 outline-none text-xs transition-all ${
                      australianExp === ""
                        ? "text-zinc-400 dark:text-zinc-500"
                        : "text-zinc-900 dark:text-zinc-100"
                    }`}
                  >
                    <option value="" disabled>
                      -- Australian Skilled Work --
                    </option>
                    <option value="0">Less than 1 year (0 points)</option>
                    <option value="1-2">1 to 2 years (5 points)</option>
                    <option value="3-4">3 to 4 years (10 points)</option>
                    <option value="5-7">5 to 7 years (15 points)</option>
                    <option value="8+">8 or more years (20 points)</option>
                  </select>
                </div>
              </div>

              {/* Combined Cap Callout if exceeded */}
              {breakdown.rawExp > 20 && (
                <div className="mt-3 p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/50 dark:border-teal-800/40 text-[11px] text-teal-800 dark:text-teal-300">
                  ℹ️ Combined experience totals {breakdown.rawExp} points, but has been capped at
                  the official Schedule 6D maximum of <strong>20 points</strong>.
                </div>
              )}
            </div>

            {/* 5. Educational Qualifications */}
            <div>
              <label
                htmlFor="educationSelect"
                className="block text-sm font-bold text-zinc-850 dark:text-zinc-200 mb-1.5"
              >
                Highest Educational Qualification
              </label>
              <select
                id="educationSelect"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className={`w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950 px-4 py-3 min-h-[48px] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm transition-all ${
                  !education
                    ? "text-zinc-400 dark:text-zinc-500"
                    : "text-zinc-900 dark:text-zinc-100"
                }`}
              >
                <option value="" disabled>
                  -- Select Highest Qualification --
                </option>
                <option value="doctorate">
                  Doctorate / PhD from AU or recognized overseas institution (20 points)
                </option>
                <option value="bachelor">
                  Bachelor degree or Master&apos;s degree from AU or overseas (15 points)
                </option>
                <option value="diploma">
                  Diploma or Trade Qualification completed in AU or overseas (10 points)
                </option>
                <option value="skills_assessed">
                  An award or qualification recognized by skills assessing authority (10 points)
                </option>
                <option value="none">None of the above / Unrecognized (0 points)</option>
              </select>
            </div>

            {/* 6. Partner Skills */}
            <div>
              <label
                htmlFor="partnerSelect"
                className="block text-sm font-bold text-zinc-850 dark:text-zinc-200 mb-1.5"
              >
                Partner Skills &amp; Relationship Status
              </label>
              <select
                id="partnerSelect"
                value={partnerSkills}
                onChange={(e) => setPartnerSkills(e.target.value)}
                className={`w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950 px-4 py-3 min-h-[48px] focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm transition-all ${
                  !partnerSkills
                    ? "text-zinc-400 dark:text-zinc-500"
                    : "text-zinc-900 dark:text-zinc-100"
                }`}
              >
                <option value="" disabled>
                  -- Select Partner Status --
                </option>
                <option value="single">
                  Single OR spouse/partner is an Australian Citizen / Permanent Resident (+10
                  points)
                </option>
                <option value="partner_skilled">
                  Partner is under 45, has Competent English &amp; positive Skills Assessment (+10
                  points)
                </option>
                <option value="partner_english">
                  Partner has Competent English only (No Skills Assessment) (+5 points)
                </option>
                <option value="partner_none">
                  Partner is not an AU citizen/PR and lacks Competent English (0 points)
                </option>
              </select>
            </div>

            {/* 7. Additional Qualification Bonus Points (Toggles) */}
            <div className="border-t border-zinc-150 dark:border-zinc-800 pt-6">
              <h3 className="text-sm font-extrabold text-zinc-900 dark:text-white mb-3 flex items-center justify-between">
                <span>Specialist &amp; Community Bonus Points</span>
                <span className="text-[11px] font-normal text-zinc-500">Optional multipliers</span>
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: "stemToggle",
                    checked: stemQualification,
                    setChecked: setStemQualification,
                    title: "Specialist STEM Educational Qualification (+10 pts)",
                    desc: "Master's by research or PhD in Science, Technology, Engineering, or Mathematics (STEM) / ICT completed in Australia (min 2 academic years).",
                  },
                  {
                    id: "studyToggle",
                    checked: studyRequirement,
                    setChecked: setStudyRequirement,
                    title: "Australian Study Requirement (+5 pts)",
                    desc: "Completed at least 1 degree, diploma, or trade qualification CRICOS-registered taking at least 2 academic years in Australia.",
                  },
                  {
                    id: "cclToggle",
                    checked: cclCertified,
                    setChecked: setCclCertified,
                    title: "Credentialled Community Language (NAATI CCL) (+5 pts)",
                    desc: "Accredited at paraprofessional level or higher, or passed the online NAATI CCL exam.",
                  },
                  {
                    id: "regionalToggle",
                    checked: regionalStudy,
                    setChecked: setRegionalStudy,
                    title: "Study in Regional Australia (+5 pts)",
                    desc: "Met the Australian study requirement while living and studying in a designated regional area (outside Sydney, Melbourne, Brisbane).",
                  },
                  {
                    id: "pyToggle",
                    checked: professionalYear,
                    setChecked: setProfessionalYear,
                    title: "Professional Year Program in Australia (+5 pts)",
                    desc: "Completed an approved 44-week Professional Year in Accounting, Engineering, or ICT within the 4 years before invitation.",
                  },
                ].map((toggle) => (
                  <div
                    key={toggle.id}
                    className="flex items-start justify-between gap-4 p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-950/60 transition-colors border border-transparent hover:border-zinc-200/80 dark:hover:border-zinc-800/80"
                  >
                    <div className="flex-1">
                      <label
                        htmlFor={toggle.id}
                        className="text-xs sm:text-sm font-bold text-zinc-850 dark:text-zinc-200 cursor-pointer block"
                      >
                        {toggle.title}
                      </label>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                        {toggle.desc}
                      </p>
                    </div>
                    <div className="relative flex items-center pt-0.5 shrink-0">
                      <input
                        id={toggle.id}
                        type="checkbox"
                        checked={toggle.checked}
                        onChange={(e) => toggle.setChecked(e.target.checked)}
                        className="peer h-6 w-11 cursor-pointer appearance-none rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors checked:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/30 relative before:absolute before:top-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-transform checked:before:translate-x-5"
                        aria-label={toggle.title}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Desktop Sticky Results Dashboard */}
        {/* ========================================================= */}
        <aside
          aria-labelledby="calculator-results-heading"
          className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 hidden lg:block"
        >
          {/* Main Points Card */}
          <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 text-white rounded-3xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
            {/* Background mesh highlight */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-teal-200">
                    Calculated Score
                  </span>
                  <h3 id="calculator-results-heading" className="text-lg font-bold text-white">
                    Subclass {visaSubclass} Total Points
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-xs">
                  Schedule 6D
                </span>
              </div>

              {/* Big Score Display */}
              <div className="my-6 flex items-baseline gap-3">
                <span className="text-7xl font-black tracking-tight text-white drop-shadow-xs">
                  {breakdown.total}
                </span>
                <div>
                  <span className="text-teal-200 font-semibold text-sm block">/ 65 points min</span>
                  <span className="text-[11px] text-teal-100/80 block">Pass mark for EOI</span>
                </div>
              </div>

              {/* Progress Bar towards 65 min and 85 competitive */}
              <div className="space-y-1.5 mb-5">
                <div className="flex justify-between text-[11px] font-semibold text-teal-100">
                  <span>Pass Benchmark (65)</span>
                  <span>{breakdown.total >= 65 ? "Target Met ✓" : `${breakdown.pointsNeeded} pts to go`}</span>
                </div>
                <div className="h-2.5 w-full bg-black/20 rounded-full overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      breakdown.isAgeIneligible
                        ? "bg-rose-400"
                        : breakdown.isCompetitive
                        ? "bg-emerald-300"
                        : breakdown.meetsThreshold
                        ? "bg-teal-300"
                        : "bg-amber-300"
                    }`}
                    style={{ width: `${Math.min(100, (breakdown.total / 100) * 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Status Badge & Actions */}
              <div className="pt-4 border-t border-white/20 flex items-center justify-between gap-3">
                <div className="text-xs font-bold">
                  {breakdown.isAgeIneligible ? (
                    <span className="inline-flex items-center gap-1.5 bg-rose-950/60 text-rose-200 px-3 py-1.5 rounded-full text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                      Ineligible (Age 45+)
                    </span>
                  ) : breakdown.isCompetitive ? (
                    <span className="inline-flex items-center gap-1.5 bg-emerald-950/50 text-emerald-200 px-3 py-1.5 rounded-full text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Highly Competitive (85+ pts)
                    </span>
                  ) : breakdown.meetsThreshold ? (
                    <span className="inline-flex items-center gap-1.5 bg-white/20 text-white px-3 py-1.5 rounded-full text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse"></span>
                      Eligible to Lodge EOI (65+ pts)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 bg-black/30 text-amber-200 px-3 py-1.5 rounded-full text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      Needs {breakdown.pointsNeeded} pts to reach 65
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-1.5 bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer min-h-[44px]"
                  aria-label="Copy points summary scorecard to clipboard"
                >
                  {copySuccess ? (
                    <>
                      <svg
                        className="w-4 h-4 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4 text-teal-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                      Copy Scorecard
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Subclass Comparison Row */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
              Compare All Three Subclasses
            </h4>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                {
                  id: "189",
                  label: "Subclass 189",
                  sub: "Independent",
                  score: breakdown.score189,
                },
                {
                  id: "190",
                  label: "Subclass 190",
                  sub: "Nominated (+5)",
                  score: breakdown.score190,
                },
                {
                  id: "491",
                  label: "Subclass 491",
                  sub: "Regional (+15)",
                  score: breakdown.score491,
                },
              ].map((visa) => {
                const isActive = visaSubclass === visa.id;
                return (
                  <button
                    key={visa.id}
                    type="button"
                    onClick={() => setVisaSubclass(visa.id)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center min-h-[76px] ${
                      isActive
                        ? "border-teal-500 bg-teal-50/50 dark:bg-teal-950/30 text-teal-900 dark:text-teal-200 ring-2 ring-teal-500/30"
                        : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-950/30 text-zinc-650 dark:text-zinc-400"
                    }`}
                  >
                    <span className="text-xs font-bold">{visa.label}</span>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-0.5">
                      {visa.sub}
                    </span>
                    <span
                      className={`text-2xl font-black mt-1 ${
                        isActive
                          ? "text-teal-600 dark:text-teal-400"
                          : "text-zinc-800 dark:text-zinc-200"
                      }`}
                    >
                      {visa.score}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Itemized Category Breakdown Accordion */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-xs">
            <button
              type="button"
              onClick={() => setIsBreakdownExpanded(!isBreakdownExpanded)}
              className="w-full flex items-center justify-between text-left font-bold text-sm text-zinc-900 dark:text-white cursor-pointer select-none"
              aria-expanded={isBreakdownExpanded}
            >
              <span>Itemized Points Breakdown</span>
              <svg
                className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                  isBreakdownExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isBreakdownExpanded && (
              <div className="mt-4 pt-3 border-t border-zinc-150 dark:border-zinc-800 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                  <span className="text-zinc-500">Age ({ageBand || "Not selected"})</span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {breakdown.age} pts
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                  <span className="text-zinc-500">
                    English ({englishLevel || "Not selected"})
                  </span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {breakdown.english} pts
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                  <span className="text-zinc-500">Skilled Experience (Combined cap: 20)</span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {breakdown.combinedExp} pts
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                  <span className="text-zinc-500">
                    Educational Qualification ({education || "Not selected"})
                  </span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {breakdown.education} pts
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                  <span className="text-zinc-500">
                    Partner Skills ({partnerSkills || "Not selected"})
                  </span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {breakdown.partner} pts
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                  <span className="text-zinc-500">Specialist STEM Qualification</span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {breakdown.stem} pts
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                  <span className="text-zinc-500">Australian Study Requirement</span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {breakdown.study} pts
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                  <span className="text-zinc-500">NAATI CCL Credential</span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {breakdown.ccl} pts
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                  <span className="text-zinc-500">Regional Australian Study</span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {breakdown.regional} pts
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                  <span className="text-zinc-500">Professional Year (PY)</span>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {breakdown.py} pts
                  </span>
                </div>
                <div className="flex justify-between py-1.5 font-bold text-teal-700 dark:text-teal-300 bg-teal-50/60 dark:bg-teal-950/40 px-2 rounded-lg">
                  <span>Subclass {visaSubclass} Nomination Bonus</span>
                  <span>+{breakdown.nomination} pts</span>
                </div>
              </div>
            )}
          </div>

          {/* Dynamic Pathways to Add Points */}
          {recommendations.length > 0 && (
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                Actionable Ways to Boost Your Score
              </h4>
              <div className="max-h-[260px] overflow-y-auto pr-1 space-y-2.5 custom-scrollbar">
                {recommendations.slice(0, 4).map((rec) => (
                  <div
                    key={rec.id}
                    className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-150 dark:border-zinc-850 flex items-start gap-2.5"
                  >
                    <span className="inline-flex items-center justify-center bg-teal-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-lg shrink-0">
                      {rec.points}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-zinc-850 dark:text-zinc-200">
                        {rec.title}
                      </p>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                        {rec.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* ========================================================= */}
      {/* MOBILE STICKY BOTTOM DRAWER BAR (< lg screens) */}
      {/* ========================================================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 p-3 sm:px-6 shadow-2xl transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">
                Subclass {visaSubclass} Total
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-teal-600 dark:text-teal-400">
                  {breakdown.total}
                </span>
                <span className="text-[11px] text-zinc-500">/ 65 pts</span>
              </div>
            </div>
            <div className="hidden sm:block">
              {breakdown.isAgeIneligible ? (
                <span className="text-[10px] font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/50 px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-900">
                  Ineligible (Age 45+)
                </span>
              ) : breakdown.meetsThreshold ? (
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-900">
                  Eligible (65+)
                </span>
              ) : (
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-900">
                  Needs {breakdown.pointsNeeded} pts
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopySummary}
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Copy points summary"
            >
              {copySuccess ? (
                <svg
                  className="w-4 h-4 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-zinc-600 dark:text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer min-h-[44px]"
              aria-label="Open detailed points breakdown drawer"
            >
              <span>View Breakdown</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE FULL BREAKDOWN MODAL DRAWER */}
      {/* ========================================================= */}
      {isMobileDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-drawer-title"
          className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        >
          {/* Overlay click to close */}
          <div
            className="flex-1"
            onClick={() => setIsMobileDrawerOpen(false)}
            aria-hidden="true"
          ></div>

          {/* Drawer content card */}
          <div className="bg-white dark:bg-zinc-900 rounded-t-3xl border-t border-zinc-200 dark:border-zinc-800 p-6 max-h-[85vh] overflow-y-auto shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-150 dark:border-zinc-800">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600 text-white font-black text-xs">
                  AU
                </span>
                <h3 id="mobile-drawer-title" className="font-extrabold text-base text-zinc-900 dark:text-white">
                  Subclass {visaSubclass} Points Breakdown
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-2 rounded-xl text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close points breakdown drawer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Score Metric Highlight */}
            <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-900/40 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 block">
                  Current Score
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-4xl font-black text-teal-700 dark:text-teal-300">
                    {breakdown.total}
                  </span>
                  <span className="text-xs text-teal-600 dark:text-teal-400">/ 65 points min</span>
                </div>
              </div>
              <div>
                {breakdown.isAgeIneligible ? (
                  <span className="text-xs font-bold text-rose-700 bg-rose-100 dark:bg-rose-950/60 px-3 py-1.5 rounded-full block text-center">
                    Ineligible (Age 45+)
                  </span>
                ) : breakdown.meetsThreshold ? (
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1.5 rounded-full block text-center">
                    Eligible (65+)
                  </span>
                ) : (
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 dark:bg-amber-950/60 px-3 py-1.5 rounded-full block text-center">
                    Needs {breakdown.pointsNeeded} pts
                  </span>
                )}
              </div>
            </div>

            {/* Subclass Compare Buttons */}
            <div>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 block mb-2">
                Switch Subclass
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "189", name: "189", pts: breakdown.score189 },
                  { id: "190", name: "190 (+5)", pts: breakdown.score190 },
                  { id: "491", name: "491 (+15)", pts: breakdown.score491 },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setVisaSubclass(s.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer min-h-[50px] ${
                      visaSubclass === s.id
                        ? "border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 font-bold"
                        : "border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-400"
                    }`}
                  >
                    <span className="text-xs block">Subclass {s.name}</span>
                    <span className="text-base font-extrabold block">{s.pts} pts</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Itemized Breakdown List */}
            <div className="space-y-2 text-xs border-t border-zinc-150 dark:border-zinc-800 pt-4">
              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-500">Age:</span>
                <span className="font-bold text-zinc-900 dark:text-white">{breakdown.age} pts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-500">English Language:</span>
                <span className="font-bold text-zinc-900 dark:text-white">{breakdown.english} pts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                <span className="text-zinc-500">Overseas Work Experience:</span>
                <span className="font-bold text-zinc-900 dark:text-white">{breakdown.overseasExp} pts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                <span className="text-zinc-500">Australian Work Experience:</span>
                <span className="font-bold text-zinc-900 dark:text-white">{breakdown.australianExp} pts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                <span className="text-zinc-500">Educational Qualification:</span>
                <span className="font-bold text-zinc-900 dark:text-white">{breakdown.education} pts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                <span className="text-zinc-500">Partner Skills / Status:</span>
                <span className="font-bold text-zinc-900 dark:text-white">{breakdown.partner} pts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-850">
                <span className="text-zinc-500">Specialist STEM / Study / CCL:</span>
                <span className="font-bold text-zinc-900 dark:text-white">
                  {breakdown.stem + breakdown.study + breakdown.ccl + breakdown.regional + breakdown.py} pts
                </span>
              </div>
              <div className="flex justify-between py-1.5 font-bold text-teal-700 dark:text-teal-300 bg-teal-50/60 dark:bg-teal-950/40 px-2 rounded-lg">
                <span>Subclass {visaSubclass} Nomination Bonus:</span>
                <span>+{breakdown.nomination} pts</span>
              </div>
            </div>

            {/* Actions: Copy & Close */}
            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopySummary}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs py-3 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5"
              >
                {copySuccess ? "Scorecard Copied!" : "Copy Formatted Scorecard"}
              </button>
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold text-xs min-h-[44px] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

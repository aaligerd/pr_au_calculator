"use client";

import React, { useState, useMemo } from "react";

export default function PRCalculatorEngine() {
  // 1. State definitions
  const [visaSubclass, setVisaSubclass] = useState("189"); // "189" | "190" | "491"
  const [ageBand, setAgeBand] = useState("25-32"); // default to peak age band
  const [englishLevel, setEnglishLevel] = useState("competent");
  const [overseasExp, setOverseasExp] = useState("0");
  const [australianExp, setAustralianExp] = useState("0");
  const [education, setEducation] = useState("bachelor");
  
  // Boolean switches
  const [studyRequirement, setStudyRequirement] = useState(false);
  const [stemQualification, setStemQualification] = useState(false);
  const [cclCertified, setCclCertified] = useState(false);
  const [regionalStudy, setRegionalStudy] = useState(false);
  const [professionalYear, setProfessionalYear] = useState(false);

  // Partner skills
  const [partnerSkills, setPartnerSkills] = useState("single");

  // Copy status feedback
  const [copySuccess, setCopySuccess] = useState(false);

  // 2. Point Allocations Map
  const agePointsMap = {
    "18-24": 25,
    "25-32": 30,
    "33-39": 25,
    "40-44": 15,
    "45+": 0,
  };

  const englishPointsMap = {
    competent: 0,
    proficient: 10,
    superior: 20,
  };

  const overseasExpPointsMap = {
    "0": 0,    // < 3 years
    "3-4": 5,  // 3-4 years
    "5-7": 10, // 5-7 years
    "8+": 15,  // 8+ years
  };

  const australianExpPointsMap = {
    "0": 0,    // < 1 year
    "1-2": 5,  // 1-2 years
    "3-4": 10, // 3-4 years
    "5-7": 15, // 5-7 years
    "8+": 20,  // 8+ years
  };

  const educationPointsMap = {
    doctorate: 20,
    bachelor: 15,
    diploma: 10,
    skills_assessed: 10,
    none: 0,
  };

  const partnerPointsMap = {
    single: 10, // Single or partner is AU citizen/PR
    partner_skilled: 10, // Partner under 45, Competent English, Skills Assessment
    partner_english: 5, // Partner Competent English only
    partner_none: 0,
  };

  // 3. Dynamic Calculation
  const calculationBreakdown = useMemo(() => {
    const agePts = agePointsMap[ageBand] || 0;
    const englishPts = englishPointsMap[englishLevel] || 0;
    
    const oExpPts = overseasExpPointsMap[overseasExp] || 0;
    const aExpPts = australianExpPointsMap[australianExp] || 0;
    // Hard cap of 20 points combined for overseas and Australian work experience
    const combinedExpPts = Math.min(20, oExpPts + aExpPts);

    const eduPts = educationPointsMap[education] || 0;

    // Toggle options
    const studyPts = studyRequirement ? 5 : 0;
    const stemPts = stemQualification ? 10 : 0;
    const cclPts = cclCertified ? 5 : 0;
    const regionalPts = regionalStudy ? 5 : 0;
    const pyPts = professionalYear ? 5 : 0;

    const partnerPts = partnerPointsMap[partnerSkills] || 0;

    // Baseline points (for subclass 189)
    const basePoints = agePts + englishPts + combinedExpPts + eduPts + studyPts + stemPts + cclPts + regionalPts + pyPts + partnerPts;

    // Subclass adjustments
    const subclassPointsMap = {
      "189": basePoints,
      "190": basePoints + 5,
      "491": basePoints + 15,
    };

    const currentVisaPts = subclassPointsMap[visaSubclass];

    return {
      age: agePts,
      english: englishPts,
      overseasExp: oExpPts,
      australianExp: aExpPts,
      combinedExp: combinedExpPts,
      education: eduPts,
      study: studyPts,
      stem: stemPts,
      ccl: cclPts,
      regional: regionalPts,
      py: pyPts,
      partner: partnerPts,
      base: basePoints,
      score189: basePoints,
      score190: basePoints + 5,
      score491: basePoints + 15,
      currentTotal: currentVisaPts,
    };
  }, [visaSubclass, ageBand, englishLevel, overseasExp, australianExp, education, studyRequirement, stemQualification, cclCertified, regionalStudy, professionalYear, partnerSkills]);

  // 4. Recommendation Engine
  const recommendations = useMemo(() => {
    const list = [];

    // English language upgrade
    if (englishLevel === "competent") {
      list.push({
        id: "english_superior",
        title: "Achieve Superior English Score",
        points: "+20 points",
        description: "Scoring Superior English (IELTS 8.0 equivalent or PTE Academic 79+) adds 20 points, compared to 0 points for Competent.",
      });
      list.push({
        id: "english_proficient",
        title: "Achieve Proficient English Score",
        points: "+10 points",
        description: "Scoring Proficient English (IELTS 7.0 equivalent or PTE Academic 65+) adds 10 points to your application.",
      });
    } else if (englishLevel === "proficient") {
      list.push({
        id: "english_superior",
        title: "Upgrade to Superior English",
        points: "+10 more points",
        description: "Elevating your test score from Proficient to Superior English (IELTS 8.0/PTE 79) gives you an extra 10 points.",
      });
    }

    // NAATI CCL
    if (!cclCertified) {
      list.push({
        id: "ccl",
        title: "Get NAATI CCL Certification",
        points: "+5 points",
        description: "Pass a Credentialled Community Language (NAATI CCL) exam to claim 5 additional points.",
      });
    }

    // Professional Year
    if (!professionalYear) {
      list.push({
        id: "py",
        title: "Complete a Professional Year (PY)",
        points: "+5 points",
        description: "If your occupation is in ICT, Engineering, or Accounting, finishing an approved 44-week Professional Year program in Australia grants 5 points.",
      });
    }

    // Regional Study
    if (!regionalStudy && studyRequirement) {
      list.push({
        id: "regional_study",
        title: "Study in Regional Australia",
        points: "+5 points",
        description: "If your Australian qualification was completed at a campus located in regional Australia, you can claim 5 additional points.",
      });
    }

    // Partner Skills upgrade
    if (partnerSkills === "partner_none") {
      list.push({
        id: "partner_english",
        title: "Help Partner Gain Competent English",
        points: "+5 points",
        description: "If your spouse or de facto partner secures Competent English, you gain 5 points.",
      });
      list.push({
        id: "partner_skilled",
        title: "Get Partner Skills Assessed & English",
        points: "+10 points",
        description: "If your partner is under 45, has Competent English, and obtains a suitable skills assessment in their nominated occupation, it adds 10 points.",
      });
    } else if (partnerSkills === "partner_english") {
      list.push({
        id: "partner_skilled",
        title: "Add Partner Skills Assessment",
        points: "+5 more points",
        description: "Having your partner clear a skills assessment in a relevant occupation increases your partner points benefit from +5 to +10.",
      });
    }

    // State Nominated Visa route
    if (visaSubclass === "189") {
      list.push({
        id: "subclass_190",
        title: "Apply for Subclass 190 Nomination",
        points: "+5 points",
        description: "Being nominated by an Australian State or Territory Government awards an automatic 5 additional points.",
      });
      list.push({
        id: "subclass_491",
        title: "Apply for Subclass 491 Nomination",
        points: "+15 points",
        description: "Obtaining nomination by a State/Territory or sponsorship by an eligible family member in a regional area adds an automatic 15 points.",
      });
    } else if (visaSubclass === "190") {
      list.push({
        id: "subclass_491",
        title: "Consider Subclass 491 Regional Nomination",
        points: "+10 more points",
        description: "Switching from state nomination (Subclass 190) to regional sponsorship (Subclass 491) increases your nomination points from +5 to +15.",
      });
    }

    return list;
  }, [englishLevel, cclCertified, professionalYear, regionalStudy, studyRequirement, partnerSkills, visaSubclass]);

  // 5. Plain Text Copy functionality
  const handleCopyBreakdown = () => {
    const textLines = [
      `==========================================`,
      `AUSTRALIA PR & VISA POINTS BREAKDOWN SUMMARY`,
      `Site: ausprcalculator.com`,
      `==========================================`,
      `Visa Subclass selected: Subclass ${visaSubclass} (Points: ${calculationBreakdown.currentTotal})`,
      `------------------------------------------`,
      `Category-wise Points Breakdown:`,
      `1. Age Band: ${ageBand === "45+" ? "45 years or over" : ageBand + " years"} -> ${calculationBreakdown.age} pts`,
      `2. English Language Ability: ${englishLevel.toUpperCase()} -> ${calculationBreakdown.english} pts`,
      `3. Skilled Experience (Combined Cap: 20 pts):`,
      `   - Overseas (Outside AU): ${overseasExp} years -> ${calculationBreakdown.overseasExp} pts`,
      `   - Australian (In AU): ${australianExp} years -> ${calculationBreakdown.australianExp} pts`,
      `   - Combined Work Experience Point Claimed: ${calculationBreakdown.combinedExp} pts`,
      `4. Educational Qualification: ${education.toUpperCase().replace("_", " ")} -> ${calculationBreakdown.education} pts`,
      `5. Partner Skills Status: ${partnerSkills.toUpperCase().replace("_", " ")} -> ${calculationBreakdown.partner} pts`,
      `6. Special Toggles:`,
      `   - Australian Study Requirement: ${studyRequirement ? "Yes (+5 pts)" : "No (0 pts)"}`,
      `   - Specialist STEM Education: ${stemQualification ? "Yes (+10 pts)" : "No (0 pts)"}`,
      `   - Credentialled Community Language: ${cclCertified ? "Yes (+5 pts)" : "No (0 pts)"}`,
      `   - Study in Regional Australia: ${regionalStudy ? "Yes (+5 pts)" : "No (0 pts)"}`,
      `   - Professional Year: ${professionalYear ? "Yes (+5 pts)" : "No (0 pts)"}`,
      `------------------------------------------`,
      `FINAL CALCULATED SCORES:`,
      `- Subclass 189 (Independent): ${calculationBreakdown.score189} points`,
      `- Subclass 190 (Nominated): ${calculationBreakdown.score190} points (includes +5 state bonus)`,
      `- Subclass 491 (Regional): ${calculationBreakdown.score491} points (includes +15 regional bonus)`,
      `------------------------------------------`,
      `Generated on: ${new Date().toLocaleDateString()}`,
      `==========================================`
    ];

    navigator.clipboard.writeText(textLines.join("\n")).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Input controls form container */}
      <section className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="inline-flex items-center justify-center bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 w-8 h-8 rounded-lg text-sm font-semibold">1</span>
          Visa Eligibility Factors
        </h2>

        <div className="space-y-6">
          {/* A1. Visa Subclass Selector */}
          <div>
            <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
              Select Your Visa Subclass Target
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: "189", name: "Subclass 189", desc: "Skilled Independent" },
                { id: "190", name: "Subclass 190", desc: "Skilled Nominated (+5 pts)" },
                { id: "491", name: "Subclass 491", desc: "Regional Sponsor (+15 pts)" },
              ].map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setVisaSubclass(sub.id)}
                  className={`flex flex-col text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    visaSubclass === sub.id
                      ? "border-teal-500 bg-teal-50/40 dark:bg-teal-950/20 text-teal-900 dark:text-teal-300 ring-2 ring-teal-500/20"
                      : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400"
                  }`}
                >
                  <span className="font-semibold text-sm">{sub.name}</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">{sub.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* A2. Age Band Dropdown */}
          <div>
            <label htmlFor="ageBand" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
              Age Band
            </label>
            <select
              id="ageBand"
              value={ageBand}
              onChange={(e) => setAgeBand(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-sm"
            >
              <option value="18-24">18 to 24 years (25 pts)</option>
              <option value="25-32">25 to 32 years (30 pts)</option>
              <option value="33-39">33 to 39 years (25 pts)</option>
              <option value="40-44">40 to 44 years (15 pts)</option>
              <option value="45+">45 years or over (0 pts)</option>
            </select>
          </div>

          {/* A3. English Language Ability */}
          <div>
            <label htmlFor="englishLevel" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
              English Language Ability
            </label>
            <select
              id="englishLevel"
              value={englishLevel}
              onChange={(e) => setEnglishLevel(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-sm"
            >
              <option value="competent">Competent English (IELTS 6.0 / PTE 50) (0 pts)</option>
              <option value="proficient">Proficient English (IELTS 7.0 / PTE 65) (10 pts)</option>
              <option value="superior">Superior English (IELTS 8.0 / PTE 79) (20 pts)</option>
            </select>
          </div>

          {/* A4. Skilled Employment Experience */}
          <div className="bg-zinc-50 dark:bg-zinc-950/40 rounded-2xl p-4 border border-zinc-100 dark:border-zinc-900">
            <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-3 flex items-center justify-between">
              <span>Skilled Employment Experience</span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-teal-600 dark:text-teal-400 bg-teal-100/50 dark:bg-teal-950/30 px-2 py-0.5 rounded-full">
                Combined Cap: 20 pts Max
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="overseasExp" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">
                  Overseas (Outside Australia)
                </label>
                <select
                  id="overseasExp"
                  value={overseasExp}
                  onChange={(e) => setOverseasExp(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-zinc-100 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-xs"
                >
                  <option value="0">Less than 3 years (0 pts)</option>
                  <option value="3-4">3 to 4 years (5 pts)</option>
                  <option value="5-7">5 to 7 years (10 pts)</option>
                  <option value="8+">8+ years (15 pts)</option>
                </select>
              </div>

              <div>
                <label htmlFor="australianExp" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">
                  Australian (In Australia)
                </label>
                <select
                  id="australianExp"
                  value={australianExp}
                  onChange={(e) => setAustralianExp(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-zinc-100 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-xs"
                >
                  <option value="0">Less than 1 year (0 pts)</option>
                  <option value="1-2">1 to 2 years (5 pts)</option>
                  <option value="3-4">3 to 4 years (10 pts)</option>
                  <option value="5-7">5 to 7 years (15 pts)</option>
                  <option value="8+">8+ years (20 pts)</option>
                </select>
              </div>
            </div>
            {calculationBreakdown.overseasExp + calculationBreakdown.australianExp > 20 && (
              <p className="text-[11px] text-teal-600 dark:text-teal-400 mt-2 font-medium">
                * Note: Your combined experience adds up to {calculationBreakdown.overseasExp + calculationBreakdown.australianExp} points, but has been capped at the official limit of 20 points.
              </p>
            )}
          </div>

          {/* A5. Highest Educational Qualification */}
          <div>
            <label htmlFor="education" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
              Highest Educational Qualification
            </label>
            <select
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-sm"
            >
              <option value="doctorate">Doctorate / PhD from AU or recognized overseas institution (20 pts)</option>
              <option value="bachelor">Bachelor degree or higher from AU or recognized overseas institution (15 pts)</option>
              <option value="diploma">Trade Qualification or Diploma completed in AU or overseas (10 pts)</option>
              <option value="skills_assessed">An award/qualification recognized by skills assessing authority (10 pts)</option>
              <option value="none">None of the above (0 pts)</option>
            </select>
          </div>

          {/* A7. Partner Skills Status */}
          <div>
            <label htmlFor="partnerSkills" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
              Partner Skills & Status
            </label>
            <select
              id="partnerSkills"
              value={partnerSkills}
              onChange={(e) => setPartnerSkills(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-sm"
            >
              <option value="single">Single or partner is an Australian Citizen / Permanent Resident (+10 pts)</option>
              <option value="partner_skilled">Partner is under 45, has Competent English & a suitable Skills Assessment (+10 pts)</option>
              <option value="partner_english">Partner has Competent English only (No Skills Assessment) (+5 pts)</option>
              <option value="partner_none">Partner has neither Competent English nor Skills Assessment (0 pts)</option>
            </select>
          </div>

          {/* A6. Toggles Section */}
          <div className="border-t border-zinc-150 dark:border-zinc-800 pt-6">
            <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-4">Additional Qualification Bonus Points</h3>
            <div className="space-y-4">
              {[
                { id: "studyReq", checked: studyRequirement, setChecked: setStudyRequirement, title: "Australian Study Requirement", desc: "Completed at least 2 academic years of study in Australia (+5 pts)" },
                { id: "stemQual", checked: stemQualification, setChecked: setStemQualification, title: "Specialist STEM Education", desc: "Master's by research or PhD in STEM/ICT in Australia (+10 pts)" },
                { id: "ccl", checked: cclCertified, setChecked: setCclCertified, title: "Credentialled Community Language (NAATI CCL)", desc: "Accredited by NAATI as a translator or interpreter (+5 pts)" },
                { id: "regional", checked: regionalStudy, setChecked: setRegionalStudy, title: "Study in Regional Australia", desc: "Met study requirements while living and studying in regional Australia (+5 pts)" },
                { id: "pyYear", checked: professionalYear, setChecked: setProfessionalYear, title: "Professional Year in Australia", desc: "Completed in Accounting, ICT, or Engineering within 4 years (+5 pts)" },
              ].map((toggle) => (
                <div key={toggle.id} className="flex items-start justify-between gap-4 p-1.5 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 rounded-xl transition-colors">
                  <div className="flex-1">
                    <label htmlFor={toggle.id} className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 cursor-pointer block">
                      {toggle.title}
                    </label>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 block">{toggle.desc}</span>
                  </div>
                  <div className="relative flex items-center pt-0.5">
                    <input
                      id={toggle.id}
                      type="checkbox"
                      checked={toggle.checked}
                      onChange={(e) => toggle.setChecked(e.target.checked)}
                      className="peer h-5 w-10 cursor-pointer appearance-none rounded-full bg-zinc-200 dark:bg-zinc-850 transition-colors before:absolute before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-transform checked:bg-teal-500 checked:before:translate-x-5 before:translate-x-0.5 before:top-[3px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Output results dashboard */}
      <section className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
        {/* Dynamic Metric Card */}
        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden">
          {/* Decorative mesh background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-teal-100 mb-1">
                Your Calculated Points Score
              </p>
              <h3 className="text-lg font-bold">Subclass {visaSubclass} Total Score</h3>
            </div>
            
            <div className="my-8 flex items-baseline gap-2">
              <span className="text-7xl font-extrabold tracking-tight">
                {calculationBreakdown.currentTotal}
              </span>
              <span className="text-teal-100 font-semibold text-sm">/ 65 min requirement</span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <span className="text-xs text-teal-100 font-medium">
                {calculationBreakdown.currentTotal >= 65 ? (
                  <span className="inline-flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse"></span>
                    Eligible to apply (65+ points)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-full text-xs text-orange-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span>
                    Below minimum 65-point threshold
                  </span>
                )}
              </span>

              <button
                onClick={handleCopyBreakdown}
                className="flex items-center gap-1.5 bg-white text-teal-800 font-semibold text-xs px-3.5 py-2 rounded-xl shadow-sm hover:bg-teal-50 active:scale-95 transition-all cursor-pointer"
              >
                {copySuccess ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy Summary
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Breakdown */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
          <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-4">Compare Visa Subclasses</h4>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "189", label: "Subclass 189", sub: "Independent", score: calculationBreakdown.score189 },
              { id: "190", label: "Subclass 190", sub: "Nominated (+5)", score: calculationBreakdown.score190 },
              { id: "491", label: "Subclass 491", sub: "Regional (+15)", score: calculationBreakdown.score491 },
            ].map((visa) => (
              <button
                key={visa.id}
                onClick={() => setVisaSubclass(visa.id)}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                  visaSubclass === visa.id
                    ? "border-teal-500 bg-teal-50/20 dark:bg-teal-950/10 text-teal-800 dark:text-teal-300 ring-2 ring-teal-500/20"
                    : "border-zinc-150 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-950/20 text-zinc-500 dark:text-zinc-500"
                }`}
              >
                <span className="text-[11px] font-bold block">{visa.label}</span>
                <span className="text-[9px] block text-zinc-400 dark:text-zinc-650 mt-0.5">{visa.sub}</span>
                <span className={`text-2xl font-extrabold mt-2 ${visaSubclass === visa.id ? "text-teal-600 dark:text-teal-400" : "text-zinc-700 dark:text-zinc-300"}`}>
                  {visa.score}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Pathways to Score More Points */}
        {recommendations.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-3">Ways to Score More Points</h4>
            <div className="max-h-[300px] overflow-y-auto pr-1 space-y-3 custom-scrollbar">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-950/40 rounded-2xl border border-zinc-100 dark:border-zinc-900/60"
                >
                  <span className="inline-flex items-center justify-center bg-teal-100 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 text-xs font-bold px-2 py-1 rounded-lg shrink-0">
                    {rec.points}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{rec.title}</p>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">{rec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

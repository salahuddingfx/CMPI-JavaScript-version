import React from "react";
import { detectDepartmentFromSubjects as localDetectDept } from "@/utils/btebSubjectCodes";

// Grade display colors
export const gradeColor = {
  "A+": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200",
  A:   "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200",
  "A-": "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 border border-sky-200",
  "B+": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200",
  B:   "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200",
  "B-": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200",
  F:   "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200",
};

export function GradePill({ grade }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-black ${gradeColor[grade] ?? "bg-muted text-muted-foreground"}`}>
      {grade}
    </span>
  );
}

// Parses subject code suffixes (T, P) to clear language
export function parseSubjectSuffix(subjectCode) {
  const match = subjectCode.match(/\(([^)]+)\)/);
  if (!match || !match[1]) return "Regular Examination";
  const types = match[1].split(",").map((t) => {
    if (t.trim() === "T") return "Theory";
    if (t.trim() === "P") return "Practical";
    return t.trim();
  });
  return `Referred: ${types.join(", ")}`;
}

// Sort semester records 1st → 8th
export const SEM_ORDER = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

export function semIndex(s) {
  const lower = (s ?? "").toLowerCase().trim();
  const numMatch = lower.match(/^(\d)/);
  if (numMatch?.[1]) {
    const n = parseInt(numMatch[1]);
    if (n >= 1 && n <= 8) return n - 1;
  }
  const semMatch = lower.match(/(?:semester|sem)\s*[-–]?\s*(\d|I{1,3}V?|IX|V?I{0,3})/);
  if (semMatch?.[1]) {
    const val = semMatch[1];
    if (/^\d+$/.test(val)) {
      const n = parseInt(val);
      if (n >= 1 && n <= 8) return n - 1;
    }
    const romanMap = { i: 0, ii: 1, iii: 2, iv: 3, v: 4, vi: 5, vii: 6, viii: 7, ix: 8 };
    if (val && romanMap[val] !== undefined) return romanMap[val];
  }
  return 99;
}

export const REGULATION_WEIGHTS = {
  "2022": [0.05, 0.05, 0.10, 0.10, 0.20, 0.20, 0.20, 0.10],
  "2016": [0.05, 0.05, 0.05, 0.10, 0.10, 0.20, 0.20, 0.25],
};

// Infer most accurate department from all BTEB records
export function computeDepartment(records) {
  const stored = records.find(
    (r) => r.department && r.department !== "General Technology" && r.department !== "Auto Detect" && r.department !== ""
  );
  if (stored) return stored.department;

  const allSubjectCodes = [];
  records.forEach((r) => {
    if (r.referred_subjects) allSubjectCodes.push(...r.referred_subjects);
  });
  if (allSubjectCodes.length > 0) {
    const detected = localDetectDept(allSubjectCodes);
    if (detected !== "General Technology") return detected;
  }

  return records[0]?.department ?? "General Technology";
}

// Inline fallback CheckCircle SVG
export function CheckCircle(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

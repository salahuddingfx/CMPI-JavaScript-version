import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "@/components/SectionHeader";
import { ChevronDown, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Disclaimer() {
  const [openIndex, setOpenIndex] = useState(0);

  const sections = [
    {
      title: "1. Educational Information Purposes Only",
      content: "All content, resources, materials, syllabus guides, results, routines, and templates published on the CMPI web portals are provided solely for general educational and administrative purposes."
    },
    {
      title: "2. Absolute Primacy of BTEB Regulations",
      content: "The academic policies of Cox's Bazar Model Polytechnic Institute are governed directly by BTEB. In case of discrepancies between this website and BTEB printed registers, the board registers control."
    },
    {
      title: "3. Non-Guarantee of Database Uptime",
      content: "While we make every effort to maintain continuous server availability, we do not guarantee uninterrupted access to the student portals, webmail services, or billing ledgers."
    },
    {
      title: "4. Temporary Inaccuracies Disclaimer",
      content: "We make reasonable efforts to keep all pages accurate. However, we do not guarantee that all dates, syllabus codes, and faculty details are free of typographical errors or omissions."
    },
    {
      title: "5. Financial Payments Validation",
      content: "All manual payment submissions are subject to audit. Posting fake or duplicate transaction IDs will not result in valid course enrollment, regardless of automatic receipt generation."
    },
    {
      title: "6. User-Submitted Comments & Material",
      content: "CMPI is not responsible for views, answers, or files uploaded by students on student feedback systems or study group pages. We reserve the right to remove offensive uploads."
    },
    {
      title: "7. Uptime and Third-Party API Limits",
      content: "We integrate third-party services like PDF printers, CDN servers, and email hosts. The institute is not responsible for delays caused by outages on these external systems."
    },
    {
      title: "8. Cybersecurity Defenses & Server Security",
      content: "While we use TLS encryption and database backups, the college does not guarantee that file downloads are free of malware, spyware, or browser injection codes."
    },
    {
      title: "9. Official Printed Notices Control",
      content: "If a notice published on the online notice board conflicts with the signed notices posted on the physical college bulletin board, the signed printed notice controls."
    },
    {
      title: "10. Course & Technology Syllabus Updates",
      content: "Syllabuses and semester outlines are updated to match BTEB curriculum changes. The institute is not liable for changes in semester structure or subject codes."
    },
    {
      title: "11. Liability Limits for Database Failures",
      content: "The polytechnic is not liable for loss of student records, billing logs, routine dates, or portal user states resulting from database crashes or network failures."
    },
    {
      title: "12. Admission Eligibility Decisions",
      content: "Information on the admission page is an enrollment guide. Submitting an admission inquiry does not guarantee selection, which is governed by BTEB rules."
    },
    {
      title: "13. Third-Party Links Disclaimer",
      content: "Links to BTEB, Ministry, and other external pages are provided for student convenience. We are not responsible for their content or data collection practices."
    },
    {
      title: "14. No Endorsement of Commercial Software",
      content: "Any reference on our website to specific computer languages, CAD systems, or hardware brands is for educational training purposes only and does not imply endorsement."
    },
    {
      title: "15. Responsibility for Personal Devices",
      content: "Students are responsible for the security and capability of the personal computers, tablets, or phones they use to access our dashboards."
    },
    {
      title: "16. Class Schedule Changes",
      content: "Routines, exam dates, and teacher listings can be modified at any time due to administrative needs or national holidays. Check notices for updates."
    },
    {
      title: "17. Legal Disputes and Jurisdiction",
      content: "These disclaimers are interpreted under the laws of Bangladesh. Any dispute arising from website usage is subject to the courts of Cox's Bazar, Bangladesh."
    },
    {
      title: "18. Administrative Contact Office",
      content: "For questions about this disclaimer or website accuracy, contact the Principal's Office: Cox's Bazar Model Polytechnic Institute, College Road, Cox's Bazar. Email: info@cmpi.edu.bd."
    }
  ];

  return (
    <PageTransition className="container section-pad">
      <SEO title="Disclaimer" description="Disclaimer for using CMPI website and resources." />
      <article className="mx-auto max-w-4xl rounded-sm border bg-card p-6 shadow-sm sm:p-10">
        <SectionHeader title="Disclaimer" description="Last updated: June 2026" align="left" className="mb-8" />
        
        <div className="mb-6 flex items-center gap-3 rounded-2xl bg-primary/10 p-4 text-primary border border-primary/20">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-semibold">Click on any section header to expand and read our website disclaimers.</p>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300"
              >
                <span className="text-sm sm:text-base">{section.title}</span>
                <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : ""}`} />
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center border-t border-slate-200 dark:border-slate-850 pt-6">
          <Link to="/" className="font-bold text-primary hover:underline">Back to Home</Link>
          <p className="text-xs text-slate-500 font-semibold">Cox's Bazar Model Polytechnic Institute © {new Date().getFullYear()}</p>
        </div>
      </article>
    </PageTransition>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "@/components/SectionHeader";
import { ChevronDown, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function RefundPolicy() {
  const [openIndex, setOpenIndex] = useState(0);

  const sections = [
    {
      title: "1. Scope and Authority of the Accounts Division",
      content: "This policy establishes standard protocols for all tuition fees, admission costs, exam fees, registration charges, and security deposits made to the Accounts Division of Cox's Bazar Model Polytechnic Institute (CMPI)."
    },
    {
      title: "2. Compliance with BTEB Financial Guidelines",
      content: "All fee structures, refund rules, exam charge models, and semester billing terms align with the instructions and registration rules set by BTEB."
    },
    {
      title: "3. Non-Refundability of Admission Fees",
      content: "Initial admission fees and registration charges paid during student intake are non-refundable once the student has been registered in the BTEB portal."
    },
    {
      title: "4. Refund Window Before Classes Start",
      content: "If an applicant requests cancellation before classes begin, they may receive a partial refund of their tuition, minus a fifteen percent (15%) administration fee."
    },
    {
      title: "5. Mid-Semester Withdrawals Policy",
      content: "Students who formally withdraw from the polytechnic after classes start but before the mid-semester exams are not eligible for any tuition refunds."
    },
    {
      title: "6. Deducting BTEB Board Registration Charges",
      content: "When processing any approved pre-semester refund, BTEB registration fees and insurance costs are completely excluded from the refund sum."
    },
    {
      title: "7. Handling Semester Dropping & Credits Transfer",
      content: "If a student drops a semester due to medical reasons, their tuition fees are carried over as a credit to the next semester. No direct cash refund is provided."
    },
    {
      title: "8. Refund of Caution Deposits & Library Security",
      content: "Caution and library security deposits are fully refundable when a student graduates or permanently leaves the college, subject to returning all books."
    },
    {
      title: "9. Non-Refundable BTEB Board Exam Charges",
      content: "Board exam form fill-up fees, center fees, and practical exam charges paid to BTEB are non-refundable, as these are sent directly to the board database."
    },
    {
      title: "10. Refund Guidelines for Dismissed Students",
      content: "Students who are dismissed or expelled from the institute due to disciplinary issues or breaking college rules forfeit all rights to any refund."
    },
    {
      title: "11. Resolving Overpayments and Billing Errors",
      content: "If you pay more than your invoice due to a portal bug or double transaction, the excess amount is adjusted against the next semester invoice."
    },
    {
      title: "12. Refunding Cancelled Technical Programs",
      content: "If the institute cancels a specific program or course section, students will receive a one hundred percent (100%) refund of tuition and registration fees."
    },
    {
      title: "13. Direct Bank-to-Bank Refund Processing",
      content: "All approved refunds are sent directly via bank transfer (EFT) to the student's or guardian's verified bank account. We do not distribute refunds in cash."
    },
    {
      title: "14. Submitting a Formal Written Refund Claim",
      content: "To request a refund, submit a signed request form to the Registrar, attaching your original receipt, ID card copy, and banking details."
    },
    {
      title: "15. Internal Audit and Claims Verification Time",
      content: "All refund claims go through a manual verification by the IT division and audit team. This verification takes up to fifteen (15) working days."
    },
    {
      title: "16. Appeal Process for Denied Refund Claims",
      content: "If a refund claim is denied by the Accounts office, the student can submit a written appeal to the Principal's Office within seven (7) days."
    },
    {
      title: "17. Unclaimed Security Deposits Expiry",
      content: "Library caution deposits must be claimed within one (1) year after graduation. Unclaimed deposits are transferred to the CMPI Student Welfare Fund."
    },
    {
      title: "18. Contact Information for the Accounts Division",
      content: "For billing queries or refund status updates, contact the accounts office: Accounts Dept, Cox's Bazar Model Polytechnic Institute, College Road, Cox's Bazar. Email: accounts@cmpi.edu.bd."
    }
  ];

  return (
    <PageTransition className="container section-pad">
      <SEO title="Refund Policy" description="Refund policy and fee guidelines for CMPI." />
      <article className="mx-auto max-w-4xl rounded-sm border bg-card p-6 shadow-sm sm:p-10">
        <SectionHeader title="Refund Policy" description="Last updated: June 2026" align="left" className="mb-8" />
        
        <div className="mb-6 flex items-center gap-3 rounded-2xl bg-primary/10 p-4 text-primary border border-primary/20">
          <CreditCard className="h-5 w-5 shrink-0" />
          <p className="text-sm font-semibold">Click on any section header to expand and read the details of our Refund Policy.</p>
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

import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "@/components/SectionHeader";

export function RefundPolicy() {
  return (
    <PageTransition className="container section-pad">
      <SEO
        title="Refund Policy"
        description="Refund policy for CMPI admission and institutional services."
      />
      <article className="mx-auto max-w-4xl rounded-sm border bg-card p-6 shadow-sm sm:p-10">
        <SectionHeader
          title="Refund Policy"
          description="General refund and fee adjustment guidelines."
          align="left"
          className="mb-8"
        />
        <div className="space-y-5 leading-7 text-muted-foreground">
          <h3 className="text-lg font-bold text-foreground">1. Scope</h3>
          <p>This Refund Policy applies to all fees, deposits, and payments made to Cox's Bazar Model Polytechnic Institute (CMPI), including admission fees, tuition fees, examination fees, laboratory fees, library fees, and other institutional charges.</p>

          <h3 className="text-lg font-bold text-foreground">2. Admission Fees</h3>
          <p>Admission fees paid at the time of enrollment are generally non-refundable once the academic session has commenced. If a student withdraws before the official admission deadline or before classes begin, a partial refund may be granted at the discretion of the admission committee, subject to deduction of administrative processing costs.</p>

          <h3 className="text-lg font-bold text-foreground">3. Tuition Fees</h3>
          <p>Tuition fees for a given semester or academic term are non-refundable after the add/drop period has ended. Students who officially withdraw from the institute within the first two weeks of the semester may be eligible for a prorated refund, excluding administrative fees. No refund is available after the mid-semester point.</p>

          <h3 className="text-lg font-bold text-foreground">4. Examination Fees</h3>
          <p>Examination fees paid to the Bangladesh Technical Education Board (BTEB) or institute-conducted exams are non-refundable once the examination schedule has been published.</p>

          <h3 className="text-lg font-bold text-foreground">5. Lab and Facility Fees</h3>
          <p>Laboratory, workshop, and facility usage fees are non-refundable after the equipment or materials have been allocated or consumed. Partial refunds may be considered on a case-by-case basis for damaged or unused materials.</p>

          <h3 className="text-lg font-bold text-foreground">6. How to Request a Refund</h3>
          <p>Refund requests must be submitted in writing to the CMPI Accounts Office. The request must include the student's name, ID number, payment receipt copy, bank details, and a clear reason for the request. Applications are reviewed within 15 working days. Approved refunds are processed via bank transfer or institutional cheque within 30 working days.</p>

          <h3 className="text-lg font-bold text-foreground">7. Refund Decisions</h3>
          <p>CMPI reserves the right to make final decisions on all refund requests. Decisions are based on institute policy, BTEB regulations, and the merits of each case. Disputed claims may be escalated to the institute's grievance committee.</p>

          <h3 className="text-lg font-bold text-foreground">8. Contact</h3>
          <p className="font-semibold text-foreground">
            Accounts Office, CMPI<br />
            Cox's Bazar, Bangladesh<br />
            Email: accounts@cmpi.edu.bd
          </p>
        </div>
        <Link
          to="/"
          className="mt-8 inline-flex font-bold text-primary hover:underline"
        >
          Back to Home
        </Link>
      </article>
    </PageTransition>
  );
}

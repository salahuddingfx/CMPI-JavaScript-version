import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "@/components/SectionHeader";

export function Disclaimer() {
  return (
    <PageTransition className="container section-pad">
      <SEO title="Disclaimer" description="Disclaimer for the CMPI website." />
      <article className="mx-auto max-w-4xl rounded-sm border bg-card p-6 shadow-sm sm:p-10">
        <SectionHeader
          title="Disclaimer"
          description="Information accuracy and website usage notice."
          align="left"
          className="mb-8"
        />
        <div className="space-y-5 leading-7 text-muted-foreground">
          <h3 className="text-lg font-bold text-foreground">1. General Information</h3>
          <p>The content published on this website, including notices, exam schedules, class routines, admission information, faculty details, and academic resources, is provided for general informational and administrative purposes. While CMPI strives to keep all information accurate and up to date, no guarantee is made regarding completeness, reliability, or timeliness.</p>

          <h3 className="text-lg font-bold text-foreground">2. Official Notices</h3>
          <p>In the event of any discrepancy between information on this website and official printed circulars, notices, or announcements issued by CMPI or the Bangladesh Technical Education Board (BTEB), the official printed version shall prevail. Students and stakeholders are encouraged to verify critical information through the institute office.</p>

          <h3 className="text-lg font-bold text-foreground">3. External Links</h3>
          <p>This website may contain links to third-party websites, including government portals, educational resources, and partner organizations. CMPI has no control over the content, privacy practices, or availability of those external sites. Links do not constitute endorsement.</p>

          <h3 className="text-lg font-bold text-foreground">4. Availability</h3>
          <p>Every effort is made to keep the website running smoothly. However, CMPI takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control, including but not limited to server maintenance, network outages, or cyber incidents.</p>

          <h3 className="text-lg font-bold text-foreground">5. Personal Responsibility</h3>
          <p>Users of this website assume full responsibility for how they use the information provided. CMPI shall not be liable for any loss, damage, or inconvenience arising from the use of or reliance on website content, including missed deadlines, incorrect application submissions, or academic decisions made based on website information.</p>

          <h3 className="text-lg font-bold text-foreground">6. Changes to Content</h3>
          <p>CMPI reserves the right to modify, update, or remove any content on this website at any time without prior notice.</p>

          <h3 className="text-lg font-bold text-foreground">7. Contact</h3>
          <p className="font-semibold text-foreground">
            Cox's Bazar Model Polytechnic Institute<br />
            Cox's Bazar, Bangladesh<br />
            Email: info@cmpi.edu.bd<br />
            Phone: +880 341 000100
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

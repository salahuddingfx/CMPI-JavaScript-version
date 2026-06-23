import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeader } from "@/components/SectionHeader";

export function Accessibility() {
  return (
    <PageTransition className="container section-pad">
      <SEO
        title="Accessibility"
        description="Accessibility statement for the CMPI website."
      />
      <article className="mx-auto max-w-4xl rounded-sm border bg-card p-6 shadow-sm sm:p-10">
        <SectionHeader
          title="Accessibility Statement"
          description="CMPI is working to make the website easier to use for everyone."
          align="left"
          className="mb-8"
        />
        <div className="space-y-5 leading-7 text-muted-foreground">
          <h3 className="text-lg font-bold text-foreground">1. Commitment</h3>
          <p>Cox's Bazar Model Polytechnic Institute (CMPI) is committed to ensuring that its website is accessible to all users, including those with visual, auditory, motor, or cognitive impairments. We believe in inclusive education and strive to provide a barrier-free digital environment.</p>

          <h3 className="text-lg font-bold text-foreground">2. Standards</h3>
          <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. While full conformance is an ongoing goal, we continuously evaluate and improve the website to meet these standards.</p>

          <h3 className="text-lg font-bold text-foreground">3. Features</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Keyboard navigation:</strong> All interactive elements are accessible via keyboard.</li>
            <li><strong>Screen reader support:</strong> Semantic HTML, ARIA labels, and alt text are used throughout.</li>
            <li><strong>Color contrast:</strong> Sufficient contrast ratios for readability.</li>
            <li><strong>Responsive design:</strong> Compatible with mobile, tablet, and desktop devices.</li>
            <li><strong>Resizable text:</strong> Text can be resized using browser zoom without loss of content.</li>
            <li><strong>Focus indicators:</strong> Visible focus rings on interactive elements.</li>
          </ul>

          <h3 className="text-lg font-bold text-foreground">4. Limitations</h3>
          <p>Some older PDF documents, scanned notices, or third-party embedded content may not be fully accessible. We are working to replace such content with accessible alternatives where possible.</p>

          <h3 className="text-lg font-bold text-foreground">5. Feedback</h3>
          <p>If you encounter any accessibility barriers while using this website, please contact us. We welcome your feedback and will make every reasonable effort to address the issue promptly.</p>

          <h3 className="text-lg font-bold text-foreground">6. Contact Information</h3>
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

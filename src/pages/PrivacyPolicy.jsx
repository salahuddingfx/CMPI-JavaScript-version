import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import PageTransition from '@/components/PageTransition';

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <SEO title="Privacy Policy" />
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-black mb-4">Privacy Policy</h1>
          <p className="text-white/80 text-lg">Last updated: June 2026</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-5 leading-7 text-slate-600 dark:text-slate-400">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">1. Introduction</h3>
            <p>Cox's Bazar Model Polytechnic Institute (CMPI) values the privacy of its students, guardians, faculty, staff, and website visitors. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you interact with our official website and associated digital services.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">2. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Personal Identification Information:</strong> Full name, email address, phone number, mailing address, date of birth, guardian details, and blood group when provided through admission inquiries, registration forms, feedback forms, or contact forms.</li>
              <li><strong>Academic Information:</strong> Student ID, department, semester, session, admission date, academic records, and course enrollment details for registered students.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, operating system, referring URLs, and usage patterns collected automatically for analytics and security purposes.</li>
              <li><strong>Communication Records:</strong> Correspondence sent through the website contact forms, email inquiries, and support requests.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">3. How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>To process and respond to admission inquiries, feedback, and support requests.</li>
              <li>To publish official notices, exam routines, class schedules, and academic results.</li>
              <li>To manage student accounts, including login, profile updates, and dashboard access.</li>
              <li>To send important institute announcements, event updates, and examination notifications.</li>
              <li>To improve website content, user experience, and service delivery.</li>
              <li>To maintain website security and detect fraudulent activity.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">4. Data Storage and Retention</h3>
            <p>Your personal data is stored securely on servers operated within Bangladesh. We retain your information for as long as your account remains active or as needed to provide services. Academic records may be retained longer to comply with BTEB regulations. You may request deletion of your account data by contacting the administration, subject to applicable legal obligations.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">5. Data Sharing</h3>
            <p>CMPI does not sell, rent, or trade your personal information. We may share information with authorized institute faculty, BTEB and government authorities as required by law, and service providers bound by confidentiality agreements.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">6. Cookies</h3>
            <p>Our website uses essential cookies for authentication and preference cookies for theme and remember-me functionality. You can manage preferences via our Cookie Consent banner. See our <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> for details.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">7. Data Security</h3>
            <p>We implement SSL/TLS encryption, secure password storage, access controls, and regular security reviews. However, no online transmission is completely secure.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">8. Your Rights</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your account and associated data.</li>
              <li>Withdraw consent for non-essential cookies.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">9. Contact</h3>
            <p className="font-semibold text-slate-900 dark:text-white">
              Cox's Bazar Model Polytechnic Institute<br />
              Cox's Bazar, Bangladesh<br />
              Email: info@cmpi.edu.bd<br />
              Phone: +880 341 000100
            </p>
          </div>
          <Link to="/" className="mt-8 inline-flex font-bold text-primary hover:underline">Back to Home</Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default PrivacyPolicy;

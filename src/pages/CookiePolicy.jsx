import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import PageTransition from '@/components/PageTransition';

const CookiePolicy = () => {
  return (
    <PageTransition>
      <SEO title="Cookie Policy" />
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-black mb-4">Cookie Policy</h1>
          <p className="text-white/80 text-lg">Last updated: June 2026</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-5 leading-7 text-slate-600 dark:text-slate-400">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">1. What Are Cookies</h3>
            <p>Cookies are small text files stored on your device by your web browser when you visit a website. They help websites remember your preferences, login status, and browsing activity to provide a smoother and more personalized experience.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">2. How We Use Cookies</h3>
            <p>CMPI uses cookies only when necessary and with your explicit consent (except for essential cookies). We do not use tracking cookies for advertising purposes.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">3. Types of Cookies We Use</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 dark:border-slate-700 text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="border border-slate-200 dark:border-slate-700 px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Cookie</th>
                    <th className="border border-slate-200 dark:border-slate-700 px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Purpose</th>
                    <th className="border border-slate-200 dark:border-slate-700 px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Duration</th>
                    <th className="border border-slate-200 dark:border-slate-700 px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-xs">cmpi_token</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">Authentication token for logged-in users</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">Session</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3"><span className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded text-xs font-bold">Essential</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-xs">cmpi_remember</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">Pre-fills your email on login page</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">30 days</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3"><span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-2 py-0.5 rounded text-xs font-bold">Preference</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-xs">cmpi-theme</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">Remembers your dark/light mode preference</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">1 year</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3"><span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-2 py-0.5 rounded text-xs font-bold">Preference</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-xs">cmpi-cookie-consent</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">Stores your cookie consent choice</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">7 days</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3"><span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-2 py-0.5 rounded text-xs font-bold">Preference</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3 font-mono text-xs">cmpi-visitor-id</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">Unique identifier for anonymous analytics</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3">1 year</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-3"><span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded text-xs font-bold">Analytics</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">4. Managing Cookies</h3>
            <p>When you first visit our site, a cookie consent banner appears. You may Accept or Deny non-essential cookies. You can also manage or delete cookies through your browser settings. Essential cookies cannot be disabled as they are necessary for site functionality.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">5. Third-Party Cookies</h3>
            <p>We do not use third-party advertising or social media cookies. Our analytics cookies are used solely for internal site improvement.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">6. Contact</h3>
            <p className="font-semibold text-slate-900 dark:text-white">
              Cox's Bazar Model Polytechnic Institute<br />
              Cox's Bazar, Bangladesh<br />
              Email: info@cmpi.edu.bd
            </p>
          </div>
          <Link to="/" className="mt-8 inline-flex font-bold text-primary hover:underline">Back to Home</Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default CookiePolicy;

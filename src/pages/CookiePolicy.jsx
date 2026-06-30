import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import PageTransition from '@/components/PageTransition';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CookiePolicy = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const sections = [
    {
      title: "1. Definition and Core Concepts of Cookies",
      content: "Cookies are minor text records sent to your computer's browser directory when you load pages. They function as memory tokens for web servers, allowing them to verify session parameters, display language settings, and save credentials so you don't have to log in repeatedly."
    },
    {
      title: "2. Compliance with BTEB & IT Acts",
      content: "Our cookie configurations, tracking variables, and device identifiers are processed in accordance with the Information and Communication Technology (ICT) Act 2006 of Bangladesh and BTEB operational codes."
    },
    {
      title: "3. Direct Purpose of Using Cookies",
      content: "We use cookies strictly to authenticate student and faculty accounts, remember system interface choices (such as dark/light themes), verify manual payment transactions, track visitors, and defend against bot scripts."
    },
    {
      title: "4. Detailed Listing of Cookie Tokens",
      content: (
        <div className="overflow-x-auto my-3">
          <table className="w-full border-collapse border border-slate-200 dark:border-slate-800 text-xs">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900">
                <th className="border border-slate-200 dark:border-slate-850 px-3 py-2 text-left font-bold text-slate-800 dark:text-slate-200">Token Name</th>
                <th className="border border-slate-200 dark:border-slate-850 px-3 py-2 text-left font-bold text-slate-800 dark:text-slate-200">Purpose</th>
                <th className="border border-slate-200 dark:border-slate-850 px-3 py-2 text-left font-bold text-slate-800 dark:text-slate-200">Duration</th>
                <th className="border border-slate-200 dark:border-slate-850 px-3 py-2 text-left font-bold text-slate-800 dark:text-slate-200">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-900">
              <tr>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2 font-mono text-[10px]">token</td>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2">Stores secure session JWT token for API calls</td>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2">Session</td>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2 font-bold text-yellow-600">Essential</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2 font-mono text-[10px]">cmpi_user</td>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2">Saves basic student details for sidebar display</td>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2">30 Days</td>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2 font-bold text-green-600">Preference</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2 font-mono text-[10px]">cmpi-theme</td>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2">Remembers custom dark mode toggle state</td>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2">1 Year</td>
                <td className="border border-slate-200 dark:border-slate-850 px-3 py-2 font-bold text-green-600">Preference</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: "5. Strict Separation of Essential Cookies",
      content: "Essential cookies are mandatory for accessing dashboard panels. They authenticate your credentials and prevent security threats. They are created automatically and cannot be turned off through our cookie selector."
    },
    {
      title: "6. Custom Preference Cookie Settings",
      content: "Preference cookies allow our portals to remember your setting adjustments, such as saving your login email address on the form for faster access next time."
    },
    {
      title: "7. User Consent Banner System",
      content: "When first landing on our website, a GDPR-compliant consent banner is shown. You can choose to accept all, customize preferences, or decline tracking identifiers."
    },
    {
      title: "8. Modifying Cookie Settings in Web Browsers",
      content: "You can block cookies entirely by adjusting your browser parameters (Chrome, Firefox, Safari, Edge). Blocking essential cookies will cause login failures in dashboard screens."
    },
    {
      title: "9. Analytics Tools and Statistics Logs",
      content: "We use anonymous visitor identifiers to monitor site usage, page load times, device types, and download speeds. This helps us optimize notice page performance."
    },
    {
      title: "10. Anti-Forgery tokens (CSRF Logs)",
      content: "Our database servers attach unique CSRF tokens to every form submission. This cookie blocks cross-site script forgery, protecting student forms from hackers."
    },
    {
      title: "11. Zero Commercial Third-Party Marketing Tracking",
      content: "We have a strict zero-marketing policy. Our cookies are never shared with or accessible to commercial advertisers, Google remarketing systems, or Facebook pixels."
    },
    {
      title: "12. Session Inactivity Auto-Logouts",
      content: "For cybersecurity, session cookies auto-expire after twenty (20) minutes of inactivity. When the cookie expires, you will be safely logged out of your account."
    },
    {
      title: "13. Storing Data in LocalStorage",
      content: "We use browser local storage to save details (such as initials) to improve client side performance and minimize calls to the Laravel database API."
    },
    {
      title: "14. Database Cookie Consents Log",
      content: "Your cookie choices are logged securely in our backend system. This log is used to verify that we obtained proper consent from you, keeping the site compliant."
    },
    {
      title: "15. Browser Cache Management",
      content: "Our assets use caching headers. We recommend clearing your browser cache and cookies after major semester updates to download the latest files."
    },
    {
      title: "16. Legal Age Limits & Consent",
      content: "For students under 18, parents or legal guardians are responsible for managing cookie consents and adjusting tracking settings on behalf of the minor."
    },
    {
      title: "17. Policy Updates & Changes",
      content: "The institute may modify this Cookie Policy to align with new cyber security requirements. Changes will be posted here with an updated revision date."
    },
    {
      title: "18. Cookie Grievance & Technical Contact",
      content: "For inquiries regarding browser tracking, local storage, or data safety, contact our technical team: IT Support Dept, Cox's Bazar Model Polytechnic Institute, College Road, Cox's Bazar 4750, Bangladesh. Email: support@cmpi.edu.bd."
    }
  ];

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
          <div className="mb-6 flex items-center gap-3 rounded-2xl bg-primary/10 p-4 text-primary border border-primary/20">
            <ShieldCheck className="h-5 w-5 shrink-0" />
            <p className="text-sm font-semibold">Click on any section header to expand and read the details of our Cookie Policy.</p>
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
        </div>
      </section>
    </PageTransition>
  );
};

export default CookiePolicy;

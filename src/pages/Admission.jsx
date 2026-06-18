import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { CheckCircle2, Download, HelpCircle, GraduationCap, DollarSign, FileText } from 'lucide-react';

const admissionFaqs = [
  { q: "What is the minimum GPA for admission?", a: "The minimum GPA required for admission is 2.50 in SSC or equivalent examination." },
  { q: "How can I apply for admission?", a: "You can apply online through our official website or visit the campus admission office." },
  { q: "Are there any scholarship opportunities?", a: "Yes, we offer merit-based scholarships and financial aid for underprivileged students." },
  { q: "What documents are required for the application?", a: "SSC Certificate, Marksheet, Testimonial, and 4 copies of passport-sized photographs are required." },
];

const Admission = () => (
  <PageTransition>
    <SEO title="Admission" description="Learn about the admission process, requirements, and fees at CMPI." />
    
    {/* Page Header */}
    <section className="bg-primary py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Information</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Start your technical journey with us. Admissions are now open for the session 2026-27.
        </p>
      </div>
    </section>

    {/* Admission Steps & Requirements */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary w-8 h-8" /> Admission Requirements
            </h2>
            <div className="space-y-6">
              {[
                "Candidates must have passed SSC or equivalent examination from any recognized board.",
                "A minimum GPA of 2.50 is required (without optional subjects).",
                "Candidates from any group (Science, Arts, Commerce) can apply.",
                "Age must be within the limit specified by the Bangladesh Technical Education Board (BTEB).",
                "Foreign students must have their certificates verified by the relevant authorities."
              ].map((req, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{req}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FileText className="text-secondary w-7 h-7" /> Required Documents
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span>SSC Certificate (Original & Photocopy)</span>
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span>SSC Marksheet/Transcript</span>
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span>School Testimonial</span>
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span>6 Passport Sized Photographs</span>
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span>Birth Registration Certificate</span>
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </li>
            </ul>
            <button className="w-full mt-10 py-4 bg-secondary text-primary font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Download Admission Form
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Fee Structure */}
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <DollarSign className="text-primary w-8 h-8" /> Fee Structure
          </h2>
          <p className="text-gray-600">Affordable technical education for a better future.</p>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-6">Particulars</th>
                <th className="p-6">Amount (BDT)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-6 font-medium">Admission Form Fee</td>
                <td className="p-6">500 /-</td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Admission Fee (One time)</td>
                <td className="p-6">5,000 /-</td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Monthly Tuition Fee</td>
                <td className="p-6">2,500 /-</td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Semester Exam Fee (Per Semester)</td>
                <td className="p-6">1,500 /-</td>
              </tr>
              <tr className="bg-slate-50 font-bold text-primary">
                <td className="p-6">Total Semester Cost (Approx)</td>
                <td className="p-6">25,000 /-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="text-primary w-8 h-8" /> Frequently Asked Questions
          </h2>
          <p className="text-gray-600">Common questions about the CMPI admission process.</p>
        </div>
        
        <div className="space-y-4">
          {admissionFaqs.map((faq, i) => (
            <div key={i} className="border rounded-xl p-6 hover:bg-slate-50 transition-colors">
              <h4 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Admission;

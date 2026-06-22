import { useState } from "react";
import { Check, ArrowLeft, ArrowRight, Upload, Search, Download, CheckCircle2, GraduationCap, DollarSign, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { submitAdmission, trackAdmission } from "@/services/api";

const departmentsList = [
  "Computer Science & Technology",
  "Civil Technology",
  "Electrical Technology",
];

const requiredDocs = [
  { key: "ssc_certificate", label: "SSC Certificate + Marksheet" },
  { key: "nid_birth", label: "National ID Card (NID) / Birth Certificate" },
  { key: "photos", label: "4 Passport-size Photographs" },
  { key: "guardian_nid", label: "Guardian's NID Copy" },
  { key: "transfer_cert", label: "Transfer Certificate" },
  { key: "character_cert", label: "Proshongso Potro (Character Certificate)" },
];

const admissionFaqs = [
  { q: "What is the minimum GPA for admission?", a: "The minimum GPA required for admission is 2.50 in SSC or equivalent examination." },
  { q: "How can I apply for admission?", a: "You can apply online through our official website or visit the campus admission office." },
  { q: "Are there any scholarship opportunities?", a: "Yes, we offer merit-based scholarships and financial aid for underprivileged students." },
  { q: "What documents are required for the application?", a: "SSC Certificate, Marksheet, Testimonial, and 4 copies of passport-sized photographs are required." },
];

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

export function Admission() {
  const [view, setView] = useState("info"); // "info", "apply", "track"
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverAppId, setServerAppId] = useState("");
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", department: "", session: "",
    sscGpa: "", hscGpa: "", fatherName: "", motherName: "",
    address: "", bloodGroup: "",
  });

  const [docs, setDocs] = useState({});

  // Status tracking
  const [trackId, setTrackId] = useState("");
  const [trackResult, setTrackResult] = useState(null);
  const [trackLoading, setTrackLoading] = useState(false);

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleDocChange = (key, file) => {
    setDocs((prev) => ({ ...prev, [key]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        const apiKey = k.replace(/([A-Z])/g, "_$1").toLowerCase();
        fd.append(apiKey, v);
      });
      Object.entries(docs).forEach(([key, file]) => {
        if (file) fd.append(`doc_${key}`, file);
      });
      const res = await submitAdmission(fd);
      setServerAppId(res.application_id);
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.error || "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleTrack = async () => {
    if (!trackId) return;
    setTrackLoading(true);
    setError(null);
    try {
      const res = await trackAdmission(trackId);
      setTrackResult(res);
    } catch {
      setTrackResult(null);
      setError("Application not found. Check your Application ID.");
    } finally {
      setTrackLoading(false);
    }
  };

  const statusColor = (s) => {
    switch (s?.toLowerCase()) {
      case "approved": return "text-green-600 bg-green-50 border-green-200";
      case "rejected": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-yellow-600 bg-yellow-50 border-yellow-200";
    }
  };

  return (
    <PageTransition>
      <SEO title="Apply for Admission" description="Online admission application for CMPI diploma programs." />
      
      {/* Page Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Portal</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Apply online for diploma engineering or track your application status easily.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {/* Navigation & Actions */}
        <div className="mx-auto mb-10 flex max-w-2xl flex-wrap justify-center gap-3">
          <button
            onClick={() => { setView("info"); setTrackResult(null); setError(null); }}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${
              view === "info" ? "bg-primary text-white" : "border bg-white hover:bg-slate-50"
            }`}
          >
            Requirements & Fees
          </button>
          <button
            onClick={() => { setView("apply"); setTrackResult(null); setError(null); }}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${
              view === "apply" ? "bg-primary text-white" : "border bg-white hover:bg-slate-50"
            }`}
          >
            Apply Online Now
          </button>
          <button
            onClick={() => { setView("track"); setTrackResult(null); setError(null); }}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${
              view === "track" ? "bg-primary text-white" : "border bg-white hover:bg-slate-50"
            }`}
          >
            <Search className="h-4 w-4" /> Track Application
          </button>
          <a
            href={`${API_BASE}/admissions/download-form`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-bold text-primary hover:bg-primary/10"
          >
            <Download className="h-4 w-4" /> Download PDF Form
          </a>
        </div>

        {error && (
          <div className="mx-auto mb-6 max-w-lg rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-sm font-bold text-red-600">
            {error}
          </div>
        )}

        {/* 1. INFO VIEW */}
        {view === "info" && (
          <div className="space-y-16">
            {/* Requirements & Documents */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
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
                    <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 border border-slate-100 font-semibold text-sm">
                      <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <FileText className="text-secondary w-7 h-7" /> Required Documents
                </h2>
                <ul className="space-y-4 font-semibold text-sm">
                  {requiredDocs.map((doc) => (
                    <li key={doc.key} className="flex justify-between border-b border-white/10 pb-3">
                      <span>{doc.label}</span>
                      <Check className="w-5 h-5 text-secondary" />
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setView("apply")}
                  className="w-full mt-10 py-4 bg-secondary text-primary font-black rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  Apply Online Now
                </button>
              </div>
            </div>

            {/* Fees */}
            <div className="py-8 border-t">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center justify-center gap-3">
                  <DollarSign className="text-primary w-8 h-8" /> Fee Structure
                </h2>
                <p className="text-gray-500 font-medium">Affordable technical education for a better future.</p>
              </div>
              
              <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border bg-white shadow-sm font-semibold">
                <table className="w-full text-left">
                  <thead className="bg-primary text-white font-bold">
                    <tr>
                      <th className="p-6">Particulars</th>
                      <th className="p-6">Amount (BDT)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-slate-700">
                    <tr>
                      <td className="p-6 font-semibold">Admission Form Fee</td>
                      <td className="p-6">500 /-</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-semibold">Admission Fee (One time)</td>
                      <td className="p-6">5,000 /-</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-semibold">Monthly Tuition Fee</td>
                      <td className="p-6">2,500 /-</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-semibold">Semester Exam Fee (Per Semester)</td>
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

            {/* FAQs */}
            <div className="py-8 border-t">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center justify-center gap-3">
                  <HelpCircle className="text-primary w-8 h-8" /> Frequently Asked Questions
                </h2>
                <p className="text-gray-500 font-medium">Common questions about the CMPI admission process.</p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-4">
                {admissionFaqs.map((faq, i) => (
                  <div key={i} className="border rounded-2xl p-6 hover:bg-slate-50 transition-colors bg-white">
                    <h4 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h4>
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. APPLY WIZARD VIEW */}
        {view === "apply" && (
          <div className="mx-auto max-w-2xl bg-white border rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-black text-green-700">Application Submitted!</h2>
                <p className="mt-3 text-sm font-semibold text-slate-600 leading-relaxed">
                  Your application has been received. A confirmation email was sent to <strong className="text-slate-800">{form.email}</strong>.
                </p>
                <div className="mt-4 p-4 bg-slate-50 border rounded-2xl inline-block">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Application ID</p>
                  <p className="text-xl font-black text-primary font-mono mt-1">{serverAppId}</p>
                </div>
                <p className="mt-4 text-xs text-slate-400 font-medium">Save this ID to track your application status.</p>
                <div className="mt-6 flex justify-center gap-3">
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setForm({ name: "", email: "", phone: "", department: "", session: "", sscGpa: "", hscGpa: "", fatherName: "", motherName: "", address: "", bloodGroup: "" });
                      setDocs({});
                    }}
                  >
                    Submit Another Application
                  </Button>
                  <Button variant="outline" onClick={() => { setView("track"); setTrackId(serverAppId); }}>
                    Track Application
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                {/* Step indicators */}
                <div className="mb-8 flex items-center justify-center gap-2">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-black transition ${
                        step >= s ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                      }`}>
                        {s}
                      </div>
                      {s < 4 && <div className={`h-0.5 w-8 ${step > s ? "bg-primary" : "bg-slate-200"}`} />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-black text-slate-900 border-b pb-2">Personal Information</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">Full Name</label>
                          <Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">Email</label>
                          <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">Phone</label>
                          <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+880 1XXX-XXXXXX" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">Blood Group</label>
                          <Input value={form.bloodGroup} onChange={(e) => update("bloodGroup", e.target.value)} placeholder="A+, B+, O+, etc." />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">Father's Name</label>
                          <Input value={form.fatherName} onChange={(e) => update("fatherName", e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">Mother's Name</label>
                          <Input value={form.motherName} onChange={(e) => update("motherName", e.target.value)} required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold">Address</label>
                        <Input value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Village/Thana/District" required />
                      </div>
                      <Button type="button" className="w-full" onClick={() => setStep(2)}>
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {/* Step 2: Academic Info */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-black text-slate-900 border-b pb-2">Academic Choice</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">Admission Session</label>
                          <select 
                            value={form.session} 
                            onChange={(e) => update("session", e.target.value)} 
                            className="flex h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary"
                            required
                          >
                            <option value="">Select session</option>
                            <option value="2025-26">2025-26</option>
                            <option value="2026-27">2026-27</option>
                            <option value="2027-28">2027-28</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">Preferred Department</label>
                          <select 
                            value={form.department} 
                            onChange={(e) => update("department", e.target.value)} 
                            className="flex h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary"
                            required
                          >
                            <option value="">Select department</option>
                            {departmentsList.map((d) => <option key={d} value={d}>{d}</option>)}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">SSC/Equivalent GPA</label>
                          <Input value={form.sscGpa} onChange={(e) => update("sscGpa", e.target.value)} placeholder="e.g. 4.50" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold">HSC/Equivalent GPA (optional)</label>
                          <Input value={form.hscGpa} onChange={(e) => update("hscGpa", e.target.value)} placeholder="e.g. 4.00" />
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button type="button" variant="outline" className="w-full" onClick={() => setStep(1)}>
                          <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                        <Button type="button" className="w-full" onClick={() => setStep(3)}>
                          Next <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Scanned Uploads */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-black text-slate-900 border-b pb-2">Document Scans</h3>
                      <p className="text-xs text-slate-400 font-semibold mb-4 leading-relaxed">
                        Upload digital files of the following credentials. Scans are optional and can be supplied physically at the admissions office.
                      </p>

                      <div className="grid gap-3">
                        {requiredDocs.map((doc) => (
                          <div key={doc.key} className="flex items-center gap-3 rounded-2xl border p-4 bg-slate-50/50">
                            <Upload className="h-5 w-5 shrink-0 text-slate-400" />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-bold text-slate-800">{doc.label}</div>
                              {docs[doc.key] && (
                                <div className="text-xs text-green-600 font-bold mt-1 truncate">{docs[doc.key].name}</div>
                              )}
                            </div>
                            <label className="cursor-pointer shrink-0 rounded-xl border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10">
                              Choose File
                              <input
                                type="file"
                                className="hidden"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={(e) => handleDocChange(doc.key, e.target.files?.[0] || null)}
                              />
                            </label>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button type="button" variant="outline" className="w-full" onClick={() => setStep(2)}>
                          <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                        <Button type="button" className="w-full" onClick={() => setStep(4)}>
                          Next <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Submit Review */}
                  {step === 4 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-black text-slate-900 border-b pb-2">Review Details</h3>
                      <div className="grid gap-2 text-sm font-semibold">
                        <div className="flex justify-between rounded-xl bg-slate-50 px-4 py-2.5 border"><span className="text-slate-400">Name</span><span className="font-bold text-slate-850">{form.name || "-"}</span></div>
                        <div className="flex justify-between rounded-xl bg-slate-50 px-4 py-2.5 border"><span className="text-slate-400">Email</span><span className="font-bold text-slate-850">{form.email || "-"}</span></div>
                        <div className="flex justify-between rounded-xl bg-slate-50 px-4 py-2.5 border"><span className="text-slate-400">Phone</span><span className="font-bold text-slate-850">{form.phone || "-"}</span></div>
                        <div className="flex justify-between rounded-xl bg-slate-50 px-4 py-2.5 border"><span className="text-slate-400">Session</span><span className="font-bold text-slate-850">{form.session || "-"}</span></div>
                        <div className="flex justify-between rounded-xl bg-slate-50 px-4 py-2.5 border"><span className="text-slate-400">Department</span><span className="font-bold text-slate-850 text-right">{form.department || "-"}</span></div>
                        <div className="flex justify-between rounded-xl bg-slate-50 px-4 py-2.5 border"><span className="text-slate-400">SSC GPA</span><span className="font-bold text-slate-850">{form.sscGpa || "-"}</span></div>
                        {form.hscGpa && <div className="flex justify-between rounded-xl bg-slate-50 px-4 py-2.5 border"><span className="text-slate-400">HSC GPA</span><span className="font-bold text-slate-850">{form.hscGpa}</span></div>}
                        <div className="flex justify-between rounded-xl bg-slate-50 px-4 py-2.5 border"><span className="text-slate-400">Address</span><span className="font-bold text-slate-850 text-right">{form.address || "-"}</span></div>
                        <div className="flex justify-between rounded-xl bg-slate-50 px-4 py-2.5 border">
                          <span className="text-slate-400">Uploaded Files</span>
                          <span className="font-bold text-slate-850">{Object.values(docs).filter(Boolean).length} / {requiredDocs.length}</span>
                        </div>
                      </div>
                      <div className="flex gap-3 pt-4">
                        <Button type="button" variant="outline" className="w-full" onClick={() => setStep(3)}>
                          <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                        <Button type="submit" className="w-full" disabled={submitting}>
                          {submitting ? "Submitting application..." : "Submit Application"}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        )}

        {/* 3. TRACKING VIEW */}
        {view === "track" && (
          <div className="mx-auto max-w-lg bg-white border rounded-3xl p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-black text-slate-900">Track Your Application</h3>
            <p className="text-xs text-slate-400 font-semibold mb-6 leading-relaxed">
              Enter the unique application code issued upon submitting your online form.
            </p>
            <div className="flex gap-3">
              <Input
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
                placeholder="Enter Application ID (e.g. CMPI-ADM-000123)"
                className="font-semibold"
              />
              <Button onClick={handleTrack} disabled={!trackId || trackLoading} className="font-bold px-6 shrink-0">
                {trackLoading ? "Searching..." : "Track"}
              </Button>
            </div>
            {trackResult && (
              <div className="mt-6 rounded-2xl border p-5 bg-slate-50/50">
                <div className="flex items-center justify-between border-b pb-3 mb-4">
                  <span className="font-mono font-bold text-slate-900">{trackResult.application_id}</span>
                  <span className={`rounded-full border px-3.5 py-1 text-xs font-black uppercase tracking-wider ${statusColor(trackResult.status)}`}>
                    {trackResult.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm font-semibold text-slate-700">
                  <div><span className="text-slate-400">Name:</span></div>
                  <div><span className="text-slate-800">{trackResult.name}</span></div>
                  
                  <div><span className="text-slate-400">Choice:</span></div>
                  <div className="line-clamp-1"><span className="text-slate-800">{trackResult.department}</span></div>
                  
                  <div><span className="text-slate-400">Session:</span></div>
                  <div><span className="text-slate-800">{trackResult.session || "—"}</span></div>
                  
                  <div><span className="text-slate-400">Submitted:</span></div>
                  <div><span className="text-slate-800">{new Date(trackResult.created_at).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}</span></div>
                </div>
                {trackResult.documents && (
                  <div className="mt-4 pt-3 border-t text-xs font-semibold text-slate-500">
                    Scans uploaded: <strong className="text-slate-800">{trackResult.documents.length}/6 documents</strong>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </section>
    </PageTransition>
  );
}

export default Admission;

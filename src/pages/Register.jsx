import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { register as apiRegister } from "@/services/api";
import { Sparkles, Check, ChevronRight, UserPlus, FileText, ArrowRight } from "lucide-react";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("Computer Science & Technology");
  const [studentId, setStudentId] = useState("");
  const [semester, setSemester] = useState("1st");
  const [session, setSession] = useState("");
  const [phone, setPhone] = useState("");
  const [guardian, setGuardian] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      setLoading(false);
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      setLoading(false);
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      setLoading(false);
      return;
    }
    if (!/[0-9]/.test(password)) {
      toast.error("Password must contain at least one number.");
      setLoading(false);
      return;
    }

    const payload = {
      name,
      email,
      password,
      department,
      student_id: studentId,
      semester,
      session,
      phone,
      guardian,
      blood_group: bloodGroup || null,
      address,
      admission_date: admissionDate || null,
    };

    try {
      await apiRegister(payload);
      toast.success("Registration submitted! Pending admin approval.");
      setSuccess(true);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Registration failed. Please make sure email/student ID are unique.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <PageTransition>
        <SEO title="Registration Successful" description="Your registration is pending approval." />
        <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-950 overflow-hidden text-left">
          
          {/* Left Side branding */}
          <div className="hidden lg:flex lg:w-[45%] bg-slate-900 text-white p-16 flex-col justify-between relative overflow-hidden shrink-0 border-r border-slate-800">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-secondary font-black text-xl shadow-lg shrink-0">C</div>
              <div>
                <span className="font-black text-white text-lg tracking-tighter">CMPI Portal</span>
                <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Cox's Bazar Model Polytechnic</p>
              </div>
            </div>
            <div className="my-auto space-y-4 relative z-10">
              <h2 className="text-3xl font-black uppercase tracking-tight text-white leading-tight">Request <br/>Submitted Successfully.</h2>
              <p className="text-xs font-semibold text-slate-400 max-w-xs leading-relaxed">
                Thank you for applying. Our institute registrars review applications during standard business hours.
              </p>
            </div>
            <div className="text-[10px] font-bold text-slate-500 relative z-10">&copy; {new Date().getFullYear()} CMPI.</div>
          </div>

          {/* Right Side success details */}
          <div className="flex-1 flex items-center justify-center p-8 md:p-16 bg-white dark:bg-slate-900">
            <div className="max-w-md w-full text-center bg-slate-50 dark:bg-slate-950 border dark:border-slate-850 p-8 rounded-3xl shadow-xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-600 animate-bounce border border-green-500/20 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Registration Sent</h2>
              <p className="mt-4 text-xs font-semibold text-slate-550 leading-relaxed">
                Your profile has been created and is **pending verification** by the institute administration office.
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-500 leading-relaxed">
                You can log in now, but features will be locked until an administrator approves your profile status check.
              </p>
              <div className="mt-8">
                <Button asChild className="w-full py-4 h-12 rounded-2xl font-black shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <Link to="/login">Proceed to Login</Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEO title="Register" description="Register for a CMPI student portal account." />
      
      <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-950 overflow-hidden text-left">
        
        {/* Left Side: Creative Graphical Panel */}
        <div className="hidden lg:flex lg:w-[40%] bg-slate-900 text-white p-16 flex-col justify-between relative overflow-hidden shrink-0 border-r border-slate-800">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[90px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
          
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-secondary font-black text-xl shadow-lg">C</div>
            <div>
              <span className="font-black text-white text-lg tracking-tighter">CMPI Portal</span>
              <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Cox's Bazar Model Polytechnic</p>
            </div>
          </div>

          <div className="relative z-10 space-y-6 my-auto">
            <span className="inline-flex items-center gap-1 bg-primary/20 border border-primary/30 text-secondary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              <UserPlus className="w-3.5 h-3.5" /> student enrollment
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight leading-tight">
              Create Your <br/>
              Institutional <br/>
              <span className="text-secondary">Student Account.</span>
            </h2>
            <p className="text-xs font-semibold text-slate-400 leading-relaxed max-w-xs">
              Join the student portal to gain access to semester transcripts, routine files, teacher indices, library catalogs, and scholarship boards.
            </p>

            <div className="space-y-3.5 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-350">Quick BTEB Session Allocations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-350">Downloadable Print PDF ID Cards</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-355">Integrated Student corner resources</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-bold text-slate-500 relative z-10">
            &copy; {new Date().getFullYear()} CMPI Portal. All rights reserved.
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white dark:bg-slate-900 overflow-y-auto">
          <div className="w-full max-w-xl py-8">
            
            {/* Header for Mobile */}
            <div className="mb-8 text-center lg:text-left">
              <Link to="/" className="inline-flex items-center gap-2 mb-6 group lg:hidden">
                <img src="/CMPI.png" alt="CMPI Logo" className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform" />
                <span className="font-black text-slate-900 dark:text-white text-2xl tracking-tighter">CMPI</span>
              </Link>
              <h1 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Student Registration</h1>
              <p className="text-slate-550 dark:text-slate-400 font-semibold text-xs tracking-wide uppercase mt-1">Admin Approval is Required for Account Activation</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                
                {/* Full name */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="name" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Full Name</label>
                  <Input id="name" placeholder="e.g. Rahim Miah" value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl py-3 text-sm focus-visible:ring-primary" required />
                </div>

                {/* Email address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Email Address</label>
                  <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl py-3 text-sm focus-visible:ring-primary" required />
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label htmlFor="password" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Password</label>
                  <Input id="password" type="password" placeholder="Min. 8 chars, 1 uppercase, 1 number" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-xl py-3 text-sm focus-visible:ring-primary" required />
                </div>

                {/* Student Roll / ID */}
                <div className="space-y-1.5">
                  <label htmlFor="studentId" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Student Roll / ID</label>
                  <Input id="studentId" placeholder="e.g. CMPI-2023-0102" value={studentId} onChange={(e) => setStudentId(e.target.value)} className="rounded-xl py-3 text-sm focus-visible:ring-primary" />
                </div>

                {/* Department Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="department" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Department Branch</label>
                  <select
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="flex h-11 w-full rounded-xl border border-input bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-900 transition-all font-semibold"
                  >
                    <option value="Computer Science & Technology">Computer Science (CST)</option>
                    <option value="Civil Technology">Civil Technology</option>
                    <option value="Electrical Technology">Electrical Technology</option>
                  </select>
                </div>

                {/* Semester selection */}
                <div className="space-y-1.5">
                  <label htmlFor="semester" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Current Semester</label>
                  <select
                    id="semester"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="flex h-11 w-full rounded-xl border border-input bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-900 transition-all font-semibold"
                  >
                    <option value="1st">1st Semester</option>
                    <option value="2nd">2nd Semester</option>
                    <option value="3rd">3rd Semester</option>
                    <option value="4th">4th Semester</option>
                    <option value="5th">5th Semester</option>
                    <option value="6th">6th Semester</option>
                    <option value="7th">7th Semester</option>
                    <option value="8th">8th Semester</option>
                  </select>
                </div>

                {/* Session */}
                <div className="space-y-1.5">
                  <label htmlFor="session" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Session Year</label>
                  <Input id="session" placeholder="e.g. 2023-2024" value={session} onChange={(e) => setSession(e.target.value)} className="rounded-xl py-3 text-sm focus-visible:ring-primary" required />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Phone Number</label>
                  <Input id="phone" placeholder="e.g. +880 1700000000" value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-xl py-3 text-sm focus-visible:ring-primary" required />
                </div>

                {/* Guardian Name */}
                <div className="space-y-1.5">
                  <label htmlFor="guardian" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Guardian Name</label>
                  <Input id="guardian" placeholder="e.g. Karim Miah (Father)" value={guardian} onChange={(e) => setGuardian(e.target.value)} className="rounded-xl py-3 text-sm focus-visible:ring-primary" required />
                </div>

                {/* Blood Group */}
                <div className="space-y-1.5">
                  <label htmlFor="bloodGroup" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Blood Group</label>
                  <select
                    id="bloodGroup"
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    className="flex h-11 w-full rounded-xl border border-input bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-900 transition-all font-semibold"
                  >
                    <option value="">Select Blood Group...</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                {/* Admission date */}
                <div className="space-y-1.5">
                  <label htmlFor="admissionDate" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Admission Date</label>
                  <Input id="admissionDate" type="date" value={admissionDate} onChange={(e) => setAdmissionDate(e.target.value)} className="rounded-xl py-3 text-sm focus-visible:ring-primary" required />
                </div>

                {/* Residential Address */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="address" className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-0.5 tracking-wider">Residential Address</label>
                  <Input id="address" placeholder="e.g. Kolatoli, Cox's Bazar" value={address} onChange={(e) => setAddress(e.target.value)} className="rounded-xl py-3 text-sm focus-visible:ring-primary" required />
                </div>

              </div>

              {/* Submit button */}
              <Button type="submit" disabled={loading} className="w-full py-4 h-12 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
                {loading ? "Registering..." : "Submit Enrollment Application"}
              </Button>

              <p className="text-center text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider mt-4">
                Already have an account? <Link className="text-primary hover:underline" to="/login">Login</Link>
              </p>
            </form>

          </div>
        </div>

      </div>
    </PageTransition>
  );
}

export default Register;

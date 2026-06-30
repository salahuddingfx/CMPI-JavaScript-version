import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Loader2, Eye, EyeOff, Check, Sparkles, Shield, Bookmark, GraduationCap } from 'lucide-react';
import { toast } from "sonner";
import SEO from '@/components/SEO';
import PageTransition from '@/components/PageTransition';
import { useAuth } from '@/contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) });

  useEffect(() => {
    const saved = localStorage.getItem('cmpi-remember-email');
    if (saved) {
      setValue('email', saved);
      setRemember(true);
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    if (remember) {
      localStorage.setItem('cmpi-remember-email', data.email);
    } else {
      localStorage.removeItem('cmpi-remember-email');
    }
    try {
      const result = await login(data);
      if (result.success) {
        toast.success("Successfully logged in!");
        navigate('/dashboard');
      } else {
        toast.error("Invalid email or password.");
      }
    } catch {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <PageTransition>
      <SEO title="Login" description="Sign in to your CMPI student account." />
      
      <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-950 overflow-hidden text-left">
        
        {/* Left Side: Creative Graphical Panel */}
        <div className="hidden lg:flex lg:w-[45%] bg-slate-900 text-white p-16 flex-col justify-between relative overflow-hidden shrink-0 border-r border-slate-800">
          {/* Animated Glowing blobs */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[90px] translate-x-1/3 translate-y-1/3" />
          
          {/* Logo & Header */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-secondary font-black text-xl shadow-lg shadow-primary/20">
              C
            </div>
            <div>
              <span className="font-black text-white text-lg tracking-tighter">CMPI Portal</span>
              <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Cox's Bazar Model Polytechnic</p>
            </div>
          </div>

          {/* Slogans and graphics */}
          <div className="relative z-10 space-y-6 my-auto">
            <span className="inline-flex items-center gap-1 bg-primary/20 border border-primary/30 text-secondary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Empowering Technical Education
            </span>
            <h2 className="text-4xl font-black tracking-tight leading-tight uppercase">
              Connecting Students, <br/>
              Faculty &amp; Future <br/>
              <span className="text-secondary">Engineering Gates.</span>
            </h2>
            <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-sm">
              Sign in to manage your technology routine lists, print downloadable ID cards, track fee bills, and review technical board results.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-300">Safe &amp; Encrypted SQLi Guard Checks</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-300">Academic Notice Board Notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-300">Direct Staff &amp; Administrator Support Channels</span>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="relative z-10 border-t border-slate-800 pt-6">
            <p className="text-xs italic text-slate-400 font-medium">
              "Our single student portal brings accessibility and secure operations directly to our students' hands."
            </p>
            <span className="block mt-2 text-[10px] font-black uppercase tracking-wider text-white">
              — Academic Office, CMPI
            </span>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-16 bg-white dark:bg-slate-900 relative">
          {/* Subtle backgrounds for mobile */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl lg:hidden pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl lg:hidden pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[420px] relative z-10"
          >
            {/* Header for Mobile/Forms */}
            <div className="mb-10 text-center lg:text-left">
              <Link to="/" className="inline-flex items-center gap-2 mb-6 group lg:hidden">
                <img src="/CMPI.png" alt="CMPI Logo" className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform" />
                <span className="font-black text-slate-900 dark:text-white text-2xl tracking-tighter">CMPI</span>
              </Link>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Please sign in to access your dashboard</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email field */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 ml-1 tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="email"
                    {...register('email')}
                    className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-950 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl outline-none transition-all font-medium text-slate-900 dark:text-white text-sm ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs font-bold ml-1">{errors.email.message}</p>}
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 tracking-wider">Password</label>
                  <Link to="/forgot-password" className="text-xs font-bold text-primary hover:underline">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    {...register('password')}
                    className={`w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-950 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl outline-none transition-all font-medium text-slate-900 dark:text-white text-sm ${errors.password ? 'border-red-500' : ''}`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650 dark:hover:text-slate-200"
                  >
                    {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs font-bold ml-1">{errors.password.message}</p>}
              </div>

              {/* Remember me toggle */}
              <div className="flex items-center justify-between text-sm">
                <button type="button" onClick={() => setRemember(!remember)} className="flex items-center gap-2 group">
                  <div className={`flex h-5 w-5 items-center justify-center rounded border-2 transition ${
                    remember ? 'border-primary bg-primary text-white' : 'border-slate-300 dark:border-slate-600 bg-transparent group-hover:border-slate-400 dark:group-hover:border-slate-500'
                  }`}>
                    {remember && <Check className="h-3.5 w-3.5" />}
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition cursor-pointer font-bold text-xs uppercase tracking-wider">Remember me</span>
                </button>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Signing in…</>
                ) : (
                  <>Sign In <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>

            <p className="text-center mt-10 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary hover:underline">
                Sign up for free
              </Link>
            </p>
          </motion.div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Login;

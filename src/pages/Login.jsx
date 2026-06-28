import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Loader2, Eye, EyeOff, Check } from 'lucide-react';
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
      <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white dark:bg-slate-950 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/30 p-8 md:p-12 relative z-10 border border-slate-100 dark:border-slate-800"
        >
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
              <img src="/CMPI.png" alt="CMPI Logo" className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform" />
              <span className="font-black text-slate-900 dark:text-white text-2xl tracking-tighter">CMPI</span>
            </Link>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Please enter your details to sign in</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  {...register('email')}
                  className={`w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-800 rounded-2xl outline-none transition-all font-medium text-slate-900 dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs font-bold ml-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
                <Link to="/forgot-password" className="text-xs font-bold text-primary hover:underline">Forgot?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type={showPass ? 'text' : 'password'}
                  {...register('password')}
                  className={`w-full pl-12 pr-12 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-800 rounded-2xl outline-none transition-all font-medium text-slate-900 dark:text-white ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs font-bold ml-1">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <button type="button" onClick={() => setRemember(!remember)} className="flex items-center gap-2 group">
                <div className={`flex h-5 w-5 items-center justify-center rounded border-2 transition ${
                  remember ? 'border-primary bg-primary text-white' : 'border-slate-300 dark:border-slate-600 bg-transparent group-hover:border-slate-400 dark:group-hover:border-slate-500'
                }`}>
                  {remember && <Check className="h-3.5 w-3.5" />}
                </div>
                <span className="text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition cursor-pointer font-medium">Remember me</span>
              </button>
            </div>

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

          <p className="text-center mt-10 text-slate-500 dark:text-slate-400 font-medium">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary font-black hover:underline">
              Sign up for free
            </Link>
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Login;

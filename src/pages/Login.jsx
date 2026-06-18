import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github, Globe } from 'lucide-react';
import SEO from '@/components/SEO';
import PageTransition from '@/components/PageTransition';
import { useAuth } from '@/contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data) => {
    // Simulate API Login
    login({ 
      name: 'Hridoy Ahmed', 
      email: data.email, 
      role: 'Computer Science Student',
      avatar: 'https://i.pravatar.cc/150?u=dashboard'
    });
    navigate('/dashboard');
  };

  return (
    <PageTransition>
      <SEO title="Login" />
      <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-slate-50 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 relative z-10 border border-slate-100"
        >
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-secondary font-black text-2xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                C
              </div>
              <span className="font-black text-slate-900 text-2xl tracking-tighter">CMPI</span>
            </Link>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500 font-medium">Please enter your details to sign in</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="email" 
                  {...register("email")}
                  className={`w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-2xl outline-none transition-all font-medium ${errors.email ? 'border-red-500 focus:border-red-500 bg-red-50' : ''}`}
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs font-bold ml-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="password" 
                  {...register("password")}
                  className={`w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-2xl outline-none transition-all font-medium ${errors.password ? 'border-red-500 focus:border-red-500 bg-red-50' : ''}`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <p className="text-red-500 text-xs font-bold ml-1">{errors.password.message}</p>}
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              Sign In <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-100">
            <p className="text-center text-slate-500 font-medium mb-6">Or continue with</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-700">
                <Globe className="w-5 h-5" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-700">
                <Github className="w-5 h-5" /> GitHub
              </button>
            </div>
          </div>

          <p className="text-center mt-10 text-slate-500 font-medium">
            Don't have an account? <Link to="/register" className="text-primary font-black hover:underline">Sign up for free</Link>
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Login;

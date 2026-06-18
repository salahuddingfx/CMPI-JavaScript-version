import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import PageTransition from '@/components/PageTransition';
import { useAuth } from '@/contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data) => {
    // Simulate API Register & Login
    login({ 
      name: data.name, 
      email: data.email, 
      role: 'New Student',
      avatar: 'https://i.pravatar.cc/150?u=newuser'
    });
    navigate('/dashboard');
  };

  return (
    <PageTransition>
      <SEO title="Register" />
      <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-slate-50 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-32 -mt-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-32 -mb-32" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 relative z-10 border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Side: Info */}
          <div className="hidden lg:flex flex-col justify-center">
            <Link to="/" className="inline-flex items-center gap-2 mb-8 group">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-secondary font-black text-2xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                C
              </div>
              <span className="font-black text-slate-900 text-2xl tracking-tighter">CMPI</span>
            </Link>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Join the Future of Engineering</h2>
            <div className="space-y-5">
              {[
                "Access to exclusive course materials",
                "Real-time campus notifications",
                "Direct communication with faculty",
                "Personalized academic dashboard"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100">
               <p className="text-sm italic text-slate-500">"CMPI helped me land my dream job at a top tech firm. The resources here are unparalleled."</p>
               <div className="mt-4 flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=10" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Student" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Ariful Islam</p>
                    <p className="text-[10px] text-slate-400">CSE Graduate, 2024</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div>
            <div className="text-center lg:text-left mb-10">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Create Account</h1>
              <p className="text-slate-500 font-medium">Join our community today</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="text" 
                    {...register("name")}
                    className={`w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-2xl outline-none transition-all font-medium ${errors.name ? 'border-red-500 focus:border-red-500 bg-red-50' : ''}`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs font-bold ml-1">{errors.name.message}</p>}
              </div>

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
                <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
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
                className="w-full py-4 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group mt-4"
              >
                Sign Up <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="text-center lg:text-left mt-8 text-slate-500 font-medium">
              Already have an account? <Link to="/login" className="text-primary font-black hover:underline">Sign in</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Register;

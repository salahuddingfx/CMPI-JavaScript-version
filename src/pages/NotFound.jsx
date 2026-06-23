import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
    <SEO title="404 - Not Found" />
    
    {/* Abstract Backgrounds */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />

    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass dark:glass-dark p-12 md:p-20 rounded-[3rem] max-w-2xl w-full border border-white/20 dark:border-white/10"
    >
      <div className="relative inline-block mb-8">
        <h1 className="text-8xl md:text-9xl font-black text-primary drop-shadow-sm">
          404
        </h1>
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold shadow-lg rotate-12">
          Oops!
        </div>
      </div>
      
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Page Not Found</h2>
      <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link 
          to="/" 
          className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
        >
          <Home className="w-5 h-5" /> Back to Home
        </Link>
        <button 
          onClick={() => window.history.back()}
          className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2 group shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Go Back
        </button>
      </div>
    </motion.div>
  </div>
);

export default NotFound;

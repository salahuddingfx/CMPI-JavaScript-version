import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden select-none">
      {/* Dynamic Glowing Blob Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse" />

      {/* Futuristic Spinner Arena */}
      <div className="relative flex items-center justify-center w-36 h-36">
        
        {/* Outermost dotted orbit ring spinning clockwise */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
          className="absolute w-32 h-32 border-2 border-dashed border-primary/20 rounded-full"
        />

        {/* Outer solid orbit ring with gap spinning counter-clockwise */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          className="absolute w-28 h-28 border border-primary/40 border-t-transparent border-b-transparent rounded-full"
        />

        {/* Middle neon ring spinning clockwise */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          className="absolute w-24 h-24 border border-secondary border-l-transparent rounded-full shadow-lg shadow-secondary/10"
        />

        {/* Center glowing badge scaling/breathing */}
        <motion.div
          animate={{ 
            scale: [0.92, 1.08, 0.92],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            scale: { duration: 2, ease: "easeInOut", repeat: Infinity },
            rotate: { duration: 12, ease: "linear", repeat: Infinity }
          }}
          className="absolute w-16 h-16 bg-gradient-to-tr from-primary to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/30 border border-primary-foreground/10"
        >
          <span className="text-secondary font-black text-2xl drop-shadow-md select-none transform -rotate-[45deg]">C</span>
        </motion.div>
      </div>

      {/* Enthusiastic Branding & Status texts */}
      <div className="mt-8 space-y-2 z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-black text-white tracking-widest flex items-center gap-2 justify-center"
        >
          CMPI PORTAL
          <Sparkles className="w-4 h-4 text-secondary animate-bounce" />
        </motion.h2>
        
        <p className="text-[9px] uppercase font-black text-slate-450 tracking-widest max-w-[200px] mx-auto leading-relaxed">
          Cox's Bazar Model Polytechnic
        </p>

        {/* Glowing Progress Loading Bar */}
        <div className="w-36 h-1 bg-slate-900 border border-slate-800/80 rounded-full mx-auto mt-4 overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;

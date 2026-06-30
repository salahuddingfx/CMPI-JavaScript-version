import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, Building2, Zap, Sparkles } from 'lucide-react';

const Loader = () => {
  const [percent, setPercent] = useState(0);
  const [deptIdx, setDeptIdx] = useState(0);

  const depts = [
    { name: "Computer Technology", code: "CST", icon: FileCode, color: "text-emerald-500", glow: "shadow-emerald-500/20 border-emerald-500/30" },
    { name: "Civil Technology", code: "CIVIL", icon: Building2, color: "text-sky-500", glow: "shadow-sky-500/20 border-sky-500/30" },
    { name: "Electrical Technology", code: "EE", icon: Zap, color: "text-amber-500", glow: "shadow-amber-500/20 border-amber-500/30" }
  ];

  // Count up percent loader simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 3;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 120);
    return () => clearInterval(timer);
  }, []);

  // Cycle departments icons/labels
  useEffect(() => {
    const timer = setInterval(() => {
      setDeptIdx((prev) => (prev + 1) % depts.length);
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  const currentDept = depts[deptIdx];
  const CurrentIcon = currentDept.icon;

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden select-none">
      {/* Blueprint Grid Layout Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />

      {/* Central Interactive Arena */}
      <div className="relative flex items-center justify-center w-48 h-48">
        
        {/* Outermost rotating blueprint ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className="absolute w-44 h-44 border border-dashed border-slate-800 rounded-full"
        />

        {/* Second ring representing engineering compass dial */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 7, ease: "linear", repeat: Infinity }}
          className="absolute w-36 h-36 border border-slate-700/60 border-t-primary/40 border-b-secondary/40 rounded-full"
        />

        {/* Inner animated department ring wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={deptIdx}
            initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className={`absolute w-20 h-20 rounded-3xl bg-slate-900 border flex flex-col items-center justify-center shadow-2xl ${currentDept.glow}`}
          >
            {/* Pulsing neon icon */}
            <motion.div
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className={currentDept.color}
            >
              <CurrentIcon className="w-8 h-8 drop-shadow-[0_0_8px_currentColor]" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Interactive radial particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-15, -70, -15],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2.5, 
              delay: i * 0.4, 
              repeat: Infinity,
              ease: "easeOut"
            }}
            style={{ rotate: `${i * 60}deg` }}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 shadow-sm shadow-primary"
          />
        ))}
      </div>

      {/* Dynamic Stagger Typography Reveal */}
      <div className="mt-8 space-y-3 z-10 text-center">
        
        {/* Dynamic Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 justify-center text-sm font-black tracking-[0.25em] text-white"
        >
          CMPI PORTAL
          <Sparkles className="w-4 h-4 text-secondary animate-bounce shrink-0" />
        </motion.div>

        {/* Department Status Reveal */}
        <div className="h-6 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={deptIdx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className={`text-[10px] font-black uppercase tracking-widest ${currentDept.color}`}
            >
              [ {currentDept.code} ] {currentDept.name}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Dynamic Percent Logger UI */}
        <div className="space-y-1.5 pt-2">
          <div className="w-40 h-1 bg-slate-900 border border-slate-800/80 rounded-full mx-auto overflow-hidden">
            <motion.div
              style={{ width: `${percent}%` }}
              className="h-full bg-gradient-to-r from-primary to-secondary shadow-md shadow-primary"
            />
          </div>
          <span className="block text-[9px] font-bold text-slate-500 font-mono tracking-wider">
            SYSTEM LOAD: {percent}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;

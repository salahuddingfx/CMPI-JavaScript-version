import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const PrincipalMessage = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-0 min-h-[650px] flex items-center bg-slate-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-primary rounded-full blur-[80px] sm:blur-[100px] animate-pulse" />
         <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-secondary rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full sm:w-2/3 md:w-1/2 lg:w-full lg:col-span-4 relative mx-auto"
            >
              <div className="relative">
                {/* Creative Frame */}
                <div className="absolute -inset-2 sm:-inset-3 border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] -rotate-3 transition-all" />
                <div className="absolute -inset-2 sm:-inset-3 border border-secondary/20 rounded-[1.5rem] sm:rounded-[2rem] rotate-3 transition-all" />
                
                <div className="relative rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
                  <img 
                    src="/principal.png" 
                    alt="Principal" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-slate-900/20" />
                </div>

                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-secondary p-4 sm:p-5 rounded-[1.25rem] sm:rounded-[1.5rem] shadow-2xl hidden md:block">
                  <p className="text-primary font-black text-lg sm:text-xl">15+</p>
                  <p className="text-primary/70 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Years Leading</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:col-span-8"
            >
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 relative">
                <Quote className="absolute top-6 right-6 w-10 sm:w-12 h-10 sm:h-12 text-white/5" />
                
                <h2 className="text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Principal's Perspective</h2>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
                  Bridging the gap between <span className="highlight-arc highlight-arc-secondary text-secondary">Ambition</span> and <span className="highlight-arc highlight-arc-primary text-primary">Achievement</span>.
                </h3>
                
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-medium italic">
                  <p>
                    "In an era where technology evolves every minute, our institute serves as the stable ground where students learn to fly. We don't just teach engineering; we cultivate the mindset of a <span className="text-white font-bold not-italic border-b-2 border-primary">problem solver</span>."
                  </p>
                  <p>
                    "At CMPI, we are building more than a workforce—we are building the architects of tomorrow's Bangladesh."
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl overflow-hidden border-2 border-secondary/30 shrink-0">
                     <img src="/principal.png" className="w-full h-full object-cover" alt="Principal Thumbnail" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">Ln. Md. Didar Ullah</h4>
                    <p className="text-secondary/70 font-semibold text-[10px] sm:text-xs">Principal & Visionary, CMPI</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;

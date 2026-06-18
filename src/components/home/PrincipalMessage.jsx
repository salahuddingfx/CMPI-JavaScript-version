import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const PrincipalMessage = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-0 min-h-[650px] flex items-center bg-slate-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse" />
         <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-secondary rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full sm:w-3/4 md:w-2/3 lg:w-full lg:col-span-5 relative mx-auto"
            >
              <div className="relative">
                {/* Creative Frame */}
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] -rotate-3 transition-all" />
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border border-secondary/20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] rotate-3 transition-all" />
                
                <div className="relative rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                    alt="Principal" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 bg-secondary p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl hidden md:block">
                  <p className="text-primary font-black text-xl sm:text-2xl">15+</p>
                  <p className="text-primary/70 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Years Leading</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:col-span-7"
            >
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] border border-white/10 relative">
                <Quote className="absolute top-6 sm:top-10 right-6 sm:right-10 w-12 sm:w-16 h-12 sm:h-16 text-white/5" />
                
                <h2 className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">Principal's Perspective</h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-white mb-6 sm:mb-8 leading-tight">
                  Bridging the gap between <span className="highlight-arc highlight-arc-secondary text-secondary">Ambition</span> and <span className="highlight-arc highlight-arc-primary text-primary">Achievement</span>.
                </h3>
                
                <div className="space-y-4 sm:space-y-6 text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-medium italic">
                  <p>
                    "In an era where technology evolves every minute, our institute serves as the stable ground where students learn to fly. We don't just teach engineering; we cultivate the mindset of a <span className="text-white font-bold not-italic border-b-2 border-primary">problem solver</span>."
                  </p>
                  <p>
                    "At CMPI, we are building more than a workforce—we are building the architects of tomorrow's Bangladesh."
                  </p>
                </div>

                <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-secondary/30 shrink-0">
                     <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Principal Thumbnail" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">Engr. Mahbubur Rahman</h4>
                    <p className="text-secondary/70 font-semibold text-xs sm:text-sm">Principal & Visionary, CMPI</p>
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

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-20 lg:py-24 border-t border-slate-200 dark:border-slate-900 transition-colors duration-500 text-left">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            Watch &amp; Learn
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            See CMPI in Action
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-450 max-w-xl mx-auto leading-relaxed text-sm font-medium">
            Take a digital birds-eye tour of Cox's Bazar, the coastal city hosting our advanced polytechnic laboratories and active student campus.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="mx-auto max-w-4xl">
          <div
            className="relative rounded-3xl overflow-hidden border-[3px] border-slate-900 dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 bg-slate-900"
            style={{ aspectRatio: "16/9" }}
          >
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                // Video Preview Thumbnail & Play Button Overlay
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 w-full h-full flex flex-col justify-between p-8 relative overflow-hidden"
                >
                  {/* High Quality Scenic Drone cover background */}
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" 
                    alt="Cox's Bazar Coastline" 
                    className="absolute inset-0 w-full h-full object-cover filter brightness-75 select-none"
                  />
                  
                  {/* Glowing Overlay blurs */}
                  <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] hover:backdrop-blur-0 transition-all duration-300" />

                  {/* Top status */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="bg-slate-900/80 border border-slate-800 text-[#facc15] text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      4K Aerial Tour
                    </span>
                  </div>

                  {/* Pulsing play trigger */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                    <motion.button
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-[#facc15] text-slate-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-900 cursor-pointer"
                      aria-label="Play introduction video"
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </motion.button>
                  </div>

                  {/* Bottom description */}
                  <div className="relative z-10 text-white">
                    <p className="text-base font-black uppercase tracking-tight drop-shadow-md">Birds-Eye View of Cox's Bazar</p>
                    <p className="text-[10px] text-slate-350 font-bold uppercase tracking-widest mt-1">Official Scenic Introduction Media</p>
                  </div>
                </motion.div>
              ) : (
                // Direct YouTube Embed Iframe
                <motion.div
                  key="iframe"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/kYJzX9a8_uM?autoplay=1&rel=0&modestbranding=1"
                    title="Cox's Bazar Birds-Eye Tour Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest">
            Cox's Bazar Model Polytechnic Institute — Coastal Campus Overview
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;

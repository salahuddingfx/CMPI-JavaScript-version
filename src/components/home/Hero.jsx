import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    title: "Shaping the Future with Technical Excellence",
    subtitle: "Excellence in Technology",
    description: "Cox's Bazar Model Polytechnic Institute (CMPI) provides world-class technical education to empower the next generation of engineers.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dee4d8?auto=format&fit=crop&q=80&w=1920",
    cta: "Apply Now",
    link: "/admission"
  },
  {
    id: 2,
    title: "Innovate, Design, and Build the World",
    subtitle: "Engineering Tomorrow",
    description: "Our state-of-the-art labs and industry-standard curriculum ensure you stay ahead in the rapidly evolving technological landscape.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=1920",
    cta: "Explore Programs",
    link: "/academics"
  },
  {
    id: 3,
    title: "Join a Community of Visionary Leaders",
    subtitle: "Leader of Innovation",
    description: "Connect with expert faculty and a network of professionals who are transforming industries across the globe.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920",
    cta: "Meet Faculty",
    link: "/faculty"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[550px] w-full overflow-hidden bg-slate-900 mt-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image with optimized overlay */}
          <div className="absolute inset-0">
            <motion.img 
              key={`img-${current}`}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
              src={slides[current].image} 
              alt={slides[current].title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          </div>

          {/* Content Overlay */}
          <div className="relative h-full container mx-auto px-6 flex items-center">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{slides[current].subtitle}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                  {slides[current].title}
                </h1>
                
                <p className="text-lg text-slate-200 mb-10 max-w-2xl leading-relaxed opacity-90">
                  {slides[current].description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to={slides[current].link} 
                    className="px-8 py-3.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
                  >
                    {slides[current].cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                  <Link 
                    to="/academics" 
                    className="px-8 py-3.5 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    View Gallery
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-0 w-full z-20">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Indicators */}
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-1.5 transition-all duration-500 rounded-full",
                  current === i ? "w-12 bg-secondary" : "w-6 bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-30">
        <motion.div 
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-secondary shadow-[0_0_10px_#F9AD19]"
        />
      </div>
    </section>
  );
};

export default Hero;

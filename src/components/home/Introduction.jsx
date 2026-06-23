import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Welcome to CMPI</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Empowering Students to Lead in a Technological World</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Cox's Bazar Model Polytechnic Institute (CMPI) stands as a beacon of technical education in Bangladesh. Established with the vision of bridging the gap between academic theory and industrial practice, we provide a hands-on learning environment equipped with state-of-the-art laboratories and guided by experienced faculty.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to excellence is reflected in our graduates, who are currently leading innovations in various engineering sectors both locally and internationally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523050853063-bd388f9c7d13?auto=format&fit=crop&q=80&w=800" 
                alt="Students studying" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-primary p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm font-semibold uppercase tracking-tight">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, Building2, Zap, ArrowRight, Star } from 'lucide-react';
import { departments } from '@/data/mockData';

const iconMap = {
  Monitor: Monitor,
  Building2: Building2,
  Zap: Zap,
};

const DepartmentsPreview = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative side element */}
      <div className="absolute top-0 right-0 h-full w-1/3 bg-slate-50 -z-10 skew-x-12 translate-x-32" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-secondary fill-secondary" />
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Our Excellence</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Specialized <span className="text-gradient">Technologies</span> to Build Your Career
            </h3>
          </div>
          <Link to="/academics" className="group flex items-center gap-3 text-lg font-bold text-slate-900 hover:text-primary transition-all">
            All Departments <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"><ArrowRight className="w-5 h-5" /></div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 xl:gap-12">
          {departments.map((dept, index) => {
            const Icon = iconMap[dept.icon];
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
              >
                {/* Background Hover Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-[10] transition-transform duration-700 -z-10" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm">
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4 text-slate-900 leading-snug group-hover:text-primary transition-colors">
                    {dept.name}
                  </h4>
                  
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                    {dept.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 group-hover:border-primary/10 transition-colors">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">8 Semesters</span>
                    <Link 
                      to={`/academics/${dept.id}`}
                      className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-primary transition-colors shadow-lg"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Creative Accent */}
                <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Icon className="w-32 h-32 rotate-12" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsPreview;

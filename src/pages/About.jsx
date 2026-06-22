import { motion } from 'framer-motion';
import {
  Target, Eye, Award, Users,
  CheckCircle, Calendar, Flag, Star
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const timeline = [
  { year: '1995', title: 'Foundation', desc: 'CMPI was established under the Bangladesh Technical Education Board (BTEB) to serve the technical education needs of the region.' },
  { year: '2002', title: 'Civil Technology', desc: 'The Civil Technology department was inaugurated, expanding our engineering program offerings.' },
  { year: '2008', title: 'Computer Science Department', desc: 'Launched the Computer Science & Technology department to meet the growing demand for IT professionals.' },
  { year: '2015', title: 'Campus Expansion', desc: 'Major campus infrastructure upgrade — new academic building, modern laboratories, and digital library.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Introduced digital classrooms, online student portal, and smart attendance systems.' },
  { year: '2026', title: 'Present Day', desc: 'Serving 2500+ students with 120+ faculty members across 3 technology departments.' },
];

const administration = [
  {
    name: 'Engr. Mohammad Rafiqul Islam',
    title: 'Principal',
    dept: 'Administration',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    message: 'Committed to excellence in technical education and nurturing future engineers.',
  },
  {
    name: 'Engr. Nasrin Sultana',
    title: 'Vice Principal',
    dept: 'Academic Affairs',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    message: 'Ensuring quality education and a supportive learning environment for every student.',
  },
];

const stats = [
  { icon: Calendar, label: 'Years of Excellence', value: '30+' },
  { icon: Users, label: 'Alumni', value: '15,000+' },
  { icon: Award, label: 'BTEB Accredited', value: '✓' },
  { icon: Star, label: 'Placement Rate', value: '92%' },
];

const About = () => (
  <PageTransition>
    <SEO
      title="About Us"
      description="Learn about CMPI — our history, mission, vision, and administration. A premier technical institute in Bangladesh since 1995."
    />

    {/* Hero */}
    <section className="relative bg-primary py-28 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div {...fadeUp()} className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-bold mb-6 backdrop-blur">
            Est. 1995 · BTEB Accredited
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            About <span className="text-secondary">CMPI</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Chittagong Model Polytechnic Institute is a leading government technical institution
            dedicated to producing world-class engineers and technologists since 1995.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="py-8 px-6 text-center">
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-3xl font-black text-slate-900">{s.value}</p>
                <p className="text-sm font-semibold text-slate-500 mt-1">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Our Purpose</h2>
          <p className="text-slate-500 max-w-xl mx-auto">What drives us every day.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors">
              <Target className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide high-quality technical education that empowers students with the skills,
              knowledge, and ethical values needed to excel in a rapidly evolving technological world.
              We strive to bridge the gap between academia and industry through practical, hands-on learning.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
              <Eye className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the most respected and innovative polytechnic institute in Bangladesh,
              recognized globally for producing competent, creative, and ethically grounded
              technical professionals who contribute meaningfully to national development.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div {...fadeUp(0.3)} className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Excellence', 'Integrity', 'Innovation', 'Inclusivity'].map((val, i) => (
            <div key={i} className="bg-primary text-white rounded-2xl p-6 text-center">
              <CheckCircle className="w-6 h-6 text-secondary mx-auto mb-3" />
              <p className="font-black text-lg">{val}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* History Timeline */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4">Our Journey</span>
          <h2 className="text-4xl font-black text-slate-900 mb-4">30 Years of History</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Milestones that shaped who we are today.</p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="flex gap-8 items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0 relative z-10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <Flag className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <span className="text-xs font-black text-primary uppercase tracking-wider">{item.year}</span>
                    <h3 className="text-lg font-black text-slate-900 mt-1 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Administration */}
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Administration</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Meet the leadership guiding CMPI forward.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {administration.map((person, i) => (
            <motion.div key={i} {...fadeUp(i * 0.15)} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-64 overflow-hidden">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <span className="text-xs font-black uppercase tracking-widest text-primary">{person.dept}</span>
                <h3 className="text-xl font-black text-slate-900 mt-1 mb-1">{person.name}</h3>
                <p className="text-sm font-bold text-slate-500 mb-4">{person.title}</p>
                <p className="text-slate-600 text-sm italic leading-relaxed">"{person.message}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Accreditation */}
    <section className="py-20 bg-white border-t">
      <div className="container mx-auto px-4 text-center">
        <motion.div {...fadeUp()}>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Accreditation & Recognition</h2>
          <p className="text-slate-500 mb-10">CMPI operates under full government and BTEB accreditation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['BTEB Accredited', 'Ministry of Education', 'Government Approved', 'ISO Compliant Curriculum'].map((badge, i) => (
              <span key={i} className="flex items-center gap-2 px-5 py-3 bg-slate-50 border border-slate-200 rounded-full text-sm font-bold text-slate-700">
                <Award className="w-4 h-4 text-primary" /> {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </PageTransition>
);

export default About;

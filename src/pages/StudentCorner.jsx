import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download, Link as LinkIcon, Calendar, FileText,
  BookOpen, ClipboardList, ExternalLink, ChevronDown, ChevronUp
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { downloads, importantLinks, classRoutine, academicCalendar } from '@/data/mockData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const departments = ['CST', 'Civil', 'Electrical'];

const StudentCorner = () => {
  const [activeDept, setActiveDept] = useState('CST');
  const [openMonth, setOpenMonth] = useState(null);

  return (
    <PageTransition>
      <SEO
        title="Student Corner"
        description="Access academic calendars, class routines, downloads, forms and important links — all in one place for CMPI students."
      />

      {/* Hero */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-black mb-4">Student Corner</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Your one-stop hub for academic resources, routines, downloads, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav Cards */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Calendar, label: 'Academic Calendar', href: '#calendar' },
              { icon: ClipboardList, label: 'Class Routine', href: '#routine' },
              { icon: Download, label: 'Downloads', href: '#downloads' },
              { icon: LinkIcon, label: 'Important Links', href: '#links' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-primary hover:text-white hover:border-primary transition-all group"
                >
                  <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                  <span className="font-bold text-sm text-center text-slate-700 group-hover:text-white transition-colors">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section id="calendar" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()} className="mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Academic Calendar 2026</h2>
            <p className="text-slate-500">Key academic dates and semester schedule for the current year.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-3">
            {academicCalendar.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)}>
                <button
                  className="w-full flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-primary/30 transition-all text-left"
                  onClick={() => setOpenMonth(openMonth === i ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{item.month}</p>
                      <p className="text-sm text-slate-500">{item.events.length} event{item.events.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  {openMonth === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {openMonth === i && (
                  <div className="bg-white border border-slate-100 border-t-0 rounded-b-2xl px-6 pb-4 -mt-2">
                    <div className="space-y-3 pt-4">
                      {item.events.map((ev, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                          <div>
                            <p className="font-bold text-slate-800 text-sm">{ev.title}</p>
                            <p className="text-xs text-slate-500">{ev.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Routine */}
      <section id="routine" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()} className="mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Class Routine</h2>
            <p className="text-slate-500">Current semester class schedule by department.</p>
          </motion.div>

          {/* Dept Tabs */}
          <div className="flex gap-2 mb-8">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeDept === d ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left font-black rounded-tl-3xl">Time</th>
                  {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((d) => (
                    <th key={d} className="p-4 text-left font-black last:rounded-tr-3xl">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(classRoutine[activeDept] || []).map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-4 font-bold text-slate-700 whitespace-nowrap">{row.time}</td>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu'].map((day) => (
                      <td key={day} className="p-4 text-slate-600">
                        {row[day] ? (
                          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">
                            {row[day]}
                          </span>
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()} className="mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Downloads</h2>
            <p className="text-slate-500">Syllabus, forms, notices, and academic documents.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {downloads.map((file, i) => (
              <motion.a
                key={i}
                {...fadeUp(i * 0.07)}
                href={file.url || '#'}
                download={file.filename}
                className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <FileText className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 truncate">{file.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{file.type} · {file.size}</p>
                </div>
                <Download className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section id="links" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()} className="mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Important Links</h2>
            <p className="text-slate-500">Quick access to official external resources.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {importantLinks.map((link, i) => (
              <motion.a
                key={i}
                {...fadeUp(i * 0.07)}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-primary hover:border-primary hover:text-white transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-white/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 group-hover:text-white transition-colors">{link.name}</p>
                  <p className="text-xs text-slate-500 group-hover:text-white/70 transition-colors mt-0.5">{link.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default StudentCorner;

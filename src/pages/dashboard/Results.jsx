import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Award, ChevronDown, ChevronUp } from 'lucide-react';

const semesterResults = [
  {
    semester: 'Semester 4 (Current)',
    gpa: null,
    status: 'In Progress',
    subjects: [
      { code: 'CST-401', name: 'Data Structures & Algorithms', credit: 3, grade: null },
      { code: 'CST-402', name: 'Database Management Systems', credit: 3, grade: null },
      { code: 'CST-403', name: 'Web Engineering', credit: 2, grade: null },
      { code: 'CST-404', name: 'Engineering Mathematics III', credit: 3, grade: null },
      { code: 'CST-405', name: 'Computer Networks', credit: 3, grade: null },
      { code: 'CST-406', name: 'Advanced Programming Lab', credit: 2, grade: null },
    ],
  },
  {
    semester: 'Semester 3',
    gpa: 3.92,
    status: 'Completed',
    subjects: [
      { code: 'CST-301', name: 'Object-Oriented Programming', credit: 3, grade: 'A+' },
      { code: 'CST-302', name: 'Digital Electronics', credit: 3, grade: 'A' },
      { code: 'CST-303', name: 'Operating Systems', credit: 3, grade: 'A+' },
      { code: 'CST-304', name: 'Software Engineering Lab', credit: 2, grade: 'A' },
    ],
  },
  {
    semester: 'Semester 2',
    gpa: 3.78,
    status: 'Completed',
    subjects: [
      { code: 'CST-201', name: 'Programming in C', credit: 3, grade: 'A' },
      { code: 'CST-202', name: 'Computer Architecture', credit: 3, grade: 'B+' },
      { code: 'CST-203', name: 'Discrete Mathematics', credit: 3, grade: 'A' },
    ],
  },
  {
    semester: 'Semester 1',
    gpa: 3.85,
    status: 'Completed',
    subjects: [
      { code: 'CST-101', name: 'Introduction to Computing', credit: 2, grade: 'A+' },
      { code: 'CST-102', name: 'Physics', credit: 3, grade: 'A' },
      { code: 'CST-103', name: 'English Communication', credit: 2, grade: 'A' },
    ],
  },
];

const gradeColor = (grade) => {
  if (!grade) return 'text-slate-400';
  if (grade === 'A+') return 'text-green-600 dark:text-green-400';
  if (grade === 'A') return 'text-blue-600 dark:text-blue-400';
  if (grade === 'B+') return 'text-yellow-600 dark:text-yellow-400';
  return 'text-slate-600 dark:text-slate-300';
};

const cgpa = (semesterResults.filter(s => s.gpa).reduce((a, s) => a + s.gpa, 0) / semesterResults.filter(s => s.gpa).length).toFixed(2);

const Results = () => {
  const [open, setOpen] = useState(1);

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white">Academic Results</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Your semester-wise results and CGPA summary.</p>
      </motion.div>

      {/* CGPA Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div>
            <p className="text-primary-foreground/70 font-bold mb-1">Cumulative GPA</p>
            <p className="text-6xl font-black">{cgpa}</p>
            <p className="text-primary-foreground/70 mt-2 text-sm">Based on {semesterResults.filter(s => s.gpa).length} completed semesters</p>
          </div>
          <div className="flex gap-6">
            {[
              { label: 'Best Semester', value: '3.92', sub: 'Semester 3' },
              { label: 'Completed', value: '3', sub: 'Semesters' },
              { label: 'Total Credits', value: '32', sub: 'Earned' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black">{stat.value}</p>
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider mt-1">{stat.label}</p>
                <p className="text-xs text-white/50">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
      </motion.div>

      {/* Semester Results */}
      <div className="space-y-4">
        {semesterResults.map((sem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 dark:text-white">{sem.semester}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{sem.subjects.length} subjects</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                {sem.gpa ? (
                  <div className="text-right">
                    <p className="text-2xl font-black text-slate-900 dark:text-white">{sem.gpa}</p>
                    <p className="text-xs font-bold text-green-500 uppercase">{sem.status}</p>
                  </div>
                ) : (
                  <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 rounded-full">
                    {sem.status}
                  </span>
                )}
                {open === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
            </button>

            {open === i && (
              <div className="border-t border-slate-100 dark:border-slate-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900">
                      <th className="p-4 text-left font-black text-slate-600 dark:text-slate-400 text-xs uppercase tracking-wider">Code</th>
                      <th className="p-4 text-left font-black text-slate-600 dark:text-slate-400 text-xs uppercase tracking-wider">Subject</th>
                      <th className="p-4 text-center font-black text-slate-600 dark:text-slate-400 text-xs uppercase tracking-wider">Credits</th>
                      <th className="p-4 text-center font-black text-slate-600 dark:text-slate-400 text-xs uppercase tracking-wider">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sem.subjects.map((sub, j) => (
                      <tr key={j} className={j % 2 === 0 ? '' : 'bg-slate-50/50 dark:bg-slate-900/50'}>
                        <td className="p-4 font-mono text-xs text-primary font-bold">{sub.code}</td>
                        <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{sub.name}</td>
                        <td className="p-4 text-center font-bold text-slate-600 dark:text-slate-400">{sub.credit}</td>
                        <td className={`p-4 text-center text-lg font-black ${gradeColor(sub.grade)}`}>
                          {sub.grade || '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {sem.gpa && (
                  <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                      <Download className="w-4 h-4" /> Download Transcript
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Results;

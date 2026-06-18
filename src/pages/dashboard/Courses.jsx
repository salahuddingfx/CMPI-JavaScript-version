import { motion } from 'framer-motion';
import { Book, Clock, CheckCircle2, User, ChevronRight } from 'lucide-react';

const semesters = ['Current Semester', 'Semester 3', 'Semester 2', 'Semester 1'];

const coursesData = {
  'Current Semester': [
    { code: 'CST-401', name: 'Data Structures & Algorithms', instructor: 'Engr. Kamal Uddin', credits: 3, progress: 72, type: 'Theory' },
    { code: 'CST-402', name: 'Database Management Systems', instructor: 'Ms. Rumana Akter', credits: 3, progress: 58, type: 'Theory' },
    { code: 'CST-403', name: 'Web Engineering', instructor: 'Engr. Nasrin Sultana', credits: 2, progress: 85, type: 'Lab' },
    { code: 'CST-404', name: 'Engineering Mathematics III', instructor: 'Mr. Rahim Mia', credits: 3, progress: 45, type: 'Theory' },
    { code: 'CST-405', name: 'Computer Networks', instructor: 'Engr. Sazzad Hossain', credits: 3, progress: 60, type: 'Theory' },
    { code: 'CST-406', name: 'Advanced Programming Lab', instructor: 'Ms. Rumana Akter', credits: 2, progress: 90, type: 'Lab' },
  ],
  'Semester 3': [
    { code: 'CST-301', name: 'Object-Oriented Programming', instructor: 'Engr. Kamal Uddin', credits: 3, progress: 100, type: 'Theory' },
    { code: 'CST-302', name: 'Digital Electronics', instructor: 'Engr. Mostafa Ahmed', credits: 3, progress: 100, type: 'Theory' },
    { code: 'CST-303', name: 'Operating Systems', instructor: 'Ms. Rumana Akter', credits: 3, progress: 100, type: 'Theory' },
    { code: 'CST-304', name: 'Software Engineering Lab', instructor: 'Engr. Kamal Uddin', credits: 2, progress: 100, type: 'Lab' },
  ],
  'Semester 2': [
    { code: 'CST-201', name: 'Programming in C', instructor: 'Ms. Rumana Akter', credits: 3, progress: 100, type: 'Theory' },
    { code: 'CST-202', name: 'Computer Architecture', instructor: 'Engr. Kamal Uddin', credits: 3, progress: 100, type: 'Theory' },
    { code: 'CST-203', name: 'Discrete Mathematics', instructor: 'Mr. Rahim Mia', credits: 3, progress: 100, type: 'Theory' },
  ],
  'Semester 1': [
    { code: 'CST-101', name: 'Introduction to Computing', instructor: 'Engr. Kamal Uddin', credits: 2, progress: 100, type: 'Theory' },
    { code: 'CST-102', name: 'Physics', instructor: 'Mr. Reza Islam', credits: 3, progress: 100, type: 'Theory' },
    { code: 'CST-103', name: 'English Communication', instructor: 'Ms. Farida Begum', credits: 2, progress: 100, type: 'Theory' },
  ],
};

import { useState } from 'react';

const Courses = () => {
  const [activeSemester, setActiveSemester] = useState('Current Semester');
  const courses = coursesData[activeSemester] || [];
  const totalCredits = courses.reduce((s, c) => s + c.credits, 0);

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">My Courses</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            {courses.length} courses · {totalCredits} credits
          </p>
        </div>
        {/* Semester Tabs */}
        <div className="flex flex-wrap gap-2">
          {semesters.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSemester(s)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSemester === s
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-4">
        {courses.map((course, i) => (
          <motion.div
            key={course.code}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <Book className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="text-xs font-black text-primary bg-primary/10 px-2 py-0.5 rounded">{course.code}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${course.type === 'Lab' ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400'}`}>
                    {course.type}
                  </span>
                </div>
                <h3 className="font-black text-slate-900 dark:text-white">{course.name}</h3>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {course.instructor}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.credits} Credits</span>
                </div>
              </div>
              <div className="md:w-48 shrink-0">
                <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                  <span>Progress</span>
                  <span className={course.progress === 100 ? 'text-green-500' : 'text-primary'}>{course.progress}%</span>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 0.8, delay: i * 0.06 + 0.3 }}
                    className={`h-full rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-primary'}`}
                  />
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors hidden md:block" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

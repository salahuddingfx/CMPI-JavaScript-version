import { motion } from 'framer-motion';
import { Book, FileText, CheckCircle2, Clock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Welcome Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl shadow-primary/20"
      >
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black mb-2">Welcome back, {user?.name || 'Student'}! 👋</h1>
          <p className="text-primary-foreground/80 font-medium max-w-xl">
            You have 2 pending assignments and your next class "Data Structures" starts in 45 minutes.
          </p>
        </div>
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 right-32 w-48 h-48 bg-secondary/20 rounded-full blur-2xl -mb-20" />
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Enrolled Courses", value: "6", icon: Book, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
          { label: "Completed Credits", value: "48", icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50 dark:bg-green-500/10" },
          { label: "Current CGPA", value: "3.85", icon: FileText, color: "text-secondary", bg: "bg-secondary/10" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-6 group hover:shadow-md transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Activity & Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Today's Schedule</h3>
          <div className="space-y-6">
            {[
              { time: "09:00 AM", course: "Data Structures", room: "Lab 301", type: "Lab" },
              { time: "11:30 AM", course: "Engineering Mathematics", room: "Room 205", type: "Lecture" },
              { time: "02:00 PM", course: "Web Engineering", room: "Lab 302", type: "Lab" },
            ].map((cls, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-24 shrink-0 text-sm font-bold text-slate-500 dark:text-slate-400 pt-1">{cls.time}</div>
                <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{cls.course}</h4>
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {cls.room}</span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">{cls.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Recent Notices</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              <span className="text-[10px] font-bold uppercase text-red-500 bg-red-50 dark:bg-red-500/10 px-2 py-1 rounded">Urgent</span>
              <h4 className="font-bold text-slate-900 dark:text-white mt-2">Semester Final Registration Deadline</h4>
              <p className="text-sm text-slate-500 mt-1">Last date for course registration is tomorrow without late fine.</p>
            </div>
            <div className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              <span className="text-[10px] font-bold uppercase text-primary bg-primary/10 px-2 py-1 rounded">Academic</span>
              <h4 className="font-bold text-slate-900 dark:text-white mt-2">New Lab Equipment Installation</h4>
              <p className="text-sm text-slate-500 mt-1">Computer Lab 2 will remain closed on Thursday for upgrades.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

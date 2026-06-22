import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book, FileText, CheckCircle2, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { useAuth } from '@/contexts/AuthContext';
import { getDashboard, getNotices } from '@/services/api';
import Loader from '@/components/Loader';

const Dashboard = () => {
  const { user: authUser } = useAuth();
  const [data, setData] = useState(null);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [dashData, noticeData] = await Promise.allSettled([
          getDashboard(),
          getNotices(),
        ]);
        if (dashData.status === "fulfilled") setData(dashData.value);
        if (noticeData.status === "fulfilled") setNotices(noticeData.value.slice(0, 3));
      } catch (err) {
        console.error("Failed to load dashboard data", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader />
      </div>
    );
  }

  const user = data?.user || authUser;
  const courses = data?.courses || [];
  const courseResults = data?.courseResults || [];
  const bills = data?.bills || [];

  const isPending = user?.status === "pending";

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
          <AlertTriangle className="h-10 w-10 text-yellow-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Account Pending Activation</h2>
        <p className="mt-3 max-w-md text-slate-500">
          Your account is pending admin approval. Services are currently locked. You will receive an email once your account is activated by Cox's Bazar Model Polytechnic Institute.
        </p>
      </div>
    );
  }

  // GPA calculation
  const latestSemester = courseResults.length > 0 ? courseResults[courseResults.length - 1] : null;
  const cgpa = latestSemester?.sgpa || "0.00";
  const completedCredits = courseResults.reduce((sum, r) => sum + (parseInt(r.earnedCredit || r.totalCredit || 0) || 15), 0);

  // Grade Trend for Chart
  const gradeTrend = courseResults.map((r, i) => ({
    semester: r.semester || `${i + 1}th`,
    sgpa: parseFloat(r.sgpa) || 0,
  }));

  const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];
  const courseProgress = courses.length > 0
    ? [
        { name: "Completed", value: courses.filter((c) => (c.progress || 0) >= 80).length },
        { name: "In Progress", value: courses.filter((c) => (c.progress || 0) >= 30 && (c.progress || 0) < 80).length },
        { name: "Just Started", value: courses.filter((c) => (c.progress || 0) < 30).length },
      ]
    : [];

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
            {user?.department || 'CST'} · ID: <strong className="text-secondary font-mono">{user?.student_id || '—'}</strong>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold">
              {user?.semester || '1st'} Semester
            </span>
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold">
              Session: {user?.session || '—'}
            </span>
          </div>
        </div>
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 right-32 w-48 h-48 bg-secondary/20 rounded-full blur-2xl -mb-20" />
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Enrolled Courses", value: courses.length || "0", icon: Book, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
          { label: "Completed Credits", value: completedCredits || "0", icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50 dark:bg-green-500/10" },
          { label: "Current SGPA/CGPA", value: cgpa, icon: FileText, color: "text-secondary", bg: "bg-secondary/10" },
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

      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GPA Chart */}
        {gradeTrend.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
          >
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">GPA Performance Trend</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={gradeTrend}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="semester" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 4]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="sgpa" stroke="#22c55e" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center"
          >
            <TrendingUp className="h-10 w-10 text-slate-300 mb-2" />
            <h4 className="font-bold text-slate-400">No Grade Data Available</h4>
            <p className="text-xs text-slate-500 max-w-xs mt-1">GPA trends will be plotted once semester results are published in BTEB logs.</p>
          </motion.div>
        )}

        {/* Course Progress Chart */}
        {courseProgress.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
          >
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">Course Progress Distribution</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={courseProgress} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                  {courseProgress.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center"
          >
            <Book className="h-10 w-10 text-slate-300 mb-2" />
            <h4 className="font-bold text-slate-400">No Active Course Enrollments</h4>
            <p className="text-xs text-slate-500 max-w-xs mt-1">Enrollment data will automatically sync from the academic portal database.</p>
          </motion.div>
        )}
      </div>

      {/* Courses & Notices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Courses */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Registered Courses</h3>
            <Link to="/dashboard/courses" className="text-xs font-bold text-primary hover:underline">View All</Link>
          </div>
          {courses.length === 0 ? (
            <p className="text-sm text-slate-400 py-6 text-center">No enrolled courses for the current semester.</p>
          ) : (
            <div className="space-y-4">
              {courses.slice(0, 3).map((cls, i) => (
                <div key={i} className="flex gap-4 items-start border-b border-slate-100 dark:border-slate-900 pb-4 last:border-0 last:pb-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-xs shrink-0">{cls.code}</div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{cls.title || cls.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Instructor: {cls.instructor || 'TBA'}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full flex-grow overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${cls.progress || 0}%` }} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500">{cls.progress || 0}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Notices */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Recent Notices</h3>
            <Link to="/notice-board" className="text-xs font-bold text-primary hover:underline">View All</Link>
          </div>
          {notices.length === 0 ? (
            <p className="text-sm text-slate-400 py-6 text-center">No recent announcements published.</p>
          ) : (
            <div className="space-y-4">
              {notices.map((notice) => (
                <Link key={notice.id} to={`/notices/${notice.id}`} className="block p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {notice.category || 'General'}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {new Date(notice.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mt-2 text-sm truncate">{notice.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">{notice.summary || notice.details}</p>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

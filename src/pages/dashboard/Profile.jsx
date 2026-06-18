import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, User, Mail, Phone, Hash, Building2, Calendar, Edit3, Save, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { getInitials } from '@/utils/helpers';

const Profile = () => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || 'Hridoy Ahmed',
    phone: user?.phone || '+880 1711-000000',
    address: user?.address || 'Chittagong, Bangladesh',
  });

  const studentInfo = [
    { icon: Hash, label: 'Student ID', value: user?.student_id || 'CST-2023-1042' },
    { icon: Building2, label: 'Department', value: user?.department || 'Computer Science & Technology' },
    { icon: Calendar, label: 'Batch', value: user?.batch || '2023-2024' },
    { icon: Mail, label: 'Email', value: user?.email || 'hridoy@cmpi.edu.bd' },
    { icon: Phone, label: 'Phone', value: form.phone },
  ];

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white">My Profile</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">View and manage your personal information.</p>
      </motion.div>

      {/* Avatar Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="relative group">
          <div className="w-28 h-28 rounded-3xl overflow-hidden bg-primary flex items-center justify-center shadow-xl shadow-primary/20">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl font-black text-secondary">
                {getInitials(user?.name || 'Student')}
              </span>
            )}
          </div>
          <button className="absolute inset-0 rounded-3xl bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">{user?.name || 'Hridoy Ahmed'}</h2>
          <p className="text-primary font-bold mt-1">{user?.role || 'Computer Science Student'}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{user?.email || 'hridoy@cmpi.edu.bd'}</p>
          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 rounded-full text-xs font-bold">Active Student</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">4th Semester</span>
          </div>
        </div>

        <button
          onClick={() => setEditing(!editing)}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-2xl font-bold hover:opacity-90 transition-opacity text-sm shrink-0"
        >
          <Edit3 className="w-4 h-4" />
          {editing ? 'Cancel' : 'Edit Profile'}
        </button>
      </motion.div>

      {/* Info / Edit Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 p-8"
      >
        <h3 className="font-black text-slate-900 dark:text-white mb-6 text-lg">Student Information</h3>

        {!editing ? (
          <div className="grid md:grid-cols-2 gap-5">
            {studentInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{info.label}</p>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-5">
            {[
              { key: 'name', label: 'Full Name', icon: User },
              { key: 'phone', label: 'Phone Number', icon: Phone },
              { key: 'address', label: 'Address', icon: Building2 },
            ].map(({ key, label, icon: Icon }) => (
              <div key={key} className="space-y-2">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary" /> {label}
                </label>
                <input
                  type="text"
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-primary rounded-2xl outline-none font-semibold text-slate-900 dark:text-white transition-all"
                />
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setEditing(false)}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold hover:opacity-90 transition-opacity"
              >
                <Save className="w-4 h-4" /> Save Changes
              </button>
              <button
                onClick={() => setEditing(false)}
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="w-4 h-4" /> Cancel
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;

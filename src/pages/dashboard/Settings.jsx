import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Bell, Lock, Globe, Shield, Eye, EyeOff, Save } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

const passwordSchema = z.object({
  current: z.string().min(6, 'Required'),
  newPass: z.string().min(8, 'At least 8 characters'),
  confirm: z.string(),
}).refine((d) => d.newPass === d.confirm, {
  message: "Passwords don't match",
  path: ['confirm'],
});

const Section = ({ title, icon: Icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 p-8"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-black text-slate-900 dark:text-white text-lg">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const Toggle = ({ label, desc, checked, onChange }) => (
  <div className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-slate-800 last:border-0">
    <div>
      <p className="font-bold text-slate-900 dark:text-white text-sm">{label}</p>
      {desc && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{desc}</p>}
    </div>
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-12 h-6 rounded-full transition-colors ${checked ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}
    >
      <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${checked ? 'left-7' : 'left-1'}`} />
    </button>
  </div>
);

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({ email: true, browser: false, sms: false });
  const [showPass, setShowPass] = useState({ current: false, new: false, confirm: false });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const onPasswordSubmit = (data) => {
    toast.success('Password updated successfully!');
    reset();
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white">Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your preferences and account settings.</p>
      </motion.div>

      {/* Appearance */}
      <Section title="Appearance" icon={Sun}>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-slate-900 dark:text-white">Theme</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Choose your preferred color mode.</p>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 gap-1">
            <button
              onClick={() => theme === 'dark' && toggleTheme()}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${theme === 'light' ? 'bg-white text-slate-900 shadow' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <Sun className="w-4 h-4" /> Light
            </button>
            <button
              onClick={() => theme === 'light' && toggleTheme()}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${theme === 'dark' ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <Moon className="w-4 h-4" /> Dark
            </button>
          </div>
        </div>
      </Section>

      {/* Notifications */}
      <Section title="Notifications" icon={Bell}>
        <Toggle
          label="Email Notifications"
          desc="Receive important notices to your email."
          checked={notifications.email}
          onChange={(v) => setNotifications({ ...notifications, email: v })}
        />
        <Toggle
          label="Browser Notifications"
          desc="Get real-time alerts in the browser."
          checked={notifications.browser}
          onChange={(v) => setNotifications({ ...notifications, browser: v })}
        />
        <Toggle
          label="SMS Alerts"
          desc="Receive exam and result notifications via SMS."
          checked={notifications.sms}
          onChange={(v) => setNotifications({ ...notifications, sms: v })}
        />
      </Section>

      {/* Change Password */}
      <Section title="Security & Password" icon={Lock}>
        <form onSubmit={handleSubmit(onPasswordSubmit)} className="space-y-4">
          {[
            { key: 'current', label: 'Current Password', field: 'current' },
            { key: 'new', label: 'New Password', field: 'newPass' },
            { key: 'confirm', label: 'Confirm New Password', field: 'confirm' },
          ].map(({ key, label, field }) => (
            <div key={key} className="space-y-1.5">
              <label className="text-sm font-black text-slate-700 dark:text-slate-300">{label}</label>
              <div className="relative">
                <input
                  type={showPass[key] ? 'text' : 'password'}
                  {...register(field)}
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 pr-12 bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-primary rounded-2xl outline-none font-semibold text-slate-900 dark:text-white transition-all ${errors[field] ? 'border-red-500' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPass({ ...showPass, [key]: !showPass[key] })}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPass[key] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors[field] && <p className="text-red-500 text-xs font-bold">{errors[field].message}</p>}
            </div>
          ))}
          <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold hover:opacity-90 transition-opacity mt-2">
            <Save className="w-4 h-4" /> Update Password
          </button>
        </form>
      </Section>

      {/* Privacy */}
      <Section title="Privacy" icon={Shield}>
        <Toggle
          label="Profile Visibility"
          desc="Allow other students to see your profile."
          checked={true}
          onChange={() => toast('Coming soon!', { icon: '🔒' })}
        />
        <Toggle
          label="Show Online Status"
          desc="Let others see when you're active."
          checked={false}
          onChange={() => toast('Coming soon!', { icon: '🔒' })}
        />
      </Section>
    </div>
  );
};

export default Settings;

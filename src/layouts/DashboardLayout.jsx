import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Home, Book, FileText, User, LogOut, Settings, Bell, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import SEO from '@/components/SEO';
import PageTransition from '@/components/PageTransition';
import { getInitials } from '@/utils/helpers';
import { AnimatePresence, motion } from 'framer-motion';

const sidebarLinks = [
  { name: 'Overview',   path: '/dashboard',          icon: Home },
  { name: 'My Courses', path: '/dashboard/courses',  icon: Book },
  { name: 'Results',    path: '/dashboard/results',  icon: FileText },
  { name: 'Profile',    path: '/dashboard/profile',  icon: User },
  { name: 'Settings',   path: '/dashboard/settings', icon: Settings },
];

const SidebarContent = ({ location, handleLogout, onClose }) => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={onClose}>
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-secondary font-black text-xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
            C
          </div>
          <span className="font-black text-slate-900 dark:text-white text-xl tracking-tighter">CMPI Panel</span>
        </Link>
        {onClose && (
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors md:hidden">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        )}
      </div>

      {/* User mini card */}
      <div className="mx-4 mb-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-secondary font-black text-sm shrink-0 overflow-hidden">
          {user?.avatar
            ? <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            : getInitials(user?.name || 'S')
          }
        </div>
        <div className="min-w-0">
          <p className="text-sm font-black text-slate-900 dark:text-white truncate">{user?.name || 'Student'}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user?.role || 'CST'}</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto no-scrollbar">
        <p className="px-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 mt-2">Menu</p>
        {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              to={link.path}
              onClick={onClose}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all',
                isActive
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              )}
            >
              <Icon className={cn('w-5 h-5', isActive ? 'text-secondary' : 'opacity-70')} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-2xl font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-5 h-5 opacity-70" />
          Logout
        </button>
      </div>
    </div>
  );
};

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const pageName = location.pathname.split('/').filter(Boolean).pop() || 'Dashboard';

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 overflow-hidden">
      <SEO title="Dashboard" />

      {/* ── Desktop Sidebar ──────────────────────────────────────────────── */}
      <aside className="hidden md:flex w-72 bg-white dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 flex-col transition-colors duration-500 shrink-0">
        <SidebarContent location={location} handleLogout={handleLogout} />
      </aside>

      {/* ── Mobile Sidebar Overlay ───────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 z-50 flex flex-col md:hidden"
            >
              <SidebarContent location={location} handleLogout={handleLogout} onClose={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 md:px-8 transition-colors duration-500 shrink-0">
          <div className="flex items-center gap-4">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <Menu className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </button>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white capitalize">
              {pageName}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative text-slate-400 hover:text-primary transition-colors p-2">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-950" />
            </button>
            <Link to="/dashboard/profile" className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{user?.name || 'Student'}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{user?.role || 'CST Student'}</p>
              </div>
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-primary flex items-center justify-center border-2 border-slate-100 dark:border-slate-800 text-secondary font-black text-sm">
                {user?.avatar
                  ? <img src={user.avatar} alt={user?.name} className="w-full h-full object-cover" />
                  : getInitials(user?.name || 'S')
                }
              </div>
            </Link>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 no-scrollbar bg-slate-50 dark:bg-slate-900">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

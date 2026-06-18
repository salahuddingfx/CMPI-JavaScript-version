import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Home, Book, FileText, User, LogOut, Settings, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import SEO from '@/components/SEO';
import PageTransition from '@/components/PageTransition';

const sidebarLinks = [
  { name: 'Overview', path: '/dashboard', icon: Home },
  { name: 'My Courses', path: '/dashboard/courses', icon: Book },
  { name: 'Results', path: '/dashboard/results', icon: FileText },
  { name: 'Profile', path: '/dashboard/profile', icon: User },
  { name: 'Settings', path: '/dashboard/settings', icon: Settings },
];

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 overflow-hidden">
      <SEO title="Dashboard" />
      
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 flex flex-col transition-colors duration-500">
        <div className="p-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-secondary font-black text-xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
              C
            </div>
            <span className="font-black text-slate-900 dark:text-white text-xl tracking-tighter transition-colors">CMPI Panel</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto no-scrollbar">
          <p className="px-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 mt-4">Menu</p>
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all",
                  isActive 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-secondary" : "opacity-70")} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-2xl font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5 opacity-70" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-8 transition-colors duration-500 shrink-0">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white capitalize transition-colors">
            {location.pathname.split('/').pop() || 'Dashboard'}
          </h2>
          
          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-primary transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-950" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{user?.name || 'Student'}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{user?.role || 'Computer Science'}</p>
              </div>
              <img 
                src="https://i.pravatar.cc/150?u=dashboard" 
                alt="Profile" 
                className="w-10 h-10 rounded-xl border-2 border-slate-100 dark:border-slate-800"
              />
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-slate-50 dark:bg-slate-900">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

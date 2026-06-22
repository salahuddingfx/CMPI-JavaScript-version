import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Sun, Moon, User, LogOut, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useInstituteContext } from '@/contexts/InstituteDataContext';
import { SearchPanel } from '@/components/features/SearchPanel';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Academics', path: '/academics', dropdown: [
    { name: 'All Departments', path: '/academics' },
    { name: 'Computer Science & Technology', path: '/academics/computer-science-technology' },
    { name: 'Civil Technology', path: '/academics/civil-technology' },
    { name: 'Electrical Technology', path: '/academics/electrical-technology' },
    { divider: true },
    { name: 'Syllabus & Curriculum', path: '/syllabus' },
    { name: 'Class Routine', path: '/class-routine' },
    { name: 'Exam Routine', path: '/exam-routine' },
    { name: 'Check Results', path: '/results' },
    { name: 'Gallery', path: '/gallery' },
  ]},
  { name: 'About', path: '/about', dropdown: [
    { name: 'About Us', path: '/about' },
    { name: "Principal's Message", path: '/principal' },
    { name: 'Faculty Members', path: '/faculty' },
    { divider: true },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Contact', path: '/contact' },
  ]},
  { name: 'Student Corner', path: '/student-corner', dropdown: [
    { name: 'Resources Hub', path: '/student-corner' },
    { name: 'Library Service', path: '/library' },
    { name: 'Student Clubs', path: '/clubs' },
    { name: 'Placement Cell', path: '/placement' },
    { name: 'Scholarships', path: '/scholarship' },
    { name: 'Alumni Network', path: '/alumni' },
    { divider: true },
    { name: 'Official Tenders', path: '/tender' },
    { name: 'Share Feedback', path: '/feedback' },
  ]},
  { name: 'Admission', path: '/admission' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedLink, setExpandedLink] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const location = useLocation();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { data } = useInstituteContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  const toggleExpand = (name) => {
    setExpandedLink((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:z-[9999]"
      >
        Skip to content
      </a>

      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-white dark:bg-slate-950 shadow-xl py-3 dark:border-b dark:border-slate-800" 
          : "bg-black/30 backdrop-blur-sm py-5"
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/CMPI.png" alt="CMPI Logo" className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col">
              <span className={cn(
                "font-black leading-tight text-xl tracking-tighter transition-colors duration-500",
                scrolled ? "text-slate-900 dark:text-white" : "text-white drop-shadow-md"
              )}>CMPI</span>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest hidden sm:block transition-colors duration-500",
                scrolled ? "text-primary" : "text-secondary drop-shadow-sm"
              )}>Polytechnic Institute</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group px-1">
                <Link
                  to={link.path}
                  className={cn(
                    "px-3 py-2 text-sm font-bold transition-all rounded-xl flex items-center gap-1",
                    location.pathname === link.path 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : scrolled 
                        ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white" 
                        : "text-white hover:bg-white/10 drop-shadow-md"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                </Link>
                
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-3 w-64 bg-white dark:bg-slate-900 border dark:border-slate-850 rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl p-2 z-50">
                    <div className="flex flex-col gap-1">
                      {link.dropdown.map((sub, idx) => (
                        sub.divider ? (
                          <div key={`div-${idx}`} className="my-1 border-t border-slate-100 dark:border-slate-800" />
                        ) : (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="flex items-center justify-between px-4 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 rounded-xl hover:bg-primary hover:text-white dark:hover:bg-primary transition-all group/item"
                          >
                            {sub.name}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 translate-x-[-10px] group-hover/item:translate-x-0 transition-all" />
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />
            
            {/* Search Button */}
            <button 
              onClick={() => setSearchOpen(true)}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm",
                scrolled ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white" : "bg-white/10 text-white hover:bg-white/20"
              )}
              title="Search"
              aria-label="Open search panel"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm",
                scrolled ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white" : "bg-white/10 text-white hover:bg-white/20"
              )}
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Webmail & Auth */}
            <div className="flex items-center gap-3 ml-2">
              <a 
                href="https://mail.cmpi.edu.bd" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "px-4 py-2 text-sm font-bold transition-all rounded-xl border-2",
                  scrolled ? "border-slate-200 text-slate-600 hover:border-primary hover:text-primary dark:border-slate-800 dark:text-slate-300" : "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                )}
              >
                Webmail
              </a>
              {user ? (
                <div className="flex items-center gap-3">
                  <Link 
                    to="/dashboard"
                    className="flex items-center justify-center rounded-full border border-border p-0.5 hover:ring-2 hover:ring-primary/20 transition-all"
                    title="Go to Dashboard"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {user.name ? user.name.charAt(0).toUpperCase() : <User className="h-4 w-4" />}
                    </div>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={logout}
                    className="gap-1.5 border-destructive/20 text-destructive hover:bg-destructive hover:text-white dark:border-red-800/40 dark:text-red-400 dark:hover:bg-red-800 dark:hover:text-red-200"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link 
                    to="/login"
                    className={cn(
                      "px-5 py-2 text-sm font-bold transition-all rounded-xl",
                      scrolled ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" : "text-white hover:bg-white/10 drop-shadow-md"
                    )}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/register"
                    className="px-6 py-2.5 text-sm font-black bg-secondary text-primary rounded-xl shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-0.5 transition-all animate-pulse"
                  >
                    Join Now
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className={cn(
              "lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border transition-all duration-300",
              scrolled 
                ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700" 
                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
            )}
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Slide-out Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden"
            />
            
            {/* Slide Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[110] w-full max-w-[320px] bg-white dark:bg-slate-950 border-l dark:border-slate-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto lg:hidden text-left"
            >
              <div>
                {/* Drawer Head */}
                <div className="flex items-center justify-between mb-8 border-b dark:border-slate-900 pb-4">
                  <div className="flex items-center gap-2.5">
                    <img src="/CMPI.png" alt="CMPI Logo" className="h-8 w-8 object-contain" />
                    <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white">CMPI Portal</span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Quick actions for Mobile */}
                <div className="flex items-center justify-between gap-3 mb-6 p-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border dark:border-slate-850">
                  <span className="text-xs font-extrabold text-slate-400 pl-2">Quick settings</span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => { setIsOpen(false); setSearchOpen(true); }}
                      className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary"
                      title="Search"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={toggleTheme}
                      className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300"
                      title="Toggle Theme"
                    >
                      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Nav Links list */}
                <nav className="space-y-1.5" aria-label="Mobile navigation list">
                  {navLinks.map((link) => {
                    const isExpanded = expandedLink === link.name;
                    return (
                      <div key={link.name} className="space-y-1">
                        {link.dropdown ? (
                          <div>
                            <button
                              onClick={() => toggleExpand(link.name)}
                              className={cn(
                                "w-full flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-all text-left",
                                isExpanded 
                                  ? "bg-primary/10 text-primary" 
                                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                              )}
                            >
                              <span>{link.name}</span>
                              <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isExpanded && "rotate-180")} />
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden ml-4 border-l dark:border-slate-900 pl-3 space-y-1 mt-1"
                                >
                                  {link.dropdown.map((sub) => (
                                    sub.divider ? (
                                      <div key={`div-m-${sub.name}`} className="border-t border-slate-100 dark:border-slate-800 my-1" />
                                    ) : (
                                      <Link
                                        key={sub.name}
                                        to={sub.path}
                                        className="block rounded-xl px-3 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {sub.name}
                                      </Link>
                                    )
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={link.path}
                            className={cn(
                              "block rounded-xl px-4 py-2.5 text-sm font-bold transition-all",
                              location.pathname === link.path 
                                ? "bg-primary text-white shadow-md shadow-primary/20" 
                                : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Account Card */}
              <div className="mt-8 border-t dark:border-slate-900 pt-4">
                {user ? (
                  <div className="space-y-3">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 rounded-2xl border dark:border-slate-900 p-3 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 transition-all"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-base border">
                        {user.name ? user.name.charAt(0).toUpperCase() : <User className="h-5 w-5" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-black text-slate-900 dark:text-white truncate">{user.name}</p>
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                      </div>
                    </Link>
                    <button
                      className="w-full rounded-xl border border-red-200 dark:border-red-950 text-red-600 hover:bg-red-600 hover:text-white dark:text-red-400 dark:hover:bg-red-900 py-2.5 font-bold text-sm flex items-center justify-center gap-1.5 transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        logout();
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link 
                      to="/login" 
                      onClick={() => setIsOpen(false)}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 py-3 text-center text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-900"
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/register" 
                      onClick={() => setIsOpen(false)}
                      className="w-full rounded-xl bg-primary text-white py-3 text-center text-sm font-black shadow-md shadow-primary/20"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Search Dialog overlay */}
      <AnimatePresence>
        {searchOpen && data && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/60 p-4 backdrop-blur-sm sm:p-6 flex items-start justify-center overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Search CMPI"
          >
            <motion.div 
              initial={{ y: 24, scale: 0.98 }} 
              animate={{ y: 0, scale: 1 }} 
              exit={{ y: 24, scale: 0.98 }} 
              className="w-full max-w-2xl pt-10"
            >
              <div className="mb-3 flex justify-end">
                <Button 
                  type="button" 
                  variant="secondary" 
                  size="icon" 
                  className="rounded-full bg-white dark:bg-slate-900 shadow-md text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100" 
                  aria-label="Close search" 
                  onClick={() => setSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <SearchPanel 
                departments={data.departments} 
                faculty={data.faculty} 
                notices={data.notices} 
                events={data.events} 
                blogs={data.blogs} 
                onOpenChange={setSearchOpen} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

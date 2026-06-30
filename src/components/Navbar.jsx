import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, ArrowRight, Sun, Moon, User, LogOut, Search,
  Book, GraduationCap, Calendar, FileText,
  BookOpen, Users, Award, MessageSquare, Briefcase, FileCode
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { SearchPanel } from '@/components/features/SearchPanel';
import { Button } from '@/components/ui/button';

const navLinks = [
  { 
    name: 'Academics', 
    path: '/academics',
    dropdown: [
      { name: 'Computer Technology', desc: 'Software engineering, networks, AI', path: '/academics/computer-science-technology', icon: Book },
      { name: 'Civil Technology', desc: 'Structural engineering and design', path: '/academics/civil-technology', icon: Briefcase },
      { name: 'Electrical Technology', desc: 'Power grids, electronics, systems', path: '/academics/electrical-technology', icon: Award },
      { name: 'Curriculum & Routine', desc: 'Class & exam schedules, BTEB files', path: '/syllabus', icon: Calendar },
      { name: 'Board Results', desc: 'Official semester transcripts & GPA', path: '/results', icon: FileText }
    ]
  },
  { 
    name: 'About CMPI', 
    path: '/about',
    dropdown: [
      { name: 'About the Institute', desc: 'History, vision, and mission statement', path: '/about', icon: GraduationCap },
      { name: "Principal's Desk", desc: 'Executive leadership messages', path: '/principal', icon: User },
      { name: 'Faculty Members', desc: 'Expert engineering departments team', path: '/faculty', icon: Users },
      { name: 'Notice Board', desc: 'Latest institutional announcements', path: '/notice-board', icon: FileText }
    ]
  },
  { 
    name: 'Student Corner', 
    path: '/student-corner',
    dropdown: [
      { name: 'Resources Hub', desc: 'Lecture sheets and academic materials', path: '/student-corner', icon: BookOpen },
      { name: 'Library Service', desc: 'Online catalogue and reserve records', path: '/library', icon: Book },
      { name: 'Student Clubs', desc: 'Cultural, robotics, and sports activities', path: '/clubs', icon: Users },
      { name: 'Placement Cell', desc: 'Career fairs, resumes, and internship job links', path: '/placement', icon: Briefcase },
      { name: 'Scholarships', desc: 'Academic aid and merit allocations', path: '/scholarship', icon: Award },
      { name: 'Share Feedback', desc: 'Upvote suggestions, institutional complaints', path: '/feedback', icon: MessageSquare }
    ]
  },
  { name: 'Admission', path: '/admission' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedLink, setExpandedLink] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const location = useLocation();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleLogout = async () => {
    await logout();
    window.location.href = '/';
  };

  return (
    <>
      {/* Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:z-[9999]"
      >
        Skip to content
      </a>

      {/* Floating Glassmorphic Container Wrapper */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4 pb-0 pointer-events-none">
        <nav className={cn(
          "w-full max-w-7xl mx-auto rounded-3xl transition-all duration-505 pointer-events-auto border",
          scrolled 
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-xl py-3 border-slate-200/80 dark:border-slate-900" 
            : "bg-slate-950/20 backdrop-blur-sm py-4 border-white/10"
        )}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-secondary font-black text-xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform shrink-0">
                C
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-black leading-tight text-lg tracking-tighter transition-colors",
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                )}>CMPI</span>
                <span className={cn(
                  "text-[9px] font-bold uppercase tracking-wider hidden xs:block transition-colors",
                  scrolled ? "text-slate-500 dark:text-slate-400" : "text-white/80"
                )}>Cox's Bazar Polytechnic</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative px-0.5"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "px-4 py-2.5 text-xs font-bold transition-all rounded-2xl flex items-center gap-1.5",
                      location.pathname === link.path 
                        ? "bg-primary text-white shadow-md shadow-primary/20" 
                        : scrolled 
                          ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white" 
                          : "text-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className={cn("w-3.5 h-3.5 opacity-55 transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />}
                  </Link>

                  {/* Mega dropdown menu animated with Framer Motion */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-900 rounded-3xl p-4 shadow-2xl z-50"
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {link.dropdown.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all group/item"
                              >
                                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 group-hover/item:bg-primary group-hover/item:text-white transition-colors shrink-0">
                                  <SubIcon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0 text-left">
                                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover/item:text-primary transition-colors flex items-center gap-1.5">
                                    {sub.name}
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all shrink-0" />
                                  </p>
                                  <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{sub.desc}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Buttons / Actions panel */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Search button */}
              <button 
                onClick={() => setSearchOpen(true)}
                className={cn(
                  "w-10 h-10 rounded-2xl flex items-center justify-center transition-all border",
                  scrolled 
                    ? "bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-850 text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary" 
                    : "bg-white/10 border-white/10 text-white hover:bg-white/20"
                )}
                title="Search"
                aria-label="Open search panel"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Theme toggle */}
              <button 
                onClick={toggleTheme}
                className={cn(
                  "w-10 h-10 rounded-2xl flex items-center justify-center transition-all border",
                  scrolled 
                    ? "bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-850 text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800" 
                    : "bg-white/10 border-white/10 text-white hover:bg-white/20"
                )}
                title="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* User Dashboard / Auth actions */}
              <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1.5 shrink-0" />
              
              <a 
                href="https://mail.cmpi.edu.bd" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "px-4 py-2.5 text-xs font-bold transition-all rounded-2xl border",
                  scrolled 
                    ? "border-slate-200 hover:border-primary hover:text-primary dark:border-slate-850 text-slate-600 dark:text-slate-300" 
                    : "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                )}
              >
                Webmail
              </a>

              {user ? (
                <div className="flex items-center gap-2.5">
                  <Link 
                    to="/dashboard"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 hover:ring-2 hover:ring-primary/20 text-primary border border-primary/20 font-black text-sm transition-all"
                    title="Dashboard"
                  >
                    {user.name ? user.name.charAt(0).toUpperCase() : <User className="h-4.5 w-4.5" />}
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="h-10 rounded-2xl gap-1.5 border-destructive/20 text-destructive hover:bg-destructive hover:text-white dark:border-red-950/40 dark:text-red-400 dark:hover:bg-red-950/60"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link 
                    to="/login"
                    className={cn(
                      "px-4 py-2.5 text-xs font-bold transition-all rounded-2xl",
                      scrolled ? "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900" : "text-white hover:bg-white/10"
                    )}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/register"
                    className="px-5 py-2.5 text-xs font-black bg-secondary text-primary rounded-2xl shadow-lg shadow-secondary/20 hover:shadow-secondary/35 hover:-translate-y-0.5 transition-all shrink-0"
                  >
                    Join Portal
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Hamburger toggle button */}
            <button 
              className={cn(
                "lg:hidden w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm border transition-all duration-300",
                scrolled 
                  ? "bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-805" 
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              )}
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

          </div>
        </nav>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md lg:hidden"
            />
            
            {/* Drawer sheet container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-[110] w-full max-w-[310px] bg-white dark:bg-slate-950 border-l border-slate-200/50 dark:border-slate-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto lg:hidden text-left"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between mb-8 border-b dark:border-slate-900 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-secondary font-black text-base shadow-sm shrink-0">
                      C
                    </div>
                    <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white">CMPI Mobile Portal</span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Quick actions for Mobile */}
                <div className="flex items-center justify-between gap-3 mb-6 p-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border dark:border-slate-900">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">System Config</span>
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => { setIsOpen(false); setSearchOpen(true); }}
                      className="w-8 h-8 rounded-xl bg-white dark:bg-slate-950 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-350 hover:text-primary border dark:border-slate-900"
                      title="Search"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={toggleTheme}
                      className="w-8 h-8 rounded-xl bg-white dark:bg-slate-950 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-355 border dark:border-slate-900"
                      title="Toggle Theme"
                    >
                      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Nav list folders */}
                <nav className="space-y-1.5" aria-label="Mobile navigation list">
                  {navLinks.map((link) => {
                    const isExpanded = expandedLink === link.name;
                    return (
                      <div key={link.name} className="space-y-1">
                        {link.dropdown ? (
                          <div>
                            <button
                              onClick={() => setExpandedLink(isExpanded ? null : link.name)}
                              className={cn(
                                "w-full flex items-center justify-between rounded-2xl px-4 py-2.5 text-xs font-bold transition-all text-left",
                                isExpanded 
                                  ? "bg-primary/10 text-primary" 
                                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/60"
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
                                  className="overflow-hidden ml-4 border-l border-slate-100 dark:border-slate-900 pl-3 space-y-1.5 mt-1"
                                >
                                  {link.dropdown.map((sub) => {
                                    const SubIcon = sub.icon;
                                    return (
                                      <Link
                                        key={sub.name}
                                        to={sub.path}
                                        className="flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        <SubIcon className="w-3.5 h-3.5 shrink-0 opacity-60" />
                                        {sub.name}
                                      </Link>
                                    );
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={link.path}
                            className={cn(
                              "block rounded-2xl px-4 py-2.5 text-xs font-bold transition-all",
                              location.pathname === link.path 
                                ? "bg-primary text-white shadow-sm" 
                                : "text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900/60"
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

              {/* Bottom drawer user actions */}
              <div className="mt-8 border-t border-slate-100 dark:border-slate-900 pt-4 space-y-3">
                <a 
                  href="https://mail.cmpi.edu.bd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-900 text-slate-600 py-2.5 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
                >
                  <FileCode className="w-4 h-4 shrink-0" />
                  Access Student Webmail
                </a>

                {user ? (
                  <div className="space-y-2">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 rounded-2xl border dark:border-slate-900 p-3 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 transition-all"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                        {user.name ? user.name.charAt(0).toUpperCase() : <User className="h-4.5 w-4.5" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-800 dark:text-white truncate">{user.name}</p>
                        <p className="text-[10px] text-slate-550 truncate">{user.email}</p>
                      </div>
                    </Link>
                    <button
                      className="w-full rounded-2xl border border-red-200 dark:border-red-950/40 text-red-600 hover:bg-red-600 hover:text-white dark:text-red-400 dark:hover:bg-red-950/60 py-2.5 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        handleLogout();
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link 
                      to="/login"
                      className="rounded-2xl border py-2.5 font-bold text-xs text-center text-slate-650 hover:bg-slate-50 dark:border-slate-900"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/register"
                      className="rounded-2xl bg-secondary text-primary py-2.5 font-black text-xs text-center shadow-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Join Portal
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Search Panel overlay modal */}
      <SearchPanel isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;

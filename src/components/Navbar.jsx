import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, ArrowRight, Sun, Moon, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics', dropdown: [
    { name: 'All Departments', path: '/academics' },
    { name: 'Civil Technology', path: '/academics/civil' },
    { name: 'Computer Science', path: '/academics/computer-science' },
    { name: 'Electrical Technology', path: '/academics/electrical' },
    { name: 'Faculty', path: '/faculty' },
  ]},
  { name: 'Notice Board', path: '/notice-board' },
  { name: 'Student Corner', path: '/student-corner' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
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
  }, [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      scrolled 
        ? "bg-white dark:bg-slate-950 shadow-xl py-3 dark:border-b dark:border-slate-800" 
        : "bg-black/30 backdrop-blur-sm py-5"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-secondary font-black text-2xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
            C
          </div>
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
                  "px-4 py-2 text-sm font-bold transition-all rounded-xl flex items-center gap-1.5",
                  location.pathname === link.path 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : scrolled 
                      ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white" 
                      : "text-white hover:bg-white/10 drop-shadow-md"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-3 w-64 glass dark:glass-dark rounded-[2rem] py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t-0 p-2">
                  <div className="flex flex-col gap-1">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 rounded-2xl hover:bg-primary hover:text-white dark:hover:bg-primary transition-all group/item"
                      >
                        {sub.name}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 translate-x-[-10px] group-hover/item:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />
          
          <button 
            onClick={toggleTheme}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm",
              scrolled ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white" : "bg-white/10 text-white hover:bg-white/20"
            )}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-3 ml-2">
            <a 
              href="https://mail.cmpi.edu.bd" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "px-4 py-2 text-sm font-bold transition-all rounded-xl border-2",
                scrolled ? "border-slate-200 text-slate-600 hover:border-primary hover:text-primary" : "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              )}
            >
              Webmail
            </a>
            {user ? (
              <Link 
                to="/dashboard"
                className="px-5 py-2.5 flex items-center gap-2 text-sm font-black bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <User className="w-4 h-4" /> Dashboard
              </Link>
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
                  className="px-6 py-2.5 text-sm font-black bg-secondary text-primary rounded-xl shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-0.5 transition-all"
                >
                  Join Now
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-12 h-12 glass dark:glass-dark rounded-2xl flex items-center justify-center text-slate-900 dark:text-white shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-full left-0 w-full mt-4 glass dark:glass-dark rounded-[2.5rem] p-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    to={link.path}
                    className={cn(
                      "text-lg font-bold px-4 py-3 rounded-2xl flex items-center justify-between",
                      location.pathname === link.path ? "bg-primary text-white shadow-lg" : "text-slate-600 dark:text-slate-300"
                    )}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-5 h-5 opacity-50" />}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 mt-2 flex flex-col gap-1">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="text-sm font-bold text-slate-500 py-3 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4">
                 <button 
                   onClick={toggleTheme}
                   className="w-14 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl flex items-center justify-center font-bold shadow-xl"
                 >
                   {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                 </button>
                 {user ? (
                   <Link to="/dashboard" className="flex-1 py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl">
                      Dashboard <ArrowRight className="w-5 h-5" />
                   </Link>
                 ) : (
                   <Link to="/login" className="flex-1 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl">
                      Sign In <ArrowRight className="w-5 h-5" />
                   </Link>
                 )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

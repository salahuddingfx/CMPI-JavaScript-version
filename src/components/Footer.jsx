import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-slate-200 dark:border-slate-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src="/CMPI.png" alt="CMPI Logo" className="w-10 h-10 object-contain" />
            <div>
              <span className="font-black text-slate-900 dark:text-white text-lg tracking-tighter">CMPI</span>
              <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Cox's Bazar Model Polytechnic</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold">
            <Link to="/about" className="hover:text-primary dark:hover:text-white transition-colors">About</Link>
            <Link to="/academics" className="hover:text-primary dark:hover:text-white transition-colors">Academics</Link>
            <Link to="/admission" className="hover:text-primary dark:hover:text-white transition-colors">Admission</Link>
            <Link to="/notice-board" className="hover:text-primary dark:hover:text-white transition-colors">Notice Board</Link>
            <Link to="/contact" className="hover:text-primary dark:hover:text-white transition-colors">Contact</Link>
            <Link to="/developer" className="hover:text-primary dark:hover:text-white transition-colors">Developer</Link>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[11px] font-medium">
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-6 text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Kolatoli Road, Cox's Bazar</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +880 1234 567890</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> info@cmpi.edu.bd</span>
          </div>

          {/* Legal / Copyright */}
          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex flex-wrap gap-4 text-slate-450 dark:text-slate-500 font-bold">
              <Link to="/privacy-policy" className="hover:text-slate-700 dark:hover:text-slate-350">Privacy</Link>
              <Link to="/terms-and-conditions" className="hover:text-slate-700 dark:hover:text-slate-350">Terms</Link>
              <Link to="/cookie-policy" className="hover:text-slate-700 dark:hover:text-slate-350">Cookies</Link>
              <Link to="/disclaimer" className="hover:text-slate-700 dark:hover:text-slate-350">Disclaimer</Link>
            </div>
            <p className="text-slate-400 dark:text-slate-500">
              &copy; {currentYear} Cox's Bazar Model Polytechnic Institute. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

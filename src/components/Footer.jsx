import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-16 border-t border-slate-200 dark:border-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 border-b border-slate-200 dark:border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-secondary font-black text-xl shadow-md shrink-0">
              C
            </div>
            <div>
              <span className="font-black text-slate-900 dark:text-white text-lg tracking-tighter">CMPI Portal</span>
              <p className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Cox's Bazar Model Polytechnic Institute</p>
            </div>
          </div>
          <div className="flex gap-3 text-xs font-bold">
            <a 
              href="https://mail.cmpi.edu.bd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-xl hover:border-primary hover:text-primary dark:border-slate-800 transition-colors"
            >
              Staff Webmail
            </a>
          </div>
        </div>

        {/* 4-Column Minimal Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-200/50 dark:border-slate-900/50">
          {/* Column 1: Academics */}
          <div>
            <h4 className="text-[10px] font-black uppercase text-slate-900 dark:text-white tracking-widest mb-4">Academics</h4>
            <ul className="space-y-2.5 text-xs font-bold">
              <li><Link to="/academics" className="hover:text-primary dark:hover:text-white transition-colors">Departments Index</Link></li>
              <li><Link to="/academics/computer-science-technology" className="hover:text-primary dark:hover:text-white transition-colors">Computer Technology</Link></li>
              <li><Link to="/academics/civil-technology" className="hover:text-primary dark:hover:text-white transition-colors">Civil Technology</Link></li>
              <li><Link to="/academics/electrical-technology" className="hover:text-primary dark:hover:text-white transition-colors">Electrical Technology</Link></li>
              <li><Link to="/syllabus" className="hover:text-primary dark:hover:text-white transition-colors">Syllabus & Curricula</Link></li>
              <li><Link to="/results" className="hover:text-primary dark:hover:text-white transition-colors">Semester Results</Link></li>
            </ul>
          </div>

          {/* Column 2: Routines & Notice */}
          <div>
            <h4 className="text-[10px] font-black uppercase text-slate-900 dark:text-white tracking-widest mb-4">Schedules</h4>
            <ul className="space-y-2.5 text-xs font-bold">
              <li><Link to="/notice-board" className="hover:text-primary dark:hover:text-white transition-colors">Notice Board</Link></li>
              <li><Link to="/class-routine" className="hover:text-primary dark:hover:text-white transition-colors">Class Routines</Link></li>
              <li><Link to="/exam-routine" className="hover:text-primary dark:hover:text-white transition-colors">Exam Routines</Link></li>
              <li><Link to="/academic-calendar" className="hover:text-primary dark:hover:text-white transition-colors">Academic Calendar</Link></li>
              <li><Link to="/events" className="hover:text-primary dark:hover:text-white transition-colors">Campus Events</Link></li>
              <li><Link to="/tender" className="hover:text-primary dark:hover:text-white transition-colors">Official Tenders</Link></li>
            </ul>
          </div>

          {/* Column 3: Student Hub */}
          <div>
            <h4 className="text-[10px] font-black uppercase text-slate-900 dark:text-white tracking-widest mb-4">Student Hub</h4>
            <ul className="space-y-2.5 text-xs font-bold">
              <li><Link to="/student-corner" className="hover:text-primary dark:hover:text-white transition-colors">Resources Hub</Link></li>
              <li><Link to="/library" className="hover:text-primary dark:hover:text-white transition-colors">Library Catalog</Link></li>
              <li><Link to="/clubs" className="hover:text-primary dark:hover:text-white transition-colors">Student Clubs</Link></li>
              <li><Link to="/placement" className="hover:text-primary dark:hover:text-white transition-colors">Placement Cell</Link></li>
              <li><Link to="/scholarship" className="hover:text-primary dark:hover:text-white transition-colors">Scholarship Aid</Link></li>
              <li><Link to="/alumni" className="hover:text-primary dark:hover:text-white transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          {/* Column 4: Institution */}
          <div>
            <h4 className="text-[10px] font-black uppercase text-slate-900 dark:text-white tracking-widest mb-4">Institution</h4>
            <ul className="space-y-2.5 text-xs font-bold">
              <li><Link to="/about" className="hover:text-primary dark:hover:text-white transition-colors">About Institute</Link></li>
              <li><Link to="/principal" className="hover:text-primary dark:hover:text-white transition-colors">Principal's Message</Link></li>
              <li><Link to="/faculty" className="hover:text-primary dark:hover:text-white transition-colors">Faculty Directory</Link></li>
              <li><Link to="/admission" className="hover:text-primary dark:hover:text-white transition-colors">Admission Portal</Link></li>
              <li><Link to="/contact" className="hover:text-primary dark:hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/virtual-tour" className="hover:text-primary dark:hover:text-white transition-colors font-bold text-slate-800 dark:text-slate-200">360° Virtual Tour</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Contacts & Legal Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[11px] font-medium">
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-2.5 gap-x-6 text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Kolatoli Road, Cox's Bazar</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +880 1234 567890</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> info@cmpi.edu.bd</span>
          </div>

          {/* Legal Pages & Copyright */}
          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex flex-wrap gap-4 text-slate-450 dark:text-slate-500 font-bold">
              <Link to="/privacy-policy" className="hover:text-slate-700 dark:hover:text-slate-350">Privacy</Link>
              <Link to="/terms-and-conditions" className="hover:text-slate-700 dark:hover:text-slate-350">Terms</Link>
              <Link to="/cookie-policy" className="hover:text-slate-700 dark:hover:text-slate-350">Cookies</Link>
              <Link to="/refund-policy" className="hover:text-slate-700 dark:hover:text-slate-350">Refunds</Link>
              <Link to="/disclaimer" className="hover:text-slate-700 dark:hover:text-slate-350">Disclaimer</Link>
              <Link to="/accessibility" className="hover:text-slate-700 dark:hover:text-slate-350">Accessibility</Link>
              <Link to="/sitemap" className="hover:text-slate-700 dark:hover:text-slate-350">Sitemap</Link>
              <Link to="/developer" className="hover:text-slate-700 dark:hover:text-slate-350">Developer</Link>
              <Link to="/feedback" className="hover:text-slate-700 dark:hover:text-slate-350">Feedback</Link>
              <Link to="/blog" className="hover:text-slate-700 dark:hover:text-slate-350">Blog</Link>
              <Link to="/gallery" className="hover:text-slate-700 dark:hover:text-slate-350">Gallery</Link>
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

import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/CMPI.png" alt="CMPI Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-white text-xl">CMPI</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Cox's Bazar Model Polytechnic Institute is a premier technical institution committed to excellence in engineering and vocational education in the region.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/admission" className="hover:text-primary transition-colors">Admission Information</Link></li>
              <li><Link to="/virtual-tour" className="hover:text-primary transition-colors font-bold text-white">Campus Virtual Tour</Link></li>
              <li><Link to="/faculty" className="hover:text-primary transition-colors">Faculty Members</Link></li>
              <li><Link to="/notice-board" className="hover:text-primary transition-colors">Latest Notices</Link></li>
              <li><a href="https://mail.cmpi.edu.bd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-bold text-secondary">Webmail Login</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-white font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary">
              Departments
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/academics/computer-science-technology" className="hover:text-primary transition-colors">Computer Science & Technology</Link></li>
              <li><Link to="/academics/civil-technology" className="hover:text-primary transition-colors">Civil Technology</Link></li>
              <li><Link to="/academics/electrical-technology" className="hover:text-primary transition-colors">Electrical Technology</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Kolatoli Road, Cox's Bazar, Bangladesh</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@cmpi.edu.bd</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {currentYear} CMPI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-primary">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-primary">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

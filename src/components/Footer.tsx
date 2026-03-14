import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ACSLogo from '../assets/ACSLogo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <NavLink to="/" className="flex items-center space-x-2">
            <img 
              src={ACSLogo} 
              alt="Alladi Cloud" 
              className="h-10 w-auto"
              loading="lazy"
            />
          </NavLink>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Building powerful digital solutions for modern businesses. Scalable software, cloud infrastructure, and enterprise applications.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/company/alladi-cloud-solutions/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><NavLink to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">About Us</NavLink></li>
            <li><NavLink to="/services" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">Services</NavLink></li>
            <li><NavLink to="/portfolio" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">Portfolio</NavLink></li>
            <li><NavLink to="/careers" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">Careers</NavLink></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Services</h4>
          <ul className="space-y-4">
            <li><NavLink to="/services" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">Web Development</NavLink></li>
            <li><NavLink to="/services" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">Mobile App Development</NavLink></li>
            <li><NavLink to="/services" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">Cloud Solutions</NavLink></li>
            <li><NavLink to="/services" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">Enterprise Software</NavLink></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={20} className="shrink-0 text-primary-600" />
                <span>Plot No: 201, 2nd Floor, Ashoka My Home Chambers, Begumpet, Hyderabad, T.S., 500003</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone size={20} className="shrink-0 text-primary-600" />
                <span>+91 90009 30077</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail size={20} className="shrink-0 text-primary-600" />
                <span>hr@alladicloudsolutions.com</span>
              </li>
            </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Alladi Cloud Solutions Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

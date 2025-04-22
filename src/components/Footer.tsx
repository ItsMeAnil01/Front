import { Link } from 'react-router-dom';
import { Heart, Mail, Twitter, Github } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Logo />
            </Link>
            <p className="text-gray-400 mb-4">
              Advanced AI-powered heart health risk assessment and monitoring platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-medical-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-medical-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-medical-400">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/prediction" className="text-gray-400 hover:text-medical-400">Risk Assessment</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-medical-400">Heart Health Tips</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-medical-400">Research</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-medical-400">For Healthcare Providers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-medical-400">About Us</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-medical-400">Our Team</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-medical-400">Careers</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-medical-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-medical-400">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-medical-400">Terms of Service</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-medical-400">Data Protection</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-medical-400">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Health Oracle. All rights reserved.</p>
          <p className="text-gray-500 mt-2 md:mt-0">Made with ❤️ for better heart health</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

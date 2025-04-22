
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`text-gray-300 hover:text-medical-400 ${location.pathname === '/' ? 'text-medical-400' : ''}`}>Home</Link>
            <Link to="/prediction" className={`text-gray-300 hover:text-medical-400 ${location.pathname === '/prediction' ? 'text-medical-400' : ''}`}>Predict Risk</Link>
            <Link to="/chatbot" className={`text-gray-300 hover:text-medical-400 ${location.pathname === '/chatbot' ? 'text-medical-400' : ''}`}>AI Assistant</Link>
            <Link to="/about" className={`text-gray-300 hover:text-medical-400 ${location.pathname === '/about' ? 'text-medical-400' : ''}`}>About</Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu" className="text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-3">
            <Link 
              to="/" 
              className={`block px-4 py-2 hover:bg-gray-800 rounded-md ${location.pathname === '/' ? 'bg-gray-800 text-white' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/prediction" 
              className={`block px-4 py-2 hover:bg-gray-800 rounded-md ${location.pathname === '/prediction' ? 'bg-gray-800 text-white' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Predict Risk
            </Link>
            <Link 
              to="/chatbot" 
              className={`block px-4 py-2 hover:bg-gray-800 rounded-md ${location.pathname === '/chatbot' ? 'bg-gray-800 text-white' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              AI Assistant
            </Link>
            <Link 
              to="/about" 
              className={`block px-4 py-2 hover:bg-gray-800 rounded-md ${location.pathname === '/about' ? 'bg-gray-800 text-white' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

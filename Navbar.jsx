
Action: file_editor create /app/frontend/src/components/Navbar.jsx --file-text "import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleExploreClick = () => {
    window.open('https://youtube.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"flex justify-between items-center h-20\">
          {/* Logo */}
          <Link to=\"/\" className=\"flex items-center space-x-2 group\">
            <Compass className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-amber-600' : 'text-white'
            } group-hover:rotate-180 transition-transform duration-500`} />
            <span className={`text-xl font-serif font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              Wanderlust Chronicles
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className=\"hidden md:flex items-center space-x-1\">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? isScrolled
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-white bg-white/20'
                    : isScrolled
                    ? 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleExploreClick}
              className=\"ml-4 bg-amber-600 hover:bg-amber-700 text-white transition-all duration-200\"
            >
              Explore
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-900 hover:bg-slate-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className=\"h-6 w-6\" /> : <Menu className=\"h-6 w-6\" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className=\"md:hidden bg-white border-t border-slate-200\">
          <div className=\"px-4 py-4 space-y-2\">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleExploreClick}
              className=\"w-full bg-amber-600 hover:bg-amber-700 text-white\"
            >
              Explore
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
"
Observation: Create successful: /app/frontend/src/components/Navbar.jsx

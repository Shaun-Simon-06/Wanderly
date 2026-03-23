
Action: file_editor create /app/frontend/src/components/Footer.jsx --file-text "import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Instagram, Youtube, Twitter, Facebook, Mail } from 'lucide-react';
import { contactInfo } from '../mock/data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, url: contactInfo.social.instagram, label: 'Instagram' },
    { icon: Youtube, url: contactInfo.social.youtube, label: 'YouTube' },
    { icon: Twitter, url: contactInfo.social.twitter, label: 'Twitter' },
    { icon: Facebook, url: contactInfo.social.facebook, label: 'Facebook' }
  ];

  return (
    <footer className=\"bg-slate-900 text-slate-300\">
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\">
        <div className=\"grid grid-cols-1 md:grid-cols-4 gap-8 mb-8\">
          {/* Brand */}
          <div className=\"col-span-1 md:col-span-2\">
            <Link to=\"/\" className=\"flex items-center space-x-2 mb-4 group\">
              <Compass className=\"h-8 w-8 text-amber-500 group-hover:rotate-180 transition-transform duration-500\" />
              <span className=\"text-xl font-serif font-semibold text-white\">
                Wanderlust Chronicles
              </span>
            </Link>
            <p className=\"text-slate-400 mb-4 max-w-md leading-relaxed\">
              Exploring the world's hidden gems and sharing stories that inspire wanderlust. 
              Join me on a journey through diverse cultures, breathtaking landscapes, and unforgettable experiences.
            </p>
            <a 
              href={`mailto:${contactInfo.email}`}
              className=\"inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 transition-colors duration-200\"
            >
              <Mail className=\"h-4 w-4\" />
              <span>{contactInfo.email}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=\"text-white font-semibold mb-4\">Quick Links</h3>
            <ul className=\"space-y-2\">
              <li>
                <Link to=\"/\" className=\"hover:text-amber-500 transition-colors duration-200\">
                  Home
                </Link>
              </li>
              <li>
                <Link to=\"/destinations\" className=\"hover:text-amber-500 transition-colors duration-200\">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to=\"/about\" className=\"hover:text-amber-500 transition-colors duration-200\">
                  About
                </Link>
              </li>
              <li>
                <Link to=\"/contact\" className=\"hover:text-amber-500 transition-colors duration-200\">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className=\"text-white font-semibold mb-4\">Follow Along</h3>
            <div className=\"flex flex-wrap gap-3\">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  aria-label={label}
                  className=\"p-2 bg-slate-800 rounded-lg hover:bg-amber-600 transition-colors duration-200\"
                >
                  <Icon className=\"h-5 w-5\" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=\"pt-8 border-t border-slate-800\">
          <div className=\"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0\">
            <p className=\"text-sm text-slate-400\">
              © {currentYear} Wanderlust Chronicles. All rights reserved.
            </p>
            <div className=\"flex space-x-6 text-sm\">
              <button className=\"hover:text-amber-500 transition-colors duration-200\">
                Privacy Policy
              </button>
              <button className=\"hover:text-amber-500 transition-colors duration-200\">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
"
Observation: Create successful: /app/frontend/src/components/Footer.jsx

import React from 'react';
import { MapPin, Mail, Heart } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_-10px_30px_rgba(34,211,238,0.5)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4">
              SIGNOVA'26
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              The premier Electronics and Communication Engineering technical symposium. Innovate, Create, Conquer.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/signova.official?igsh=eDRzYTZ0ODkzaXE1" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-pink-500 hover:border-pink-500 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-mono font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Events', 'Timeline', 'Crew'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-mono font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  University College of Engineering,<br />
                  BIT Campus, Trichy 620024
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                <a href="mailto:signova.bitece@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  signova.bitece@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2026 SIGNOVA, UCE BIT Campus. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Crafted with <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> for ECE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Rule Book', href: '/RuleBook.pdf', isExternal: true },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Crew', href: '#crew' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/logo1.png" alt="Logo" className="h-12 w-auto filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <a href="#home" className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 animate-glow-pulse">
              SIGNOVA'26
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={onRegisterClick}
                className="btn-primary text-sm px-4 py-2"
              >
                Register Now
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) => {
                  if (!link.isExternal) {
                    setIsOpen(false);
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                onRegisterClick();
              }}
              className="w-full text-left btn-primary mt-4"
            >
              Register Now
            </button>
          </div>
        </div>
      )}

      {/* Scrolling Announcement Banner */}
      <div className="w-full bg-cyan-950/40 border-b border-gray-800 overflow-hidden py-1.5 flex items-center">
        <p className="inline-block whitespace-nowrap animate-marquee text-cyan-300 font-mono text-xs md:text-sm font-semibold tracking-wider">
          Last Date for online registration is August 25, 2026. Spot Registration is also available.
        </p>
      </div>
    </nav>
  );
};

export default Navbar;

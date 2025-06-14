import React, { useState } from 'react';
import {
  Home,
  User,
  Layers,
  BookOpen,
  GraduationCap,
  Mail
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero', icon: <Home size={16} /> },
  { name: 'About', href: '#about', icon: <User size={16} /> },
  { name: 'Skills', href: '#skills', icon: <Layers size={16} /> },
  { name: 'Projects', href: '#projects', icon: <BookOpen size={16} /> },
  { name: 'Education', href: '#education', icon: <GraduationCap size={16} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-[#819A91] hover:text-[#A7C1A8] transition-colors duration-300">
          SOUMIK BAG
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              className="group relative flex items-center gap-1 text-[#819A91] hover:text-[#A7C1A8] transition duration-300"
            >
              {icon}
              <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#A7C1A8] after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
                {name}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-[#D1D8BE]/50 transition"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#819A91]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#EEEFE0]/90 backdrop-blur-md px-6 pt-4 pb-6 shadow-lg">
          <nav className="flex flex-col space-y-4 text-[#819A91]">
            {navLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="group relative flex items-center gap-2 hover:text-[#A7C1A8] transition duration-300"
              >
                {icon}
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#A7C1A8] after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
                  {name}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

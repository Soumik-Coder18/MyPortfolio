import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/Soumik-Coder18', label: 'GitHub' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/soumik-bag-0b9900253/', label: 'LinkedIn' },
  { icon: <FaTwitter />, url: 'https://x.com/SoumikBag6?t=T1nxPg-bMj7MGNyNpEZQzQ&s=09', label: 'Twitter' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/soumik_bag_18/', label: 'Instagram' },
  { icon: <FaFacebook />, url: 'https://www.facebook.com/share/16QNnn76wM/', label: 'Facebook' },
  { icon: <FaEnvelope />, url: 'mailto:bagsoumik6@gmail.com', label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#0f0f0f] to-black text-[#A7C1A8] px-6 md:px-16 py-10 font-mono border-t border-[#819A91]/30">
      {/* Decorative background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/grid.svg')] opacity-[0.03] mix-blend-soft-light" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Social Icons */}
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-2xl text-[#EEEFE0] hover:text-[#A7C1A8] transition duration-300 hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
        {/* Footer Text */}
        <div className="text-sm text-[#819A91] text-center">
          &copy; {year} <span className="text-[#EEEFE0] font-semibold">Soumik Bag</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

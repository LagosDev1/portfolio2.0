import React from 'react';
import './footer.css';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

const socials = [
  { href: 'https://www.facebook.com', icon: AiFillFacebook, label: 'Facebook' },
  { href: 'https://twitter.com/abahanointed', icon: FaTwitterSquare, label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/abahgodspower/', icon: BsLinkedin, label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Godspower</a>
      <ul className="permalinks">
        {links.map(({ href, label }) => (
          <li key={label}><a href={href}>{label}</a></li>
        ))}
      </ul>

      <div className="footer__socials">
        {socials.map(({ href, icon: Icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>
        ))}
      </div>

      <div className="footer__copyright">
        <small>&copy; Godspower Abah's Portfolio. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

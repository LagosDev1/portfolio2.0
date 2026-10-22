import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBrain, BiMessageDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const navItems = [
  { href: '#home', icon: AiOutlineHome, label: 'Home' },
  { href: '#about', icon: AiOutlineUser, label: 'About' },
  { href: '#experience', icon: BiBrain, label: 'Experience' },
  { href: '#services', icon: RiServiceLine, label: 'Services' },
  { href: '#contact', icon: BiMessageDetail, label: 'Contact' },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      {navItems.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? 'active' : ''}
        >
          <Icon />
        </a>
      ))}
    </nav>
  );
};

export default Nav;

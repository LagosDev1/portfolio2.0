import React, { useEffect, useState } from 'react';
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

  // Highlight whichever section is crossing a line 30% down the viewport
  // (high enough that the short mobile/tablet header still counts as Home at the top)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );
    // Observe every section, including ones without a nav icon (e.g. portfolio),
    // so the highlight clears instead of sticking to the previous section
    document.querySelectorAll('header[id], section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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

import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitterSquare } from 'react-icons/fa';

const socials = [
  { href: 'https://www.linkedin.com/in/abahgodspower/', icon: BsLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/LagosDev1', icon: FaGithub, label: 'GitHub' },
  { href: 'https://twitter.com/abahanointed', icon: FaTwitterSquare, label: 'Twitter' },
];

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {socials.map(({ href, icon: Icon, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>
      ))}
    </div>
  );
};

export default HeaderSocials;

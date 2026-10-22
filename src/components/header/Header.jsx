import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import mainIMAGE from '../../assets/mainIMAGE.png';

const fadeUp = { 'data-aos': 'fade-up', 'data-aos-easing': 'ease-out-cubic' };

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container" {...fadeUp}>
        <h5>Hello, I am</h5>
        <h1>Godspower Abah</h1>
        <h5 className="fullstack">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="mainIMAGE" {...fadeUp}>
          <img src={mainIMAGE} alt="Godspower Abah" height="100%" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;

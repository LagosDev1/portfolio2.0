import React from 'react';
import './header.css';
import CTA from './CTA';
import mainIMAGE from '../../assets/mainIMAGE.png';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Godspower Abah</h1>
        <h5 className="fullstack">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="mainIMAGE">
        <img src={mainIMAGE} alt="" height= '100%'/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header;

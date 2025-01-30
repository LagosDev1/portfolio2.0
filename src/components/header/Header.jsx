import React, {useEffect}from 'react';
import './header.css';
import CTA from './CTA';
import mainIMAGE from '../../assets/mainIMAGE.png';
import HeaderSocials from './HeaderSocials';
import Aos from 'aos';


const Header = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
    <header>
      <div className="container header__container" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
        <h5>Hello, I am</h5>
        <h1>Godspower Abah </h1>
        <h5 className="fullstack">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="mainIMAGE" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
        <img src={mainIMAGE} alt="" height= '100%'/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header;

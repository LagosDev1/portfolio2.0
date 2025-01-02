import React from 'react';
import './footer.css';
import {AiFillFacebook} from 'react-icons/ai';
import {FaTwitterSquare} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo' data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">Godspower</a>
      <ul className='permalinks'>
        <li><a href="#" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">Home</a></li>
        <li><a href="#about" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">About</a></li>
        <li><a href="#experience" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">Experience</a></li>
        <li><a href="#services" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">Services</a></li>
        <li><a href="#portfolio" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">Portfolio</a></li>
        <li><a href="#contact" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">Contact</a></li>
      </ul>

      <div className="footer__socials" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
        <a href="https://www.facebook.com" target="_blank" ><AiFillFacebook /></a>
        <a href="https://twitter.com/abahanointed" target="_blank" ><FaTwitterSquare /></a>
        <a href="https://www.linkedin.com/in/abahgodspower/" target="_blank"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Godspower Abah Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;


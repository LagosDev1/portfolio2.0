import React from 'react';
import './footer.css';
import {AiFillFacebook} from 'react-icons/ai';
import {FaTwitterSquare} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Godspower</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com" target="_blank" ><AiFillFacebook /></a>
        <a href="https://twitter.com/abahanointed" target="_blank" ><FaTwitterSquare /></a>
        <a href="https://www.linkedin.com/in/abahgodspower/" target="_blank"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Godspower  Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;


import React from 'react' ;
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBrain} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageDetail} from 'react-icons/bi';
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
   <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? "active" : " "} ><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? "active" : " "}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? "active" : " "}><BiBrain/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? "active" : " "}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : " "}><BiMessageDetail /></a>
   </nav>
  )
}

export default Nav;

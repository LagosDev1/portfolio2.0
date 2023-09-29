import React, {useEffect} from 'react';
import './about.css';
import meAbout from '../../assets/meAbout.png'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {AiFillFolderOpen} from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
  <section id= 'about'> 
    <h5>Get to know</h5>
    <h2>About Me</h2> 
    <div className='container about__container' data-aos = "fade-right" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000" >
          <div className="about__me">
            <div className="about__meAbout">
              <img src={meAbout} alt="About Image" />
            </div>
          </div>
          
          <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>3+ Years Working Experience</small>
                </article>

                <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>200+ Worldwide</small>
                </article>

                <article className='about__card'>
                    <AiFillFolderOpen className='about__icon'/>
                    <h5>Projects</h5>
                    <small>80+ completed projects</small>
                </article>
              </div>

              <p>
              I am a software developer, I design, develop, 
              test, and maintain software applications using languages such as JavaScript,
               Python, and PHP, along with frameworks like ReactJs, and tools like Git, GitHub,
                and VScode. I excel in probelm solving, possess strong technical skills, curiosity, 
                creativity, good communication skills, and thrive in collaborative environments.
              </p>
              
              <a href="#contact" className='btn btn-primary'> Let's Talk</a>
          </div>

    </div>
  </section>
  )
}

export default About

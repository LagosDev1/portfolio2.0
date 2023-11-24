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
    <div className='container about__container' >
          <div className="about__me" data-aos = "fade-right" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000">
            <div className="about__meAbout">
              <img src={meAbout} alt="About Image" />
            </div>
          </div>
          
          <div className="about__content">
              <div className="about__cards">
                <article className='about__card' data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000">
                    <FaAward className='about__icon'data-aos = "zoom-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000"/>
                    <h5>Experience</h5>
                    <small>3+ Years Working Experience</small>
                </article>

                <article className='about__card'data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000">
                    <FiUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>200+ Worldwide</small>
                </article>

                <article className='about__card'data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000">
                    <AiFillFolderOpen className='about__icon'/>
                    <h5>Projects</h5>
                    <small>80+ completed projects</small>
                </article>
              </div>

              <p data-aos = "fade-right" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000">
              I am a software developer, I design, develop, 
              test, and maintain software applications using languages such as JavaScript,
               Python, and PHP, along with frameworks like ReactJs, and tools like Git, GitHub,
                and VScode. I excel in probelm solving, possess strong technical skills, curiosity, 
                creativity, good communication skills, and thrive in collaborative environments.
              </p>
              
              <a href="#contact" className='btn btn-primary' data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000"> Let's Talk</a>
          </div>

    </div>
  </section>
  )
}

export default About

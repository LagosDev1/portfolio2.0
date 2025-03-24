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
    <h5 data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">Get to know</h5>
    <h2 data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">About Me</h2>  
    <div className='container about__container' >
          <div className="about__me" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
            <div className="about__meAbout">
              <img src={meAbout} alt="About Image" />
            </div>
          </div>
          
          <div className="about__content">
              <div className="about__cards">
                <article className='about__card' data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000">
                    <FaAward className='about__icon'/>  
                    <h5>Experience</h5>
                    <small>4+ Years Working Experience</small>
                </article>

                <article className='about__card'data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000">
                    <FiUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>200+ Worldwide</small>
                </article>

                <article className='about__card'data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000">
                    <AiFillFolderOpen className='about__icon'/>
                    <h5>Projects</h5>
                    <small>30+ completed projects</small>
                </article>
              </div>

              <p data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
              I am a Software Engineer with expertise in designing, developing, testing, and maintaining software applications. 
              I specialize in programming languages such as JavaScript and Python, leveraging frameworks like React.js and development tools including Git, GitHub, and VS Code. 
              With strong problem-solving abilities, technical proficiency, and a keen sense of curiosity and creativity, I excel in collaborative environments and communicate effectively to drive innovation and efficiency.
              </p>
              
              <a href="#contact" className='btn btn-primary' data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "10000"> Let's Talk</a>
          </div>

    </div>
  </section>
  )
}

export default About;
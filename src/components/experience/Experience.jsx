import React, {useEffect} from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css';



const Experience = () => {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <section id='experience'>
     <h5 data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">What skill I have</h5>
     <h2 data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">My Experience</h2>

     <div className="container experience__container">
        <div className="experience__frontend" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Next JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
           
          </div>
        </div>
        <div className="experience__backend" data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
     </div>
    </section>
  )
}

export default Experience;


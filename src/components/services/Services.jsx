import React, {useEffect} from 'react';
import './services.css';
import {AiOutlineCheck} from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
    <section id='services'>
       <h5 data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">What i offer</h5>
      <h2 data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">Services</h2>
      <div className="container services__container">
        <article className='service'
        data-aos = "fade-right" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
          <div className="service__head">
            <h3>FRONTEND DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Implement user interface designs.</p>
             </li>  
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Develop responsive, mobile-friendly designs.</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Add interactivity with prefered language.</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Test and debug frontend code.</p>
             </li> 

             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Collaborate with cross-functional teams.</p>
             </li> 
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'
        data-aos = "fade-up"
        data-aos-easing = "ease-out-cubic"
        data-aos-duration = "2000">
          <div className="service__head">
            <h3>API DEVELOPMENT</h3> 
          </div>
          <ul className="service__list">
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>API Design</p>
             </li>  
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>API Documentation</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Collaboration with frontend developers.</p>
             </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'
        data-aos = "fade-left"
        data-aos-easing = "ease-out-cubic"
        data-aos-duration = "3000">
          <div className="service__head">
            <h3>Technical Writing</h3>
          </div>
          <ul className="service__list">
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Create comprehensive documentation for software applications or systems.</p>
             </li>  
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>I also craft user guides and manuals for effective product usage.</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>I also Document APIs with detailed information and examples.</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Write informative technical articles on software development and industry trends.</p>
             </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services;


import {React, useEffect} from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Portfolio = () => {
  useEffect(()=>{ 
    Aos.init();
  }, [])
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "30000">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Health-Care Website</h3>
            <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>GitHub</a>
            <a href="https://anchorteeshealth.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>GitHub</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
       <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>This is a portfolio item title.</h3>
            <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>GitHub</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>GitHub</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>GitHub</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'data-aos = "fade-up" data-aos-easing = "ease-out-cubic" data-aos-duration = "50000">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
            <h3>My Todo App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/LagosDev1/todo-app" className='btn' target='_blank'>GitHub</a>
            <a href="https://mytodolistappp.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          
        </article>

      </div>
    </section>
  )
}

export default Portfolio;

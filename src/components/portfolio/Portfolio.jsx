import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const fadeUp = { 'data-aos': 'fade-up', 'data-aos-easing': 'ease-out-cubic' };

// TODO: fill in the empty github/demo links and placeholder titles
const projects = [
  { image: IMG1, title: 'Health-Care Website', github: '', demo: 'https://anchorteeshealth.com/' },
  { image: IMG2, title: 'This is a portfolio item title', github: '', demo: '' },
  { image: IMG3, title: 'This is a portfolio item title.', github: '', demo: '' },
  { image: IMG4, title: 'This is a portfolio item title', github: '', demo: '' },
  { image: IMG5, title: 'This is a portfolio item title', github: '', demo: '' },
  { image: IMG6, title: 'My Todo App', github: 'https://github.com/LagosDev1/todo-app', demo: 'https://mytodolistappp.netlify.app/' },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 {...fadeUp}>My Recent Work</h5>
      <h2 {...fadeUp}>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map(({ image, title, github, demo }, index) => (
          <article key={index} className="portfolio__item spotlight" {...fadeUp}>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

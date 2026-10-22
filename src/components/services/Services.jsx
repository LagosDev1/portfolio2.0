import React from 'react';
import './services.css';
import { AiOutlineCheck } from 'react-icons/ai';

const services = [
  {
    title: 'FRONTEND DEVELOPMENT',
    aos: { 'data-aos': 'fade-right', 'data-aos-easing': 'ease-out-cubic' },
    items: [
      'Implement user interface designs.',
      'Develop responsive, mobile-friendly designs.',
      'Add interactivity with preferred language.',
      'Test and debug frontend code.',
      'Collaborate with cross-functional teams.',
    ],
  },
  {
    title: 'API DEVELOPMENT',
    aos: { 'data-aos': 'fade-up', 'data-aos-easing': 'ease-out-cubic', 'data-aos-duration': '2000' },
    items: [
      'API Design',
      'API Documentation',
      'Collaboration with frontend developers.',
    ],
  },
  {
    title: 'Technical Writing',
    aos: { 'data-aos': 'fade-left', 'data-aos-easing': 'ease-out-cubic', 'data-aos-duration': '3000' },
    items: [
      'Create comprehensive documentation for software applications or systems.',
      'I also craft user guides and manuals for effective product usage.',
      'I also Document APIs with detailed information and examples.',
      'Write informative technical articles on software development and industry trends.',
    ],
  },
];

const fadeUp = { 'data-aos': 'fade-up', 'data-aos-easing': 'ease-out-cubic' };

const Services = () => {
  return (
    <section id="services">
      <h5 {...fadeUp}>What I offer</h5>
      <h2 {...fadeUp}>Services</h2>
      <div className="container services__container">
        {services.map(({ title, aos, items }) => (
          <article key={title} className="service" {...aos}>
            <div className="service__head">
              <h3>{title}</h3>
            </div>
            <ul className="service__list">
              {items.map((item) => (
                <li key={item}>
                  <AiOutlineCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

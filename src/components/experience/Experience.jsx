import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const fadeUp = { 'data-aos': 'fade-up', 'data-aos-easing': 'ease-out-cubic' };

const skillGroups = [
  {
    className: 'experience__frontend',
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 'Experienced' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Experienced' },
      { name: 'ReactJs', level: 'Experienced' },
      { name: 'Tailwind CSS', level: 'Experienced' },
      { name: 'Next JS', level: 'Experienced' },
    ],
  },
  {
    className: 'experience__backend',
    title: 'API Development',
    skills: [
      { name: 'Python', level: 'Experienced' },
      { name: 'Postman', level: 'Intermediate' },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5 {...fadeUp}>What skill I have</h5>
      <h2 {...fadeUp}>My Experience</h2>

      <div className="container experience__container">
        {skillGroups.map(({ className, title, skills }) => (
          <div key={title} className={`${className} spotlight`} {...fadeUp}>
            <h3>{title}</h3>
            <div className="experience__content">
              {skills.map(({ name, level }) => (
                <article key={name} className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{name}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import './about.css';
import meAbout from '../../assets/meAbout.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiFillFolderOpen } from 'react-icons/ai';
import CountUp from './CountUp';

const fadeUp = { 'data-aos': 'fade-up', 'data-aos-easing': 'ease-out-cubic' };

const stats = [
  { icon: FaAward, title: 'Experience', value: 4, text: 'Years Working Experience' },
  { icon: FiUsers, title: 'Clients', value: 200, text: 'Worldwide' },
  { icon: AiFillFolderOpen, title: 'Projects', value: 30, text: 'Completed Projects' },
];

const About = () => {
  return (
    <section id="about">
      <h5 {...fadeUp}>Get to know</h5>
      <h2 {...fadeUp}>About Me</h2>
      <div className="container about__container">
        <div className="about__me" {...fadeUp}>
          <div className="about__meAbout">
            <img src={meAbout} alt="Godspower Abah" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {stats.map(({ icon: Icon, title, value, text }) => (
              <article key={title} className="about__card spotlight" {...fadeUp}>
                <Icon className="about__icon" />
                <h5>{title}</h5>
                <strong className="about__stat"><CountUp end={value} suffix="+" /></strong>
                <small>{text}</small>
              </article>
            ))}
          </div>

          <p {...fadeUp}>
            I am a Software Engineer with expertise in designing, developing, testing, and maintaining software applications.
            I specialize in programming languages such as JavaScript and Python, leveraging frameworks like React.js and development tools including Git, GitHub, and VS Code.
            With strong problem-solving abilities, technical proficiency, and a keen sense of curiosity and creativity,
            I excel in collaborative environments and communicate effectively to drive innovation and efficiency.
          </p>

          <a href="#contact" className="btn btn-primary" {...fadeUp}>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;

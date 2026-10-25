import React from 'react';
import './tech.css';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiPostman,
} from 'react-icons/si';
import TechCube from './TechCube';

const fadeUp = { 'data-aos': 'fade-up', 'data-aos-easing': 'ease-out-cubic' };

// Brand colours, brightened where needed to stand out on the dark background
const stack = [
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#2D9CDB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Python', icon: SiPython, color: '#FFD43B' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
];

const Tech = () => {
  return (
    <section id="tech">
      <h5 {...fadeUp}>Drag the cubes to spin them</h5>
      <h2 {...fadeUp}>Tech Stack</h2>
      <div className="container tech__container" {...fadeUp}>
        {stack.map((tech) => (
          <TechCube key={tech.name} {...tech} />
        ))}
      </div>
    </section>
  );
};

export default Tech;

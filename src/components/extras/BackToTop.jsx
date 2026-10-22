import React, { useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import './extras.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`back-to-top ${visible ? 'visible' : ''}`}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <BsArrowUp />
    </a>
  );
};

export default BackToTop;

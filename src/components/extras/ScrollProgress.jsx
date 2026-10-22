import React, { useEffect, useRef } from 'react';
import './extras.css';

const ScrollProgress = () => {
  const barRef = useRef();

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      barRef.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
};

export default ScrollProgress;

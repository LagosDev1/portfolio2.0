import React, { useEffect, useRef } from 'react';
import './extras.css';

const EASING = 0.12; // how quickly the glow catches up with the cursor (0–1)

// A large, soft glow behind the page that trails the mouse cursor.
const CursorGlow = () => {
  const glowRef = useRef();

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    const glow = glowRef.current;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let frame = null;

    const render = () => {
      current.x += (target.x - current.x) * EASING;
      current.y += (target.y - current.y) * EASING;
      glow.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;

      const settled = Math.abs(target.x - current.x) < 0.5 && Math.abs(target.y - current.y) < 0.5;
      frame = settled ? null : requestAnimationFrame(render);
    };

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      glow.classList.add('visible');
      if (frame === null) frame = requestAnimationFrame(render);
    };
    const onLeave = () => glow.classList.remove('visible');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
};

export default CursorGlow;

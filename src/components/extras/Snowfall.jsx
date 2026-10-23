import React, { useEffect, useRef } from 'react';
import './extras.css';

const DENSITY = 1 / 12000; // flakes per square pixel of viewport
const MAX_FLAKES = 140;

const createFlake = (width, height, startAbove = false) => ({
  x: Math.random() * width,
  y: startAbove ? -10 : Math.random() * height,
  radius: 0.5 + Math.random() * 1.5,
  speed: 0.3 + Math.random() * 0.7,
  sway: Math.random() * Math.PI * 2,
  swaySpeed: 0.005 + Math.random() * 0.015,
  opacity: 0.25 + Math.random() * 0.5,
});

// Tiny snow particles drifting down behind the page content.
const Snowfall = () => {
  const canvasRef = useRef();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let flakes = [];
    let frame = null;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(MAX_FLAKES, Math.round(width * height * DENSITY));
      flakes = flakes.slice(0, count);
      while (flakes.length < count) flakes.push(createFlake(width, height));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const flake of flakes) {
        flake.sway += flake.swaySpeed;
        flake.y += flake.speed;
        flake.x += Math.sin(flake.sway) * 0.3;

        if (flake.y > height + 10) Object.assign(flake, createFlake(width, height, true));
        if (flake.x > width + 10) flake.x = -10;
        if (flake.x < -10) flake.x = width + 10;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 238, 255, ${flake.opacity})`;
        ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    const start = () => {
      if (frame === null) frame = requestAnimationFrame(draw);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = null;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    start();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      stop();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="snowfall" aria-hidden="true" />;
};

export default Snowfall;

import React, { useEffect, useRef } from 'react';

const DRAG_SPEED = 0.5; // degrees per pixel dragged
const FRICTION = 0.95; // how quickly a flick slows down
const IDLE_SPIN = 0.25; // degrees per frame when left alone
const KEY_STEP = 15; // degrees per arrow-key press

// A CSS 3D cube that spins on its own and can be dragged (or arrow-keyed) to rotate.
const TechCube = ({ name, icon: Icon, color }) => {
  const cubeRef = useRef();

  useEffect(() => {
    const cube = cubeRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const state = {
      x: -20 + Math.random() * 10,
      y: Math.random() * 360,
      velX: 0,
      velY: 0,
      dragging: false,
      lastX: 0,
      lastY: 0,
      visible: false,
    };
    let frame = null;

    const render = () => {
      cube.style.transform = `rotateX(${state.x}deg) rotateY(${state.y}deg)`;
    };

    const tick = () => {
      frame = null;
      if (!state.dragging) {
        state.x += state.velX;
        state.y += state.velY;
        state.velX *= FRICTION;
        state.velY *= FRICTION;
        if (!reducedMotion && Math.abs(state.velY) < IDLE_SPIN) state.y += IDLE_SPIN;
      }
      render();
      const moving = !reducedMotion || state.dragging || Math.hypot(state.velX, state.velY) > 0.01;
      if (state.visible && moving) frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame === null) frame = requestAnimationFrame(tick);
    };

    const onPointerDown = (e) => {
      state.dragging = true;
      state.lastX = e.clientX;
      state.lastY = e.clientY;
      state.velX = state.velY = 0;
      cube.setPointerCapture(e.pointerId);
      cube.classList.add('dragging');
      start();
    };

    const onPointerMove = (e) => {
      if (!state.dragging) return;
      const dx = e.clientX - state.lastX;
      const dy = e.clientY - state.lastY;
      state.lastX = e.clientX;
      state.lastY = e.clientY;
      state.velY = dx * DRAG_SPEED;
      state.velX = -dy * DRAG_SPEED;
      state.y += state.velY;
      state.x += state.velX;
    };

    const onPointerUp = () => {
      state.dragging = false;
      cube.classList.remove('dragging');
      if (reducedMotion) state.velX = state.velY = 0;
      start();
    };

    const onKeyDown = (e) => {
      const turns = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [1, 0], ArrowDown: [-1, 0] };
      if (!turns[e.key]) return;
      e.preventDefault();
      const [dx, dy] = turns[e.key];
      state.x += dx * KEY_STEP;
      state.y += dy * KEY_STEP;
      render();
    };

    // Only animate while the cube is on screen
    const observer = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting;
      if (state.visible) start();
    });

    render();
    observer.observe(cube);
    cube.addEventListener('pointerdown', onPointerDown);
    cube.addEventListener('pointermove', onPointerMove);
    cube.addEventListener('pointerup', onPointerUp);
    cube.addEventListener('pointercancel', onPointerUp);
    cube.addEventListener('keydown', onKeyDown);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      cube.removeEventListener('pointerdown', onPointerDown);
      cube.removeEventListener('pointermove', onPointerMove);
      cube.removeEventListener('pointerup', onPointerUp);
      cube.removeEventListener('pointercancel', onPointerUp);
      cube.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const logoFace = <Icon className="tech__icon" />;
  const nameFace = <span className="tech__name">{name}</span>;

  return (
    <div className="tech__item">
      <div className="tech__scene">
        <div
          ref={cubeRef}
          className="tech__cube"
          style={{ '--brand': color }}
          role="img"
          aria-label={`${name} cube. Drag or use arrow keys to rotate.`}
          tabIndex={0}
        >
          <div className="tech__face tech__face--front">{logoFace}</div>
          <div className="tech__face tech__face--back">{logoFace}</div>
          <div className="tech__face tech__face--right">{nameFace}</div>
          <div className="tech__face tech__face--left">{nameFace}</div>
          <div className="tech__face tech__face--top">{logoFace}</div>
          <div className="tech__face tech__face--bottom">{logoFace}</div>
        </div>
      </div>
      <p className="tech__label">{name}</p>
    </div>
  );
};

export default TechCube;

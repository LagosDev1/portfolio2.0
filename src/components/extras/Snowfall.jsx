import React, { useEffect, useRef, useState } from 'react';
import './extras.css';

const DENSITY = 1 / 12000; // flakes per square pixel of viewport
const MAX_FLAKES = 140;

// Shake-to-grow
const MAX_SCALE = 10; // flake size multiplier at full shake (0.5–2px flakes become 5–20px snowballs)
const SHAKE_THRESHOLD = 15; // m/s² of sudden change that counts as a shake
const SHAKE_GAIN = 0.0015; // how fast flakes grow while shaking (~1s of shaking to reach full size)
const SETTLE_MS = 300; // no jolts for this long = the phone has stopped
const SHRINK_RATE = 0.96; // per frame, once settled
const HINT_DISMISSED_KEY = 'shakeHintDismissed';

const createFlake = (width, height, startAbove = false) => ({
  x: Math.random() * width,
  y: startAbove ? -10 : Math.random() * height,
  radius: 0.5 + Math.random() * 1.5,
  speed: 0.3 + Math.random() * 0.7,
  sway: Math.random() * Math.PI * 2,
  swaySpeed: 0.005 + Math.random() * 0.015,
  opacity: 0.25 + Math.random() * 0.5,
});

const readDismissed = () => {
  try {
    return localStorage.getItem(HINT_DISMISSED_KEY) === '1';
  } catch {
    return false;
  }
};

const saveDismissed = () => {
  try {
    localStorage.setItem(HINT_DISMISSED_KEY, '1');
  } catch {
    // storage unavailable (private mode etc.): the hint just shows again next visit
  }
};

// 'unsupported' (desktop / no sensor), 'needs-permission' (iOS), or 'active'
const initialMotionState = () => {
  const touchDevice = window.matchMedia('(pointer: coarse)').matches;
  if (!touchDevice || typeof window.DeviceMotionEvent === 'undefined') return 'unsupported';
  return typeof window.DeviceMotionEvent.requestPermission === 'function' ? 'needs-permission' : 'active';
};

// Tiny snow particles drifting down behind the page content; shaking a phone makes them grow.
const Snowfall = () => {
  const canvasRef = useRef();
  const energyRef = useRef(0); // 0 = normal size, 1 = full shake size
  const lastShakeRef = useRef(0);
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [motionState, setMotionState] = useState(initialMotionState);
  const [hint, setHint] = useState(null); // null | 'invite' | 'shake-now'

  // Draw loop
  useEffect(() => {
    if (reducedMotion) return;

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
      if (performance.now() - lastShakeRef.current > SETTLE_MS) {
        energyRef.current *= SHRINK_RATE;
        if (energyRef.current < 0.001) energyRef.current = 0;
      }
      const scale = 1 + energyRef.current * (MAX_SCALE - 1);

      ctx.clearRect(0, 0, width, height);
      for (const flake of flakes) {
        flake.sway += flake.swaySpeed;
        flake.y += flake.speed;
        flake.x += Math.sin(flake.sway) * 0.3;

        if (flake.y > height + 10) Object.assign(flake, createFlake(width, height, true));
        if (flake.x > width + 10) flake.x = -10;
        if (flake.x < -10) flake.x = width + 10;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius * scale, 0, Math.PI * 2);
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
  }, [reducedMotion]);

  // Shake detection: a big jump in acceleration between readings pumps up the energy
  useEffect(() => {
    if (reducedMotion || motionState !== 'active') return;

    let previous = null;
    const onMotion = (e) => {
      const a = e.accelerationIncludingGravity;
      if (!a || a.x === null) return;
      if (previous) {
        const jolt = Math.abs(a.x - previous.x) + Math.abs(a.y - previous.y) + Math.abs(a.z - previous.z);
        if (jolt > SHAKE_THRESHOLD) {
          energyRef.current = Math.min(1, energyRef.current + (jolt - SHAKE_THRESHOLD) * SHAKE_GAIN);
          lastShakeRef.current = performance.now();
        }
      }
      previous = { x: a.x, y: a.y, z: a.z };
    };

    window.addEventListener('devicemotion', onMotion);
    return () => window.removeEventListener('devicemotion', onMotion);
  }, [reducedMotion, motionState]);

  // Invite phone users to shake (with an Enable button where iOS needs permission)
  useEffect(() => {
    if (reducedMotion || motionState === 'unsupported' || readDismissed()) return;
    const showTimer = setTimeout(() => setHint('invite'), 2500);
    // Android needs no permission, so the hint can just fade away on its own
    const hideTimer = motionState === 'active' ? setTimeout(() => setHint(null), 8000) : null;
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [reducedMotion, motionState]);

  const dismissHint = () => {
    saveDismissed();
    setHint(null);
  };

  const enableShake = async () => {
    try {
      const result = await window.DeviceMotionEvent.requestPermission();
      if (result === 'granted') {
        setMotionState('active');
        setHint('shake-now');
        setTimeout(() => setHint(null), 3000);
        saveDismissed();
        return;
      }
    } catch {
      // permission request failed or was blocked
    }
    dismissHint();
  };

  if (reducedMotion) return null;

  return (
    <>
      <canvas ref={canvasRef} className="snowfall" aria-hidden="true" />
      {hint && (
        <div className="shake-hint" role="status">
          {hint === 'shake-now' ? (
            <span>Now shake your phone! ❄️</span>
          ) : (
            <>
              <span>❄️ Try shaking your phone</span>
              {motionState === 'needs-permission' && (
                <button type="button" className="shake-hint__enable" onClick={enableShake}>
                  Enable
                </button>
              )}
              <button type="button" className="shake-hint__close" onClick={dismissHint} aria-label="Dismiss">
                ×
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Snowfall;

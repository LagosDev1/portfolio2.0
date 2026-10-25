import { useEffect } from 'react';

const MAGNETIC = '.btn, .header__socials a, .footer__socials a';
const TILT = '.portfolio__item, .about__card';
const MAGNET_STRENGTH = 0.3; // fraction of the cursor's offset the element follows
const MAX_TILT = 8; // degrees at the card's edge
const EASING = 0.15;

// Magnetic pull on buttons/icons and a 3D tilt on cards, eased toward the cursor.
// Uses the standalone `translate`/`rotate` properties so it never fights AOS's `transform`.
const usePointerEffects = () => {
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    const states = new Map(); // element -> { kind, x, y, targetX, targetY }
    let frame = null;

    const stateFor = (el, kind) => {
      if (!states.has(el)) states.set(el, { kind, x: 0, y: 0, targetX: 0, targetY: 0 });
      return states.get(el);
    };

    const apply = (el, s) => {
      if (s.kind === 'magnet') {
        el.style.translate = `${s.x}px ${s.y}px`;
      } else {
        // Rotate about the (x, y) axis: equivalent to rotateX(x) + rotateY(y) for small angles
        el.style.rotate = `${s.x} ${s.y} 0 ${Math.hypot(s.x, s.y)}deg`;
      }
    };

    const reset = (el, s) => {
      if (s.kind === 'magnet') el.style.translate = '';
      else el.style.rotate = '';
    };

    const tick = () => {
      frame = null;
      states.forEach((s, el) => {
        s.x += (s.targetX - s.x) * EASING;
        s.y += (s.targetY - s.y) * EASING;
        const resting = s.targetX === 0 && s.targetY === 0 && Math.abs(s.x) < 0.05 && Math.abs(s.y) < 0.05;
        if (resting) {
          reset(el, s);
          states.delete(el);
        } else {
          apply(el, s);
        }
      });
      if (states.size) frame = requestAnimationFrame(tick);
    };

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const magnet = e.target.closest?.(MAGNETIC);
      const card = e.target.closest?.(TILT);

      // Anything the cursor has left eases back to rest
      states.forEach((s, el) => {
        if (el !== magnet && el !== card) {
          s.targetX = 0;
          s.targetY = 0;
        }
      });

      if (magnet) {
        const s = stateFor(magnet, 'magnet');
        const rect = magnet.getBoundingClientRect();
        // Subtract the current pull so the measured centre doesn't chase itself
        const centerX = rect.left - s.x + rect.width / 2;
        const centerY = rect.top - s.y + rect.height / 2;
        s.targetX = (e.clientX - centerX) * MAGNET_STRENGTH;
        s.targetY = (e.clientY - centerY) * MAGNET_STRENGTH;
      }

      if (card) {
        const s = stateFor(card, 'tilt');
        const rect = card.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        // The side under the cursor dips away from the viewer
        s.targetX = -dy * MAX_TILT;
        s.targetY = dx * MAX_TILT;
      }

      schedule();
    };

    const onLeave = () => {
      states.forEach((s) => {
        s.targetX = 0;
        s.targetY = 0;
      });
      schedule();
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);
};

export default usePointerEffects;

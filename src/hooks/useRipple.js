import { useEffect } from 'react';

// Spawns a ripple from the click point on any `.btn`.
const useRipple = () => {
  useEffect(() => {
    const onPointerDown = (e) => {
      const button = e.target.closest?.('.btn');
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      ripple.addEventListener('animationend', () => ripple.remove());
      button.appendChild(ripple);
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);
};

export default useRipple;

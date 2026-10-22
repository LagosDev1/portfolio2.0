import { useEffect } from 'react';

// Feeds the pointer position into `.spotlight` cards so their glow follows the cursor.
const useSpotlight = () => {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.('.spotlight');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
};

export default useSpotlight;

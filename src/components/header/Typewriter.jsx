import React, { useEffect, useState } from 'react';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Types each word out, holds it, deletes it, then moves to the next one.
const Typewriter = ({ words, typeMs = 90, deleteMs = 45, holdMs = 1600 }) => {
  const [reduced] = useState(prefersReducedMotion);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduced ? words[0] : '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const word = words[index];
    const finishedTyping = !deleting && text === word;
    const finishedDeleting = deleting && text === '';
    const delay = finishedTyping ? holdMs : deleting ? deleteMs : typeMs;

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (finishedDeleting) {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [reduced, words, index, text, deleting, typeMs, deleteMs, holdMs]);

  return (
    <>
      <span className="visually-hidden">{words.join(', ')}</span>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter__caret" aria-hidden="true" />
    </>
  );
};

export default Typewriter;

import { useState, useEffect } from 'react';

const useTypingEffect = (words, typingSpeed = 150, deletingSpeed = 75, pauseDuration = 2000) => {
  const [idx, setIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorTimeout = setTimeout(() => {
      setCursorVisible((vis) => !vis);
    }, 500); // Blink the cursor every 500ms

    if (isPausing) return () => clearTimeout(cursorTimeout);

    if (subIdx === words[idx].length + 1 && !reverse) {
      setIsPausing(true);
      setTimeout(() => {
        setIsPausing(false);
        setReverse(true);
      }, pauseDuration);
      return () => clearTimeout(cursorTimeout);
    }

    if (subIdx === 0 && reverse) {
      setReverse(false);
      setIdx((prevIdx) => (prevIdx + 1) % words.length);
      return () => clearTimeout(cursorTimeout);
    }

    const timeout = setTimeout(() => {
      setSubIdx((prevSubIdx) => prevSubIdx + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);

    return () => {
      clearTimeout(timeout);
      clearTimeout(cursorTimeout);
    };
  }, [subIdx, idx, reverse, isPausing, words, typingSpeed, deletingSpeed, pauseDuration, cursorVisible]);

  // Return both the text and the cursor visibility status
  return { text: `${words[idx].substring(0, subIdx)}`, cursorVisible };
};

export default useTypingEffect;
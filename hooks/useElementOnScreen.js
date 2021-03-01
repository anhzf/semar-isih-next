import { useState, useCallback, useEffect, useRef } from 'react';

export default function useElementOnScreen(options = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const onChange = useCallback(
    ([entry]) => setIsVisible(entry.isIntersecting),
    [],
  );

  useEffect(
    () => {
      const observer = new IntersectionObserver(onChange, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => ref.current && observer.unobserve(ref.current);
    },
    [ref, options],
  );

  return [ref, isVisible];
}

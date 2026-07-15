import { RefObject, useEffect, useState } from 'react';

export function useScrollFrame(
  containerRef: RefObject<HTMLElement | null>,
  totalFrames: number
) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const p = Math.min(scrolled / scrollable, 1);
      setProgress(p);
      setCurrentFrame(Math.floor(p * (totalFrames - 1)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [containerRef, totalFrames]);

  return { currentFrame, progress };
}

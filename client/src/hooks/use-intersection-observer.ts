import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<Element>;
  options?: IntersectionObserverInit;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  ref,
  options = {
    threshold: 0.2,
    root: null,
    rootMargin: '0px',
  },
  freezeOnceVisible = true,
}: UseIntersectionObserverProps): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        
        if (freezeOnceVisible && entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!freezeOnceVisible) {
          setIsVisible(false);
        }
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, freezeOnceVisible]);

  return isVisible;
}

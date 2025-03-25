
import { ReactNode, useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const AnimatedText = ({ 
  children, 
  className = '', 
  once = true,
  threshold = 0.1 
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: isMobile ? 0.05 : threshold,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [once, threshold, isMobile]);

  return (
    <div ref={textRef} className={`reveal-animation ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedText;

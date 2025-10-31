'use client';
import { useEffect, useRef, useState } from 'react';

interface FadeInTextProps{
    children: React.ReactNode;
    durationMs?: number; // tempo in millisecondi
    delayMs?: number; // ritardo partenza in millisecondi
    className?:string
}


export default function FadeInText(
    {
        children, 
        durationMs = 600,
        delayMs = 0.25,
        className
    }: FadeInTextProps) {

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect(); // anima solo una volta
      }
    }, { threshold: 0.2 }); // attiva quando il 20% è visibile

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      style={{
        transition: `all ${durationMs}ms ease-out ${delayMs}ms`,
      }}
      className={`${className} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </span>
  );
}

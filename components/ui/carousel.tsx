"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/HERO.png",
  "/HERO.png",
  "/HERO.png",
];

export default function arousel() {
  const [index, setIndex] = useState(0);

  // Cambio immagine ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Hero ${i}`}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const slides = [
  { src: "/kaion.jpg", alt: "Slide 1" },
  { src: "/tinju.jpg", alt: "Slide 2" },
  { src: "/motogp.jpg", alt: "Slide 3" },
  { src: "/supermusic.jpg", alt: "Slide 4" },
];

const totalSlides = slides.length;

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    if (currentSlide === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide]);

  const moveSlide = (direction: number) => {
    if (currentSlide === totalSlides && direction === 1) return;
    let next = currentSlide + direction;
    if (next < 0) next = 0;
    if (next > totalSlides) next = totalSlides;
    setCurrentSlide(next);
  };

  const jumpToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-full mx-auto pt-2 pb-0">
      <button
        onClick={() => moveSlide(-1)}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
        ❮
      </button>

      <div className="overflow-hidden w-full rounded-xl shadow-lg">
        <div
          ref={containerRef}
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${
              (100 / (totalSlides + 1)) * currentSlide
            }%)`,
            width: `${(totalSlides + 1) * 100}%`,
          }}>
          {[...slides, slides[0]].map((slide, i) => (
            <div
              key={i}
              className="h-[400px] flex-shrink-0"
              style={{
                width: `${100 / (totalSlides + 1)}%`,
              }}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => moveSlide(1)}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
        ❯
      </button>

      <div className="flex justify-center mt-2 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpToSlide(i)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === i || (currentSlide === totalSlides && i === 0)
                ? "bg-black"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

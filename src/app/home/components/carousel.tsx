"use client";

import React, { useState } from "react";

import { Carousel } from "antd";
interface CarouselComponentProps {
  children: React.ReactNode[];
  fade?: boolean;
  autoplaySpeed: number;
  animationSpeed?: number;
  id?: string;
}

const CarouselComponent = ({
  children,
  fade,
  autoplaySpeed,
  animationSpeed,
  id,
}: CarouselComponentProps) => {
  const [slideIsPlaying, setSlideIsPlaying] = useState(true);

  function handleTouchStart() {
    setSlideIsPlaying(false);

    setTimeout(() => {
      setSlideIsPlaying(true);
    }, autoplaySpeed);
  }

  return (
    <div onTouchStart={handleTouchStart}>
      <Carousel
        id={id}
        autoplay={slideIsPlaying ? { dotDuration: true } : false}
        autoplaySpeed={autoplaySpeed}
        arrows
        adaptiveHeight
        fade={fade || false}
        speed={animationSpeed || 500}
      >
        {children.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

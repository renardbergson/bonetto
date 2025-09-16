"use client";

import React from "react";
import { Carousel } from "antd";

interface CarouselComponentProps {
  children: React.ReactNode[];
  fade?: boolean;
  autoplaySpeed?: number;
  animationSpeed?: number;
}

const CarouselComponent = ({
  children,
  fade,
  autoplaySpeed,
  animationSpeed,
}: CarouselComponentProps) => (
  <Carousel
    autoplay={{ dotDuration: true }}
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
);

export default CarouselComponent;

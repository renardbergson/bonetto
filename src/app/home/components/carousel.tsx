"use client";

import * as React from "react";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CarouselComponent = ({
  children,
  delay,
}: {
  children: React.ReactNode[];
  delay: number;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Carousel
      className="w-full max-w-sm"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          stopOnInteraction: false,
          delay: delay,
        }),
      ]}
      setApi={(api) => {
        if (api) {
          // get current slide index and set it to the state
          api.on("select", () => {
            setCurrentSlide(api.selectedScrollSnap());
          });
        }
      }}
    >
      <CarouselContent>
        {children.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Indicators */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {children.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full border-[1px] p-[5px] ${index === currentSlide ? "bg-[var(--primary-color)]" : "border-[#bebebe] bg-transparent"}`}
          ></div>
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselComponent;

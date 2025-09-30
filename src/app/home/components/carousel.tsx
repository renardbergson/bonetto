"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CarouselComponentProps {
  children?: React.ReactNode[];
  delay?: number;
  props?: React.HTMLAttributes<HTMLDivElement>;
  className?: string;
}

const CarouselComponent = ({
  children,
  delay,
  className,
  ...props
}: CarouselComponentProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (api) {
      function handleSlideChange(index: number) {
        setCurrentSlide(index);
      }

      api.on("select", () => handleSlideChange(api.selectedScrollSnap()));
    }
  }, [api]);

  function handleGoToSlide(index: number) {
    api?.scrollTo(index);
    setCurrentSlide(index);
  }

  return (
    <Carousel
      className={className}
      {...props}
      plugins={[
        Autoplay({
          delay: delay || 3000,
          stopOnInteraction: true,
        }),
      ]}
      setApi={setApi}
    >
      <CarouselContent className="-ml-6">
        {children?.map((item, index) => (
          <CarouselItem className="pl-6 sm:basis-2/3" key={index}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-5 flex justify-center gap-2">
        {children?.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 cursor-pointer rounded-full border-1 border-[var(--primary-color)] ${currentSlide === index && "bg-[var(--primary-color)]"}`}
            onClick={() => handleGoToSlide(index)}
          ></div>
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselComponent;

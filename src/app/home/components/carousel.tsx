"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
      <CarouselContent>
        {children?.map((item, index) => (
          <CarouselItem
            className="pl-8 md:basis-2/3 lg:basis-2/4 xl:basis-2/5"
            key={index}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden cursor-pointer lg:block" />
      <CarouselNext className="hidden cursor-pointer lg:block" />

      <div className="mt-5 flex justify-center gap-2">
        {children?.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 cursor-pointer rounded-full border border-(--primary-color) ${currentSlide === index && "bg-(--primary-color)"}`}
            onClick={() => handleGoToSlide(index)}
          ></div>
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselComponent;

"use client";

import { useState, useEffect } from "react";
// import Link from "next/link";
import Image from "next/image";

import ImageSkeleton from "./skeleton";

interface CarouselCapItemProps {
  href: string;
  title: string;
  src: string;
  alt: string;
}

const CarouselCapItemComponent = ({
  /* href, */ title,
  src,
  alt,
}: CarouselCapItemProps) => {
  const [imageIsLoading, setImageIsLoading] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;

    img.onload = () => {
      setTimeout(() => {
        setImageIsLoading(false);
      }, 0);
    };

    img.onerror = () => {
      console.error("Erro ao tentar carregar imagem:", img);
      setImageIsLoading(false);
    };
  }, [src]);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        {/* <Link href={href} className="absolute top-[12%] block h-[80%] w-[78%]" /> */}

        <h4 className="mb-2 cursor-default text-center font-bold text-(--primary-color) 2xl:text-lg">
          {title}
        </h4>

        <ImageSkeleton className={`${imageIsLoading ? "flex!" : "hidden!"}`} />

        <div className="group w-full overflow-hidden rounded-lg">
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            loading="lazy"
            sizes="100vw"
            className={`${imageIsLoading ? "hidden!" : ""} h-auto w-full rounded-lg transition-transform duration-300 group-hover:scale-110`}
          />
        </div>
      </div>
    </>
  );
};

export default CarouselCapItemComponent;

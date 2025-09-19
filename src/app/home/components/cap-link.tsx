"use client";

import { useState } from "react";
// import Link from "next/link";
import Image from "next/image";

import Skeleton from "./skeleton";

interface CapLinkComponentProps {
  href: string;
  title: string;
  src: string;
  alt: string;
}

const CapLinkComponent = ({
  /* href, */ title,
  src,
  alt,
}: CapLinkComponentProps) => {
  const [imageIsLoading, setImageIsLoading] = useState(true);

  function handleImageLoad() {
    setImageIsLoading(false);
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* <Link href={href} className="absolute top-[12%] block h-[80%] w-[78%]" /> */}

      <h4 className="mb-2 text-center font-bold text-[var(--primary-color)]">
        {title}
      </h4>

      {imageIsLoading && <Skeleton />}

      <Image
        priority
        onLoad={handleImageLoad}
        onError={handleImageLoad}
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={`h-auto w-full rounded-lg ${imageIsLoading ? "hidden" : "block"}`}
      />
    </div>
  );
};

export default CapLinkComponent;

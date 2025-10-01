import React from "react";
import Image from "next/image";

interface CapModelStickerProps {
  title: string;
  src: string;
  textWidth?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

const CapModelStickerComponent = ({
  title,
  src,
  textWidth,
  ...props
}: CapModelStickerProps) => {
  return (
    <div {...props}>
      <Image
        src={src}
        alt={title}
        width={150}
        height={150}
        className="mx-auto rounded-lg object-cover shadow-md shadow-black/30"
      />
      <div className={`relative mx-auto mt-4 ${textWidth || "w-32"}`}>
        <div className="absolute z-0 h-full w-full bg-[var(--primary-color)] blur-md" />
        <h4 className="relative mt-2 py-1 text-center font-extrabold text-[var(--secondary-color)]">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default CapModelStickerComponent;

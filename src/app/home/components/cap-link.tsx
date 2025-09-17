import Link from "next/link";
import Image from "next/image";

interface CapLinkComponentProps {
  href: string;
  title: string;
  src: string;
  alt: string;
}

const CapLinkComponent = ({ href, title, src, alt }: CapLinkComponentProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Link href={href} className="absolute top-[12%] block h-[80%] w-[78%]" />

      <h4 className="mb-2 text-center font-bold text-[var(--primary-color)]">
        {title}
      </h4>

      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full rounded-lg"
      />
    </div>
  );
};

export default CapLinkComponent;

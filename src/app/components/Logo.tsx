import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src={"/B.png"}
        alt="Logo"
        width={10}
        height={10}
        className="mt-[-5px] mr-1 w-8 2xl:w-11"
      />

      <h1 className="text-start text-2xl font-bold 2xl:text-3xl">Bonetto</h1>
    </div>
  );
};

export default Logo;

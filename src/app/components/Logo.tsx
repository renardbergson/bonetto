import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <Image
        src={"/B.png"}
        alt="Logo"
        width={35}
        height={30}
        className="mt-[-5px] mr-1"
      />

      <h1 className="text-start text-2xl font-bold">Bonetto</h1>
    </div>
  );
};

export default Logo;

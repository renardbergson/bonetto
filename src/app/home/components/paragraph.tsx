import React from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: Props) => {
  return (
    <div className="my-10 cursor-default text-justify text-base leading-7 font-extralight sm:mb-14 sm:text-center sm:text-lg md:mb-15 2xl:text-xl">
      {children}
    </div>
  );
};

export default Paragraph;

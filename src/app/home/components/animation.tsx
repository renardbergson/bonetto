"use client";

import Lottie from "lottie-react";

import animationData from "../../../../public/animations/homepage-animation.json";

const HomePageAnimationComponent = () => {
  return (
    <Lottie
      id="homepage-animation"
      animationData={animationData}
      autoplay
      alt="Homepage bonetto animation"
      loop={false}
      playsInline
      className="mb-0 h-[20rem] w-full shadow-white/50 sm:h-[18rem] sm:shadow-md/25 sm:shadow-2xl lg:h-[19rem] xl:h-[22rem]"
    />
  );
};

export default HomePageAnimationComponent;

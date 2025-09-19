"use client";

import Lottie from "lottie-react";

import animationData from "../../../../public/animations/homepage-animation.json";

const HomePageAnimationComponent = () => {
  return (
    <Lottie
      animationData={animationData}
      autoplay
      alt="Homepage bonetto animation"
      loop={false}
      muted
      playsInline
      className="mb-0 h-[22rem] w-full bg-[var(--primary-color)] shadow-2xl"
    />
  );
};

export default HomePageAnimationComponent;

"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const FloatingScrollButton = () => {
  const [isWelcomeSectionVisible, setIsWelcomeSectionVisible] = useState(false);
  const [hasSeenWhyChooseSection, setHasSeenWhyChooseSection] = useState(false);

  useEffect(() => {
    const welcomeSection = document.getElementById("welcome-section");
    const whyChooseSection = document.getElementById("why-choose-section");
    
    if(!welcomeSection || !whyChooseSection) {
      return;
    }

    const welcomeSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsWelcomeSectionVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.0 }
    );

    const whyChooseSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            setHasSeenWhyChooseSection(true);
          }
        })
      },
      { threshold: 0.0 }
    )

    welcomeSectionObserver.observe(welcomeSection);
    whyChooseSectionObserver.observe(whyChooseSection);

    return () => {
      welcomeSectionObserver.disconnect();
      whyChooseSectionObserver.disconnect();
    };
  }, []);

  const isVisible = hasSeenWhyChooseSection && !isWelcomeSectionVisible;
  
  return (
    <a href="#header" className={`fixed flex justify-center items-center size-14 md:size-16 lg:size-18 2xl:size-20 top-[91%] md:top-[90%] right-6 z-55 cursor-pointer hover:opacity-100 transition-all duration-300 ${isVisible ? "opacity-55" : "opacity-0 pointer-events-none"}`}>
      <span className="absolute size-14 md:size-16 lg:size-18 2xl:size-20 rounded-full bg-(--quaternary-color)" />
      <span className="absolute h-full w-full animate-ping rounded-full bg-(--quaternary-color) opacity-75" />
      <ChevronUp className="text-(--primary-color) m-0 z-10" size={60} strokeWidth={1}/>
    </a>
  );
};

export default FloatingScrollButton;
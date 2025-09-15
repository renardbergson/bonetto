"use client";

import React, { useEffect } from "react";
import AOS from "aos";

export const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: window.innerWidth > 768 ? 50 : 100,
    });
  }, []);

  return <>{children}</>;
};

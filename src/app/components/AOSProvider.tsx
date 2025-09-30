"use client";

import React, { useEffect } from "react";
import AOS from "aos";

export const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
    });
  }, []);

  return <>{children}</>;
};

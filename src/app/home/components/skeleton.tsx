"use client";

import React from "react";

import { Skeleton } from "antd";

const ImageSkeletonComponent = () => {
  return (
    <>
      <Skeleton.Image active className="!h-[377px] !w-full !rounded-lg" />
    </>
  );
};

export default ImageSkeletonComponent;

"use client";

import React from "react";

import { Skeleton } from "antd";

interface ImageSkeletonComponentProps {
  className?: string;
}

const ImageSkeletonComponent = ({ className }: ImageSkeletonComponentProps) => {
  return (
    <>
      <Skeleton.Image
        active
        className={`!h-[377px] !w-full !rounded-lg ${className}`}
      />
    </>
  );
};

export default ImageSkeletonComponent;

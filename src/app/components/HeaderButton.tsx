"use client";

import { Button } from "@/components/ui/button";

interface Props {
  variant: "outline" | "ghost";
  asChild: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  sectionToScroll?: string;
  callback?: () => void;
}

const HeaderButton = ({
  asChild,
  children,
  className,
  onClick,
  sectionToScroll,
  callback,
}: Props) => {
  function handleScrollToSection(e: React.MouseEvent) {
    if (sectionToScroll) {
      e.preventDefault();
      const modelsSection = document.getElementById(sectionToScroll || "");
      modelsSection?.scrollIntoView({ behavior: "smooth" });
    }

    if (callback) {
      callback();
    }
  }

  return (
    <Button
      className={`text-1xl w-[70%] rounded-none py-4 hover:cursor-pointer hover:border-b-2 ${className}`}
      asChild={asChild ?? false}
      type="button"
      onClick={onClick ?? handleScrollToSection}
    >
      {children}
    </Button>
  );
};

export default HeaderButton;

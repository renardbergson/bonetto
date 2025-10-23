"use client";

import { Button } from "@/components/ui/button";

interface Props {
  style: "primary" | "secondary";
  variant: "outline" | "ghost";
  asChild: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: (e: React.MouseEvent) => void;
  sectionToScroll?: string;
  callback?: () => void;
  disabled?: boolean;
}

const MainButton = ({
  style,
  variant,
  asChild,
  children,
  className,
  type,
  onClick,
  sectionToScroll,
  callback,
  disabled,
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
      className={`text-1xl w-auto rounded-lg py-4 hover:cursor-pointer ${
        style === "primary"
          ? "bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
          : "bg-[var(--secondary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)]"
      } ${className}`}
      variant={variant}
      asChild={asChild ?? false}
      type={type}
      onClick={onClick ?? handleScrollToSection}
      disabled={disabled ?? false}
    >
      {children}
    </Button>
  );
};

export default MainButton;

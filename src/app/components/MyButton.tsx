"use client";

import { Button } from "@/components/ui/button";

interface MyButtonProps {
  variant: "primary" | "secondary";
  asChild: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const MyButton = ({
  variant,
  asChild,
  children,
  className,
  type,
  onClick,
}: MyButtonProps) => {
  return (
    <Button
      className={`text-1xl w-[60%] rounded-full py-4 hover:cursor-pointer ${variant === "primary" ? "bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]" : "bg-[var(--secondary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)]"} ${className}`}
      variant="outline"
      asChild={asChild ? true : false}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export { MyButton };

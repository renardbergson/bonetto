"use client";

import { Button } from "@/components/ui/button";

interface Props {
  variant: "outline" | "ghost";
  asChild: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const HeaderButton = ({ asChild, children, className, onClick }: Props) => {
  return (
    <Button
      className={`text-1xl w-[70%] rounded-none py-4 ${className}`}
      asChild={asChild ?? false}
      type="button"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default HeaderButton;

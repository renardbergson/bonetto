import { Button } from "@/components/ui/button";

interface ButtonComponentProps {
  variant: "outline" | "default";
  asChild: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const ButtonComponent = ({
  variant,
  asChild,
  children,
  className,
  type,
}: ButtonComponentProps) => {
  return (
    <Button
      className={`text-1xl w-[60%] rounded-full py-5 hover:cursor-pointer hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] ${className}`}
      variant={variant}
      asChild={asChild ? true : false}
      type={type}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

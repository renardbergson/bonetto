interface SectionComponentProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionComponent = ({
  variant,
  children,
  id,
  className,
}: SectionComponentProps) => {
  return (
    <section
      id={id}
      className={`space-y-16 ${className} ${
        variant === "primary"
          ? "bg-(--primary-color) text-(--secondary-color)"
          : "bg-(--secondary-color) text-(--primary-color)"
      }`}
    >
      {children}
    </section>
  );
};

export default SectionComponent;

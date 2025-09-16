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
      className={`space-y-16 px-6 ${className} ${
        variant === "primary"
          ? "bg-[var(--primary-color)] text-[var(--secondary-color)]"
          : "bg-[var(--secondary-color)] text-[var(--primary-color)]"
      }`}
    >
      {children}
    </section>
  );
};

export default SectionComponent;

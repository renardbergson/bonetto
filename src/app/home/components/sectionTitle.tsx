interface titleComponentProps {
  title: string;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

const TitleComponent = ({
  title,
  className,
  ...props
}: titleComponentProps) => {
  return (
    <div
      className={`bg-[var(--primary-color)] p-4 text-[var(--secondary-color)] shadow-md shadow-black/30 ${className}`}
      {...props}
    >
      <h3 className="text-center text-2xl">{title}</h3>
    </div>
  );
};

export default TitleComponent;

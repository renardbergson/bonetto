type Props = {
  children: React.ReactNode;
};

const FieldLayout = ({ children }: Props) => {
  return <div className="w-full space-y-3">{children}</div>;
};

export default FieldLayout;

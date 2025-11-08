const Title = ({ title }: { title: string }) => {
  return (
    <h4 className="text-foreground cursor-default text-center text-lg font-semibold">
      {title}
    </h4>
  );
};

export default Title;

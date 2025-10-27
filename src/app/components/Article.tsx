type Props = {
  children: React.ReactNode;
};

const Article = ({ children }: Props) => {
  return (
    <article className="m-6 sm:mx-12 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40">
      {children}
    </article>
  );
};

export default Article;

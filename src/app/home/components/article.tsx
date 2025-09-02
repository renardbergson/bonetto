interface ArticleProps {
  title: string;
  description?: string;
  content: React.ReactNode;
}

const Article = ({ title, description, content }: ArticleProps) => {
  return (
    <>
      <div className="bg-[var(--primary-color)] p-4 text-[var(--secondary-color)]">
        <h3 className="text-center text-2xl">{title}</h3>
      </div>

      <p className="mx-auto mt-6 w-[80%] text-center font-extralight">
        {description}
      </p>

      {content}
    </>
  );
};

export default Article;

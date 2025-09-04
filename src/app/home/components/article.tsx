interface ArticleProps {
  title: string;
  description?: string;
  content: React.ReactNode;
  animation?: string;
  duration?: number;
  delay?: number;
  anchorPlacement?: string;
}

const Article = ({
  title,
  description,
  content,
  animation,
  duration,
  delay,
  anchorPlacement,
}: ArticleProps) => {
  return (
    <>
      <div className="bg-[var(--primary-color)] p-4 text-[var(--secondary-color)]">
        <h3 className="text-center text-2xl">{title}</h3>
      </div>

      <div
        data-aos={`${animation ?? "fade-up"}`}
        data-aos-duration={`${duration ?? 400}`}
        data-aos-delay={`${delay ?? 100}`}
        data-aos-anchor-placement={`${anchorPlacement ?? "top-bottom"}`}
      >
        <p className="mx-auto mt-6 w-[80%] text-center font-extralight">
          {description}
        </p>

        {content}
      </div>
    </>
  );
};

export default Article;

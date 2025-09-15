interface ArticleProps {
  title: string;
  description?: string;
  content?: React.ReactNode;
  anchorPlacement?: string;
}

const Article = ({
  title,
  description,
  content,
  anchorPlacement,
}: ArticleProps) => {
  return (
    <div className="space-y-6">
      {/* Título - Primeira animação */}
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-anchor-placement={anchorPlacement || "top-bottom"}
        className="bg-[var(--primary-color)] p-4 text-[var(--secondary-color)]"
      >
        <h3 className="text-center text-2xl">{title}</h3>
      </div>

      {/* Descrição - Segunda animação */}
      {description && (
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-anchor-placement={anchorPlacement || "top-bottom"}
          className="mx-auto w-[80%] text-center font-extralight"
        >
          {description}
        </p>
      )}

      {/* Conteúdo - Terceira animação */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="500"
        data-aos-anchor-placement={anchorPlacement || "top-bottom"}
      >
        {content}
      </div>
    </div>
  );
};

export default Article;

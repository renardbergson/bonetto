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
        data-aos-duration="300"
        data-aos-anchor-placement={anchorPlacement || "top-bottom"}
        data-aos-easing="ease-out"
        className="bg-[var(--primary-color)] p-4 text-[var(--secondary-color)]"
      >
        <h3 className="text-center text-2xl">{title}</h3>
      </div>

      {/* Descrição - Segunda animação */}
      {description && (
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="300"
          data-aos-anchor-placement={anchorPlacement || "top-bottom"}
          data-aos-easing="ease-out"
          className="mx-auto w-[80%] text-center text-base font-extralight"
        >
          {description}
        </p>
      )}

      {/* Conteúdo - Terceira animação */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="300"
        data-aos-anchor-placement={anchorPlacement || "top-bottom"}
        data-aos-easing="ease-out"
      >
        {content}
      </div>
    </div>
  );
};

export default Article;

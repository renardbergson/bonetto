import Section from "@/app/components/Section";
import TitleComponent from "../components/sectionTitle";
import CapDetailSticker from "../components/cap-detail-sticker";

type Props = {
  aosParams?: Record<string, string>;
};

const FrontApplicationsSection = ({ aosParams }: Props) => {
  return (
    <Section variant="secondary">
      <article className="m-6">
        <TitleComponent {...aosParams} title="Escolha Sua Aplicação Frontal" />

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-16">
          {/* Bordado */}
          <CapDetailSticker
            {...aosParams}
            title="Bordado"
            src="/front-logos/bordado.webp"
            textWidth="w-22"
          />

          {/* Silk 3D */}
          <CapDetailSticker
            {...aosParams}
            data-aos-delay="500"
            title="Silk 3D"
            src="/front-logos/silk-3d.webp"
            textWidth="w-20"
          />

          {/* Aplique à laser */}
          <CapDetailSticker
            {...aosParams}
            title="Aplique à laser"
            src="/front-logos/aplique-a-laser.webp"
            textWidth="w-34"
          />

          {/* Aplique 3D */}
          <CapDetailSticker
            {...aosParams}
            data-aos-delay="500"
            title="Aplique 3D"
            src="/front-logos/aplique-3d.webp"
            textWidth="w-28"
          />

          {/* Sublimado */}
          <CapDetailSticker
            {...aosParams}
            title="Sublimado"
            src="/front-logos/sublimado.webp"
            textWidth="w-28"
          />

          {/* Sublimação */}
          <CapDetailSticker
            {...aosParams}
            data-aos-delay="500"
            title="Sublimação"
            src="/front-logos/sublimacao.webp"
            textWidth="w-28"
          />

          {/* DTF */}
          <CapDetailSticker
            {...aosParams}
            title="DTF"
            src="/front-logos/dtf.webp"
            textWidth="w-14"
          />
        </div>
      </article>
    </Section>
  );
};

export default FrontApplicationsSection;

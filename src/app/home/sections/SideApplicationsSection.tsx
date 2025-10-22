import Section from "@/app/components/Section";
import TitleComponent from "../components/sectionTitle";
import CapDetailSticker from "../components/cap-detail-sticker";

type Props = {
  aosParams?: Record<string, string>;
};

const SideApplicationsSection = ({ aosParams }: Props) => {
  return (
    <Section variant="secondary">
      <article className="m-6">
        <TitleComponent {...aosParams} title="Escolha Sua Aplicação Lateral" />

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-16">
          {/* Aplique à laser */}
          <CapDetailSticker
            {...aosParams}
            title="Aplique à laser"
            src="/side-logos/aplique-a-laser.webp"
            textWidth="w-36"
          />

          {/* Bordado ou silk */}
          <CapDetailSticker
            {...aosParams}
            data-aos-delay="500"
            title="Bordado ou silk"
            src="/side-logos/bordado-ou-silk.webp"
            textWidth="w-36"
          />

          {/* Aba sanduíche */}
          <CapDetailSticker
            {...aosParams}
            title="Aba Sanduíche"
            src="/side-logos/aba-sanduiche.webp"
            textWidth="w-36"
          />

          {/* Aplique 3D */}
          <CapDetailSticker
            {...aosParams}
            data-aos-delay="500"
            title="Aplique 3D"
            src="/side-logos/aplique-3d.webp"
            textWidth="w-30"
          />
        </div>
      </article>
    </Section>
  );
};

export default SideApplicationsSection;

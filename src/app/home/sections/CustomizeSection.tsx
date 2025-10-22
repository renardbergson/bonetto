import Section from "@/app/components/Section";
import TitleComponent from "../components/sectionTitle";
import CapDetailSticker from "../components/cap-detail-sticker";

type Props = {
  aosParams?: Record<string, string>;
};

const CustomizeSection = ({ aosParams }: Props) => {
  return (
    <Section variant="secondary">
      <article className="m-6">
        <TitleComponent {...aosParams} title="Customize e Surpreenda" />

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-16">
          {/* Ilhós */}
          <CapDetailSticker
            {...aosParams}
            title="Ilhós"
            src="/customization/ilhos.webp"
            textWidth="w-16"
          />

          {/* Viés personalizado */}
          <CapDetailSticker
            {...aosParams}
            data-aos-delay="500"
            title="Viés Personalizado"
            src="/customization/vies-personalizado.webp"
            textWidth="w-40"
          />

          {/* Forro estampado */}
          <CapDetailSticker
            {...aosParams}
            title="Forro Estampado"
            src="/customization/forro-estampado.webp"
            textWidth="w-40"
          />

          {/* Fivela metálica */}
          <CapDetailSticker
            {...aosParams}
            data-aos-delay="500"
            title="Fivela Metálica"
            src="/customization/fivela-metalica.webp"
          />

          {/* Furos à laser */}
          <CapDetailSticker
            {...aosParams}
            title="Furos à Laser"
            src="/customization/furos-a-laser.webp"
          />

          {/* Costura na aba */}
          <CapDetailSticker
            {...aosParams}
            data-aos-delay="500"
            title="Costura na Aba"
            src="/customization/costura-na-aba.webp"
            textWidth="w-34"
          />

          {/* Etiqueta */}
          <CapDetailSticker
            {...aosParams}
            title="Etiqueta"
            src="/customization/etiqueta.webp"
            textWidth="w-22"
          />
        </div>
      </article>
    </Section>
  );
};

export default CustomizeSection;

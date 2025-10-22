import Section from "@/app/components/Section";
import TitleComponent from "../components/sectionTitle";
import Carousel from "../components/carousel";
import CarouselCapItem from "../components/carousel-cap-item";

type Props = {
  aosParams?: Record<string, string>;
};

const ExclusiveModelsSection = ({ aosParams }: Props) => {
  return (
    <Section variant="secondary" id="exclusive-models">
      <article className="m-6">
        <TitleComponent title="Modelos Exclusivos" {...aosParams} />

        <div className="mt-8 h-fit space-y-10 text-justify text-base leading-7 font-extralight sm:text-lg">
          <p {...aosParams}>
            Aqui você encontra os melhores modelos de bonés para dar um toque
            único e exclusivo à sua marca. Não é só um boné, é um veículo de
            conexão, lembrança e crescimento.
          </p>
        </div>

        <Carousel className="mt-8" {...aosParams}>
          <CarouselCapItem
            href={"#"}
            title="Promocional"
            src={"/caps/promotional/01.avif"}
            alt="Boné modelo promocional"
          />

          <CarouselCapItem
            href={"#"}
            title="Trucker"
            src={"/caps/trucker/01.jpg"}
            alt="Boné modelo trucker"
          />

          <CarouselCapItem
            href={"#"}
            title="Americano"
            src={"/caps/american/01.webp"}
            alt="Boné modelo americano"
          />

          <CarouselCapItem
            href={"#"}
            title="6 gomos"
            src={"/caps/six-buds/01.webp"}
            alt="Boné modelo 6 gomos"
          />

          <CarouselCapItem
            href={"#"}
            title="Dad Hat"
            src={"/caps/dad-hat/01.webp"}
            alt="Boné modelo dad hat"
          />

          <CarouselCapItem
            href={"#"}
            title="Bucket"
            src={"/caps/bucket/01.webp"}
            alt="Boné modelo bucket"
          />

          <CarouselCapItem
            href={"#"}
            title="Viseira Esportiva"
            src={"/caps/headband/01.webp"}
            alt="Boné modelo viseira esportiva"
          />
        </Carousel>
      </article>
    </Section>
  );
};

export default ExclusiveModelsSection;

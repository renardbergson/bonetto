import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import Paragraph from "../components/paragraph";
import TitleComponent from "../components/sectionTitle";
import Carousel from "../components/carousel";
import CarouselCapItem from "../components/carousel-cap-item";

type Props = {
  aosParams?: Record<string, string>;
};

const ExclusiveModelsSection = ({ aosParams }: Props) => {
  const paragraphContent = (
    <p {...aosParams}>
      Aqui você encontra modelos pensados para destacar sua identidade visual
      com estilo e funcionalidade. Mais que um acessório, cada
      <br className="hidden 2xl:block" /> peça é um canal de conexão — uma
      lembrança duradoura que fortalece a presença do seu negócio e aproxima
      você do seu público.
    </p>
  );

  return (
    <Section variant="secondary" id="exclusive-models">
      <Article>
        <TitleComponent title="Modelos Exclusivos" {...aosParams} />

        <Paragraph>{paragraphContent}</Paragraph>

        <Carousel className="mt-4 lg:mx-auto" {...aosParams}>
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
      </Article>
    </Section>
  );
};

export default ExclusiveModelsSection;

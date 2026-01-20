import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import Paragraph from "../components/paragraph";
import TitleComponent from "../components/sectionTitle";
import Carousel from "../components/carousel";
import OpinionCard from "../components/opinion-card";

type Props = {
  aosParams?: Record<string, string>;
};

const ReviewsSection = ({ aosParams }: Props) => {
  const paragraphContent = (
    <p {...aosParams}>
      Outros clientes já avaliaram a Bonetto como a opção certa para promover
      suas marcas. Junte-se a eles! Estamos prontos para guiar você na escolha
      do modelo ideal para destacar sua marca com estilo, qualidade e
      durabilidade. Se tiver dúvidas, não hesite em falar conosco, estamos em
      todas as redes sociais!
    </p>
  );

  return (
    <Section variant="secondary">
      <Article>
        <TitleComponent title="Confira Nossos Clientes" {...aosParams} />

        <Paragraph>{paragraphContent}</Paragraph>

        <Carousel {...aosParams} data-aos-delay="500" delay={6000}>
          <OpinionCard
            title="Satisfeita!"
            description="Superou minhas expectativas em qualidade e beleza. O atendimento ao cliente foi muito bom e a entrega foi bem rápida. Recomendo a todos!"
            imageSrc="/avatar-1.avif"
            name="Claryssa Cínthia"
          />

          <OpinionCard
            title="Top demais!"
            description="Personalização de qualidade, o bordado ficou exatamente como eu pedi e o mais importante: meus clientes elogiaram a qualidade do boné. A Bonetto entrega mais que um produto, entrega presença."
            imageSrc="/avatar-2.avif"
            name="Ricardo Soares Azevedo"
          />

          <OpinionCard
            title="Recomendo!"
            description="Os bonés ficaram incríveis! Ótima qualidade e design, estou satisfeito com o resultado."
            imageSrc="/avatar-3.avif"
            name="Bruno Cortez"
          />
        </Carousel>
      </Article>
    </Section>
  );
};

export default ReviewsSection;

import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import Paragraph from "../components/paragraph";
import TitleComponent from "../components/sectionTitle";
import Charts from "../components/charts";

type Props = {
  aosParams?: Record<string, string>;
};

const TransformYourBrandSection = ({ aosParams }: Props) => {
  const paragraphContent = (
    <p {...aosParams}>
      Os dados falam por si só: um boné personalizado é um investimento
      estratégico com retorno mensurável: amplia o reconhecimento da sua
      empresa, reforça a identidade visual e converte clientes em embaixadores
      espontâneos — em eventos, pontos de venda ou no uso diário. Compacto,
      durável e altamente visível, funciona como extensão da comunicação e
      potencializa ações de marketing.
    </p>
  );

  return (
    <Section variant="secondary">
      <Article>
        <TitleComponent
          {...aosParams}
          data-aos-anchor-placement="center-bottom"
          title="Transforme a Sua Marca"
        />

        <Paragraph>{paragraphContent}</Paragraph>

        {/* Foto Modelo */}
        {/* <div
          {...aosParams}
          className="left-0 mt-10 h-[600px] w-full rounded-xl bg-[url(/bonetto-model.webp)] bg-cover bg-center bg-no-repeat"
        /> */}

        <Charts aosParams={aosParams} />
      </Article>
    </Section>
  );
};

export default TransformYourBrandSection;

import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import Paragraph from "../components/paragraph";
import TitleComponent from "../components/sectionTitle";
import ModelCard from "../components/model-card";

const models = [
  {
    name: "Ilhós",
    image: "/customization/ilhos.webp",
    description:
      "Ilhós de tecido ou metálicos, reforçados para ventilação e acabamento profissional; disponíveis em vários acabamentos (níquel, ouro, preto) para combinar com o design.",
  },
  {
    name: "Viés Personalizado",
    image: "/customization/vies-personalizado.webp",
    description:
      "Viés interno impresso ou em cor sólida que reforça a aba e adiciona um detalhe discreto de marca — ideal para identidade refinada em pequenas áreas.",
  },
  {
    name: "Forro Estampado",
    image: "/customization/forro-estampado.webp",
    description:
      "Forro interno com estampas ou padrões aplicados por impressão resistente, entregando um acabamento premium e um elemento surpresa ao abrir o boné.",
  },
  {
    name: "Fivela Metálica",
    image: "/customization/fivela-metalica.webp",
    description:
      "Fivela de metal personalizada com opções de gravação e diversos acabamentos; combina durabilidade e estética para ajuste preciso.",
  },
  {
    name: "Furos à Laser",
    image: "/customization/furos-a-laser.webp",
    description:
      "Perfurações de precisão a laser para ventilação ou acabamento decorativo, sem comprometer a integridade do tecido — recomendadas para materiais técnicos.",
  },
  {
    name: "Costura na Aba",
    image: "/customization/costura-na-aba.webp",
    description:
      "Costuras decorativas ou funcionais na aba, com linhas contrastantes ou ton‑sur‑ton, que aumentam resistência e adicionam caráter ao design.",
  },
  {
    name: "Etiqueta",
    image: "/customization/etiqueta.webp",
    description:
      "Etiquetas internas ou externas em tecido, couro sintético ou silicone, personalizáveis com logo, instruções de cuidado ou numeração para edições limitadas.",
  },
];

type Props = {
  aosParams?: Record<string, string>;
};

const CustomizeSection = ({ aosParams }: Props) => {
  const paragraphContent = (
    <p {...aosParams}>
      Detalhes fazem a diferença. Personalize cada peça — ilhós, viés, forro,
      fivela e etiquetas — para criar bonés que surpreendem ao primeiro contato
      e que se destacam dentre os demais. Use a criatividade e deixe a sua marca
      mais atraente e memorável. Está em dúvida? Fale conosco! Oferecemos
      consultoria técnica, provas e amostras para ajustar materiais e
      acabamentos conforme a sua necessidade.
    </p>
  );

  return (
    <Section variant="secondary">
      <Article>
        <TitleComponent
          {...aosParams}
          data-aos-anchor-placement="center-bottom"
          title="Customize e Surpreenda"
        />

        <Paragraph>{paragraphContent}</Paragraph>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {models.map((model, index) => (
            <div key={index} {...aosParams}>
              <ModelCard model={model} />
            </div>
          ))}
        </div>
      </Article>
    </Section>
  );
};

export default CustomizeSection;

import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import TitleComponent from "../components/sectionTitle";
import ModelCard from "../components/model-card";

const applications = [
  {
    name: "Bordado",
    image: "/front-logos/bordado.webp",
    description:
      "Técnica tradicional que utiliza fios resistentes para formar logos e ícones com relevo e alta durabilidade — ideal para identidade premium e lavagens frequentes.",
  },
  {
    name: "Silk 3D",
    image: "/front-logos/silk-3d.webp",
    description:
      "Serigrafia com tinta dimensional que cria um efeito 3D sutil, destacando elementos do design sem comprometer a flexibilidade do tecido.",
  },
  {
    name: "Aplique à laser",
    image: "/front-logos/aplique-a-laser.webp",
    description:
      "Peças cortadas a laser em materiais como couro sintético ou tecido técnico, permitindo formas complexas e acabamento preciso aplicado ao painel frontal.",
  },
  {
    name: "Aplique 3D",
    image: "/front-logos/aplique-3d.webp",
    description:
      "Apliques em PVC, borracha ou tecido com contornos pronunciados que conferem resistência e presença visual, perfeitos para marcas que querem destaque tátil.",
  },
  {
    name: "Sublimado",
    image: "/front-logos/sublimado.webp",
    description:
      "Impressão por sublimação que integra a estampa ao tecido, ideal para imagens complexas e cores vibrantes sem acrescentar espessura ao material.",
  },
  {
    name: "Sublimação",
    image: "/front-logos/sublimacao.webp",
    description:
      "Processo de transferência térmica para reproduzir fotografias e gradientes com alta fidelidade de cor; resistente ao desbotamento quando aplicado corretamente.",
  },
  {
    name: "DTF",
    image: "/front-logos/dtf.webp",
    description:
      "Direct-to-Film: impressão digital transferível que garante cores intensas e boa aderência em diversos materiais, com toque macio e ótima reprodução de detalhes.",
  },
];

type Props = {
  aosParams?: Record<string, string>;
};

const FrontApplicationsSection = ({ aosParams }: Props) => {
  return (
    <Section variant="secondary">
      <Article>
        <TitleComponent
          {...aosParams}
          data-aos-anchor-placement="center-bottom"
          title="Escolha Sua Aplicação Frontal"
        />

        <div className="mt-10 h-fit cursor-default space-y-10 text-justify text-base leading-7 font-extralight sm:text-center sm:text-lg 2xl:text-xl">
          <p {...aosParams}>
            Cada uma entrega um resultado estético e funcional diferente. O
            Bordado oferece relevo e durabilidade; Silk 3D e DTF destacam cores
            e detalhes; apliques e corte a laser trazem textura e precisão; já a
            sublimação reproduz imagens complexas sem adicionar espessura.
            Escolha a aplicação conforme o objetivo — presença, resistência ou
            fidelidade visual — e nós ajustamos materiais e acabamento para
            garantir um resultado profissional e duradouro.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {applications.map((model, index) => (
            <div key={index} {...aosParams}>
              <ModelCard model={model} />
            </div>
          ))}
        </div>
      </Article>
    </Section>
  );
};

export default FrontApplicationsSection;

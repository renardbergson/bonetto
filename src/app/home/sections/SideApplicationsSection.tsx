import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import Paragraph from "../components/paragraph";
import TitleComponent from "../components/sectionTitle";
import ModelCard from "../components/model-card";

const models = [
  {
    name: "Aplique à laser",
    image: "/side-logos/aplique-a-laser.webp",
    description:
      "Peças cortadas a laser em materiais como couro sintético ou tecido técnico, com contornos precisos e acabamento limpo — ideal para logos detalhados sem costuras aparentes.",
  },
  {
    name: "Bordado ou silk",
    image: "/side-logos/bordado-ou-silk.webp",
    description:
      "Bordado oferece relevo, textura e alta durabilidade; silk (serigrafia) é indicado para áreas planas e cores sólidas, sendo mais econômico em tiragens maiores.",
  },
  {
    name: "Aba Sanduíche",
    image: "/side-logos/aba-sanduiche.webp",
    description:
      "Detalhe na borda da aba com camada contrastante costurada entre camadas, proporcionando destaque sutil, reforço estrutural e acabamento profissional.",
  },
  {
    name: "Aplique 3D",
    image: "/side-logos/aplique-3d.webp",
    description:
      "Apliques em PVC, borracha ou tecido com relevo pronunciado, aplicados por colagem ou costura para efeito tátil e visual marcante, duráveis e resistentes ao desgaste.",
  },
];

type Props = {
  aosParams?: Record<string, string>;
};

const SideApplicationsSection = ({ aosParams }: Props) => {
  const paragraphContent = (
    <p {...aosParams}>
      Aplicações laterais acrescentam detalhes discretos que valorizam o design
      do boné. Seja um bordado sutil, um aplique texturizado ou um viés na aba,
      esses toques agregam personalidade, reforçam sua identidade em pontos de
      contato e abrem possibilidades para coleções temáticas, brindes e ações
      especiais. Escolha acabamento e posicionamento conforme o impacto desejado
      — contraste, textura ou economia — e nós cuidamos do resto para garantir
      um visual refinado.
    </p>
  );

  return (
    <Section variant="secondary">
      <Article>
        <TitleComponent
          {...aosParams}
          data-aos-anchor-placement="center-bottom"
          title="Escolha Sua Aplicação Lateral"
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

export default SideApplicationsSection;

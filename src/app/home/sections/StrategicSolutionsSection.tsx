import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import Paragraph from "../components/paragraph";
import TitleComponent from "../components/sectionTitle";

import { TrendingUp, Users, Gift, Store } from "lucide-react";

const solutions = [
  {
    icon: TrendingUp,
    title: "Marketing & Eventos",
    description:
      "Bonés para lançamentos, feiras e ações promocionais ajudam a fortalecer sua presença",
    stat: "+33%",
    statLabel: "no aumento de receita com identidade visual consistente",
    source: "Harvard Business Review",
  },
  {
    icon: Users,
    title: "Uniformes Corporativos",
    description:
      "Amplie a identidade da sua equipe e transmita profissionalismo ao consumidor",
    stat: "+50%",
    statLabel: "mais engajamento em equipes uniformizadas",
    source: "Gallup, 2021",
  },
  {
    icon: Gift,
    title: "Brindes Premium",
    description:
      "Presenteie clientes e parceiros com produtos exclusivos que geram lembranças positivas",
    stat: "+18%",
    statLabel: "no aumento nas conversões com brindes personalizados",
    source: "Forbes",
  },
  {
    icon: Store,
    title: "Revenda & Varejo",
    description:
      "Fabricamos produtos exclusivos para sua loja com design diferenciado e qualidade premium",
    stat: "73%",
    statLabel: "dos consumidores preferem marcas personalizadas",
    source: "Nielsen, 2020",
  },
];

type Props = {
  aosParams?: Record<string, string>;
};

const StrategicSolutionsSection = ({ aosParams }: Props) => {
  const paragraphContent = (
    <p {...aosParams}>
      Um boné personalizado é uma ferramenta estratégica, seja em eventos,
      uniformes ou brindes. Ele expõe sua identidade de forma recorrente,
      transformando clientes e colaboradores em embaixadores do seu negócio. O
      uso desse item gera reconhecimento, reforça profissionalismo e cria
      lembranças positivas que potencializam ações de marketing e vendas.
    </p>
  );

  return (
    <Section variant="secondary">
      <Article>
        <TitleComponent title="Soluções Estratégicas" {...aosParams} />

        <Paragraph>{paragraphContent}</Paragraph>

        <div className="mb-16 grid cursor-default grid-cols-1 gap-8 lg:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <div key={index} {...aosParams}>
                <div className="group bg-card h-full rounded-lg border border-(--borders-color) p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-(--quaternary-color) transition-colors">
                      <Icon className="text-primary" size={28} />
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-2 text-2xl font-semibold">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 font-extralight 2xl:text-lg">
                        {solution.description}
                      </p>

                      <div className="rounded-lg border border-(--borders-color) p-4">
                        <div className="text-primary mb-1 text-3xl font-bold">
                          {solution.stat}
                        </div>
                        <p className="text-muted-foreground mb-1 text-sm font-extralight 2xl:text-base">
                          {solution.statLabel}
                        </p>
                        <p className="mt-5 text-xs font-bold 2xl:text-sm">
                          {solution.source}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Article>
    </Section>
  );
};

export default StrategicSolutionsSection;

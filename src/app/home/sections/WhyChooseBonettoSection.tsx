import Section from "@/app/components/Section";
import TitleComponent from "../components/sectionTitle";

import {
  Target,
  Zap,
  Briefcase,
  Palette,
  Scissors,
  RefreshCw,
} from "lucide-react";

const content = [
  {
    icon: Target,
    title: "Personalização sob medida",
    description:
      "Cada boné é feito com dedicação, para refletir a identidade da sua marca",
  },
  {
    icon: Zap,
    title: "Entrega rápida",
    description: "Até 15 dias úteis para você receber seu pedido",
  },
  {
    icon: Briefcase,
    title: "Atendimento rápido",
    description: "Equipe especializada pronta para tirar suas dúvidas",
  },
  {
    icon: Palette,
    title: "Design minimalista premium",
    description: "Estética sofisticada que valoriza sua marca, sua identidade",
  },
  {
    icon: Scissors,
    title: "Qualidade em cada costura",
    description: "Materiais premium e acabamento impecável",
  },
  {
    icon: RefreshCw,
    title: "Baixo pedido mínimo",
    description: "A partir de apenas 30 unidades",
  },
];

type Props = {
  aosParams?: Record<string, string>;
};

const WhyChooseBonettoSection = ({ aosParams }: Props) => {
  return (
    <Section variant="secondary">
      <article className="m-6">
        <TitleComponent title="Por que escolher a Bonetto?" {...aosParams} />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-lg border p-6 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--quaternary-color)]">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </article>
    </Section>
  );
};

export default WhyChooseBonettoSection;

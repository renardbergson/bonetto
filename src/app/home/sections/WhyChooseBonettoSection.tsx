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
      <article className="m-6 sm:mx-10 md:mx-12 lg:mx-16 2xl:mx-24">
        <TitleComponent title="Por que escolher a Bonetto?" {...aosParams} />

        <div className="mt-8 h-fit cursor-default space-y-10 text-justify text-base leading-7 font-extralight sm:text-center sm:text-lg 2xl:text-xl">
          <p {...aosParams}>
            Nós transformamos sua identidade visual em bonés sofisticados e
            exclusivos. <br className="hidden md:block" /> Unimos design
            inteligente a materiais premium para fortalecer o branding da sua
            marca.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} {...aosParams}>
                <div className="h-full rounded-lg border border-[var(--borders-color)] p-6 transition-all duration-300 hover:scale-105">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--quaternary-color)]">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="mb-2 cursor-default text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground cursor-default text-base font-extralight 2xl:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </Section>
  );
};

export default WhyChooseBonettoSection;

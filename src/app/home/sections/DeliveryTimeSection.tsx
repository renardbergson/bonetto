import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import Paragraph from "../components/paragraph";
import TitleComponent from "../components/sectionTitle";

import {
  Clock,
  Calendar,
  Package,
  Factory,
  Truck,
  Plane,
  CreditCard,
} from "lucide-react";

const timelineItems = [
  {
    icon: Clock,
    title: "Prazo Turbo",
    subtitle: "Até 14 dias úteis",
    description: "Possui um acréscimo de 15% ao valor total do pedido",
    highlight: true,
  },
  {
    icon: Calendar,
    title: "Prazo Padrão",
    subtitle: "Até 22 dias úteis",
    description: "O prazo inicia após a confirmação de pagamento",
    highlight: false,
  },
  {
    icon: Package,
    title: "Frete",
    subtitle: "Tempo médio de envio: até 14 dias úteis",
    description:
      "A depender da localidade de destino e de eventuais mudanças climáticas",
    highlight: false,
  },
  {
    icon: Factory,
    title: "Prazo de produção",
    subtitle:
      "O prazo de produção inicia em até 01 dia útil após a confirmação do pagamento",
    description:
      "Quando finalizado, entraremos em contato, informando que o pedido será despachado",
    highlight: false,
  },
  {
    icon: Truck,
    title: "Envio Padrão",
    subtitle:
      "O pedido será enviado via Empresa Brasileira de Correios e Telégrafos",
    description: "O envio se dará na modalidade SEDEX ou PAC",
    highlight: false,
  },
  {
    icon: Plane,
    title: "Envio aéreo",
    subtitle: "O pedido será enviado via Azul Cargo",
    description:
      "Atenção: o valor tarifado no frete é de responsabilidade do cliente, consultar o vendedor",
    highlight: false,
  },
  {
    icon: CreditCard,
    title: "Pagamento",
    subtitle: "Pix, cartão de crédito ou transferência bancária",
    description:
      "50% ao realizar o pedido 50% + frete após finalizada a produção",
    highlight: false,
  },
];

type Props = {
  aosParams?: Record<string, string>;
};

const DeliveryTimeSection = ({ aosParams }: Props) => {
  const paragraphContent = (
    <p {...aosParams}>
      Trabalhamos com transparência total em nossos prazos e processos. Confira
      abaixo todas as informações sobre produção, envio e pagamento. Se houver
      qualquer dúvida em relação aos prazos de entrega, produção ou pagamento,
      por favor, entre em contato conosco.
    </p>
  );

  return (
    <Section variant="secondary">
      <Article>
        <TitleComponent title="Prazos Diferenciados" {...aosParams} />

        <Paragraph>{paragraphContent}</Paragraph>

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} {...aosParams}>
                <div className="bg-card group relative flex h-full flex-col justify-between rounded-xl border-1 border-[var(--borders-color)] p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  {item.highlight && (
                    <div className="text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--quaternary-color)] px-4 py-1 text-xs font-semibold">
                      Mais Rápido
                    </div>
                  )}

                  <div>
                    {/* Icon */}
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--quaternary-color)] transition-all duration-300">
                      <Icon
                        className="text-primary"
                        size={32}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Title and Subtitle */}
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground mb-2 font-sans text-sm font-stretch-condensed 2xl:text-base">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mt-6 text-sm font-extralight 2xl:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Article>
    </Section>
  );
};

export default DeliveryTimeSection;

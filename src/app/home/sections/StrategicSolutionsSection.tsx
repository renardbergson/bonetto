import Section from "@/app/components/Section";
import TitleComponent from "../components/sectionTitle";

import Image from "next/image";

type Props = {
  aosParams?: Record<string, string>;
};

const StrategicSolutionsSection = ({ aosParams }: Props) => {
  return (
    <Section variant="secondary">
      <article className="m-6">
        <TitleComponent title="Soluções Estratégicas" {...aosParams} />

        <ul className="mt-8 list-none space-y-10 text-justify font-extralight sm:contents">
          <li
            {...aosParams}
            className="sm:col-start-2 sm:row-start-1 sm:leading-8 md:leading-9"
          >
            De acordo com a{" "}
            <strong className="font-bold">Harvard Business Review</strong>,
            marcas com identidade visual consistente aumentam a receita em até
            33%.
          </li>
          <li
            {...aosParams}
            className="sm:col-start-2 sm:row-start-1 sm:mt-36 sm:leading-8 md:mt-64 md:leading-9"
          >
            <strong className="font-bold">73% dos consumidores</strong> preferem
            marcas que entregam experiências personalizadas (Nielsen, 2020).
          </li>
          <li
            {...aosParams}
            className="sm:col-span-2 sm:leading-8 md:leading-9"
          >
            Segundo a Forbes, empresas que integram{" "}
            <strong className="font-bold">brindes personalizados</strong>{" "}
            aumentam suas conversões de vendas em até 18%.
          </li>
          <li
            {...aosParams}
            className="sm:col-span-2 sm:leading-8 md:leading-9"
          >
            Equipes com uniforme bem definido têm até{" "}
            <strong className="font-bold">50% mais engajamento</strong> e
            transmitem mais credibilidade ao consumidor (Gallup, 2021).
          </li>
        </ul>

        <Image
          {...aosParams}
          src={"/bonneto-2.webp"}
          alt="Soluções estratégicas"
          loading="lazy"
          width={0}
          height={0}
          sizes="100vw"
          className="mt-8 h-[36rem] w-full rounded-lg object-cover shadow-xl shadow-black/30 sm:mt-0"
        />
      </article>
    </Section>
  );
};

export default StrategicSolutionsSection;

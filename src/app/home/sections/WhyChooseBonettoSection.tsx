import Section from "@/app/components/Section";
import TitleComponent from "../components/sectionTitle";

import Image from "next/image";

type Props = {
  aosParams?: Record<string, string>;
};

const WhyChooseBonettoSection = ({ aosParams }: Props) => {
  return (
    <Section variant="secondary">
      <article className="m-6">
        <TitleComponent title="Por que escolher a Bonetto?" {...aosParams} />

        <div className="mt-8 h-fit space-y-8 text-justify text-base leading-7 font-extralight sm:text-lg">
          <p {...aosParams}>
            Nós transformamos sua identidade visual em bonés sofisticados e
            exclusivos.
          </p>
          <p {...aosParams}>
            Unimos design inteligente a materiais premium para fortalecer o
            branding da sua marca.
          </p>
          <p {...aosParams}>
            Entregamos identidade, visibilidade e presença. Somos a ponte entre
            sua marca e o reconhecimento que ela merece.
          </p>

          <ul>
            <li {...aosParams}>🎯 Personalização sob medida</li>
            <li {...aosParams}>
              ⚡ Entrega rápida (a partir de 15 dias úteis)
            </li>
            <li {...aosParams}>💼 Atendimento rápido</li>
            <li {...aosParams}>🎨 Design minimalista premium</li>
            <li {...aosParams}>🧵 Qualidade em cada costura</li>
            <li {...aosParams}>🔁 Baixo pedido mínimo (30 unidades)</li>
          </ul>
        </div>

        <Image
          {...aosParams}
          data-aos-delay="500"
          src={"/bonetto-1.png"}
          loading="lazy"
          alt="Bonetto"
          width={0}
          height={0}
          className="mt-8 h-[26rem] w-full rounded-lg object-cover shadow-md shadow-black/30"
        />
      </article>
    </Section>
  );
};

export default WhyChooseBonettoSection;

import Section from "@/app/components/Section";
import MainButton from "@/app/components/MainButton";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const WelcomeSection = () => {
  return (
    <Section
      id="welcome-section"
      variant="primary"
      className="relative flex h-[calc(100vh-75px)] flex-col"
    >
      {/* Background */}
      <div className="absolute right-0 h-full w-full bg-[url(/background/home-background.webp)] bg-contain bg-right-bottom bg-no-repeat opacity-45 sm:w-[70%] sm:bg-cover sm:bg-[position:100%_30%] md:w-[60%] lg:w-full lg:bg-size-[40%] lg:bg-fixed lg:bg-[position:100%_10%]" />

      {/* Carimbo */}
      <Image
        src="/background/carimbo.webp"
        alt="Carimbo de Qualidade"
        width={300}
        height={300}
        className="absolute top-56 left-8 w-20 opacity-10 sm:top-40 sm:left-18 sm:w-24 md:w-28 lg:top-20 lg:left-64 lg:w-32 2xl:top-32 2xl:left-80 2xl:w-40"
      />

      {/* Conteúdo */}
      <div className="z-10 mx-auto mt-[20rem] flex w-full flex-1 flex-col justify-between px-6 py-8 text-center font-light text-[var(--secondary-color)] sm:mt-[18rem] lg:mt-[15rem] lg:text-start 2xl:mt-[20rem]">
        <p
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-anchor-placement="center-bottom"
          className="cursor-default text-lg text-shadow-[2px_2px_var(--primary-color)] sm:text-xl lg:ml-10 lg:text-4xl 2xl:mb-8 2xl:ml-20 2xl:text-5xl"
        >
          Sua marca merece mais que um <br /> boné, ela merece um{" "}
          <span className="font-extrabold">
            <i>Bonetto</i>
          </span>
          !
        </p>

        {/* Botões */}
        <div className="mx-auto flex w-44 flex-col items-center justify-center lg:m-0 lg:ml-10 lg:w-fit lg:flex-row lg:gap-6 2xl:mb-8 2xl:ml-20">
          {/* Solicitar orçamento */}
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="center-bottom"
          >
            <MainButton
              style="secondary"
              variant="outline"
              asChild
              className="hover:scale-105 lg:p-5 2xl:p-8 2xl:text-xl"
            >
              <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP_NUMBER}`}
                target="_blank"
              >
                Solicitar Orçamento
              </Link>
            </MainButton>
          </div>

          {/* Conferir catálogo */}
          <div
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="center-bottom"
          >
            <MainButton
              style="primary"
              variant="outline"
              asChild
              className="mt-10 sm:mt-12 md:mt-10 lg:mt-0 lg:p-5 2xl:p-8 2xl:text-xl"
              sectionToScroll="exclusive-models"
            >
              <Link href={"#exclusive-models"}>Conferir catálogo</Link>
            </MainButton>
          </div>
        </div>

        {/* Texto de rodapé */}
        <div
          data-aos="fade-up"
          data-aos-delay="1500"
          data-aos-duration="800"
          data-aos-easing="ease-out"
          data-aos-anchor-placement="center-bottom"
          className="cursor-default lg:ml-10 lg:flex lg:items-center lg:gap-2 2xl:ml-20"
        >
          <span>★★★★★</span>
          <p className="mt-3 text-xs text-[var(--secondary-color)] uppercase lg:mt-0 2xl:text-base">
            Qualidade excepcional <br className="lg:hidden" /> e design
            exclusivo
          </p>
        </div>

        {/* Ícone */}
        <div
          data-aos="fade-down"
          data-aos-delay="2000"
          data-aos-duration="500"
          data-aos-easing="ease-out"
          data-aos-anchor-placement="center-bottom"
          className="mx-auto animate-bounce delay-3000"
        >
          <ChevronDown size={25} />
        </div>
      </div>
    </Section>
  );
};

export default WelcomeSection;

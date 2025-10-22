import Section from "@/app/components/Section";
import { MyButton } from "@/app/components/MyButton";

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
      <div className="absolute right-0 h-full w-full bg-[url(/background/home-background.webp)] bg-contain bg-right-bottom bg-no-repeat opacity-45 lg:bg-contain lg:bg-fixed" />

      {/* Carimbo */}
      <Image
        src="/background/carimbo.webp"
        alt="Carimbo de Qualidade"
        width={80}
        height={80}
        className="absolute top-56 left-8 opacity-15"
      />

      {/* Texto e botões */}
      <div className="z-10 mx-auto mt-[20rem] flex w-full flex-1 flex-col justify-between px-6 py-8 text-center font-light text-[var(--secondary-color)] xl:py-16">
        <p
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-anchor-placement="center-bottom"
          className="text-lg text-shadow-[2px_2px_var(--primary-color)] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        >
          Sua marca merece mais que um <br /> boné, ela merece um{" "}
          <span className="font-extrabold">
            <i>Bonetto</i>
          </span>
          !
        </p>

        <div className="mx-auto w-44 max-w-full">
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="center-bottom"
          >
            <MyButton
              style="secondary"
              variant="outline"
              asChild
              className="w-full [animation:clickMe_1.2s_infinite] xl:text-lg"
            >
              <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP_NUMBER}`}
                target="_blank"
              >
                Solicitar Orçamento
              </Link>
            </MyButton>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="center-bottom"
          >
            <MyButton
              style="primary"
              variant="outline"
              asChild
              className="mt-10 w-full sm:mt-12 xl:mt-16 xl:text-lg"
              sectionToScroll="exclusive-models"
            >
              <Link href={"#exclusive-models"}>Conferir catálogo</Link>
            </MyButton>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="1500"
          data-aos-duration="800"
          data-aos-easing="ease-out"
          data-aos-anchor-placement="center-bottom"
        >
          <span>★★★★★</span>
          <p className="mt-3 text-xs text-[var(--secondary-color)] uppercase">
            Qualidade excepcional <br /> e design exclusivo
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="2000"
          data-aos-duration="500"
          data-aos-easing="ease-out"
          data-aos-anchor-placement="center-bottom"
          className="mx-auto animate-bounce delay-3000"
        >
          <ChevronDown />
        </div>
      </div>
    </Section>
  );
};

export default WelcomeSection;

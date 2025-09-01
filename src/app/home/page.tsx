import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Carousel from "./components/carousel";

const Home = () => {
  return (
    <>
      <section id="section-1" className="flex h-[calc(100vh-75px)] flex-col">
        <video
          className="h-96 w-full bg-[var(--primary-color)] shadow-2xl"
          src="/home-video.MP4"
          autoPlay
          muted
          playsInline
          preload="auto"
        />

        <div
          className="mx-auto w-[70%] flex-1 space-y-16 p-4 text-center font-light text-[var(--secondary-color)]"
          data-aos="fade-down"
          data-aos-delay="350"
          data-aos-duration="3000"
        >
          <p className="text-sm">
            Sua marca merece mais que <br /> um boné, ela merece um Bonetto
          </p>

          <Button
            className="text-1xl w-[60%] rounded-full py-5 hover:cursor-pointer hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            variant="outline"
            asChild
          >
            <Link href={"#"}>Conferir catálogo</Link>
          </Button>

          <div>
            <span>★★★★★</span>
            <p className="mt-3 text-xs text-[var(--secondary-color)] uppercase">
              Qualidade excepcional e design exclusivo
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        className="space-y-16 bg-[var(--secondary-color)] p-6 text-[var(--primary-color)]"
      >
        {/* Por que escolher a Bonetto? */}
        <div
          className="mt-12 text-center"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="bg-[var(--primary-color)] p-4 text-[var(--secondary-color)]">
            <h3 className="text-center text-2xl">
              Por que escolher a Bonetto?
            </h3>
          </div>

          <p className="mx-auto mt-6 w-[80%] text-center font-extralight">
            Na Bonetto, transformamos sua identidade visual em bonés
            sofisticados e exclusivos, unindo design inteligente e materiais
            premium para fortalecer o branding da sua marca.
          </p>

          <div className="relative mt-6 h-[377px] w-full overflow-hidden">
            <Image
              src={"/whi-bonetto.avif"}
              alt="Bonetto"
              fill
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Modelos Exclusivos */}
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="bg-[var(--primary-color)] p-4 text-[var(--secondary-color)]">
            <h3 className="text-center text-2xl">Modelos Exclusivos</h3>
          </div>

          <p className="mx-auto mt-6 w-[80%] text-center font-extralight">
            Não é só um boné. É um veículo de conexão, lembrança e crescimento.
          </p>

          <div className="mt-6">
            <Carousel delay={3000}>
              <Link href={"#"} className="mt-10 w-full">
                <h4 className="mb-2 text-center font-bold">Promocional</h4>
                <Image
                  src={"/promotional.avif"}
                  alt="Bonetto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </Link>

              <Link href={"#"} className="mt-10 w-full">
                <h4 className="mb-2 text-center font-bold">Trucker</h4>
                <Image
                  src={"/trucker.jpg"}
                  alt="Bonetto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </Link>

              <Link href={"#"} className="mt-10 w-full">
                <h4 className="mb-2 text-center font-bold">Americano</h4>
                <Image
                  src={"/american.avif"}
                  alt="Bonetto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </Link>

              <Link href={"#"} className="mt-10 w-full">
                <h4 className="mb-2 text-center font-bold">6 gomos</h4>
                <Image
                  src={"/six-buds.avif"}
                  alt="Bonetto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </Link>

              <Link href={"#"} className="mt-10 w-full">
                <h4 className="mb-2 text-center font-bold">Dad Hat</h4>
                <Image
                  src={"/dad-hat.avif"}
                  alt="Bonetto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </Link>

              <Link href={"#"} className="mt-10 w-full">
                <h4 className="mb-2 text-center font-bold">Bucket</h4>
                <Image
                  src={"/bucket.avif"}
                  alt="Bonetto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </Link>

              <Link href={"#"} className="mt-10 w-full">
                <h4 className="mb-2 text-center font-bold">
                  Viseira Esportiva
                </h4>
                <Image
                  src={"/headband.png"}
                  alt="Bonetto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </Link>
            </Carousel>
          </div>
        </div>

        {/* Avaliações */}
        <div
          className="mt-12 text-center"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="bg-[var(--primary-color)] p-4 text-[var(--secondary-color)]">
            <h3 className="text-center text-2xl">
              Avaliação dos nossos clientes
            </h3>
          </div>

          <p className="mx-auto mt-6 w-[80%] text-center font-extralight">
            Outros clientes já avaliaram a Bonetto como a opção certa para
            tornar a sua marca mais forte.
          </p>

          <div className="mt-6">
            <Carousel delay={5000}>
              <div>TESTE</div>
              <div>TESTE</div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

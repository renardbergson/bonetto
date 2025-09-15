import Link from "next/link";

import { MyButton } from "../components/MyButton";
import Image from "next/image";
import Article from "./components/article";
import Carousel from "./components/carousel";
import OpinionCart from "./components/opinion-cart";
import Accordion from "./components/accordion";

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

        <div className="mx-auto w-[70%] flex-1 space-y-10 p-4 text-center font-light text-[var(--secondary-color)]">
          <p
            className="text-base"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="center-bottom"
          >
            Sua marca merece mais que <br /> um boné, ela merece um Bonetto!
          </p>

          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="800"
              data-aos-easing="ease-out"
              data-aos-anchor-placement="center-bottom"
            >
              <MyButton
                variant="secondary"
                asChild
                className="animate-bounce delay-[3000ms]"
              >
                <Link href={"https://wa.me/5584996247281"} target="_blank">
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
              <MyButton variant="primary" asChild className="mt-8">
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
              Qualidade excepcional e design exclusivo
            </p>
          </div>
        </div>
      </section>

      {/* Por que escolher a Bonetto? */}
      <section
        id="section-2"
        className="space-y-16 bg-[var(--secondary-color)] px-6 py-12 text-[var(--primary-color)]"
      >
        <article>
          <Article
            title="Por que escolher a Bonetto?"
            description="Na Bonetto, transformamos sua identidade visual em bonés
            sofisticados e exclusivos, unindo design inteligente e materiais
            premium para fortalecer o branding da sua marca."
            content={
              <div className="relative mt-6 h-[377px] w-full overflow-hidden">
                <Image
                  src={"/whi-bonetto.avif"}
                  alt="Bonetto"
                  fill
                  className="h-auto w-full rounded-lg object-cover shadow-xl shadow-black/30"
                />
              </div>
            }
          />
        </article>
      </section>

      {/* Modelos Exclusivos */}
      <section
        id="section-2"
        className="space-y-16 bg-[var(--secondary-color)] px-6 py-12 text-[var(--primary-color)]"
      >
        <article id="exclusive-models">
          <Article
            title="Modelos Exclusivos"
            description="Não é só um boné. É um veículo de conexão, lembrança e crescimento."
            content={
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
                      className="h-auto w-full rounded-lg"
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
                      className="h-auto w-full rounded-lg"
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
                      className="h-auto w-full rounded-lg"
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
                      className="h-auto w-full rounded-lg"
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
                      className="h-auto w-full rounded-lg"
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
                      className="h-auto w-full rounded-lg"
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
                      className="h-auto w-full rounded-lg"
                    />
                  </Link>
                </Carousel>
              </div>
            }
          />
        </article>
      </section>

      {/* Soluções estratégicas */}
      <section
        id="section-2"
        className="space-y-16 bg-[var(--secondary-color)] px-6 py-12 text-[var(--primary-color)]"
      >
        <article>
          <Article
            title="Soluções estratégicas"
            content={
              <>
                <ul className="mx-auto w-[80%] list-disc space-y-10 text-justify font-extralight">
                  <li>
                    De acordo com a{" "}
                    <strong className="font-bold">
                      Harvard Business Review
                    </strong>
                    , marcas com identidade visual consistente aumentam a
                    receita em até 33%.
                  </li>
                  <li>
                    <strong className="font-bold">73% dos consumidores</strong>{" "}
                    preferem marcas que entregam experiências personalizadas
                    (Nielsen, 2020).
                  </li>
                  <li>
                    Segundo a Forbes, empresas que integram{" "}
                    <strong className="font-bold">
                      brindes personalizados
                    </strong>{" "}
                    aumentam suas conversões de vendas em até 18%.
                  </li>
                  <li>
                    Equipes com uniforme bem definido têm até{" "}
                    <strong className="font-bold">50% mais engajamento</strong>{" "}
                    e transmitem mais credibilidade ao consumidor (Gallup,
                    2021).
                  </li>
                </ul>

                <Image
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-anchor-placement="top-bottom"
                  src={"/bonetto-2.avif"}
                  alt="Soluções estratégicas"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="mt-6 h-auto w-full rounded-lg"
                />
              </>
            }
          />
        </article>
      </section>

      {/* Avaliações */}
      <section
        id="section-2"
        className="space-y-16 bg-[var(--secondary-color)] px-6 py-12 text-[var(--primary-color)]"
      >
        <article>
          <Article
            anchorPlacement="top-center"
            title="Avaliações dos nossos clientes"
            description="Outros clientes já avaliaram a Bonetto como a opção certa para tornar a sua marca mais forte."
            content={
              <Carousel delay={6000}>
                <OpinionCart
                  title="Satisfeita!"
                  description="Superou minhas expectativas em qualidade e beleza. O atendimento ao cliente foi muito bom e a entrega foi bem rápida. Recomendo a todos!"
                  imageSrc="/avatar-1.avif"
                  name="Claryssa Cínthia"
                />

                <OpinionCart
                  title="Top demais!"
                  description="Personalização de qualidade, o bordado ficou exatamente como eu pedi e o mais importante: meus clientes elogiaram a qualidade do boné. A Bonetto entrega mais que um produto, entrega presença."
                  imageSrc="/avatar-2.avif"
                  name="Ricardo Soares Azevedo"
                />

                <OpinionCart
                  title="Recomendo!"
                  description="Os bonés ficaram incríveis! Ótima qualidade e design, estou satisfeito com o resultado."
                  imageSrc="/avatar-3.avif"
                  name="Bruno Cortez"
                />
              </Carousel>
            }
          />
        </article>
      </section>

      {/* FAQ */}
      <section
        id="section-2"
        className="space-y-16 bg-[var(--secondary-color)] px-6 py-12 text-[var(--primary-color)]"
      >
        <article>
          <Article
            anchorPlacement="top-center"
            title="Perguntas frequentes"
            description=""
            content={
              <Accordion
                items={[
                  {
                    title: "Qual a quantidade mínima para pedido?",
                    content:
                      "A partir de 30 unidades idênticas, devido à nossa produção em série, que funciona com alta demanda de volumes.",
                  },
                  {
                    title: "Envia para todo o Brasil?",
                    content:
                      "Sim! Entregamos em todo o território nacional, e o melhor: o frete é por nossa conta!",
                  },
                  {
                    title: "Como funciona o prazo de entrega?",
                    content:
                      "Após a fabricação, entraremos em contato para que o cliente efetue o pagamento da segunda parcela. Em seguida, o prazo de envio aéreo de até 9 dias úteis para qualquer lugar do Brasil será iniciado.",
                  },
                  {
                    title: "Qual é o preço por unidade?",
                    content:
                      "O preço unitário varia de acordo com cada pedido, modelo ou adicionais escolhidos. Há modelos promocionais no valor de R$ 14,00 por unidade.",
                  },
                  {
                    title: "Quais são as formas de pagamento?",
                    content:
                      "Aceitamos PIX, boleto, transferência ou cartão de crédito. No caso de PIX, boleto ou transferência, o pagamento poderá ser dividido em dois momentos, 50% no ato do pedido e 50% na finalização da fabricação. A opção de cartão de crédito possui taxas adicionais e é paga 100% no ato do pedido.",
                  },
                  {
                    title: "Como funciona o prazo de fabricação?",
                    content:
                      "O prazo de fabricação se inicia quando o orçamento é aprovado e o cliente paga a 1ª parcela. A partir desse dia, conta-se apenas 14 dias úteis até o seu pedido estar pronto para envio. Após a fabricação e o pagamento da 2ª parcela, o pedido será despachado.",
                  },
                  {
                    title: "Como funciona todo o processo?",
                    content:
                      "Nosso orçamento é feito via WhatsApp, de modo que um de nossos consultores comerciais irá entender a necessidade do cliente e sanar eventuais dúvidas, em seguida iremos preparar o mockup (layout do boné). Após a aprovação do cliente, encaminhamos o pedido para produção e, quando finalizado, entramos em contato, informando que o pedido está pronto para envio.",
                  },
                ]}
              />
            }
          />
        </article>
      </section>

      {/* <section></section> */}
    </>
  );
};

export default Home;

import Link from "next/link";
import Image from "next/image";

import Animation from "./components/animation";
import Article from "./components/article";
import Carousel from "./components/carousel";
import OpinionCart from "./components/opinion-cart";
import Accordion from "./components/accordion";
import Section from "../components/Section";
import CapLink from "./components/cap-link";
import { MyButton } from "../components/MyButton";

const Home = () => {
  return (
    <div className="space-y-18 bg-[var(--secondary-color)] pb-16">
      <Section variant="primary" className="flex h-[calc(100vh-75px)] flex-col">
        <Animation />

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
                style="secondary"
                variant="outline"
                asChild
                className="animate-bounce delay-[3000ms]"
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
                className="mt-8"
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
              Qualidade excepcional e design exclusivo
            </p>
          </div>
        </div>
      </Section>

      {/* Por que escolher a Bonetto? */}
      <Section variant="secondary">
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
      </Section>

      {/* Modelos Exclusivos */}
      <Section variant="secondary" id="exclusive-models">
        <article>
          <Article
            title="Modelos Exclusivos"
            description="Aqui você encontra os melhores modelos de bonés para dar um toque único e exclusivo à sua marca. Não é só um boné. É um veículo de conexão, lembrança e crescimento."
            content={
              <Carousel
                fade
                autoplaySpeed={3000}
                animationSpeed={800}
                id="caps-carousel"
              >
                <CapLink
                  href={"#"}
                  title="Promocional"
                  src={"/caps/promotional/01.avif"}
                  alt="Boné modelo promocional"
                />

                <CapLink
                  href={"#"}
                  title="Trucker"
                  src={"/caps/trucker/01.jpg"}
                  alt="Boné modelo trucker"
                />

                <CapLink
                  href={"#"}
                  title="Americano"
                  src={"/caps/american/01.avif"}
                  alt="Boné modelo americano"
                />

                <CapLink
                  href={"#"}
                  title="6 gomos"
                  src={"/caps/six-buds/01.avif"}
                  alt="Boné modelo 6 gomos"
                />

                <CapLink
                  href={"#"}
                  title="Dad Hat"
                  src={"/caps/dad-hat/01.avif"}
                  alt="Boné modelo dad hat"
                />

                <CapLink
                  href={"#"}
                  title="Bucket"
                  src={"/caps/bucket/01.avif"}
                  alt="Boné modelo bucket"
                />

                <CapLink
                  href={"#"}
                  title="Viseira Esportiva"
                  src={"/caps/headband/01.png"}
                  alt="Boné modelo viseira esportiva"
                />
              </Carousel>
            }
          />
        </article>
      </Section>

      {/* Soluções estratégicas */}
      <Section variant="secondary">
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
      </Section>

      {/* Avaliações */}
      <Section variant="secondary">
        <article>
          <Article
            title="Avaliações dos nossos clientes"
            description="Outros clientes já avaliaram a Bonetto como a opção certa para tornar suas marcas mais fortes."
            content={
              <Carousel id="opinions-carousel" autoplaySpeed={8000}>
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
      </Section>

      {/* FAQ */}
      <Section variant="secondary">
        <article>
          <Article
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
      </Section>
    </div>
  );
};

export default Home;

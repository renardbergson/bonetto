import Link from "next/link";

import Button from "../components/button";
import Image from "next/image";
import Article from "./components/article";
import Carousel from "./components/carousel";
import OpinionCart from "./components/opinion-cart";
import Question from "./components/question";

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

          <Button variant="outline" asChild={true}>
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
        className="space-y-16 bg-[var(--secondary-color)] px-6 py-12 text-[var(--primary-color)]"
      >
        {/* Por que escolher a Bonetto? */}
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

        {/* Modelos Exclusivos */}
        <article>
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

        {/* Soluções estratégicas */}
        <article>
          <Article
            title="Soluções estratégicas"
            content={
              <ul className="mx-auto w-[80%] list-disc space-y-10 text-justify font-extralight">
                <li>
                  De acordo com a{" "}
                  <strong className="font-bold">Harvard Business Review</strong>
                  , marcas com identidade visual consistente aumentam a receita
                  em até 33%.
                </li>
                <li>
                  <strong className="font-bold">73% dos consumidores</strong>{" "}
                  preferem marcas que entregam experiências personalizadas
                  (Nielsen, 2020).
                </li>
                <li>
                  Segundo a Forbes, empresas que integram{" "}
                  <strong className="font-bold">brindes personalizados</strong>{" "}
                  aumentam suas conversões de vendas em até 18%.
                </li>
                <li>
                  Equipes com uniforme bem definido têm até{" "}
                  <strong className="font-bold">50% mais engajamento</strong> e
                  transmitem mais credibilidade ao consumidor (Gallup, 2021).
                </li>
              </ul>
            }
          />

          <Image
            src={"/bonetto-2.avif"}
            alt="Soluções estratégicas"
            width={0}
            height={0}
            sizes="100vw"
            className="mt-6 h-auto w-full rounded-lg"
          />
        </article>

        {/* Avaliações */}
        <article>
          <Article
            title="Avaliações dos nossos clientes"
            description="Outros clientes já avaliaram a Bonetto como a opção certa para tornar a sua marca mais forte."
            content={
              <div className="mt-6 text-center">
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
              </div>
            }
          />
        </article>

        {/* FAQ */}
        <article>
          <Article
            title="Perguntas frequentes"
            description=""
            content={
              <div className="space-y-10 text-center">
                <Question
                  question="Qual a quantidade mínima para pedido?"
                  answer="Você pode pedir a partir de 30 unidades idênticas, sem nenhuma variação. Isso ocorre devido a nossa produção em série, que funciona com alta demanda de volumes."
                />

                <Question
                  question="Vocês enviam para todo o Brasil?"
                  answer="Sim! Entregamos em todo o território nacional, e o melhor: o frete é por nossa conta!"
                />

                <Question
                  question="Como funciona o prazo de entrega?"
                  answer="Após a fabricação, entraremos em contato para você efetuar o pagamento da segunda parcela. Em seguida, o prazo de envio aéreo de até 9 dias úteis para qualquer lugar do Brasil será iniciado."
                />

                <Question
                  question="Qual é o preço por unidade?"
                  answer="O preço unitário varia de acordo com cada pedido, modelo ou adicionais escolhidos. Há modelos promocionais no valor de R$ 14,00 por unidade."
                />

                <Question
                  question="Quais são as formas de pagamento?"
                  answer="O pagamento pode ser feito via PIX, boleto, transferência ou cartão de crédito. No caso de PIX, boleto ou transferência, o pagamento poderá ser dividido em dois momentos, 50% no ato do pedido e 50% na finalização da fabricação. Já na opção de cartão de crédito, é apenas na opção “crédito” com adicional de taxas e 100% no ato do pedido."
                />

                <Question
                  question="Como funciona o prazo de fabricação?"
                  answer="O prazo de fabricação se inicia quando o orçamento é aprovado e o cliente paga a 1ª parcela. A partir desse dia, conta-se apenas 14 dias úteis até o seu pedido estar pronto para envio. Após a fabricação e pagamento da 2ª parcela, seu pedido será despachado."
                />

                <Question
                  question="Como funciona todo o processo?"
                  answer="Nosso orçamento é feito via WhatsApp, em que um de nossos consultores comerciais irá entender a sua necessidade e tirar qualquer dúvida, em seguida iremos preparar seu mockup (layout do boné). Após a a aprovação do cliente, encaminhamos o pedido para produção e, quando finalizado, entramos em contato informando que o pedido está sendo enviado."
                />
              </div>
            }
          />
        </article>
      </section>
    </>
  );
};

export default Home;

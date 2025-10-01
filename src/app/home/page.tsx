import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import TitleComponent from "./components/sectionTitle";
import Animation from "./components/animation";
import Carousel from "./components/carousel";
import OpinionCard from "./components/opinion-card";
import Accordion from "./components/accordion";
import Section from "../components/Section";
import CarouselCapItem from "./components/carousel-cap-item";
import CapDetailSticker from "./components/cap-detail-sticker";
import { MyButton } from "../components/MyButton";

const Home = () => {
  const aosParams = {
    "data-aos": "fade-up",
    "data-aos-delay": "300",
    "data-aos-duration": "250",
    "data-aos-easing": "ease-out",
    "data-aos-anchor-placement": "top-bottom",
  };

  return (
    <div className="space-y-16 bg-[var(--secondary-color)] pb-14 sm:space-y-18">
      {/* Welcome */}
      <Section
        id="welcome-section"
        variant="primary"
        className="flex h-[calc(100vh-75px)] flex-col"
      >
        <Animation />

        <div className="mx-auto flex w-full flex-1 flex-col justify-between px-6 py-8 text-center font-light text-[var(--secondary-color)] xl:py-16">
          <p
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="center-bottom"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
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
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="center-bottom"
            className="mx-auto animate-bounce delay-3000"
          >
            <ChevronDown />
          </div>
        </div>
      </Section>

      {/* Por que escolher a Bonetto? */}
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
              Entregamos identidade, visibilidade e presença. Somos a ponte
              entre sua marca e o reconhecimento que ela merece.
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
            src={"/whi-bonetto.avif"}
            alt="Bonetto"
            width={0}
            height={0}
            className="mt-8 h-80 w-full rounded-lg object-cover shadow-md shadow-black/30"
          />
        </article>
      </Section>

      {/* Modelos exclusivos */}
      <Section variant="secondary" id="exclusive-models">
        <article className="m-6">
          <TitleComponent title="Modelos Exclusivos" {...aosParams} />

          <div className="mt-8 h-fit space-y-10 text-justify text-base leading-7 font-extralight sm:text-lg">
            <p {...aosParams}>
              Aqui você encontra os melhores modelos de bonés para dar um toque
              único e exclusivo à sua marca. Não é só um boné, é um veículo de
              conexão, lembrança e crescimento.
            </p>
          </div>

          <Carousel className="mt-8" {...aosParams}>
            <CarouselCapItem
              href={"#"}
              title="Promocional"
              src={"/caps/promotional/01.avif"}
              alt="Boné modelo promocional"
            />

            <CarouselCapItem
              href={"#"}
              title="Trucker"
              src={"/caps/trucker/01.jpg"}
              alt="Boné modelo trucker"
            />

            <CarouselCapItem
              href={"#"}
              title="Americano"
              src={"/caps/american/01.avif"}
              alt="Boné modelo americano"
            />

            <CarouselCapItem
              href={"#"}
              title="6 gomos"
              src={"/caps/six-buds/01.avif"}
              alt="Boné modelo 6 gomos"
            />

            <CarouselCapItem
              href={"#"}
              title="Dad Hat"
              src={"/caps/dad-hat/01.avif"}
              alt="Boné modelo dad hat"
            />

            <CarouselCapItem
              href={"#"}
              title="Bucket"
              src={"/caps/bucket/01.avif"}
              alt="Boné modelo bucket"
            />

            <CarouselCapItem
              href={"#"}
              title="Viseira Esportiva"
              src={"/caps/headband/01.png"}
              alt="Boné modelo viseira esportiva"
            />
          </Carousel>
        </article>
      </Section>

      {/* Aplicação frontal */}
      <Section variant="secondary">
        <article className="m-6">
          <TitleComponent
            {...aosParams}
            title="Escolha Sua Aplicação Frontal"
          />

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-16">
            {/* Bordado */}
            <CapDetailSticker
              {...aosParams}
              title="Bordado"
              src="/front-logos/bordado.png"
              textWidth="w-22"
            />

            {/* Silk 3D */}
            <CapDetailSticker
              {...aosParams}
              title="Silk 3D"
              src="/front-logos/silk-3d.png"
              textWidth="w-20"
            />

            {/* Aplique à laser */}
            <CapDetailSticker
              {...aosParams}
              title="Aplique à laser"
              src="/front-logos/aplique-a-laser.png"
              textWidth="w-34"
            />

            {/* Aplique 3D */}
            <CapDetailSticker
              {...aosParams}
              title="Aplique 3D"
              src="/front-logos/aplique-3d.png"
              textWidth="w-28"
            />

            {/* Sublimado */}
            <CapDetailSticker
              {...aosParams}
              title="Sublimado"
              src="/front-logos/sublimado.png"
              textWidth="w-28"
            />

            {/* Sublimação */}
            <CapDetailSticker
              {...aosParams}
              title="Sublimação"
              src="/front-logos/sublimacao.png"
              textWidth="w-28"
            />

            {/* DTF */}
            <CapDetailSticker
              {...aosParams}
              title="DTF"
              src="/front-logos/dtf.png"
              textWidth="w-14"
            />
          </div>
        </article>
      </Section>

      {/* Aplicação Lateral */}
      <Section variant="secondary">
        <article className="m-6">
          <TitleComponent
            {...aosParams}
            title="Escolha Sua Aplicação Lateral"
          />

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-16">
            {/* Aplique à laser */}
            <CapDetailSticker
              {...aosParams}
              title="Aplique à laser"
              src="/side-logos/aplique-a-laser.png"
              textWidth="w-36"
            />

            {/* Bordado ou silk */}
            <CapDetailSticker
              {...aosParams}
              title="Bordado ou silk"
              src="/side-logos/bordado-ou-silk.png"
              textWidth="w-36"
            />

            {/* Aba sanduíche */}
            <CapDetailSticker
              {...aosParams}
              title="Aba Sanduíche"
              src="/side-logos/aba-sanduiche.png"
              textWidth="w-36"
            />

            {/* Aplique 3D */}
            <CapDetailSticker
              {...aosParams}
              title="Aplique 3D"
              src="/side-logos/aplique-3d.png"
              textWidth="w-30"
            />
          </div>
        </article>
      </Section>

      {/* Customize e surpreenda */}
      <Section variant="secondary">
        <article className="m-6">
          <TitleComponent {...aosParams} title="Customize e Surpreenda" />

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-16">
            {/* Ilhós */}
            <CapDetailSticker
              {...aosParams}
              title="Ilhós"
              src="/front-logos/ilhos.png"
              textWidth="w-16"
            />

            {/* Viés personalizado */}
            <CapDetailSticker
              {...aosParams}
              title="Viés Personalizado"
              src="/customization/vies-personalizado.png"
              textWidth="w-40"
            />

            {/* Forro estampado */}
            <CapDetailSticker
              {...aosParams}
              title="Forro Estampado"
              src="/customization/forro-estampado.png"
              textWidth="w-40"
            />

            {/* Fivela metálica */}
            <CapDetailSticker
              {...aosParams}
              title="Fivela Metálica"
              src="/customization/fivela-metalica.png"
            />

            {/* Furos à laser */}
            <CapDetailSticker
              {...aosParams}
              title="Furos à Laser"
              src="/customization/furos-a-laser.png"
            />

            {/* Costura na aba */}
            <CapDetailSticker
              {...aosParams}
              title="Costura na Aba"
              src="/customization/costura-na-aba.png"
              textWidth="w-34"
            />

            {/* Etiqueta */}
            <CapDetailSticker
              {...aosParams}
              title="Etiqueta"
              src="/customization/etiqueta.png"
              textWidth="w-22"
            />
          </div>
        </article>
      </Section>

      {/* Prazos e tarifas */}
      <Section variant="secondary">
        <article className="m-6">
          <TitleComponent title="Prazos Diferenciados" {...aosParams} />

          <div className="space-y-14">
            {/* Prazo Turbo */}
            <div className="mt-8 flex items-center gap-10">
              <Image
                {...aosParams}
                data-aos-delay="500"
                src={"/sticks/watch.png"}
                alt="Bonetto"
                width={100}
                height={100}
              />

              <div {...aosParams}>
                <h3 className="mb-2 text-sm font-extrabold uppercase">
                  Prazo Turbo
                </h3>
                <p className="font-extralight">Até 14 dias úteis</p>
                <p className="font-extralight">
                  Acréscimo de 15% do valor total
                </p>
              </div>
            </div>

            {/* Prazo Padrão */}
            <div className="mt-8 flex items-center gap-10">
              <Image
                {...aosParams}
                data-aos-delay="500"
                src={"/sticks/calendar.png"}
                alt="Bonetto"
                width={100}
                height={100}
              />

              <div {...aosParams}>
                <h3 className="mb-2 font-extrabold uppercase">Prazo Padrão</h3>
                <p className="mb-1 font-extralight">Até 22 dias úteis</p>
                <p className="font-extralight">
                  O prazo inicia após a confirmação de pagamento
                </p>
              </div>
            </div>

            {/* Frete */}
            <div className="mt-8 flex items-center gap-10">
              <Image
                {...aosParams}
                data-aos-delay="500"
                src={"/sticks/shipping.png"}
                alt="Bonetto"
                width={100}
                height={100}
              />

              <div {...aosParams}>
                <h3 className="mb-2 text-sm font-extrabold uppercase">Frete</h3>
                <p className="mb-4 font-extralight">
                  Tempo médio de envio: até 14 dias úteis, a depender da
                  localidade.
                </p>
              </div>
            </div>

            {/* Prazo de Produção */}
            <div className="mt-8 flex items-center gap-10">
              <Image
                {...aosParams}
                data-aos-delay="500"
                src={"/sticks/production.png"}
                alt="Bonetto"
                width={100}
                height={100}
              />

              <div {...aosParams}>
                <h3 className="mb-2 text-sm font-extrabold uppercase">
                  Prazo de produção
                </h3>
                <p className="mb-4 font-extralight">
                  O prazo de produção inicia em até 01 dia útil após a
                  confirmação do pagamento.
                </p>
                <p className="font-extralight">
                  Quando finalizado, entraremos em contato, informando que o
                  pedido será despachado.
                </p>
              </div>
            </div>

            {/* Envio Padrão */}
            <div className="mt-8 flex items-center gap-10">
              <Image
                {...aosParams}
                data-aos-delay="500"
                src={"/sticks/truck.png"}
                alt="Bonetto"
                width={100}
                height={100}
              />

              <div {...aosParams}>
                <h3 className="mb-2 text-sm font-extrabold uppercase">
                  Envio Padrão
                </h3>
                <p className="font-extralight">
                  O pedido será enviado via Empresa Brasileira de Correios e
                  Telégrafos
                </p>
              </div>
            </div>

            {/* Envio Aéreo */}
            <div className="mt-8 flex items-center gap-10">
              <Image
                {...aosParams}
                data-aos-delay="500"
                src={"/sticks/plane.png"}
                alt="Bonetto"
                width={100}
                height={100}
              />

              <div {...aosParams}>
                <h3 className="mb-2 text-sm font-extrabold uppercase">
                  Envio aéreo
                </h3>
                <p className="mb-4 font-extralight">
                  O pedido será enviado via Azul Cargo
                </p>
                <p className="font-extralight">
                  <span className="font-semibold">Atenção: </span>o valor
                  tarifado no frete é de responsabilidade do cliente, consultar
                  o vendedor.
                </p>
              </div>
            </div>

            {/* Pagamento */}
            <div className="mt-8 flex items-center gap-10">
              <Image
                {...aosParams}
                data-aos-delay="500"
                src={"/sticks/payment.png"}
                alt="Bonetto"
                width={100}
                height={100}
              />

              <div {...aosParams}>
                <h3 className="mb-2 text-sm font-extrabold uppercase">
                  Pagamento
                </h3>
                <p className="mb-4 font-extralight">
                  Pix, cartão de crédito ou transferência bancária
                </p>
                <p className="mb-4 font-extralight">50% ao realizar o pedido</p>
                <p className="font-extralight">
                  50% + frete após finalizada a produção
                </p>
              </div>
            </div>
          </div>
        </article>
      </Section>

      {/* Soluções estratégicas */}
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
              <strong className="font-bold">73% dos consumidores</strong>{" "}
              preferem marcas que entregam experiências personalizadas (Nielsen,
              2020).
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
            src={"/bonetto-2.avif"}
            alt="Soluções estratégicas"
            width={0}
            height={0}
            sizes="100vw"
            className="mt-8 h-full w-full rounded-lg object-cover shadow-xl shadow-black/30 sm:mt-0"
          />
        </article>
      </Section>

      {/* Avaliações */}
      <Section variant="secondary">
        <article className="m-6">
          <TitleComponent
            title="Avaliação dos Nossos Clientes"
            {...aosParams}
          />

          <div className="mt-8 h-fit space-y-10 text-justify text-base leading-7 font-extralight sm:text-lg">
            <p {...aosParams}>
              Outros clientes já avaliaram a Bonetto como a opção certa para
              tornar suas marcas mais fortes.
            </p>
          </div>

          <Carousel {...aosParams} delay={6000} className="mt-8">
            <OpinionCard
              title="Satisfeita!"
              description="Superou minhas expectativas em qualidade e beleza. O atendimento ao cliente foi muito bom e a entrega foi bem rápida. Recomendo a todos!"
              imageSrc="/avatar-1.avif"
              name="Claryssa Cínthia"
            />

            <OpinionCard
              title="Top demais!"
              description="Personalização de qualidade, o bordado ficou exatamente como eu pedi e o mais importante: meus clientes elogiaram a qualidade do boné. A Bonetto entrega mais que um produto, entrega presença."
              imageSrc="/avatar-2.avif"
              name="Ricardo Soares Azevedo"
            />

            <OpinionCard
              title="Recomendo!"
              description="Os bonés ficaram incríveis! Ótima qualidade e design, estou satisfeito com o resultado."
              imageSrc="/avatar-3.avif"
              name="Bruno Cortez"
            />
          </Carousel>
        </article>
      </Section>

      {/* FAQ */}
      <Section variant="secondary">
        <article className="m-6">
          <TitleComponent title="Perguntas Frequentes" {...aosParams} />

          <Accordion
            {...aosParams}
            className="mt-8"
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
        </article>
      </Section>
    </div>
  );
};

export default Home;

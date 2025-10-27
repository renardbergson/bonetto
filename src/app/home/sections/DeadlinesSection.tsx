import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import TitleComponent from "../components/sectionTitle";

import Image from "next/image";

type Props = {
  aosParams?: Record<string, string>;
};

const DeadlinesSection = ({ aosParams }: Props) => {
  return (
    <Section variant="secondary">
      <Article>
        <TitleComponent title="Prazos Diferenciados" {...aosParams} />

        <div className="space-y-14">
          {/* Prazo Turbo */}
          <div className="mt-8 flex items-center gap-10">
            <Image
              {...aosParams}
              data-aos-delay="500"
              src={"/sticks/watch.png"}
              alt="Bonetto"
              loading="lazy"
              width={100}
              height={100}
            />

            <div {...aosParams}>
              <h3 className="mb-2 text-sm font-extrabold uppercase">
                Prazo Turbo
              </h3>
              <p className="font-extralight">Até 14 dias úteis</p>
              <p className="font-extralight">Acréscimo de 15% do valor total</p>
            </div>
          </div>

          {/* Prazo Padrão */}
          <div className="mt-8 flex items-center gap-10">
            <Image
              {...aosParams}
              data-aos-delay="500"
              src={"/sticks/calendar.png"}
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
              width={100}
              height={100}
            />

            <div {...aosParams}>
              <h3 className="mb-2 text-sm font-extrabold uppercase">
                Prazo de produção
              </h3>
              <p className="mb-4 font-extralight">
                O prazo de produção inicia em até 01 dia útil após a confirmação
                do pagamento.
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
              loading="lazy"
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
              loading="lazy"
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
                <span className="font-semibold">Atenção: </span>o valor tarifado
                no frete é de responsabilidade do cliente, consultar o vendedor.
              </p>
            </div>
          </div>

          {/* Pagamento */}
          <div className="mt-8 flex items-center gap-10">
            <Image
              {...aosParams}
              data-aos-delay="500"
              src={"/sticks/payment.png"}
              loading="lazy"
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
      </Article>
    </Section>
  );
};

export default DeadlinesSection;

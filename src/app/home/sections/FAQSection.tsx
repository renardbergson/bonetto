import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import TitleComponent from "../components/sectionTitle";
import Accordion from "../components/accordion";

type Props = {
  aosParams?: Record<string, string>;
};

const FAQSection = ({ aosParams }: Props) => {
  return (
    <Section variant="secondary" id="faq">
      <Article>
        <TitleComponent {...aosParams} title="Perguntas Frequentes" />

        <Accordion
          {...aosParams}
          className="mt-10"
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
      </Article>
    </Section>
  );
};

export default FAQSection;

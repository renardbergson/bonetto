import Title from "./Title";

const OpeningHours = () => {
  return (
    <section className="space-y-4 md:space-y-6 lg:mb-0">
      <Title title="Horários de Atendimento" />

      <p className="cursor-default text-center text-sm font-extralight text-(--quaternary-color) sm:text-base">
        Segunda a quinta-feira, das 08h às 18h, <br /> Sexta-feira, das 08h às
        17h
      </p>
    </section>
  );
};

export default OpeningHours;

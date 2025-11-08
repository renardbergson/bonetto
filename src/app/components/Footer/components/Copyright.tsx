const Copyright = () => {
  return (
    <section className="py-8 text-center text-xs -tracking-tight text-(--quaternary-color) sm:text-sm">
      <p className="inline-block cursor-default font-extralight">
        © {new Date().getFullYear()}. Todos os direitos reservados.
      </p>
      <p className="font-extralight">CNPJ: 62.420.184/0001-04</p>
    </section>
  );
};

export default Copyright;

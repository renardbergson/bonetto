import Logo from "@/app/components/Header/components/Logo";

const FooterLogo = () => {
  return (
    <section>
      <Logo className="mx-auto" />

      <p className="mx-auto block cursor-default text-center text-sm leading-6 font-extralight -tracking-tight text-(--quaternary-color) sm:text-base lg:text-start">
        Manifeste a sua identidade!
      </p>
    </section>
  );
};

export default FooterLogo;

import Title from "./Title";
import scrollToSection from "@/lib/scrollToSection";

import { AnchorLabel, AnchorHref } from "@/lib/scrollToSection";

import Link from "next/link";

interface LinkContent {
  label: AnchorLabel;
  href: AnchorHref;
}

const Links = () => {
  const links: LinkContent[] = [
    { label: "Início", href: "header" },
    { label: "Catálogo", href: "exclusive-models" },
    { label: "Prazos", href: "delivery-time-section" },
    { label: "FAQ", href: "faq" },
  ];

  return (
    <section className="space-y-4 md:space-y-6 lg:mb-0">
      <Title title="Links Rápidos" />

      <nav>
        <ul className="flex justify-center gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-muted-foreground hover:text-primary group relative inline-flex items-center text-sm font-extralight text-(--quaternary-color) transition-colors duration-200 ease-out hover:text-white sm:text-base"
              >
                {link.label}

                <span className="absolute top-[22px] w-0 border-b-2 border-(--quaternary-color) transition-all duration-300 ease-out group-hover:w-full group-hover:border-(--secondary-color)" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Links;

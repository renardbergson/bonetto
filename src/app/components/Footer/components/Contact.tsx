import Title from "./Title";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Phone,
      text: "Telefone",
      href: `https://wa.me/${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP_NUMBER}`,
      ariaLabel: "Telefone",
      content: `${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP_NUMBER}`
        .split("55")
        .join(""),
    },
    {
      icon: MapPin,
      text: "Localização",
      content: "Serra Negra do Norte, RN - Brasil",
    },
    {
      icon: Mail,
      text: "E-mail",
      href: "mailto:contato@bonetto.com.br",
      ariaLabel: "E-mail",
      content: "bonettocustomcaps@gmail.com",
    },
  ];

  return (
    <section className="mx-auto w-[300px] space-y-4 sm:w-[330px] md:space-y-6 lg:col-span-3 lg:mb-0 lg:w-full">
      <Title title="Contato" />

      <nav>
        <ul className="grid grid-cols-2 gap-4 gap-y-6 text-(--quaternary-color) lg:flex lg:justify-evenly">
          {contacts.map((contact, index, arr) => {
            const isLastItem = index === arr.length - 1;

            return (
              <li
                key={index}
                className={`text-muted-foreground flex min-w-0 gap-3 ${isLastItem ? "col-span-2 lg:col-span-1" : null}`}
              >
                <div className="min-w-0">
                  {/* Etiqueta */}
                  <div className="mb-1 flex cursor-default gap-2">
                    <contact.icon className="w-5" />
                    <p className="text-sm font-medium sm:text-base">
                      {contact.text}
                    </p>
                  </div>

                  {/* Conteúdo */}
                  {contact.href ? (
                    <Link
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-extralight wrap-break-word transition-colors sm:text-base"
                      aria-label={contact.ariaLabel}
                    >
                      {contact.content}
                    </Link>
                  ) : (
                    <p className="text-sm font-extralight wrap-break-word whitespace-normal sm:text-base">
                      {contact.content}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Contact;

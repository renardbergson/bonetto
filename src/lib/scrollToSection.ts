import type { MouseEvent } from "react";

export type AnchorLabel =
  | "Início"
  | "Catálogo"
  | "Prazos"
  | "FAQ"
  | "Fale Conosco";

export type AnchorHref =
  | "header"
  | "home"
  | "exclusive-models"
  | "delivery-time-section"
  | "faq"
  | "footer";

export type scrollHandler = (
  e: MouseEvent<HTMLAnchorElement>,
  id: AnchorHref,
) => void;

const scrollToSection: scrollHandler = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default scrollToSection;

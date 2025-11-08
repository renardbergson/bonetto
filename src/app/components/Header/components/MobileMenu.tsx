import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import { HeaderButton } from "./";
import { AnchorHref, scrollHandler } from "@/lib/scrollToSection";

type AnchorLabel = "Início" | "Catálogo" | "FAQ" | "Fale Conosco";
interface ButtonContent {
  label: AnchorLabel;
  onClick: () => void;
  link: {
    href: AnchorHref;
    rel: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  };
}

type Props = {
  isOpen?: boolean;
  handler: () => void;
  scrollToSection?: scrollHandler;
};

const MobileMenu = ({ isOpen, handler, scrollToSection }: Props) => {
  const buttonContent: ButtonContent[] = [
    {
      label: "Início",
      onClick: handler,
      link: {
        href: "home",
        rel: "Página Inicial",
      },
    },
    {
      label: "Catálogo",
      onClick: handler,
      link: {
        href: "exclusive-models",
        rel: "Modelos",
        onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          scrollToSection && scrollToSection(e, "exclusive-models"),
      },
    },
    {
      label: "FAQ",
      onClick: handler,
      link: {
        href: "faq",
        rel: "FAQ",
        onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          scrollToSection && scrollToSection(e, "faq"),
      },
    },
    {
      label: "Fale Conosco",
      onClick: handler,
      link: {
        href: "footer",
        rel: "Fale Conosco",
        onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          scrollToSection && scrollToSection(e, "footer"),
      },
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={handler}>
      <SheetContent className="w-72 border-0 bg-(--primary-color) text-(--secondary-color) opacity-85 sm:w-80">
        <SheetHeader className="flex flex-col">
          <VisuallyHidden>
            <SheetTitle>Menu Mobile</SheetTitle>
          </VisuallyHidden>

          <nav className="mt-12 p-4">
            {buttonContent.map((button, index) => {
              return (
                <div key={index}>
                  <HeaderButton
                    onClick={button.onClick}
                    variant="ghost"
                    asChild
                  >
                    <Link
                      href={button.link.href}
                      rel={button.link.rel}
                      className="w-full pl-0"
                      onClick={button.link.onClick}
                    >
                      <h1 className="w-full text-lg font-bold">
                        {button.label}
                      </h1>
                    </Link>
                  </HeaderButton>

                  <Separator className="m-4! my-4 ml-0! bg-(--tertiary-color)" />
                </div>
              );
            })}
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

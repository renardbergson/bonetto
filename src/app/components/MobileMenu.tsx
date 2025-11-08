import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import HeaderButton from "./HeaderButton";
import { scrollHandler } from "@/lib/scrollToSection";

type Props = {
  isOpen?: boolean;
  handler: () => void;
  scrollToSection?: scrollHandler;
};

const MobileMenu = ({ isOpen, handler, scrollToSection }: Props) => {
  return (
    <Sheet open={isOpen} onOpenChange={handler}>
      <SheetContent className="w-72 border-0 bg-[var(--primary-color)] text-[var(--secondary-color)] opacity-85 sm:w-80">
        <SheetHeader className="flex flex-col">
          <VisuallyHidden>
            <SheetTitle>Menu Mobile</SheetTitle>
          </VisuallyHidden>

          <nav className="mt-12 p-4">
            <HeaderButton onClick={handler} variant="ghost" asChild>
              <Link href={"/home"} rel="Página Inicial" className="w-full pl-0">
                <h1 className="w-full text-lg font-bold">Início</h1>
              </Link>
            </HeaderButton>

            <Separator className="!m-4 my-4 !ml-0 bg-[var(--tertiary-color)]" />

            <HeaderButton onClick={handler} variant="ghost" asChild>
              <Link
                onClick={(e) =>
                  scrollToSection && scrollToSection(e, "exclusive-models")
                }
                href={"exclusive-models"}
                rel="Modelos"
                className="w-full pl-0"
              >
                <h1 className="w-full text-lg font-bold">Modelos</h1>
              </Link>
            </HeaderButton>

            <Separator className="!m-4 my-4 !ml-0 bg-[var(--tertiary-color)]" />

            <HeaderButton onClick={handler} variant="ghost" asChild>
              <Link
                onClick={scrollToSection && ((e) => scrollToSection(e, "faq"))}
                href={"faq"}
                rel="FAQ"
                className="w-full pl-0"
              >
                <h1 className="w-full text-lg font-bold">FAQ</h1>
              </Link>
            </HeaderButton>

            <Separator className="!m-4 my-4 !ml-0 bg-[var(--tertiary-color)]" />

            <HeaderButton onClick={handler} variant="ghost" asChild>
              <Link
                onClick={(e) => scrollToSection && scrollToSection(e, "footer")}
                href={"footer"}
                rel="Fale Conosco"
                className="w-full pl-0"
              >
                <h1 className="w-full text-lg font-bold">Fale Conosco</h1>
              </Link>
            </HeaderButton>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

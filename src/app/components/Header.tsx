"use client";

import { useState } from "react";
import Link from "next/link";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import Logo from "./Logo";
import { MyButton } from "./MyButton";
import NavigationMenu from "./NavigationMenu";

export const Header = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  function handleMobileMenu() {
    setSheetIsOpen((prevState) => !prevState);
  }

  return (
    <header className="z-10">
      <Menubar className="flex h-[75px] items-center border-0 bg-[var(--primary-color)] p-3 text-[var(--secondary-color)] lg:px-6">
        <MenubarMenu>
          <Logo />

          <div className="flex-1"></div>

          <button className="lg:hidden" onClick={handleMobileMenu}>
            {<Menu />}
          </button>
        </MenubarMenu>

        <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
          <SheetContent className="w-72 border-0 bg-[var(--primary-color)] text-[var(--secondary-color)] opacity-85 sm:w-80">
            <SheetHeader className="flex flex-col">
              <VisuallyHidden>
                <SheetTitle>Menu Mobile</SheetTitle>
              </VisuallyHidden>

              <nav className="mt-12 p-4">
                <MyButton
                  onClick={handleMobileMenu}
                  variant="ghost"
                  style="primary"
                  asChild
                >
                  <Link
                    href={"/home"}
                    rel="Página Inicial"
                    className="w-full pl-0"
                  >
                    <h1 className="w-full text-lg font-bold">Início</h1>
                  </Link>
                </MyButton>

                <Separator className="!m-4 my-4 !ml-0 bg-[var(--tertiary-color)]" />

                <MyButton
                  variant="ghost"
                  style="primary"
                  asChild
                  sectionToScroll="exclusive-models"
                  callback={handleMobileMenu}
                >
                  <Link
                    href={"#exclusive-models"}
                    rel="Categorias"
                    className="w-full pl-0"
                  >
                    <h1 className="w-full text-lg font-bold">Modelos</h1>
                  </Link>
                </MyButton>

                <Separator className="!m-4 my-4 !ml-0 bg-[var(--tertiary-color)]" />

                <MyButton
                  onClick={handleMobileMenu}
                  variant="ghost"
                  style="primary"
                  asChild
                >
                  <Link
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="Fale Conosco"
                    className="w-full pl-0"
                  >
                    <h1 className="w-full text-lg font-bold">Fale Conosco</h1>
                  </Link>
                </MyButton>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <NavigationMenu />
      </Menubar>
    </header>
  );
};

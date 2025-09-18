"use client";

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

import { useState } from "react";
import Link from "next/link";

import Logo from "./Logo";
import { MyButton } from "./MyButton";

export const Header = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  function handleMobileMenu() {
    setSheetIsOpen((prevState) => !prevState);
  }

  return (
    <header>
      <Menubar className="flex h-[75px] items-center overflow-hidden border-0 bg-[var(--primary-color)] p-3 text-[var(--secondary-color)] shadow-md/25 shadow-white/50">
        <MenubarMenu>
          <Logo />

          <div className="flex-1"></div>

          <button onClick={handleMobileMenu}>{<Menu />}</button>
        </MenubarMenu>
      </Menubar>

      <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
        <SheetContent className="border-0 bg-[var(--primary-color)] text-[var(--secondary-color)]">
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
                <Link href={"/"} rel="Página Inicial" className="w-full pl-0">
                  <h1 className="w-full text-lg font-bold">Página Inicial</h1>
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
    </header>
  );
};

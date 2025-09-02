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

export const Header = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  function handleMobileMenuClick() {
    setSheetIsOpen((prevState) => !prevState);
  }

  return (
    <header>
      <Menubar className="flex h-[75px] items-center overflow-hidden border-0 bg-[var(--primary-color)] p-3 text-[var(--secondary-color)] shadow-md/25 shadow-white/50">
        <MenubarMenu>
          <Logo />

          <div className="flex-1"></div>

          <button onClick={handleMobileMenuClick}>{<Menu />}</button>
        </MenubarMenu>
      </Menubar>

      <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
        <SheetContent className="border-0 bg-[var(--primary-color)] text-[var(--secondary-color)]">
          <SheetHeader className="flex flex-col">
            <VisuallyHidden>
              <SheetTitle>Menu Mobile</SheetTitle>
            </VisuallyHidden>

            <nav className="mt-12 p-4">
              <div>
                <Link href={"#"} rel="Home Page">
                  <h1 className="text-lg font-bold">Página Inicial</h1>
                </Link>
              </div>

              <Separator className="!m-4 my-4 !ml-0 bg-[var(--tertiary-color)]" />

              <div>
                <Link href={"#"} rel="Sobre Nós">
                  <h1 className="text-lg font-bold">Categorias</h1>
                </Link>
              </div>

              <Separator className="!m-4 my-4 !ml-0 bg-[var(--tertiary-color)]" />

              <div>
                <Link href={"#"} rel="Sobre Nós">
                  <h1 className="text-lg font-bold">Monte seu design</h1>
                </Link>
              </div>

              <Separator className="!m-4 my-4 !ml-0 bg-[var(--tertiary-color)]" />

              <div>
                <Link href={"#"} rel="Sobre Nós">
                  <h1 className="text-lg font-bold">Fale Conosco</h1>
                </Link>
              </div>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

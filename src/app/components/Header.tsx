"use client";

import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import Image from "next/image";
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

export const Header = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  function handleMobileMenuClick() {
    setSheetIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Menubar className="flex h-16 items-center border-0 bg-[#E5D4BC] p-3 text-[#562c17] shadow-md/25 shadow-black">
        <MenubarMenu>
          <div className="flex items-center">
            <Image src={"/B.png"} alt="Teste" width={30} height={30} />
            <h1 className="ml-[2px] text-2xl font-bold">Bonetto</h1>
          </div>

          <div className="flex-1"></div>

          <button onClick={handleMobileMenuClick}>
            <Menu />
          </button>
        </MenubarMenu>
      </Menubar>

      <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
        <SheetContent className="border-0 bg-[#e5d4bc] text-[#562c17]">
          <SheetHeader className="flex flex-col">
            <VisuallyHidden>
              <SheetTitle>Menu Mobile</SheetTitle>
            </VisuallyHidden>

            <div className="mt-12 p-4">
              <div>
                <Link href={"#"} rel="Home Page">
                  <h1 className="text-lg font-bold">Página Inicial</h1>
                </Link>
              </div>

              <Separator className="!m-4 my-4 !ml-0 bg-[#d7c7b0]" />

              <div>
                <Link href={"#"} rel="Sobre Nós">
                  <h1 className="text-lg font-bold">Monte seu design</h1>
                </Link>
              </div>

              <Separator className="!m-4 my-4 !ml-0 bg-[#d7c7b0]" />

              <div>
                <Link href={"#"} rel="Sobre Nós">
                  <h1 className="text-lg font-bold">Fale Conosco</h1>
                </Link>
              </div>

              <Separator className="!m-4 my-4 !ml-0 bg-[#d7c7b0]" />

              <div>
                <Link href={"#"} rel="Sobre Nós">
                  <h1 className="text-lg font-bold">Quem Somos</h1>
                </Link>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

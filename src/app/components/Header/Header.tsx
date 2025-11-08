"use client";

import { useState } from "react";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";

import { Logo, MobileMenuBtn, MobileMenu, DesktopMenu } from "./components";
import scrollToSection from "@/lib/scrollToSection";

export const Header = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  function handleMobileMenu() {
    setSheetIsOpen((prevState) => !prevState);
  }

  return (
    <header className="z-10 border-none" id="header">
      <Menubar className="flex h-[75px] items-center border-0 bg-transparent p-3 text-(--secondary-color) lg:px-6">
        <MenubarMenu>
          <Logo />

          <div className="flex-1" />

          <MobileMenuBtn
            handleMobileMenu={handleMobileMenu}
            className="lg:hidden"
          />
        </MenubarMenu>

        <MobileMenu
          isOpen={sheetIsOpen}
          handler={handleMobileMenu}
          scrollToSection={scrollToSection}
        />

        <DesktopMenu
          className="hidden lg:flex"
          scrollToSection={scrollToSection}
        />
      </Menubar>

      <Separator className="bg-(--tertiary-color)" />
    </header>
  );
};

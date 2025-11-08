"use client";

import { useState } from "react";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import scrollToSection from "@/lib/scrollToSection";

export const Header = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  function handleMobileMenu() {
    setSheetIsOpen((prevState) => !prevState);
  }

  return (
    <header className="z-10 border-none" id="header">
      <Menubar className="flex h-[75px] items-center border-0 bg-transparent p-3 text-[var(--secondary-color)] lg:px-6">
        <MenubarMenu>
          <Logo />

          <div className="flex-1"></div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={handleMobileMenu}>
            {<Menu />}
          </button>
        </MenubarMenu>

        {/* Desktop Menu */}
        <DesktopMenu scrollToSection={scrollToSection} />

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={sheetIsOpen}
          handler={handleMobileMenu}
          scrollToSection={scrollToSection}
        />
      </Menubar>

      <Separator className="bg-[var(--tertiary-color)]" />
    </header>
  );
};

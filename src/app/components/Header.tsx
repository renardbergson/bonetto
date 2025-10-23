"use client";

import { useState } from "react";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export const Header = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  function handleMobileMenu() {
    setSheetIsOpen((prevState) => !prevState);
  }

  return (
    <header className="z-10 border-none">
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
    </header>
  );
};

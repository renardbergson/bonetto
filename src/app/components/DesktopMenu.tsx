"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import HeaderButton from "./HeaderButton";

type Props = {
  scrollToSection?: (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => void;
};

const DesktopMenu = ({ scrollToSection }: Props) => {
  return (
    <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList>
        <HeaderButton
          asChild
          variant="ghost"
          className="w-fit hover:cursor-pointer hover:border-b-2 2xl:text-lg"
        >
          <Link href="">
            <NavigationMenuItem>Início</NavigationMenuItem>
          </Link>
        </HeaderButton>

        <HeaderButton
          asChild
          variant="ghost"
          className="w-fit hover:cursor-pointer hover:border-b-2 2xl:text-lg"
        >
          <Link
            href="exclusive-models"
            onClick={(e) =>
              scrollToSection && scrollToSection(e, "exclusive-models")
            }
          >
            <NavigationMenuItem>Modelos</NavigationMenuItem>
          </Link>
        </HeaderButton>

        <HeaderButton
          asChild
          variant="ghost"
          className="w-fit hover:cursor-pointer hover:border-b-2 2xl:text-lg"
        >
          <Link
            href="faq"
            onClick={(e) => scrollToSection && scrollToSection(e, "faq")}
          >
            <NavigationMenuItem>FAQ</NavigationMenuItem>
          </Link>
        </HeaderButton>

        <HeaderButton
          asChild
          variant="ghost"
          className="w-fit rounded-lg bg-[var(--secondary-color)] text-[var(--primary-color)] hover:scale-105 2xl:text-lg"
        >
          <Link
            href="footer"
            onClick={(e) => scrollToSection && scrollToSection(e, "footer")}
          >
            <NavigationMenuItem>Fale Conosco</NavigationMenuItem>
          </Link>
        </HeaderButton>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;

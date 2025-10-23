"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import HeaderButton from "./HeaderButton";

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList>
        <HeaderButton asChild variant="ghost" className="w-fit 2xl:text-lg">
          <Link href="/home">
            <NavigationMenuItem>Início</NavigationMenuItem>
          </Link>
        </HeaderButton>

        <HeaderButton
          asChild
          variant="ghost"
          className="w-fit 2xl:text-lg"
          sectionToScroll="exclusive-models"
        >
          <Link href={"#exclusive-models"}>
            <NavigationMenuItem>Modelos</NavigationMenuItem>
          </Link>
        </HeaderButton>

        <HeaderButton asChild variant="ghost" className="w-fit 2xl:text-lg">
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP_NUMBER}`}
            target="_blank"
          >
            <NavigationMenuItem>Fale Conosco</NavigationMenuItem>
          </Link>
        </HeaderButton>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;

"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { MyButton } from "./MyButton";

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList>
        <MyButton asChild style="primary" variant="ghost" className="w-fit">
          <Link href="/home">
            <NavigationMenuItem>Início</NavigationMenuItem>
          </Link>
        </MyButton>

        <MyButton
          asChild
          style="primary"
          variant="ghost"
          className="w-fit"
          sectionToScroll="exclusive-models"
        >
          <Link href={"#exclusive-models"}>
            <NavigationMenuItem>Modelos</NavigationMenuItem>
          </Link>
        </MyButton>

        <MyButton
          asChild
          style="primary"
          variant="ghost"
          className="w-fit pr-0"
        >
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP_NUMBER}`}
            target="_blank"
          >
            <NavigationMenuItem>Fale Conosco</NavigationMenuItem>
          </Link>
        </MyButton>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;

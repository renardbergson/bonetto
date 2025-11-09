"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { AnchorLabel, AnchorHref } from "@/lib/scrollToSection";
import { HeaderButton } from "./";
import { scrollHandler } from "@/lib/scrollToSection";

interface ButtonContent {
  label: AnchorLabel;
  className?: string;
  link: {
    href: AnchorHref;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  };
}

type Props = {
  scrollToSection?: scrollHandler;
  className?: string;
};

const DesktopMenu = ({ scrollToSection, className }: Props) => {
  const buttonContent: ButtonContent[] = [
    {
      label: "Início",
      link: {
        href: "home",
      },
    },
    {
      label: "Catálogo",
      link: {
        href: "exclusive-models",
        onClick: (e) =>
          scrollToSection && scrollToSection(e, "exclusive-models"),
      },
    },
    {
      label: "FAQ",
      link: {
        href: "faq",
        onClick: (e) => scrollToSection && scrollToSection(e, "faq"),
      },
    },
    {
      label: "Fale Conosco",
      className:
        "w-fit rounded-lg bg-(--secondary-color) text-(--primary-color) hover:scale-105 2xl:text-lg",
      link: {
        href: "footer",
        onClick: (e) => scrollToSection && scrollToSection(e, "footer"),
      },
    },
  ];

  return (
    <NavigationMenu viewport={false} className={className}>
      <NavigationMenuList>
        {buttonContent.map((button, index) => {
          return (
            <div key={index}>
              <HeaderButton
                asChild
                variant="ghost"
                className={`${button.className ?? "w-fit hover:cursor-pointer hover:border-b-2 2xl:text-lg"}`}
              >
                <Link href={button.link.href} onClick={button.link.onClick}>
                  <NavigationMenuItem>{button.label}</NavigationMenuItem>
                </Link>
              </HeaderButton>
            </div>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;

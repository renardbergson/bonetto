"use client";

import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import Image from "next/image";
import { Menu } from "lucide-react";

export const Header = () => {
  function handleMobileMenuClick() {
    alert("Clicou no menu mobile");
  }

  return (
    <Menubar className="flex h-14 items-center bg-[#E5D4BC] p-3 text-[#562c17] shadow-md/25 shadow-black">
      <MenubarMenu>
        <div className="flex items-center">
          <Image src={"/B.png"} alt="Teste" width={30} height={30} />
          <h1 className="text-lg font-bold">Bonetto</h1>
        </div>

        <div className="flex-1"></div>

        <button onClick={handleMobileMenuClick}>
          <Menu />
        </button>
      </MenubarMenu>
    </Menubar>
  );
};

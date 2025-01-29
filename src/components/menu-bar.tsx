"use client";
import React from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const MenuBar = ({ onFilter }: { onFilter: (produto: string) => void }) => {
  return (
    <div className="w-full h-10 bg-zinc-100 flex mx-auto items-center justify-center">
      <Menubar className="flex justify-center bg-zinc-100 text-zinc-500 mx-auto text-xs sm:text-sm border-none shadow-none w-full max-w-screen-lg md:gap-24 items-center overflow-hidden">
        <MenubarMenu>
          <MenubarTrigger className="truncate px-2 hover:text-zinc-700">
            COLEÇÕES
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => onFilter("Todos")}>Todos</MenubarItem>

            <MenubarItem onClick={() => onFilter("Camiseta")}>
              Camisetas
            </MenubarItem>
            <MenubarItem onClick={() => onFilter("Moletom")}>
              Moletom
            </MenubarItem>
            <MenubarItem onClick={() => onFilter("Boné")}>Boné</MenubarItem>
            <MenubarItem onClick={() => onFilter("Caneca")}>Caneca</MenubarItem>
            <MenubarItem onClick={() => onFilter("Almofada")}>
              Almofada
            </MenubarItem>
            <MenubarItem onClick={() => onFilter("Ecobag")}>Ecobag</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="truncate px-2">MOLETON</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => onFilter("Todos")}>Todos</MenubarItem>
            <MenubarItem onClick={() => onFilter("Moletom")}>
              Moletom
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="truncate px-2">ACESSÓRIOS</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => onFilter("Todos")}>Todos</MenubarItem>
            <MenubarItem onClick={() => onFilter("Caneca")}>Caneca</MenubarItem>
            <MenubarItem onClick={() => onFilter("Boné")}>Boné</MenubarItem>
            <MenubarItem onClick={() => onFilter("Almofada")}>
              Almofada
            </MenubarItem>
            <MenubarItem onClick={() => onFilter("Chaveiro")}>
              Chaveiro
            </MenubarItem>
            <MenubarItem onClick={() => onFilter("Ecobag")}>Ecobag</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MenuBar;

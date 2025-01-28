"use client";
import React from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const MenuBar = () => {
  return (
    <div className="w-full h-10 bg-zinc-100 flex mx-auto items-center justify-center">
      <Menubar className="flex justify-center bg-zinc-100 text-zinc-500 mx-auto text-xs sm:text-sm border-none shadow-none w-full max-w-screen-lg md:gap-24 items-center overflow-hidden">
        <MenubarMenu>
          <MenubarTrigger className="truncate px-2">COLEÇÕES</MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
              New Incognito Window
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger className="truncate px-2">
                CAMISETAS
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
                  Email link
                </MenubarItem>
                <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
                  Messages
                </MenubarItem>
                <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
                  Notes
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="truncate px-2">MOLETON</MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger className="truncate px-2">
                PARCEIROS
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
                  Search the web
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
                  Find...
                </MenubarItem>
                <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
                  Find Next
                </MenubarItem>
                <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
                  Find Previous
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
              Cut
            </MenubarItem>
            <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
              Copy
            </MenubarItem>
            <MenubarItem className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate">
              Paste
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="truncate px-2">ACESSÓRIOS</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem
              inset
              className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate"
            >
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem
              disabled
              inset
              className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate"
            >
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem
              inset
              className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate"
            >
              Toggle Fullscreen
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem
              inset
              className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate"
            >
              Hide Sidebar
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="truncate px-2">ARTISTAS</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem
              inset
              className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate"
            >
              Edit...
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem
              inset
              className="w-full sm:w-auto px-2 py-1 text-xs md:text-sm truncate"
            >
              Add Profile...
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MenuBar;

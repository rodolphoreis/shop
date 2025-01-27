import { ShoppingBag } from "lucide-react";
import React from "react";
import Filter from "./filter";
import MenuBar from "./menu-bar";

const Header = () => {
  return (
    <div className="w-full h-20">
      <div className="w-full h-6 bg-orange-500 items-center justify-center flex">
        <h4 className="text-zinc-100 text-xs font-medium">
          PrimeShop | CAMISETAS COM ATÉ 50%OFF
        </h4>
      </div>
      <div className="flex mx-auto h-20 p-1 items-center max-w-[90%]">
        <div className="flex w-full gap-3 items-center justify-between">
          <div className="flex gap-2">
            <ShoppingBag className="text-zinc-500 " size={25} />
            <div className="flex gap-0">
              <span className=" font-extrabold text-zinc-500 text-xl sm:text-2xl">
                Prime
              </span>
              <span className=" font-extrabold text-orange-500 text-xl sm:text-2xl">
                Shop
              </span>
            </div>
          </div>
          <Filter />
        </div>
      </div>
      <div className="w-full  h-9 bg-zinc-100 flex mx-auto items-center justify-center">
        <MenuBar />
      </div>
    </div>
  );
};

export default Header;

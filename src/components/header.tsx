import { ShoppingBag } from "lucide-react";
import React from "react";
import Filter from "./filter";

const Header = () => {
  return (
    <div className="w-full h-20">
      <div className="flex mx-auto h-20 p-1 items-center max-w-[1200px]">
        <div className="flex w-full gap-3 items-center justify-between">
          <div className="flex gap-2">
            <ShoppingBag className="text-zinc-500 " size={25} />
            <div className="flex gap-0">
              <span className=" font-extrabold text-zinc-500 text-xl sm:text-2xl">
                Prime
              </span>
              <span className=" font-extrabold text-primary text-xl sm:text-2xl">
                Shop
              </span>
            </div>
          </div>
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Header;

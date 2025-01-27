import { CarouselSpacing } from "@/components/carouselSpacing";
import Image from "next/image";

import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full max-w-[1200px] mx-auto bg-red-50">
        <Image
          src="/sale.png"
          alt="sale"
          width={1200}
          height={400}
          className="w-full max-w-[1200px] h-auto rounded-md"
          style={{ maxHeight: "350px" }}
        />
      </div>
      <div className="flex mx-auto max-w-[1160px] px-10 sm:p-2">
        <CarouselSpacing />
      </div>
    </div>
  );
};

export default Home;

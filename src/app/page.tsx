import CardProduct from "@/components/card-product";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex mx-auto w-full m-0 p-0 mt-16">
        <Image
          src={
            "https://cdn.vnda.com.br/lolja/2025/01/27/11_1_8_839_FULLHOMEDimensosugerida2280x1280pixels.jpg?v=1737986786"
          }
          alt="banner"
          className="object-cover w-full max-h-[600px] m-0 p-0"
          width={3420}
          height={680}
        />
      </div>
      <div className="w-full mx-auto">
        <CardProduct />
      </div>
    </div>
  );
};

export default Home;

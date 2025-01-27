import CardProduct from "@/components/card-product";
import { CarouselPlugin } from "@/components/CarouselPlugin";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex mx-auto w-screen ">
        <CarouselPlugin />
      </div>
      <div className="w-full mx-auto">
        <CardProduct />
      </div>
    </div>
  );
};

export default Home;

"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import produtos from "@/data/products";

const CardProduct = () => {
  return (
    <div className="flex w-full items-center justify-center min-h-screen  sm:mt-0 ">
      <div className="grid grid-cols-2 gap-5 md:gap-10  mt-5 sm:grid-cols-2 lg:grid-cols-5 justify-center mx-auto w-[90%] px-4 ">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            className="w-full lg:w-[250px]  border-none rounded-none overflow-hidden transition-all duration-300 hover:shadow-lg group sm:ml-7"
          >
            <CardContent className="p-0 mb-5">
              <Image
                src={produto.imageUrl}
                alt={`Image ${produto.produto}`}
                className="object-cover w-full lg:w-[300px] sm:h-[220px] rounded-e-none rounded-s-none rounded-2xl"
                width={300}
                height={300}
              />
            </CardContent>
            <CardContent className="flex justify-between items-center mx-0 px-2">
              <h2 className="text-xs sm:text-sm font-semibold">
                {produto.produto}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                € {produto.preco}
              </p>
            </CardContent>

            <div className="relative ">
              <CardFooter className="absolute bg-zinc-400/30  inset-x-0 bottom-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-3 items-center pt-3">
                <Button className=" flex items-center w-full transition-all duration-300 hover:text-zinc-100 bg-orange-500 hover:bg-orange-300 mt-1">
                  Comprar
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardProduct;

"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ProductsInterface } from "@/data/products";
import { useRouter } from "next/navigation";

const CardProduct = ({ produtos }: { produtos: ProductsInterface[] }) => {
  const navigate = useRouter();
  function handleProduct(id: number) {
    navigate.push(`/product/${id}`);
  }
  return (
    <div className="flex w-full justify-center  sm:mt-0 py-10">
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
              <div className="flex gap-2 items-center">
                <p className="text-red-500 line-through text-xs sm:text-sm">
                  € {produto.preco}
                </p>
              </div>
            </CardContent>

            <div className="relative ">
              <CardFooter className="absolute bg-zinc-400/30  inset-x-0 bottom-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-3 items-center pt-2 sm:pt-3">
                <Button
                  onClick={() => handleProduct(produto.id)}
                  className=" flex items-center w-full transition-all duration-300 hover:text-zinc-100 bg-orange-500 hover:bg-orange-300 mt-1"
                >
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

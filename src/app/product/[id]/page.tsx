"use client";

import HeaderProduct from "@/components/headerProduct";
import { Button } from "@/components/ui/button";
import produtos from "@/data/products";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import React, { useEffect, useState } from "react";

const ProductId = () => {
  const params = useParams();
  const id = params?.id;
  const [productId, setProductId] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      setProductId(Number(id));
    }
  }, [id]);

  if (productId === null) {
    return <h1>Carregando...</h1>;
  }

  const productSelect = produtos.find((produto) => produto.id === productId);

  if (!productSelect) {
    return <h1>Produto não encontrado!</h1>;
  }
  return (
    <>
      <HeaderProduct />
      <div className="max-w-4xl flex flex-col mt-0 md:mt-8 lg:mt-32 mx-auto p-4 space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2">
            <Image
              src={productSelect.imageUrl}
              alt={productSelect.produto}
              width={600}
              height={600}
              className="w-full rounded-lg shadow-lg mb-5"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start md:mt-0">
            <h1 className="text-3xl font-semibold text-gray-800">
              {productSelect.produto}
            </h1>
            <p className="mt-4 text-gray-600">{productSelect.descricao}</p>

            <div className="mt-6">
              <p className="text-lg font-medium text-red-500 line-through">
                € {productSelect.preco}
              </p>
              <p className="text-2xl md:text-5xl font-bold text-gray-800 mt-1">
                € {productSelect.valorComDesconto}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700">
                Tamanhos disponíveis:
              </p>
              <div className="flex gap-2 mt-2">
                {productSelect.tamanhos.map((tamanhos, i) => (
                  <Button key={i} className="shadow-md">
                    {tamanhos}
                  </Button>
                ))}
              </div>

              <p className="text-sm font-medium text-gray-700 mt-2">
                Cores disponíveis:
              </p>
              <div className="flex gap-2 mt-2">
                {productSelect.cores.map((cores, i) => (
                  <Button key={i} className="shadow-md">
                    {cores}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-auto flex gap-2 mt-8 ">
          <Link
            href="/"
            className={cn(
              "w-full sm:w-[60%] justify-center text-center px-6 py-2 bg-zinc-400 hover:bg-orange-300 text-white rounded-lg shadow-md transition duration-300"
            )}
          >
            Voltar a Home
          </Link>
          <Button className="w-full sm:w-[60%] px-6 py-2 bg-orange-500 hover:bg-orange-400 text-white rounded-lg shadow-md transition duration-300">
            Comprar Agora
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductId;

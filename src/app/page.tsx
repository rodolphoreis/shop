"use client";
import { useState } from "react";
import CardProduct from "@/components/card-product";
import produtos from "@/data/products";
import Image from "next/image";
import React from "react";
import MenuBar from "@/components/menu-bar";
import Header from "@/components/header";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(produtos);

  function handleFilter(categoria: string) {
    if (categoria === "Todos") {
      setFilteredProducts(produtos);
    } else if (categoria === "Moletom") {
      setFilteredProducts(
        produtos.filter((item) => item.produto === "Moletom")
      );
    } else if (categoria === "Acessórios") {
      const acessorios = ["Caneca", "Boné", "Almofada", "Chaveiro", "Ecobag"];
      setFilteredProducts(
        produtos.filter((item) => acessorios.includes(item.produto))
      );
    } else {
      setFilteredProducts(
        produtos.filter((item) => item.produto === categoria)
      );
    }
  }

  function handleSearch(searchTerm: string) {
    if (searchTerm) {
      const filtered = produtos.filter((produto) =>
        produto.produto.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(produtos);
    }
  }

  return (
    <>
      <Header onFilter={handleSearch} />
      <div className="w-full mt-7 h-10 bg-zinc-100 flex mx-auto items-center justify-center px-1">
        <MenuBar onFilter={handleFilter} />
      </div>

      <div className="w-full h-screen">
        <div className="flex mx-auto w-full m-0 p-0 mt-0">
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
          <CardProduct produtos={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default Home;

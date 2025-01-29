"use client";
import { useState } from "react";

import produtos from "@/data/products";
import MenuBar from "./menu-bar";
import CardProduct from "./card-product";

const ProductPage = () => {
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

  return (
    <div>
      <MenuBar onFilter={handleFilter} />
      <CardProduct produtos={filteredProducts} />
    </div>
  );
};

export default ProductPage;

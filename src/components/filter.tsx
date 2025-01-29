"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const Filter = ({ onFilter }: { onFilter: (searchTerm: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchTerm(value);
    onFilter(value);
  }

  return (
    <div className="flex items-center  sm:w-96 border border-zinc-200 rounded-md p-1">
      <Input
        type="text"
        placeholder="Busque por produtos.."
        className="flex-1 text-sm border-none shadow-none "
        value={searchTerm}
        onChange={handleFilter}
      />
      <Search className="text-zinc-300 mr-2" size={20} />
    </div>
  );
};

export default Filter;

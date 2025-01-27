import React from "react";
import { Input } from "./ui/input";

const Filter = () => {
  return (
    <div className="sm:w-96">
      <Input
        type="email"
        placeholder="Busque por produtos.."
        className="flex-1 text-sm"
      />
    </div>
  );
};

export default Filter;

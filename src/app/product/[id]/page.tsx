import React from "react";

interface ParamsType {
  params: {
    id: string;
  };
}

const Page = ({ params }: ParamsType) => {
  return (
    <div>
      <h1>Produto {params.id}</h1>
    </div>
  );
};

export default Page;

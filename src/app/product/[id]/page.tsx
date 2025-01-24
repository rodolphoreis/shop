import React from "react";

type ParamsType = {
  params: { id: string };
};

const Page = ({ params }: ParamsType) => {
  return (
    <div>
      <h1>Produto {params.id}</h1>
    </div>
  );
};

export default Page;

"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const arrayImage = [
  "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_33_33_103_15_11_4_433_manga20longa20branca20feminina20109.jpg?v=1732732440",
  "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_35_07_40_15_11_4_416_camiseta20branca20feminina2023.png?v=1732732527",
  "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_25_02_764_15_11_8_878_regatapretafeminina2018.jpg?v=1732732132",
  "https://cdn.vnda.com.br/780x/lolja/2024/04/03/15_28_21_88_15_4_3_360_retry.jpg?v=1712168901",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_9_961_22_17_44_56_moletommasculinopreto1111f31df18c32ce901c771674654433814710241024.png?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_6_623_FotodoprodutoMANGALONGABRANCACOMMANGAS_yythk.png?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/11/22/14_11_8_886_WhatsAppImage20231122at142943.jpeg?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_7_718_FotodoprodutoECOBAGPALHARANOSSOET.png?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_2_259_22_17_32_624_frentecaneca17608e0dd03ff3375411671125424090610241024.png?v=1737552349",
  "https://cdn.vnda.com.br/780x/lolja/2024/12/05/11_10_23_288_11_12_6_696_1.jpg?v=1733407828",
  "https://cdn.vnda.com.br/lolja/2023/09/05/12_00_40_464_12_9_1_128_murrinho.png?v=1693926040",
  "https://cdn.vnda.com.br/767x/lolja/2023/11/22/14_11_1_164_WhatsAppImage20231122at143328.jpeg?v=1737552349",
  "https://cdn.vnda.com.br/780x/lolja/2023/02/22/22_17_44_7_camiseta-vermelha-masculina-141-a56e83279d057fb9a416746540553810-1024-1024.jpg?v=1677115064",
  "https://cdn.vnda.com.br/780x/lolja/2023/05/05/10_5_8_845_CAMISETA20BRANCA20MASCULINA2057.jpg?v=1683293122",
  "https://cdn.vnda.com.br/780x/lolja/2023/09/14/14_07_16_548_14_9_4_471_camiseta20preta20masculina2033.jpg?v=1694711236",
];
const CardProduct = () => {
  return (
    <div className="flex w-full items-center justify-center min-h-screen mt-[-250px] sm:mt-0 ">
      <div className="grid grid-cols-1 gap-5 md:gap-10  mt-5 sm:grid-cols-2 lg:grid-cols-5 justify-center mx-auto w-[90%] px-4 ">
        {arrayImage.map((imgURL, index) => (
          <Card
            key={index}
            className="w-full lg:w-[250px]  border-none rounded-none overflow-hidden transition-all duration-300 hover:shadow-lg group sm:ml-7"
          >
            <CardContent className="p-0 mb-5">
              <Image
                src={imgURL}
                alt={`Image ${index + 1}`}
                className="object-cover w-full lg:w-[300px] sm:h-[220px] rounded-e-none rounded-s-none rounded-2xl"
                width={300}
                height={300}
              />
            </CardContent>
            <CardContent className="flex justify-between items-center ">
              <h2 className="text-lg font-semibold">Camiseta</h2>
              <p className="text-sm text-gray-500">R$ 50,00</p>
            </CardContent>

            <div className="relative ">
              <CardFooter className="absolute bg-zinc-400/30  inset-x-0 bottom-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 items-center">
                <Button className="w-full transition-all duration-300 bg-orange-500 hover:bg-orange-400 mt-3">
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

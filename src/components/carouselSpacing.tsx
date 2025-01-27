"use client";
import React from "react";
import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const arrayImage = [
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_9_961_22_17_44_56_moletommasculinopreto1111f31df18c32ce901c771674654433814710241024.png?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_6_623_FotodoprodutoMANGALONGABRANCACOMMANGAS_yythk.png?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/11/22/14_11_8_886_WhatsAppImage20231122at142943.jpeg?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_7_718_FotodoprodutoECOBAGPALHARANOSSOET.png?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_2_259_22_17_32_624_frentecaneca17608e0dd03ff3375411671125424090610241024.png?v=1737552349",
  "https://cdn.vnda.com.br/780x/lolja/2024/12/05/11_10_23_288_11_12_6_696_1.jpg?v=1733407828",
  "https://cdn.vnda.com.br/lolja/2023/09/05/12_00_40_464_12_9_1_128_murrinho.png?v=1693926040",
  "https://cdn.vnda.com.br/767x/lolja/2023/11/22/14_11_1_164_WhatsAppImage20231122at143328.jpeg?v=1737552349",
];
export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-[1200px] mx-auto">
      <CarouselContent className="-ml-1">
        {arrayImage.map((imgURL, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <CardContent className="flex aspect-square items-center justify-center p-2">
                <Image
                  src={imgURL}
                  alt={`Image ${index + 1}`}
                  className="object-cover w-full sm:h-[300px] rounded-2xl"
                  width={300}
                  height={700}
                />
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

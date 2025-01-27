"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const arrayImage = [
  "https://cdn.vnda.com.br/lolja/2025/01/22/10_1_5_537_FULLHOMEDimensosugerida2280x1280pixels.jpg?v=1737552348",
  "https://cdn.vnda.com.br/lolja/2025/01/27/11_1_8_839_FULLHOMEDimensosugerida2280x1280pixels.jpg?v=1737986786",
  "/banner.png",
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Carousel
      className="w-full mx-auto sm:max-h-[600px] overflow-hidden relative"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex items-center justify-center w-full h-full mt-[-156px] sm:mt-[-136px] ">
        {arrayImage.map((imgURL, index) => (
          <CarouselItem
            key={index}
            className="w-screen h-screen flex items-center justify-center"
          >
            <CardContent className="flex w-full items-center justify-center  h-[200px] sm:h-[600px] ml-3">
              <Image
                src={imgURL}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full"
                width={2420}
                height={680}
              />
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 mt-[-80px] sm:mt-[-20px]" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mt-[-80px] sm:mt-[-20px]" />
    </Carousel>
  );
}

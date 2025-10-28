"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const images = [
  { name: "image 1", link: "/images/img1.jpg" },
  { name: "image 2", link: "/images/img2.jpg" },
  { name: "image 3", link: "/images/img3.jpg" },
  { name: "image 1", link: "/images/img1.jpg" },
  { name: "image 2", link: "/images/img2.jpg" },
  { name: "image 3", link: "/images/img3.jpg" },
];

export default function Gallery() {
    return (
        <div className="px-[10px] md:px-[20px] lg:px-[50px] py-[70px] bg-white">
            <div className="flex items-center justify-center">
                <h1 className="text-[40px] text-[#18ce67] mb-[48px] font-medium">Gallery</h1>
            </div>

            <div className="relative w-full">
                <Carousel 
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-1">
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="pl-[10px] md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-[240px] w-full">
                                    <Image
                                        src={image.link}
                                        alt={image.name}
                                        width={0}
                                        height={240}
                                        className="object-cover w-full"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}

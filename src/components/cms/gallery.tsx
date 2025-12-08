"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type GalleryProps = {
    images: string[];
};

export default function Gallery({ images }: GalleryProps) {
    return (
        <div className="px-[10px] md:px-[20px] lg:px-[50px] py-[70px] bg-white">
            <div className="flex items-center justify-center">
                <h1 className="text-[40px] text-[#18ce67] mb-[48px] font-medium">Gallery</h1>
            </div>

            <div className="relative w-full">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-1">
                        {images.map((image, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-[20px] md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="p-1 h-[310px] w-full relative">
                                    <Image
                                        src={image}
                                        alt={`Gallery image ${index}`}
                                        fill
                                        className="object-cover rounded-md"
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

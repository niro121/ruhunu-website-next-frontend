"use client";

import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { GalleryCard } from "../common/gallery-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type ImageData = {
  src: string;
  alt: string;
};

type GalleryProps = {
  images: string[] | ImageData[];
  layout?: 1 | 2 | 3;
  title?: string;
};

export default function Gallery({ images, layout, title }: GalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);
      const services = [
    { id: 1, src: "/images/laboratory/microbiology.jpg", title: "Microbiology" },
    { id: 2, src: "/images/laboratory/biochemistry.jpg", title: "Biochemistry" },
    { id: 3, src: "/images/laboratory/immuinulogy.jpg", title: "Immuinulogy" },
    { id: 4, src: "/images/laboratory/pathology.jpg", title: "Pathology" },
    { id: 5, src: "/images/laboratory/heamatology.jpg", title: "Heamatology" },
    { id: 6, src: "/images/laboratory/himataloghy.jpg", title: "Himataloghy" },
    { id: 7, src: "/images/laboratory/serology.jpg", title: "Serology" },
  ];
    const totalSlides = services.length;

    // Layout 1: Carousel Layout
  if (layout === 1) {
    return (
      <div className="px-[10px] md:px-[20px] lg:px-[50px] py-[70px] bg-white">
        <div className="flex items-center justify-center">
          <h1 className="text-[40px] text-[#18ce67] mb-[48px] font-medium">
            {title}
          </h1>
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
              {images.map((image, index) => {
                const imageSrc = typeof image === "string" ? image : image.src;
                const imageAlt =
                  typeof image === "string"
                    ? `Gallery image ${index}`
                    : image.alt;
                return (
                  <CarouselItem
                    key={index}
                    className="pl-[20px] md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-[310px] w-full relative">
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    );
  } 
  // Layout 2: Grid Layout
  else if (layout === 2) {
    return (
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#18CE67]">
            {title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => {
              const imageSrc = typeof image === "string" ? image : image.src;
              const imageAlt =
                typeof image === "string"
                  ? `Gallery image ${index}`
                  : image.alt;
              return <GalleryCard key={index} src={imageSrc} alt={imageAlt} />;
            })}
          </div>
        </div>
      </section>
    );
  } 
  // Layout 3: Labouratory Carousel Layout (hardcoded)
  else if (layout === 3) {
    return (
    <section className="bg-[#F5FBFF] px-4 xl:px-32 py-16">
      {/* Heading */}
      <h2 className="text-center font-extrabold xl:text-[40px] text-[22px] mb-10">
        <span className="text-black">Lab </span>
        <span className="text-[#18CE67]">Service</span>
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            let visibleBullets: number[] = [];

            if (totalSlides <= 3) {
              // If fewer than 3 slides, show all
              visibleBullets = Array.from({ length: totalSlides }, (_, i) => i);
            } else if (activeIndex === 0) {
              visibleBullets = [0, 1, 2];
            } else if (activeIndex === totalSlides - 1) {
              visibleBullets = [totalSlides - 3, totalSlides - 2, totalSlides - 1];
            } else {
              visibleBullets = [activeIndex - 1, activeIndex, activeIndex + 1];
            }

            if (visibleBullets.includes(index)) {
              return `<span class="${className}"></span>`;
            }
            return "";
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
        }}
        className="w-full pb-8"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="flex flex-col items-center border border-[#18CE67] overflow-hidden bg-white">
              <Image
                src={service.src}
                alt={service.title}
                width={500}
                height={350}
                className="object-fill xl:w-full xl:h-[330px] h-[300px]"
              />
              <div className="py-8 text-center">
                <p className="font-extrabold text-black text-[20px]">
                  {service.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination style */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 80px;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          border: 1.5px solid #122739;
          background-color: transparent;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background-color: #122739;
          border-color: #122739;
        }
      `}</style>
    </section>
  );

  }
}

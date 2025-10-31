"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Gallery() {
  const images = [
    { id: 1, src: "/images/nts/gallery1.png", alt: "Gallery image 1" },
    { id: 2, src: "/images/nts/gallery2.png", alt: "Gallery image 2" },
    { id: 3, src: "/images/nts/gallery3.png", alt: "Gallery image 3" },
  ];

  return (
    <section className="px-4 xl:px-32 xl:py-16 py-10">
      {/* Heading */}
      <h1 className="font-extrabold text-[#18CE67] xl:text-[40px] text-[22px] text-center mb-10">
        Gallery
      </h1>

      {/* Swiper for Web & Mobile */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="flex justify-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="object-cover w-full h-[300px] xl:h-[330px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots - visible only on mobile */}
      <div className="custom-pagination flex justify-center mt-4 md:hidden" />
    </section>
  );
}

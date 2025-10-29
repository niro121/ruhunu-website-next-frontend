"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function LabService() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    { id: 1, src: "/images/microbiology.jpg", title: "Microbiology" },
    { id: 2, src: "/images/biochemistry.jpg", title: "Biochemistry" },
    { id: 3, src: "/images/immuinulogy.jpg", title: "Immuinulogy" },
    { id: 4, src: "/images/pathology.jpg", title: "Pathology" },
    { id: 5, src: "/images/heamatology.jpg", title: "Heamatology" },
    { id: 6, src: "/images/himataloghy.jpg", title: "Himataloghy" },
    { id: 7, src: "/images/serology.jpg", title: "Serology" },
  ];

  const totalSlides = services.length;

  return (
    <section className="bg-[#F5FBFF] px-4 xl:px-32 py-12">
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

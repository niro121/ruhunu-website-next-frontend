"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Accreditation() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Run only on client (avoid SSR mismatch)
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const accreditations = [
    { id: 1, src: "/images/laboratory/1.jpg", title: "External Quality Assurance" },
    { id: 2, src: "/images/laboratory/2.jpg", title: "EQA BY MRI – Microbiology" },
    { id: 3, src: "/images/laboratory/3.jpg", title: "ISO Certified Laboratory" },
    { id: 4, src: "/images/laboratory/1.jpg", title: "External Quality Assurance" },
    { id: 5, src: "/images/laboratory/2.jpg", title: "EQA BY MRI – Microbiology" },
    { id: 6, src: "/images/laboratory/3.jpg", title: "ISO Certified Laboratory" },
  ];

  if (!isClient) return null;

  return (
    <section className="bg-[#F5FBFF] px-4 xl:px-32 py-12">
      {/* Heading */}
      <h2 className="text-center font-extrabold xl:text-[36px] text-[24px] mb-10 text-black">
        Accreditation
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        loop={true}
        pagination={
          isMobile
            ? {
                clickable: true,
              }
            : false
        }
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {accreditations.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center bg-white border border-[#18CE67] overflow-hidden">
              <div className="w-full flex items-center justify-center py-10 px-6">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="object-contain xl:w-full xl:h-[320px] h-[260px]"
                />
              </div>
              <div className="bg-white w-full text-center py-8">
                <p className="text-center font-extrabold text-black text-[16px] xl:text-[20px]">
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination styles (only visible on mobile) */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .swiper-pagination {
            display: none !important; /* Hide pagination on desktop */
          }
        }
        @media (max-width: 767px) {
          .swiper-pagination {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            gap: 10px;
            position: relative;
          }
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          border: 1.5px solid #122739;
          background-color: transparent;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #122739;
          border-color: #122739;
        }
      `}</style>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const socialIcon = [
  { name: "facebook", link: "/", image: "/social-media-icons/facebook.png" },
  { name: "youtube", link: "/", image: "/social-media-icons/youtube.png" },
  { name: "instagram", link: "/", image: "/social-media-icons/instagram.png" },
  { name: "linkedin", link: "/", image: "/social-media-icons/linkedin.png" },
  { name: "skype", link: "/", image: "/social-media-icons/skype.png" },
];

type HeroProps = {
  layout: number;
  data: any;
};

export default function Hero({ layout, data }: HeroProps) {
  // Normalize images to arrays for easy handling
  const webImages = Array.isArray(data.webImage) ? data.webImage : [data.webImage];
  const mobileImages = Array.isArray(data.mobileImage) ? data.mobileImage : [data.mobileImage];

  return layout === 1 ? (
    <HeroBanner data={{ ...data, webImage: webImages, mobileImage: mobileImages }} />
  ) : (
    <HeroSlider data={{ ...data, webImage: webImages, mobileImage: mobileImages }} />
  );
}

/* ---------------------------------------------------------
   HERO SLIDER
--------------------------------------------------------- */
const HeroSlider = ({ data }: { data: any }) => {
    const [current, setCurrent] = useState(0);
    const swiperRef = useRef<any>(null);

    const goTo = (idx: number) => {
        swiperRef.current?.swiper?.slideToLoop(idx);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Swiper
                ref={swiperRef}
                spaceBetween={0}
                centeredSlides
                effect="fade"
                loop
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
                modules={[EffectFade, Autoplay]}
                className="h-full w-full hero-swiper"
            >
                {data.webImage.filter(Boolean).map((slide: string, i: number) => (
                    <SwiperSlide key={i} className="h-full w-full relative">
                        <Image
                          src={slide}
                          alt={`slide-${i}`}
                          fill
                          className="object-cover"
                          priority
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-black/25" />
                    </SwiperSlide>
                ))}
            </Swiper>

      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 lg:px-20 h-full">
        <div className="flex flex-col gap-3">
          {socialIcon.map((icon, i) => (
            <a
              key={i}
              href={icon.link}
              className="bg-white p-2 border border-[#18CE67] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform"
            >
              <Image src={icon.image} alt={icon.name} width={24} height={24} />
            </a>
          ))}
        </div>

        <div className="block bg-white w-[280px] md:w-[500px] lg:w-[650px] p-[30px] lg:p-[50px] rounded-l-[30px] shadow-xl">
          <p className="text-[16px] text-[#18CE67] mb-2">Welcome to Ruhunu Hospital</p>
          <h1 className="text-[34px] lg:text-[46px] text-[#003163] font-bold leading-tight mb-4">
            Exceptional Medical Specialty Healthcare
          </h1>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="/"
              className="w-fit bg-[#18CE67] text-white py-3 px-6 rounded-md font-semibold hover:opacity-95"
            >
              Doctor Appointment
            </a>
            <a
              href="/"
              className="w-fit bg-[#003163] text-white py-3 px-6 rounded-md font-semibold hover:opacity-95"
            >
              View My Lab Reports
            </a>
          </div>

          <div className="flex items-center gap-3 mt-6">
            {data.webImage.map((_ : any, idx: number) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-[10px] h-[10px] rounded-full transition-all duration-200 ${
                  idx === current ? "bg-[#18CE67]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------------------------------
   HERO BANNER
--------------------------------------------------------- */
const HeroBanner = ({ data }: { data: any }) => {
  const router = useRouter();
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, idx) => ({
    label: segment.replace(/-/g, " ").replace(/\b\w/g, (s) => s.toUpperCase()),
    href: "/" + pathSegments.slice(0, idx + 1).join("/"),
  }));

  return (
    <div className="relative flex xl:justify-start xl:items-center w-full xl:h-[430px] h-[430px] md:h-[360px] overflow-hidden">
      <div className="hidden xl:block absolute inset-0">
        {data.webImage.filter(Boolean).map((img: string, i: number) => (
          <Image
            key={i}
            src={img}
            alt={`Banner Desktop ${i}`}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        ))}
      </div>

            {/* ----------- WEB BACKGROUND IMAGE ----------- */}
            <div className="hidden xl:block absolute inset-0">
                {data.webImage && (
                    <Image
                        src={data.webImage}
                        alt="Banner Background"
                        fill
                        className="object-cover"
                        priority
                    />
                )}
            </div>

            {/* ----------- MOBILE BACKGROUND IMAGE ----------- */}
            <div className="block xl:hidden absolute inset-0">
                {data.mobileImage && (
                    <Image
                        src={data.mobileImage}
                        alt="Mobile Banner Background"
                        fill
                        className="object-cover"
                        priority
                    />
                )}
            </div>

            {/* ----------- OVERLAY (LIKE ATTACHED IMAGE) ----------- */}
            <div className="absolute inset-2 bg-white/60 xl:bg-white/55 rounded-br-md pointer-events-none xl:w-[1150px] xl:h-[290px]"></div>
            {/* You can adjust opacity: white/50 → white/60 → white/70 etc. */}

            {/* ----------- TEXT CONTENT ----------- */}
            <div className="relative z-10 w-full xl:px-16 lg:px-15 md:px-16 px-6 flex flex-col justify-center h-full">
                <h1 className="font-extrabold text-[#122739] text-[30px] xl:text-[48px] leading-tight">
                    {data.title}
                </h1>

                <div className="flex gap-1 text-[14px] xl:text-[16px] flex-wrap mt-2">
                    <button onClick={() => router.push("/")} className="hover:text-[#18CE67]">
                        Home
                    </button>

                    {breadcrumbs.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <span>›</span>
                            <button
                                onClick={() => router.push(item.href)}
                                className="hover:text-[#18CE67]"
                            >
                                {item.label}
                            </button>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
  );
};

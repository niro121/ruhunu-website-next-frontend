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
    { name: "linkedin", link: "/", image: "/social-media-icons/linkedin.png" },
    { name: "skype", link: "/", image: "/social-media-icons/skype.png" },
    { name: "youtube", link: "/", image: "/social-media-icons/youtube.png" },
    { name: "instagram", link: "/", image: "/social-media-icons/instagram.png" },
];

type HeroProps = {
    layout: number;
    data: any;
};

export default function Hero({ layout, data }: HeroProps) {
    return layout === 1 ? <HeroBanner data={data} /> : <HeroSlider data={data} />;
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
                {data.webImage?.map((slide: any, i: number) => (
                    <SwiperSlide key={i} className="h-full w-full relative">
                        {slide && (
                            <Image
                                src={slide}
                                alt={`slide-${i}`}
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        )}
                        <div className="absolute inset-0 bg-black/25" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 lg:px-20 h-full">

                {/* Social Icons */}
                <div className="flex flex-col gap-[20px]">
                    {socialIcon.map((icon, i) => (
                        <a
                            key={i}
                            href={icon.link}
                            className="h-[40px] w-[40px] bg-white p-2 border border-[#18CE67] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                        >
                            <Image src={icon.image} alt={icon.name} width={33} height={33} />
                        </a>
                    ))}
                </div>

                {/* Text */}
                <div className="block bg-[#f2fff8] w-[280px] md:w-[500px] lg:w-[650px] p-[30px] lg:p-[50px] rounded-l-[30px] shadow-xl">
                    <p className="text-[16px] text-[#00ff00] mb-2">Welcome to Ruhunu Hospital</p>
                    <h1 className="text-[34px] lg:text-[50px] text-[#003163] font-extrabold leading-tight mb-4 --font-opensans-extrabold">
                        Exceptional Medical Specialty Healthcare
                    </h1>

                    <div className="flex flex-col md:flex-row gap-4">
                        <a href="/" className="w-fit bg-[#18CE67] text-white py-[15px] px-[20px] md:px-[50px] rounded-md font-bold hover:opacity-95">
                            Doctor Appointment
                        </a>
                        <a href="/" className="w-fit bg-[#003163] text-white py-[15px] px-[20px] md:px-[50px] rounded-md font-bold hover:opacity-95">
                            View My Lab Reports
                        </a>
                    </div>

                    <div className="flex items-center gap-3 mt-6">
                        {data.webImage?.map((_: any, idx: number) => (
                            <button
                                key={idx}
                                onClick={() => goTo(idx)}
                                className={`w-[10px] h-[10px] rounded-full transition-all duration-200 border border-[#18ce67] ${
                                    idx === current
                                        ? "bg-[#18CE67]"
                                        : "bg-gray-300"
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
        <div className="relative flex justify-start items-center w-full xl:h-[430px] h-[470px] md:h-[360px] overflow-hidden">

            {/* ----------- WEB BACKGROUND IMAGE ----------- */}
            <div className="hidden xl:block absolute inset-0">
                {data.webImage && (
                    <Image
                        src={data.webImage}
                        alt="Banner Background"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
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
                        unoptimized
                    />
                )}
            </div>

            {/* ----------- FIXED OVERLAY (LEFT ALIGNED ALL SCREENS) ----------- */}
            <div
                className="
                    absolute 
                    left-0 top-1/2 -translate-y-1/2
                    bg-white/60 xl:bg-white/55 
                    pointer-events-none 
                    rounded-br-[30px]
                    xl:w-[1150px] xl:h-[290px]
                    w-[310px] h-[320px]
                "
            ></div>

            {/* ----------- TEXT CONTENT ----------- */}
            <div className="relative z-10 w-full xl:px-16 lg:px-15 md:px-16 px-6 flex flex-col justify-center h-full">
                <h1 className="font-extrabold text-[#122739] text-[30px] xl:text-[48px] leading-tight">
                    {data.title}
                </h1>

                <div className="flex gap-2 text-[14px] xl:text-[16px] flex-wrap mt-2 font-medium">
                    <button onClick={() => router.push("/")} className="hover:text-[#18CE67]">
                        Home
                    </button>

                    {breadcrumbs.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <span>›</span>
                            <button onClick={() => router.push(item.href)}>
                                {item.label}
                            </button>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

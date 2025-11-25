"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const socialIcon = [
    { name: "facebook", link: "/", image: "/social-media-icons/facebook.png" },
    { name: "youtube", link: "/", image: "/social-media-icons/youtube.png" },
    { name: "instagram", link: "/", image: "/social-media-icons/instagram.png" },
    { name: "linkedin", link: "/", image: "/social-media-icons/linkedin.png" },
    { name: "skype", link: "/", image: "/social-media-icons/skype.png" },
];

const slides = [
    {
        desktop: "/images/home/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg",
        mobile: "/images/home/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg",
    },
    {
        desktop: "/images/home/5225ac27-69a9-487b-80a8-664c440656ad.jpg",
        mobile: "/images/home/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg",
    },
    {
        desktop: "/images/home/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg",
        mobile: "/images/home/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg",
    },
    {
        desktop: "/images/home/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg",
        mobile: "/images/home/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg",
    },
    {
        desktop: "/images/home/5225ac27-69a9-487b-80a8-664c440656ad.jpg",
        mobile: "/images/home/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg",
    },
    {
        desktop: "/images/home/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg",
        mobile: "/images/home/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg",
    },
];

export default function HeroSlider() {
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
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
                modules={[EffectFade, Autoplay]}
                className="h-full w-full hero-swiper"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i} className="h-full w-full relative">
                        <Image
                            src={slide.desktop}
                            alt={slide.desktop}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/25" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 lg:px-20 h-full">

                {/* Social Icons */}
                <div className="flex flex-col gap-3">
                    {socialIcon.map((icon, i) => (
                        <a
                            key={i}
                            href={icon.link}
                            className="bg-white p-2 border border-[#18CE67] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                        >
                            <Image
                                src={icon.image}
                                alt={icon.name}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </div>

                {/* Text Content Box */}
                <div className="block bg-white w-[280px] md:w-[500px] lg:w-[650px] p-[30px] lg:p-[50px] rounded-l-[30px] shadow-xl">
                    <p className="text-[16px] text-[#18CE67] mb-2">
                        Welcome to Ruhunu Hospital
                    </p>

                    <h1 className="text-[34px] lg:text-[46px] text-[#003163] font-bold leading-tight mb-4">
                        Exceptional Medical Specialty Healthcare
                    </h1>

                    {/* Buttons */}
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

                    {/* Custom Pagination Dots */}
                    <div className="flex items-center gap-3 mt-6">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goTo(idx)}
                                className={`w-[14px] h-[14px] rounded-full border-2 transition-all duration-200 ${
                                    idx === current
                                        ? "bg-[#18CE67] border-[#18CE67]"
                                        : "bg-gray-200 border-[#18CE67]"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

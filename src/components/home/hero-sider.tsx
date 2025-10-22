"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const socialIcon = [
    { name: "facebook", link: "/", image: "/social-media-icons/facebook.png" },
    { name: "youtube", link: "/", image: "/social-media-icons/youtube.png" },
    { name: "instagram", link: "/", image: "/social-media-icons/instagram.png" },
    { name: "linkedin", link: "/", image: "/social-media-icons/linkedin.png" },
    { name: "skype", link: "/", image: "/social-media-icons/skype.png" },
];

const slides = [
    {
        desktop: "/silder/web/Group1.png",
        mobile: "/silder/mobile/Group1mobile.png",
        title: "Exceptional Medical Specialty Healthcare",
    },
    {
        desktop: "/silder/web/Group2.png",
        mobile: "/silder/mobile/Group2mobile.png",
        title: "Exceptional Medical Specialty Healthcare",
    },
    {
        desktop: "/silder/web/Group3.png",
        mobile: "/silder/mobile/Group3mobile.png",
        title: "Exceptional Medical Specialty Healthcare",
    },
];

export default function HeroSlider() {
    const [[current, direction], setState] = useState<[number, number]>([0, 1]);

    // ✅ Auto Slide — no pause
    useEffect(() => {
        const interval = setInterval(() => {
        setState(([c]) => [(c + 1) % slides.length, 1]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goTo = (index: number) => {
        if (index === current) return;
        setState([index, index > current ? 1 : -1]);
    };

    const next = () => setState(([c]) => [(c + 1) % slides.length, 1]);
    const prev = () => setState(([c]) => [(c - 1 + slides.length) % slides.length, -1]);

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        }),
            center: {
            x: "0%",
            opacity: 1,
            transition: { duration: 0.75, ease: "easeInOut" },
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        },
        exit: (dir: number) => ({
            x: dir > 0 ? "-100%" : "100%",
            opacity: 1,
            transition: { duration: 0.75, ease: "easeInOut" },
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        }),
    };

    const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
        const threshold = 80;
        if (info.offset.x < -threshold) next();
        else if (info.offset.x > threshold) prev();
    };

    return (
        <section
        className="relative h-dvh w-full overflow-hidden"
        aria-label="Hero slider"
        >
        {/* Background Slides */}
        <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    // variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0"
                    style={{ touchAction: "pan-y" }}
                >
                    {/* Desktop */}
                    <div className="hidden md:block relative w-full h-full">
                        <Image
                            src={slides[current].desktop}
                            alt={slides[current].title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Mobile */}
                    <div className="block md:hidden relative w-full h-full">
                        <Image
                            src={slides[current].mobile}
                            alt={slides[current].title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Foreground Content */}
            <div className="relative z-10 flex items-center justify-between px-[10px] md:px-[20px] lg:px-[50px] h-full">
                {/* Social Icons */}
                <div className="flex flex-col gap-3">
                    {socialIcon.map((icons, i) => (
                        <a
                            key={i}
                            href={icons.link}
                            className="bg-white p-[8px] border border-[#18CE67] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                            aria-label={icons.name}
                        >
                            <Image 
                                src={icons.image} 
                                alt={icons.name}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </div>

                {/* Text Box */}
                <div className="block bg-white w-[300px] md:w-[500px] lg:w-[650px] p-[30px] lg:p-[50px] rounded-l-[30px] shadow-xl">
                    <p className="text-[16px] text-[#18CE67] mb-2">Welcome to Ruhunu Hospital</p>
                    <h1 className="text-[34px] lg:text-[46px] text-[#003163] font-bold leading-tight mb-4">
                        {slides[current].title}
                    </h1>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <a href="/" className="w-fit bg-[#18CE67] text-white py-3 px-6 rounded-md font-semibold hover:opacity-95">
                            Doctor Appointment
                        </a>
                        <a href="/" className="w-fit bg-[#003163] text-white py-3 px-6 rounded-md font-semibold hover:opacity-95">
                            View My Lab Reports
                        </a>
                    </div>

                    {/* Nav Dots */}
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

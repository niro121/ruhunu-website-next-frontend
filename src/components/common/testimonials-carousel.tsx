"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../ui/carousel";

export default function TestimonialsCarousel({ testimonials }: any) {
    const [api, setApi] = useState<any>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="relative w-full">
            <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
                <CarouselContent>
                    {testimonials.map((item: any, index: number) => (
                        <CarouselItem
                            key={index}
                            className="basis-full md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-[25px] md:p-[26px] lg:p-[32px] bg-white w-full flex flex-col h-[320px] shadow-[0_3px_6px_#00000029,0_3px_6px_#00000029]">

                                <div className="grid grid-cols-8 gap-3">
                                    <div className="col-span-2">
                                        {item.image ? (
                                            <Image width={65} height={65} src={item.image} alt="" />
                                        ) : (
                                            <div className="w-[65px] h-[65px] bg-[#f4f9fd] flex items-center justify-center font-bold">
                                                {item.name?.slice(0, 2).toUpperCase()}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-span-6">
                                        <p className="text-[20px] font-semibold">{item.name}</p>
                                        <p className="text-[16px]">{item.designation}</p>

                                        <div className="flex gap-1">
                                            {Array.from({ length: item.rating }, (_, i) => (
                                                <svg key={i} viewBox="0 0 24 24" fill="#FFD700" className="w-3 h-3">
                                                <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.87 1.402-8.168L.132 9.211l8.2-1.193L12 .587z"/>
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[12px] md:text-[13px] p-[16px]">
                                    <p>{item.testimonial}</p>
                                </div>

                                <div className="flex justify-end mt-auto">
                                    <Image src="/images/home/colean.png" alt="" width={36} height={27}/>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* ✅ Mobile Nav Dots */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
                {Array.from({ length: count }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => api?.scrollTo(i)}
                        className={`h-2.5 rounded-full transition-all border border-[#122739] w-2.5 m-[5px] ${
                            current === i ? "bg-[#122739]" : "bg-transparent"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

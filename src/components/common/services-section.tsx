"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getAllServices } from "@/actions/services.action";

type OurServicesProps = {
    data: any;
    services: any;
};

export default function Services({ data,services }: OurServicesProps) {
    const [visibleCount, setVisibleCount] = useState(8);
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 8);
    };

    if (!services || services.length === 0) {
        return null;
    }

    const visibleServices = services.slice(0, visibleCount);

    console.log("link : ",data.link);

    return (
        <div
            className="bg-[#f4f9fd] px-[10px] md:px-[20px] lg:px-[50px]"
            style={{
                backgroundColor: data.bg_color || "#f4f9fd",
                paddingTop: data.padding_top || "70px",
                paddingBottom: data.padding_bottom || "70px",
            }}
        >
            <div className="text-center">
                <p className="text-[16px] mb-[16px] text-[#18CE67]">Our Services</p>
                <h1 className="text-[40px] text-[#122739] font-bold">
                    Our Healthcare <span className="text-[#18CE67]">Services</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] mt-[48px]">
                {visibleServices.map((service:any, index: number) => (
                    <a key={index} href={service.slug} className="group shadow-[2px_3px_6px_#00000029]">
                        <div
                            className="
                                bg-white px-[25px] py-[40px] flex flex-col items-center text-center
                                h-full min-h-[260px] hover:bg-[#122739] transition-all duration-300
                            "
                        >
                            <div className="bg-[#d8ffea] p-[20px] rounded-full">
                                <Image
                                    src={
                                        service.image && service.image.startsWith("http")
                                        ? service.image
                                        : "/images/placeholder.png"
                                    }
                                    width={35}
                                    height={35}
                                    alt="icon"
                                />
                            </div>

                            <h1 className="mt-[24px] mb-[8px] text-[16px] font-semibold text-[#122739] group-hover:text-[#18CE67] transition-colors duration-300 text-center">
                                {service.name}
                            </h1>
                        </div>
                    </a>
                ))}
            </div>

            {visibleCount < services.length && (
                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            if (data?.link) {
                                window.location.href = data.link; 
                            } else {
                                handleLoadMore();
                            }
                        }}
                        className="bg-[#18CE67] border border-[#18CE67] hover:bg-[#122739] hover:border-[#122739] text-white text-[15px] px-[50px] py-[15px] mt-[80px] rounded-[6px] font-bold transition-all duration-300"
                    >
                        More Services
                    </button>
                </div>
            )}
        </div>
    );
}

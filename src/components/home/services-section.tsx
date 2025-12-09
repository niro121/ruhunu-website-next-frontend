"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getAllServices } from "@/actions/services.action";

type OurServicesProps = {
    data: any;
};

export default function OurServices({ data }: OurServicesProps) {
    const [visibleCount, setVisibleCount] = useState(8);
    const [serviceData, setServiceData] = useState<any[]>([]);

    useEffect(() => {
        const fetchServices = async () => {
            const services = await getAllServices();
            setServiceData(services || []);
        };
        fetchServices();
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 8);
    };

    if (!serviceData || serviceData.length === 0) {
        return null;
    }

    const visibleServices = serviceData.slice(0, visibleCount);

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
                {visibleServices.map((service, index) => (
                    <a key={index} href={service.slug} className="group">
                        <div
                            className="
                                bg-white px-[25px] py-[40px] flex flex-col items-center text-center
                                h-full min-h-[260px] hover:bg-[#122739] transition-all duration-300
                            "
                        >
                            <div className="bg-[#d8ffea] p-[20px] rounded-full">
                                {/* {service.image ? (
                                    <Image
                                        src={service.image}
                                        width={35}
                                        height={35}
                                        alt="icon"
                                    />
                                ) : (
                                    <div className="w-[35px] h-[35px] bg-gray-200 rounded"></div>
                                )} */}
                            </div>

                            <h1 className="mt-[24px] mb-[8px] text-[16px] font-semibold text-[#122739] group-hover:text-[#18CE67] transition-colors duration-300 text-center">
                                {service.name}
                            </h1>
                        </div>
                    </a>
                ))}
            </div>

            {visibleCount < serviceData.length && (
                <div className="flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        className="bg-[#18CE67] border border-[#18CE67] hover:bg-[#122739] hover:border-[#122739] text-white text-[15px] px-[50px] py-[15px] mt-[80px] rounded-[6px] font-bold transition-all duration-300"
                    >
                        More Services
                    </button>
                </div>
            )}
        </div>
    );
}

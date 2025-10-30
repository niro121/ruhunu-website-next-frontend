"use client";

import { useState } from "react";
import Image from "next/image";

const serviceData = [
    { link: "/", image: "/images/home/8.png", heading: "Ruhunu Surgical Center" },
    { link: "/", image: "/images/home/9.png", heading: "Ruhunu Wellness Center" },
    { link: "/", image: "/images/home/10.png", heading: "Ruhunu Maternity Center" },
    { link: "/", image: "/images/home/11.png", heading: "Ruhunu Radiology Department" },
    { link: "/", image: "/images/home/12.png", heading: "Ruhunu Outpatient Department (OPD) and ETU Center" },
    { link: "/", image: "/images/home/13.png", heading: "Ruhunu Dental Clinic" },
    { link: "/", image: "/images/home/8.png", heading: "Ruhunu Eye Care Unit" },
    { link: "/", image: "/images/home/9.png", heading: "Ruhunu Physiotherapy Department" },
    { link: "/", image: "/images/home/10.png", heading: "Ruhunu Pharmacy" },
    { link: "/", image: "/images/home/11.png", heading: "Ruhunu Laboratory" },
    { link: "/", image: "/images/home/12.png", heading: "Ruhunu Counseling Center" },
    { link: "/", image: "/images/home/13.png", heading: "Ruhunu Nutrition Unit" },
    { link: "/", image: "/images/home/8.png", heading: "Ruhunu Child Care Center" },
    { link: "/", image: "/images/home/9.png", heading: "Ruhunu Orthopedic Unit" },
    { link: "/", image: "/images/home/10.png", heading: "Ruhunu ENT Clinic" },
    { link: "/", image: "/images/home/11.png", heading: "Ruhunu Cardiology Center" },
];

export default function OurServices() {
    const [visibleCount, setVisibleCount] = useState(8);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 8);
    };

    const visibleServices = serviceData.slice(0, visibleCount);

    return (
        <div className="bg-[#f4f9fd] py-[70px] px-[10px] md:px-[20px] lg:px-[50px]">
            <div className="text-center">
                <p className="text-[16px] mb-[16px] text-[#18CE67]">Our Services</p>
                <h1 className="text-[40px] text-[#122739] font-bold">
                    Our Healthcare <span className="text-[#18CE67]">Services</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] mt-[48px]">
                {visibleServices.map((data, index) => (
                    <a key={index} href={data.link} className="group">
                        <div className="bg-white px-[25px] py-[40px] flex flex-col items-center text-center h-full min-h-[260px] hover:bg-[#122739] transition-all duration-300 shadow-[2px_3px_6px_#00000029]">
                            <div className="bg-[#d8ffea] p-[20px] rounded-full">
                                <Image
                                    src={data.image}
                                    width={35}
                                    height={35}
                                    alt="icon"
                                />
                            </div>

                            <h1 className="mt-[24px] mb-[8px] text-[16px] font-semibold text-[#122739] group-hover:text-[#18CE67] transition-colors duration-300 text-center">
                                {data.heading}
                            </h1>
                        </div>
                    </a>
                ))}
            </div>

            {/* Show button only if more items remain */}
            {visibleCount < serviceData.length && (
                <div className="flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        className="bg-[#18CE67] border border-[#18CE67] hover:bg-[#122739] hover:border-[#122739] text-white text-[15px] px-[50px] py-[15px] mt-[80px] rounded-[6px] font-bold transition-all duration-300">
                        More Services
                    </button>
                </div>
            )}
        </div>
    );
}

"use client";
import React from "react";
import Image from "next/image";

interface OverViewProps {
  imageSrc?: string;
}

export default function Overview({
  imageSrc = "/images/ntsoverview.jpg", // replace with your actual path
}: OverViewProps) {
  return (
    <section className="xl:px-32 px-4 xl:py-16 py-16 bg-white">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Right Side - Text (goes first on mobile, second on desktop) */}
        <div className="flex flex-col xl:order-2 order-1 xl:justify-center">
          <p className="text-[#18CE67] font-medium xl:text-[16px] text-[13px] tracking-wide xl:text-start text-center">
            Overview
          </p>

          <h1 className="text-[#122739] font-extrabold xl:text-[40px] text-[20px] leading-snug text-start mt-4">
            Ruhunu Hospital College Of{" "}
            <span className="text-[#18CE67]">Nursing</span>
          </h1>

          <p className="text-black text-[13px] xl:text-[16px] xl:leading-8 leading-6 font-normal xl:mt-8 mt-4 text-start">
            The Ruhunu hospital College of Nursing was established initially in
            the year 2017 by Ruhunu Hospitals (Pvt) Ltd. Since its inception
            until 2023, 8 batches of qualified nurses have passed out from the
            college and are now working locally and abroad.
          </p>

          <p className="text-black text-[13px] xl:text-[16px] xl:leading-8 leading-6 font-normal xl:mt-4 mt-4 text-start">
            The Nursing College offers a 1-year, 3-months nursing program. The
            teaching staff consists of professional tutors. All nursing students
            receive clinical training at Ruhunu Hospital (Pvt) Ltd. The Ruhunu
            Hospitals college of Nursing will grant the Nursing certificate upon
            successful completion of the 15-month curriculum. The TVEC will also
            award students with the{" "}
            <span className="font-bold text-black xl:text-[16px] text-[12px]">
              NVQ Level 04
            </span>{" "}
            Nursing Qualification at the completion of the course.
          </p>
        </div>

        {/* Left Side - Image (below text on mobile, left on desktop) */}
        <div className="w-full xl:order-1 order-2 flex justify-center">
          <div className="relative w-full xl:w-[610px] h-[250px] sm:h-[320px] xl:h-[500px] overflow-hidden">
            <Image
              src={imageSrc}
              alt="Nursing Students"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

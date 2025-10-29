"use client";
import React from "react";
import Image from "next/image";

export default function NursingBanner() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-[400px] xl:h-[300px]">
        <Image
          src="/images/ntsbanner.png"
          alt="Nursing Banner"
          fill
          priority
          className="xl:object-fill object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="grid grid-cols-12 xl:px-32 px-6 gap-4 xl:flex-col flex-row">
          {/* Left Side Content */}
          <div className="col-span-12 xl:col-span-7">
            <h2 className="text-white font-extrabold xl:text-[36px] text-[22px] leading-snug max-w-2xl">
              Empowering Nurses, Transforming Healthcare.
            </h2>
            <p className="text-white xl:text-[16px] text-[13px] xl:mt-2 mt-4 leading-relaxed max-w-xl">
              Ruhunu Hospital&apos;s Nursing Training School offers comprehensive
              education and hands-on experience to aspiring nurses!
            </p>
          </div>

          {/* Right Side Button */}
          <div className="col-span-12 xl:col-span-5 flex xl:justify-end justify-start xl:items-center mt-4 xl:mt-0">
            <button className="bg-[#18CE67] hover:bg-[#122739] text-white xl:w-[125px] xl:h-[50px] w-[100px] h-[46px] font-normal xl:text-[16px] text-[14px] px-6 py-3 rounded-[5px] shadow-lg transition-all duration-300">
              Apply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

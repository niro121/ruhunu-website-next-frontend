"use client";

import React from "react";
import Image from "next/image";

export default function RhdApplication() {
  return (
    <div className="bg-[#30c47019] w-full xl:h-[595px] h-auto xl:mt-6 xl:-mb-16 -mb-16 mt-6">
      {/* Title */}
      <h1 className="text-center font-extrabold xl:text-[40px] text-[28px] text-black xl:pt-14 pt-10 mb-10">
        Laboratory - <span className="text-[#18CE67]">RHD Application</span>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-8 items-center text-center justify-center px-6 xl:px-60 xl:py-4">
        {/* Left Section */}
        <div className="col-span-12 xl:col-span-6 flex flex-col gap-8 xl:px-6 xl:text-left text-start">
          {/* Features Title */}
          <h2 className="xl:text-[22px] text-[18px] font-extrabold text-[#071017]">
            Features
          </h2>

          {/* Features List */}
          <ul className="space-y-3 text-[#071017] text-[16px] leading-relaxed">
            <li className="flex items-start gap-2 justify-start xl:justify-start">
              <span className="w-2 h-2 mt-2 bg-[#18CE67] rounded-full"></span>
              <span>Only pathology reports are accessible</span>
            </li>
            <li className="flex items-start gap-2 justify-start xl:justify-start">
              <span className="w-2 h-2 mt-2 bg-[#18CE67] rounded-full"></span>
              <span>View your reports with one click</span>
            </li>
            <li className="flex items-start gap-2 justify-start xl:justify-start">
              <span className="w-2 h-2 mt-2 bg-[#18CE67] rounded-full"></span>
              <span>Ability to print, e-mail or save your reports</span>
            </li>
          </ul>

          {/* Download Section */}
          <div className="flex flex-col gap-5 mt-2">
            <h3 className="xl:text-[24px] text-[18px] font-extrabold text-[#071017]">
              Now Available On
            </h3>
            <div className="flex justify-start xl:justify-start items-center gap-4 flex-wrap">
              <a href="#" aria-label="App Store">
                <Image
                  src="/images/7.png"
                  alt="App Store"
                  width={140}
                  height={45}
                  className="object-contain xl:w-[153.75px] xl:h-[45px]"
                />
              </a>
              <a href="#" aria-label="Google Play">
                <Image
                  src="/images/8.png"
                  alt="Google Play"
                  width={140}
                  height={45}
                  className="object-contain xl:w-[151.88px] xl:h-[45px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Mobile Mockup) */}
        <div className="col-span-12 xl:col-span-6 flex justify-center xl:justify-center">
          <div className="relative w-auto xl:w-[350px] xl:h-[345px]">
            <Image
              src="/images/9.png"
              alt="RHD App Mobile Preview"
              width={400}
              height={800}
              className="object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
 
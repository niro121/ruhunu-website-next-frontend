"use client";
import React from "react";
import CustomButton from "../common/custombutton";

interface Banner1Props {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

export default function Banner1({
  title = "Online Customer Registration",
  description,
  buttonText = "Customer Registration",
  className = "",
}: Banner1Props) {
  return (
    <section
      className={`flex flex-col bg-[#f4f9fd] xl:py-20 xl:px-32 lg:px-30 md:px-16 sm:px-4 py-10 xl:mt-16 mt-16 ${className}`}
    >
      <div className="grid grid-cols-12 gap-10 items-center">
        {/* Left Content */}
        <div className="col-span-12 xl:col-span-6 space-y-4">
          <h2 className="text-[#122739] font-extrabold xl:text-[34px] text-[26px] leading-snug">
            {title}
          </h2>

          {/* Description only shows if data exists */}
          {description && description.trim() !== "" && (
            <p className="text-black xl:text-[16px] text-[14px] font-normal">
              {description}
            </p>
          )}
        </div>

        {/* Right Side - Button */}
        <div className="col-span-12 xl:col-span-6 flex xl:justify-end justify-start">
          <CustomButton
            className="xl:w-[205px] xl:h-[45px] w-[168px] h-[45px] xl:text-[16px] text-[14px] font-semibold"
            label={buttonText}
          />
        </div>
      </div>
    </section>
  );
}

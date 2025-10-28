"use client";
import React from "react";

export default function ContactInfo() {
  return (
    <section className="xl:px-32 px-4 xl:py-16 py-10">
      {/* Heading */}
      <h1 className="xl:text-[40px] text-[28px] font-extrabold text-[#18CE67] mb-10">
        General <span className="text-black">Info</span>
      </h1>

      {/* Contact Info */}
      <div className="flex flex-col gap-4 text-[16px] text-gray-800">
        {/* Address */}
        <div className="flex flex-row sm:items-start xl:gap-x-6 gap-x-10">
          <p className="font-normal xl:text-[16px] text-[12px] sm:w-[180px]">
            Address
          </p>
          <p className="xl:ml-6">:</p>
          <p className="xl:text-[16px] text-[12px]">
            Ruhunu Hospital (Pvt.) Ltd, Karapitiya, Galle, Sri Lanka
          </p>
        </div>

        {/* General Line */}
        <div className="flex flex-row sm:items-start xl:gap-x-6 gap-x-9">
          <p className="font-normal xl:text-[16px] text-[12px] sm:w-[180px]">
            General Line
          </p>
          <p className="xl:ml-6 -ml-5">:</p>
          <a
            href="tel:+94917694059"
            className="text-black xl:text-[16px] text-[12px] hover:text-[#18CE67]"
          >
            +94 91 7694059 / 60
          </a>
        </div>

        {/* Email */}
        <div className="flex flex-row sm:items-start xl:gap-x-6 gap-x-9">
          <p className="font-normal xl:text-[16px] text-[12px] sm:w-[180px]">
            Email
          </p>
          <p className="xl:ml-6 ml-4">:</p>
          <a
            href="mailto:info@ruhunuhospital.lk"
            className="text-black xl:text-[16px] text-[12px] hover:text-[#18CE67]"
          >
            info@ruhunuhospital.lk
          </a>
        </div>

        {/* Fax */}
        <div className="flex flex-row sm:items-start xl:gap-x-6 gap-x-9">
          <p className="font-normal xl:text-[16px] text-[12px] sm:w-[180px]">
            Fax
          </p>
          <p className="xl:ml-6 ml-7">:</p>
          <a
            href="tel:+94917694061"
            className="text-black xl:text-[16px] text-[12px] hover:text-[#18CE67]"
          >
            +94 91 7694061
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";

export default function NursingCollegeSection() {
  return (
    <section className="flex flex-col xl:mt-16 mt-10">
      {/* Top Section */}
      <div className="grid grid-cols-12 gap-10 items-center">
        {/* Left Side */}
        <div className="col-span-12 space-y-4 xl:px-32 px-4 bg-[#f4f9fd] xl:py-20 py-10">
          <h1 className="text-[#122739] font-extrabold xl:text-[40px] text-[20px] leading-tight">
            Ruhunu{" "}
            <span className="text-[#18CE67]">Hospital College Of Nursing</span>
          </h1>
          <p className="text-black xl:text-[16px] text-[12px] font-normal leading-relaxed xl:mt-6">
            The Ruhunu hospital College of Nursing was established initially in
            the year 2017 by Ruhunu Hospitals (Pvt) Ltd. Since its inception
            until 2023, 8 batches of qualified nurses have passed out from the
            college and are now working locally and abroad.
          </p>
        </div>
      </div>
    </section>
  );
}

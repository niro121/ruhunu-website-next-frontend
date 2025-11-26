"use client";
import React from "react";
import Image from "next/image";

interface OverView1Props {
  imageSrc?: string;
}

export default function Overview1({
  imageSrc = "/images/laboratory/lab-web.jpg",
}: OverView1Props) {
  return (
    <section className="xl:px-32 px-4 xl:py-16 py-12 xl:-mb-16">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        {/* Right Side - Text */}
        <div className="flex flex-col xl:col-span-8 xl:order-2 order-1 xl:justify-center">
          <p className="text-[#18CE67] font-medium xl:text-[16px] text-[13px] tracking-wide xl:text-start text-center">
            Overview
          </p>

          <h1 className="text-[#122739] font-extrabold xl:text-[40px] text-[20px] leading-snug mt-4 xl:text-start text-center">
            Ruhunu Hospital <span className="text-[#18CE67]">Diagnostics</span>
          </h1>

          <p className="text-black text-[13px] xl:text-[16px] xl:leading-8 leading-6 font-normal xl:mt-8 mt-4 text-start">
            Ruhunu Hospitals (Pvt.) Ltd. is a fully fledged private hospital
            which has been in the healthcare industry for the past 30 decade. We
            have been certainly providing an immense service for our clients by
            being pioneers in the Southern Province to have quality and
            affordable healthcare services in the private sector. We have also
            established a well-furnished Laboratory under the name of “Ruhunu
            Hospital Diagnostics” to offer trusted diagnostics service at
            affordable costs for our valued customers.
          </p>

          <p className="text-black text-[13px] xl:text-[16px] xl:leading-8 leading-6 font-normal xl:mt-4 mt-4 text-start">
            Ruhunu Hospital Diagnostics is one of the fully facilitated
            laboratories in Southern Province. RHD provides superlative service
            for our customers with reliable reports. We have expanded our
            service across Galle District and parts of Matara & Hambantota
            through sample collecting centers.
          </p>

          <p className="text-black text-[13px] xl:text-[16px] xl:leading-8 leading-6 font-normal xl:mt-4 mt-4 text-start">
            We provide our valuable service through experienced and qualified
            Phlebotomists and Medical Laboratory Technicians under the guidance
            of specialists. Using the latest fully automated analyzers and EQA
            programs, we guarantee accuracy and quality.
          </p>

          {/* Mobile Only Image */}
          <div className="xl:hidden block mt-16 justify-center">
            <div className="relative w-auto h-[350px] overflow-hidden">
              <Image
                src="/images/lab1-mobile.jpg"
                alt="Ruhunu Hospital Diagnostics"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Left Side - Image (desktop only) */}
        <div className="w-full xl:col-span-4 xl:order-1 order-2 hidden xl:flex mt-6">
          <div className="relative xl:w-[400px] xl:h-[550px] overflow-hidden">
            <Image
              src={imageSrc}
              alt="Ruhunu Hospital Diagnostics"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

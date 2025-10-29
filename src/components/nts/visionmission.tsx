"use client";
import React from "react";
import Image from "next/image";

interface VisionMissionProps {
  imageSrc?: string;
}

export default function VisionMission({
  imageSrc = "/images/ntsimage.jpg", // replace with your actual image path
}: VisionMissionProps) {
  return (
    <section className="xl:px-32 px-4 xl:py-2 py-6">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
        {/* Left Side - Vision & Mission Section */}
        <div className="flex flex-col justify-center gap-14 order-2 xl:order-1 xl:col-span-6 col-span-12">
          {/* Vision */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center xl:justify-end gap-10">
              <div className="xl:w-[455px] xl:h-[2px] w-[240px] h-[2px] bg-[#122739]" />
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/icons/vision.png"
                    alt="Vision Icon"
                    className="xl:w-50 xl:h-50 w-34 h-34 object-contain"
                  />
                </div>
                <h3 className="text-[#122739] font-extrabold xl:text-[24px] text-[22px]">
                  Vision
                </h3>
              </div>
            </div>

            <p className="text-black text-end xl:text-end xl:text-[16.5px] text-[12px] xl:leading-8 leading-6 font-normal">
              Private health care institution required to reach knowledge, skills and
              attitude to provide a best quality nursing service and create to the
              next generation.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center xl:justify-end gap-6">
              <div className="xl:w-[432px] xl:h-[2px] w-[240px] h-[2px] bg-[#122739]" />
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/icons/mission.png"
                    alt="Mission Icon"
                    className="xl:w-50 xl:h-50 w-34 h-34 object-contain"
                  />
                </div>
                <h3 className="text-[#122739] font-extrabold xl:text-[24px] text-[22px]">
                  Mission
                </h3>
              </div>
            </div>

            <p className="text-black text-end xl:text-end xl:text-[16.5px] text-[12px] xl:leading-8 leading-6 font-normal">
              The Mission of the Ruhunu Hospital College of Nursing to be the
              prominent number one leading Nursing College in education, practice
              and service throughout globally, high quality graduates recognized
              for excellence, leadership and care within a highly technological and
              global environment under the guidance and mentor of health care
              professionals.
            </p>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="relative order-2 xl:order-1 xl:col-span-6 col-span-12 w-full xl:w-auto h-[260px] sm:h-[340px] xl:h-[450px] overflow-hidden">
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
    </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";

interface LabVisionMissionValuesProps {
  imageSrc?: string;
}

export default function LabVisionMissionValues({
  imageSrc = "/images/labweb.jpg",
}: LabVisionMissionValuesProps) {
  return (
    <section className="xl:px-32 px-4 xl:py-12 py-8">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Left Side Content */}
        <div className="col-span-12 xl:col-span-8 flex flex-col gap-10 order-2 xl:order-1">
          {/* Vision */}
          <div className="flex flex-col gap-4 items-end text-right">
            <div className="flex items-center justify-end gap-4 w-full">
              <div className="flex-grow h-[2px] bg-[#122739]" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/icons/vision.png"
                    alt="Vision Icon"
                    className="w-[36px] h-[36px] object-contain"
                  />
                </div>
                <h3 className="text-[#122739] font-extrabold text-[22px] xl:text-[24px]">
                  Vision
                </h3>
              </div>
            </div>

            <p className="text-[#122739] text-[14px] xl:text-[16px] leading-7 font-normal max-w-3xl text-justify">
              Be the market leader by becoming the laboratory service provider
              of choice through offering advanced technology, exceptional health
              information delivery, and superior customer services of the
              international standard.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-4 items-end text-right">
            <div className="flex items-center justify-end gap-4 w-full">
              <div className="flex-grow h-[2px] bg-[#122739]" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/icons/mission.png"
                    alt="Mission Icon"
                    className="w-[36px] h-[36px] object-contain"
                  />
                </div>
                <h3 className="text-[#122739] font-extrabold text-[22px] xl:text-[24px]">
                  Mission
                </h3>
              </div>
            </div>

            <p className="text-[#122739] text-[14px] xl:text-[16px] leading-7 font-normal max-w-3xl text-justify">
              To provide quality laboratory diagnostic information to help
              improve the health and wellbeing of the community we serve.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-5 items-end text-right">
            {/* Heading with line */}
            <div className="flex items-center justify-end gap-3 w-full">
              <div className="flex-grow h-[2px] bg-[#122739]" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/icons/values.png"
                    alt="Values Icon"
                    className="w-[36px] h-[36px] object-contain"
                  />
                </div>
                <h3 className="text-[#122739] font-extrabold text-[20px] xl:text-[22px] tracking-wide">
                  Values
                </h3>
              </div>
            </div>

            {/* Content */}
            <ul className="text-[#122739] text-[14px] xl:text-[15px] leading-7 font-normal flex flex-col gap-4 items-start text-justify">
              <li className="flex justify-start items-start gap-2 w-full">
                <span className="text-[#18CE67] xl:text-[30px] text-[25px]">•</span>
                <p className="text-justify xl:text-[16px] text-[14px]">
                  <span className="font-semibold text-[#122739] xl:text-[16px] text-[14px]">
                    Quality –
                  </span>{" "}
                  We strive to exceed the expectations of our customers by
                  committing to deliver quality and value in every aspect of our
                  work.
                </p>
              </li>

              <li className="flex justify-start items-start gap-2 w-full">
                <span className="text-[#18CE67] xl:text-[30px] text-[25px]">•</span>
                <p className="text-justify xl:text-[16px] text-[14px]">
                  <span className="font-semibold text-[#122739] xl:text-[16px] text-[14px]">
                    Compassion –
                  </span>{" "}
                  We provide care with dignity, concern, kindness, and respect
                  for the diversity of our community.
                </p>
              </li>

              <li className="flex justify-start items-start gap-2 w-full">
                <span className="text-[#18CE67] text-[30px]">•</span>
                <p className="text-justify xl:text-[16px] text-[14px]">
                  <span className="font-semibold text-[#122739] xl:text-[16px] text-[14px]">
                    Teamwork –
                  </span>{" "}
                  We foster an atmosphere of trust, collaboration, openness, and
                  cooperation.
                </p>
              </li>

              <li className="flex justify-start items-start gap-2 w-full">
                <span className="text-[#18CE67] xl:text-[30px] text-[25px]">•</span>
                <p className="text-justify xl:text-[16px] text-[14px]">
                  <span className="font-semibold text-[#122739] xl:text-[16px] text-[14px]">
                    Enthusiasm –
                  </span>{" "}
                  We remember that the true meaning of this value is “to be
                  inspired” and we do our jobs with the same spirit and
                  commitment that first inspired us to work in healthcare.
                </p>
              </li>

              <li className="flex justify-start items-start gap-2 w-full">
                <span className="text-[#18CE67] xl:text-[30px] text-[25px]">•</span>
                <p className="text-justify xl:text-[16px] text-[14px]">
                  <span className="font-semibold text-[#122739] xl:text-[16px] text-[14px]">
                    Respect –
                  </span>{" "}
                  We promise to honor the dignity, individuality, and rights of
                  everyone, and to pay particular attention to privacy,
                  confidentiality, and information.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="col-span-12 xl:col-span-4 order-2 xl:order-1 relative w-full h-[600px] xl:w-auto xl:h-[690px]">
          <Image
            src={imageSrc}
            alt="Laboratory Building"
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

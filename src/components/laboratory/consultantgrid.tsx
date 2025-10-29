"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "../common/custombutton";


interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image?: string;
}

const ConsultantGrid: React.FC = () => {
  const allDoctors: Doctor[] = [
    {
      id: 1,
      name: "PROF. GAYA BANDARA",
      specialty: "Microbiologist",
      image: "/images/consultant1.jpg",
    },
    {
      id: 2,
      name: "PROF. CHANDANA WICKRAMARATHNA",
      specialty: "Hematologist",
      image: "/images/consultant2.jpg",
    },
    {
      id: 3,
      name: "DR.(MRS) HARSHANI THABREW",
      specialty: "Consultant Mycologist",
      image: "/images/consultant3.jpg",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      prev + 3 > allDoctors.length ? allDoctors.length : prev + 3
    );
  };

  return (
    <section className="w-full px-4 xl:px-32 py-10 xl:py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-[28px] xl:text-[40px] font-extrabold text-black">
          Our <span className="text-[#18CE67]">Consultant</span>
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {allDoctors.slice(0, visibleCount).map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative w-auto xl:h-[300px] h-[300px] bg-[#f9f9f9] flex items-center justify-center">
              {doctor.image ? (
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-fill"
                />
              ) : (
                <Image
                  src="/images/doctor-placeholder.png"
                  alt="Default Doctor"
                  width={180}
                  height={180}
                  className="opacity-60"
                />
              )}
            </div>

            {/* Info */}
            <div className="p-4 text-center">
              <h3 className="text-[#122739] font-normal xl:text-[16px] text-[14px] uppercase leading-snug">
                {doctor.name}
              </h3>
              <p className="text-[#122739] xl:text-[12px] mt-1 font-semibold ">
                {doctor.specialty}
              </p>
            </div>

            {/* Book Now Button */}
            <div className="px-4 pb-6 flex justify-center">
              <CustomButton
                className="xl:w-[348px] xl:h-[48.1px] w-[259px] h-[45px] xl:text-[16px] font-semibold"
                label="Book Now"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultantGrid;

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

const DoctorGrid: React.FC = () => {
  const allDoctors: Doctor[] = [
    {
      id: 1,
      name: "DR.(MRS) HARSHANI DHARMAWARDENA",
      specialty: "Pediatric Nephrologist",
      image: "/images/doctor5.png",
    },
    {
      id: 2,
      name: "DR.(MRS) LALITHA SENARATH",
      specialty: "Eye Surgeon",
      image: "/images/doctor2.jpg",
    },
    {
      id: 3,
      name: "DR. DIMANTHA DE SILVA",
      specialty: "Genito Urinary Surgeon",
      image: "/images/doctor3.jpg",
    },
    {
      id: 4,
      name: "DR.(MRS) IRESHA HETTIARACHCHI",
      specialty: "Nephrologist",
      image: "/images/doctor4.jpg",
    },
    {
      id: 5,
      name: "DR. NARAYANA",
      specialty: "Ayurvedic",
      image: "/images/doctor5.png",
    },
    {
      id: 6,
      name: "DR. H H L K FERNANDO",
      specialty: "Andrologist",
      image: "/images/doctor6.jpg",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      prev + 3 > allDoctors.length ? allDoctors.length : prev + 3
    );
  };

  return (
    <section className="px-4 xl:px-32 xl:py-16 py-10">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:-mt-10 -mt-6">
        {allDoctors.slice(0, visibleCount).map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-auto xl:h-[380px] h-[300px] bg-[#f9f9f9] flex items-center justify-center">
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

            {/* Book Now */}
            <CustomButton className="xl:w-[348px] xl:h-[48.1px] w-[259px] h-[45px] xl:text-[16px] font-semibold"
              label="Book Now"
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allDoctors.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-[#18CE67] hover:bg-[#122739] text-white font-medium px-8 py-3 rounded-[8px] text-[16px] transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default DoctorGrid;

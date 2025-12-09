"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "../common/custombutton";
import { useRouter } from "next/navigation";

type DoctorGridProps = {
  doctor?: any[];
};

export default function DoctorGrid({ doctor = [] }: DoctorGridProps) {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      prev + 3 >= doctor.length ? doctor.length : prev + 3
    );
  };

  return (
    <section className="px-4 xl:px-16 xl:py-16 py-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:-mt-10 -mt-6">
        {doctor.slice(0, visibleCount).map((d: any) => (
          <div
            key={d.id}
            onClick={() => router.push(`/doctors-list/${d.id}`)}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:scale-[1.02]"
          >
            <div className="relative xl:w-auto xl:h-[296px] w-auto h-[300px] bg-[#f9f9f9] flex items-center justify-center">
              <Image
                src={d.image || "/images/doctor-placeholder.png"}
                alt={d.name || "Doctor"}
                fill={!!d.image}
                width={!d.image ? 180 : undefined}
                height={!d.image ? 180 : undefined}
                className={d.image ? "object-fill" : "opacity-60"}
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-[#122739] font-normal xl:text-[16px] text-[14px] uppercase leading-snug">
                {d.name}
              </h3>
              <p className="text-[#122739] xl:text-[12px] mt-1 font-semibold">
                {d.specialty}
              </p>
            </div>

            <div className="flex justify-center pb-4">
              <CustomButton
                className="xl:w-[348px] xl:h-[48.1px] w-[259px] h-[45px] xl:text-[16px] font-semibold"
                label="Book Now"
              />
            </div>
          </div>
        ))}
      </div>

      {doctor.length > 6 && visibleCount < doctor.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-[#18CE67] hover:bg-[#122739] xl:w-[158.94px] xl:h-[54.1px] w-[390.4px] h-[54.1px] text-white font-medium px-8 py-3 rounded-[8px] text-[16px] transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
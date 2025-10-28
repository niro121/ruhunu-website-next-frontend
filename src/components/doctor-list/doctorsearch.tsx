"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface DoctorSearchProps {
  specialties: string[];
  branches: string[];
}

export default function DoctorSearch({
  specialties,
  branches,
}: DoctorSearchProps) {
  const router = useRouter();

  const [filters, setFilters] = useState({
    doctorName: "",
    specialty: "",
    branch: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.doctorName) params.append("doctorName", filters.doctorName);
    if (filters.specialty) params.append("specialty", filters.specialty);
    if (filters.branch) params.append("branch", filters.branch);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-[#F4F9FD] p-8 xl:px-32 flex flex-col md:flex-row items-center justify-between gap-4 xl:mt-16 xl:mb-16 mt-8 mb-8">
      {/* Doctor Name */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-[#122739] font-normal mb-2 xl:text-[16px] text-[14px]">
          Doctor Name
        </label>
        <input
          type="text"
          name="doctorName"
          value={filters.doctorName}
          onChange={handleChange}
          placeholder="Enter Doctor Name"
          className="bg-white focus:ring-2 text-[#a5a5a5] focus:ring-[#a5a5a5] outline-none p-5 rounded-[5px]"
        />
      </div>

      {/* Specialty */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-[#122739] font-normal mb-2 xl:text-[16px] text-[14px]">
          Specialty
        </label>
        <div className="relative">
          <select
            name="specialty"
            value={filters.specialty}
            onChange={handleChange}
            className="appearance-none bg-white focus:ring-2 text-[#a5a5a5] focus:ring-[#a5a5a5] outline-none p-5 rounded-[5px] w-full pr-10"
          >
            <option value="">Select Specialty</option>
            {specialties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          
          {/* Custom arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#122739] pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Branch */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-[#122739] font-normal mb-2 xl:text-[16px] text-[14px]">
          Branch
        </label>
        <div className="relative">
          <select
            name="branch"
            value={filters.branch}
            onChange={handleChange}
            className="appearance-none bg-white focus:ring-2 text-[#a5a5a5] focus:ring-[#a5a5a5] outline-none p-5 rounded-[5px] w-full pr-10"
          >
            <option value="">Select Branch</option>
            {branches.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {/* Custom arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#122739] pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Search Button (Desktop/Tablet) */}
      <button
        onClick={handleSearch}
        className="hidden md:flex bg-[#18CE67] xl:mt-8 xl:w-[76px] xl:h-[60px] hover:bg-[#3bd57e] transition-colors duration-300 rounded-[5px] p-3 items-center justify-center text-white"
      >
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>

      {/* Search Button (Mobile) */}
      <button
        onClick={handleSearch}
        className="block md:hidden bg-[#18CE67] text-white font-semibold py-4 px-6 rounded-[5px] w-full mt-2 hover:bg-[#3bd57e] transition-colors duration-300"
      >
        Search
      </button>
    </div>
  );
}

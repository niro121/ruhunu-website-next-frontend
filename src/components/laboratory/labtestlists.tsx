"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Test {
  id: number;
  code: string;
  name: string;
}

const testCategories = [
  "RHDBC: BioChemistry",
  "RHDIM: Immunillogy",
  "RHDHM: Haematology",
  "RHDSR: Serology",
  "RHDMC: Microbiology",
  "LAB",
];

const testData: Test[] = [
  { id: 108, code: "LAB331", name: "SERUM- CREATININE (BELOW 18 YEARS)" },
  { id: 82, code: "LAB334", name: "PLEURAL FLUID CULTURE + ABST" },
  { id: 3, code: "LAB347", name: "ASCITIC FLUID FOR CULTURE + ABST" },
  { id: 169, code: "NL-00022", name: "24 Hours Urine Protein" },
  { id: 64, code: "OL01801", name: "LDH" },
  { id: 8, code: "RHDBC00001", name: "Bence Jones Protein" },
  { id: 17, code: "RHDBC00003", name: "Bone Profile" },
  { id: 21, code: "RHDBC00006", name: "Cardiac Enzyme" },
];

export default function LabTestList() {
  // Set default state to "closed"
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-auto px-8 xl:px-32 py-8 xl:py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-[28px] xl:text-[40px] font-extrabold text-black">
          Lab Test <span className="text-[#18CE67]">Lists</span>
        </h2>
      </div>

      {/* Collapsible Section */}
      <div className="overflow-hidden">
        {/* Dropdown Header */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#f4f9fd] cursor-pointer flex justify-between items-center px-6 py-4 xl:h-[77px] h-[60px]"
        >
          <h3 className="font-medium text-[16px] xl:text-[20px] text-black">
            Test List
          </h3>
          <ChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            size={20}
          />
        </div>

        {/* Dropdown Body */}
        {isOpen && (
          <div className="xl:py-6 py-4 bg-white">
            {/* Category List */}
            <div className="space-y-1 xl:mb-6 xl:mt-6 mt-4">
              {testCategories.map((cat, index) => (
                <p
                  key={index}
                  className="text-black xl:text-[16px] text-[14px] sm:text-base font-normal"
                >
                  {cat}
                </p>
              ))}
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto border border-gray-200 xl:mt-16 mt-8">
              {/* Table Rows */}
              {testData.map((test) => (
                <div
                  key={test.id}
                  className="grid grid-cols-3 border-b border-gray-200 text-gray-700 text-left"
                >
                  <div className="p-3 border-r border-gray-300 xl:text-[16px] text-[12px] font-normal">
                    {test.id}
                  </div>
                  <div className="p-3 border-r border-gray-300 xl:text-[16px] text-[12px] font-normal">
                    {test.code}
                  </div>
                  <div className="p-3 xl:text-[16px] text-[11px] font-normal">
                    {test.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

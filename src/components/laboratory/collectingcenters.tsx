"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Center {
  area: string;
  center: string;
  address: string;
  contact: string;
}

const collectingCenters: Center[] = [
  {
    area: "Akurassa",
    center: "Bogahagoda Medi Lab",
    address: "Galle Rd, Bogahagoda",
    contact: "773181977",
  },
  {
    area: "Akurassa",
    center: "DR.Susantha - Bogahagoda",
    address: "Akurassa Rd, Bogahagoda",
    contact: "772988401",
  },
  {
    area: "Akurassa",
    center: "Dakshina Medi Lab",
    address: "Dakshina Medi Lab, Imaduwa Road, Walpola",
    contact: "775756312",
  },
  {
    area: "Akurassa",
    center: "Health Medi Care Center (Imaduwa)",
    address: "No.03 Akurassa Road, Imaduwa",
    contact: "765388285",
  },
  {
    area: "Akurassa",
    center: "Imaduwa Medi Lab",
    address: "Galle Rd, Imaduwa (Near Ramya Book Shop)",
    contact: "773181977",
  },
  {
    area: "Akurassa",
    center: "Logic Medi Lab - Akurassa",
    address: "Galle Road, Akurassa",
    contact: "718194374",
  },
  {
    area: "Akurassa",
    center: "Reliable Medi Diagnostic Service Wawlugala",
    address: "Imaduwa Rd, Wawlugala",
    contact: "773181977",
  },
  {
    area: "Ambalangoda",
    center: "Baddegama Medical Laboratory",
    address: "In front of the base hospital, galle road, baddegama.",
    contact: "773181977 / 0760696930",
  },
  {
    area: "Ambalangoda",
    center: "Bio Medi Lab",
    address: "Bio Medi Lab, Depo Junction, Ambalangoda.",
    contact: "711314299",
  },
  {
    area: "Ambalangoda",
    center: "City Medi Lab - Poddala",
    address: "Balagoda Junction,Galle Road,Poddala",
    contact: "773181977 / 0771601417",
  },
  {
    area: "Ambalangoda",
    center: "City Medi Lab Pelawaththa",
    address: "City Medi Lab, Hevissa Road, Pelawaththa",
    contact: "713064621",
  },
  {
    area: "Ambalangoda",
    center: "Dr.Lalith Abeykoon Medical Center Baddegama",
    address: "Wellawala, Baddegama",
    contact: "768472371",
  },
  {
    area: "Ambalangoda",
    center: "Family Medi care (Pitigala)",
    address: "Family Medi care pitigala",
    contact: "775612009",
  },
];

export default function CollectingCenters() {
  const [isOpen, setIsOpen] = useState(false);

  const groupedCenters = collectingCenters.reduce((groups, center) => {
    if (!groups[center.area]) groups[center.area] = [];
    groups[center.area].push(center);
    return groups;
  }, {} as Record<string, Center[]>);

  return (
    <section className="w-auto px-6 xl:px-32 py-16 xl:py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-[27px] xl:text-[40px] font-extrabold text-black">
          Our Collecting <span className="text-[#18CE67]">Centers</span>
        </h2>
      </div>

      {/* Collapsible Section */}
      <div className="overflow-hidden">
        {/* Header row */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#f4f9fd] cursor-pointer flex justify-between items-center px-6 py-4 xl:h-[77px] h-[60px] transition-all"
        >
          <h3 className="font-semibold text-[16px] xl:text-[20px] text-[#071017]">
            Collecting Centers
          </h3>
          <ChevronDown
            className={`transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            size={20}
          />
        </div>

        {/* Collapsible content */}
        <div
          className={`transition-all duration-500 ${
            isOpen
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div className="overflow-x-auto xl:mt-10 mt-6">
            <table className="min-w-full border border-gray-200 text-[14px] xl:text-[16px]">
              <thead>
                <tr className="bg-white text-black font-semibold">
                  <th className="border border-gray-200 px-4 py-3 text-center">
                    Area
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center">
                    Collecting Center
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center">
                    Address
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center">
                    Contact No.
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {Object.entries(groupedCenters).map(([area, centers]) =>
                  centers.map((center, index) => (
                    <tr
                      key={`${area}-${index}`}
                      className="bg-[#f9fcfe] text-gray-700"
                    >
                      {/* Merge same area rows */}
                      {index === 0 && (
                        <td
                          rowSpan={centers.length}
                          className="border border-gray-200 px-4 py-3 font-normal align-top bg-[#f9fcfe]"
                        >
                          {area}
                        </td>
                      )}
                      <td className="border border-gray-200 px-4 py-3">
                        {center.center}
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        {center.address}
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        {center.contact}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

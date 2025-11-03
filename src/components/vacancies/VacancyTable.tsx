"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button1 from "../global/Buttons/Button1";

interface Vacancy {
  role: string;
  location: string;
  closingDate: string;
}

interface VacancyTableProps {
  data: Vacancy[];
}

const VacancyTable: React.FC<VacancyTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Generate clean URL from role name
  const createLink = (role: string) =>
    `/vacancies/${role.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}`;

  // Pagination 
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="w-full flex flex-col items-center text-center">
      <div className="w-full max-w-6xl px-1 sm:px-2 md:px-8 my-6 md:my-12">
        <div className="overflow-x-auto shadow-sm">
          <table className="w-full text-sm sm:text-base border-collapse">
            <thead>
              <tr className="bg-[#D8FFEA] text-[#18CE67] font-semibold text-xs sm:text-sm">
                <th className="py-2 sm:py-3 px-2 sm:px-4 font-medium">Role</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 font-medium">Location</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 font-medium">Closing Date</th>
                <th className="py-2 sm:py-3"></th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((job, index) => {
                const jobLink = createLink(job.role);
                return (
                  <tr
                    key={index}
                    className={`text-black ${
                      index % 2 === 0 ? "bg-white" : "bg-[#F4F9FD]"
                    }`}
                  >
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">
                      <Link href={jobLink}>
                        <p className="transition-transform duration-200 hover:scale-105 font-medium hover:font-bold">
                          {job.role}
                        </p>
                      </Link>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">
                      {job.location}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">
                      {job.closingDate}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <Button1 text="Apply" url={`${jobLink}?apply=true`} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8 text-sm sm:text-base">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-lg sm:text-xl px-2 disabled:opacity-40"
        >
          ‹
        </button>

        {/* Page Indicators */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-md text-white font-medium transition-all ${
              currentPage === page
                ? "bg-[#1DCE69]"
                : "bg-[#122739] hover:bg-[#1DCE69]/80"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-lg sm:text-xl px-2 disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default VacancyTable;

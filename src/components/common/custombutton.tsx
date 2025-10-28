"use client";
import React from "react";

interface CustomButtonProps {
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function CustomButton({
  label,
  className = "",
  type = "button",
}: CustomButtonProps) {
  return (
    <div className="pb-4 flex justify-center">
      <button
        type={type}
        className={`xl:w-[210.78px] xl:h-[48.1px] w-[131.7px] h-[45.6px] bg-[#18CE67] hover:bg-[#122739] text-white text-[14px] font-medium py-3 rounded-[5px] transition-colors duration-300 ${className}`}
      >
        {label}
      </button>
    </div>
  );
}

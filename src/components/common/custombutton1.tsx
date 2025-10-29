"use client";
import React from "react";

interface CustomButton1Props {
  label: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  fontSize?: string;
  className?: string;
}

const CustomButton1: React.FC<CustomButton1Props> = ({
  label,
  onClick,
  width = "xl:w-[230px]",
  height = "xl:h-[46.6px]",
  textColor = "text-[#18CE67]",
  borderColor = "border-[#18CE67]",
  hoverBgColor = "hover:bg-[#18CE67]",
  hoverTextColor = "hover:text-white",
  fontSize = "xl:text-[16px] text-[14px]",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`border ${borderColor} ${textColor} ${hoverBgColor} ${hoverTextColor} ${width} ${height} ${fontSize} font-semibold px-6 py-3 rounded-md transition-all duration-300 ${className}`}
    >
      {label}
    </button>
  );
};

export default CustomButton1;

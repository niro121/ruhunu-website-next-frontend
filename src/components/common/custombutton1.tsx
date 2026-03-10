"use client";
import React from "react";
import Link from "next/link";

interface CustomButton1Props {
  label: string;
  width?: string;
  height?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  fontSize?: string;
  className?: string;
  href?: string;
}

const CustomButton1: React.FC<CustomButton1Props> = ({
  label,
  href,
  width = "xl:w-[230px]",
  height = "xl:h-[46.6px]",
  textColor = "text-[#18CE67]",
  borderColor = "border-[#18CE67]",
  hoverBgColor = "hover:bg-[#18CE67]",
  hoverTextColor = "hover:text-white",
  fontSize = "xl:text-[16px] text-[14px]",
  className = "",
}) => {
  const baseStyles = `border ${borderColor} ${textColor} ${hoverBgColor} ${hoverTextColor} ${width} ${height} ${fontSize} font-semibold px-6 py-3 rounded-sm transition-all duration-300 ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {label}
      </Link>
    );
  }
};

export default CustomButton1;
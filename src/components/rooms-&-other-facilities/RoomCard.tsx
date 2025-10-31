import React from "react";
import Link from "next/link";

interface RoomCardProps {
  image: string;
  title: string;
  hoverText: string;
  link: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ image, title, hoverText, link }) => {
  return (
    <Link
      href={link || "#"}
      className="block bg-[#F4F9FD] shadow-md overflow-hidden text-center transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Image Section */}
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300 py-33">
          <span className="text-black text-lg font-medium">{hoverText}</span>
        </div>
      </div>

      {/* Text Section */}
      <div className="py-4">
        <h5 className="text-[#18CE67] text-[20px] font-extrabold mb-2">{title}</h5>
        <p className="mb-6">
          <span className="text-md text-black font-medium hover:underline">
            View More
          </span>
        </p>
      </div>
    </Link>
  );
};

export default RoomCard;

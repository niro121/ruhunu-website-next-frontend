"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type NewsCardProps = {
  imageSrc: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

const NewsCard = ({ imageSrc, title, date, description, link }: NewsCardProps) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(link)} className="flex flex-col md:flex-row bg-white shadow-md overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.01] p-5">
      {/* Image */}
      <div className="relative w-full md:w-110 h-60 md:h-90">
        <Image src={imageSrc} alt={title} fill className="object-cover"/>
      </div>

      {/* Content */}
      <div className="w-full md:w-3/4 px-6 py-6 flex flex-col text-[#122739]">
        <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-6">{title}</h3>
        <p className="text-md mb-6 font-semibold">{date}</p>
        <p className="text-base mb-4 line-clamp-3">{description}</p>
        <span className="text-[#18CE67] text-sm font-medium hover:underline">Read More »</span>
      </div>
    </div>
  );
};

export default NewsCard;
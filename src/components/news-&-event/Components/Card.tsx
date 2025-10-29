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
      <div className="relative w-full md:w-1/4 h-20 md:h-70">
        <Image src={imageSrc} alt={title} fill className="object-cover"/>
      </div>

      {/* Content */}
      <div className="w-full md:w-3/4 p-6 flex flex-col justify-center text-[#122739]">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-2">{title}</h3>
        <p className="text-md mb-3 font-semibold">{date}</p>
        <p className="text-base mb-4 line-clamp-3">{description}</p>
        <span className="text-[#18CE67] font-medium hover:underline">Read More »</span>
      </div>
    </div>
  );
};

export default NewsCard;
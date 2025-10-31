import React from "react";
import Image from "next/image";

interface FacilityCardProps {
  image: string;
  title: string;
  content: string; 
}

const FacilityCard: React.FC<FacilityCardProps> = ({ image, title, content }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-102">
      {/* Image Section */}
        <div className="relative w-full h-65 flex-shrink-0">
            <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
        </div>

      {/* Scrollable Text Section */}
        <div className="flex flex-col flex-1 overflow-scroll no-scrollbar py-6 px-3 md:px-0 text-center">
            <h3 className="text-md font-semibold mb-3 text-[#122739]" >
                {title}
            </h3>

            <div className="text-sm text-black leading-relaxed flex-1 px-5" dangerouslySetInnerHTML={{ __html: content }}/>
        </div>
    </div>
  );
};

export default FacilityCard;

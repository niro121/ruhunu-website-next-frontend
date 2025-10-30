import Image from "next/image";
import Link from "next/link";

interface HospitalCardProps {
  image: string;
  title: string;
  location: string;
  tel: string;
  link: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  image,
  title,
  location,
  tel,
  link,
}) => {
  return (
    <div className="bg-[#f4f9fd] rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="w-full h-56 relative flex-shrink-0">
        <Image src={image} alt={`${title} ${location}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
      </div>

      {/* Content */}
      <div className="p-6 text-center flex flex-col justify-between flex-grow">
        <h5 className="text-[#122739] text-md md:text-lg font-extrabold mb-1 lg:mb-5">
          <Link href={link}>
            {title}{" "}
            <span className="text-[#18CE67]">{location}</span>
          </Link>
        </h5>

        <p className="text-[#122739] text-md md:text-lg mt-auto mb-1 lg:mb-5">
          Tel:{" "}
          <a href={`tel:${tel}`} className="hover:underline">
            {tel}
          </a>
        </p>
      </div>
    </div>
  );
};

export default HospitalCard;
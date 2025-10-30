import Image from "next/image";
import Link from "next/link";

interface FacilityCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export function FacilityCard({
  title,
  imageSrc,
  imageAlt,
  href,
}: FacilityCardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className="
          relative rounded-sm overflow-hidden 
          h-[280px] w-full
          sm:h-[280px]
          md:h-[300px]
          lg:h-[330px]
        "
      >
        <Image
          src={imageSrc || ""}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#0081388E]/90 h-10 md:h-12 flex items-center justify-center">
          <h3 className="text-white text-[16px] md:text-xl lg:text-[20px] font-medium text-center px-4">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

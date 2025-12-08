"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type HospitalCardProps = {
  data: any
}

const HospitalCard: React.FC<HospitalCardProps> = ({data}:HospitalCardProps) => {
  const router = useRouter();

  return (
    <div className="bg-[#f4f9fd] overflow-hidden shadow hover:shadow-md transition-shadow duration-300 flex flex-col h-full rounded-t-[5px]">
      {/* Image */}
      <div className="w-full h-[310px] relative flex-shrink-0">
        <Image src={data.image} alt={`${data.name}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized/>
      </div>

      {/* Content */}
      <div className="py-[15px] flex flex-col justify-between h-[125px] text-center">
        <h5 className="text-[#122739] text-md md:text-lg font-extrabold mx-auto max-w-[250px] leading-tight">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push(`/rh-branches-list/${data.slug}`);
            }}
            className="inline-block"
          >
            {data.name.includes("-") ? (
              <>
                {data.name.split("-")[0].trim()}{" "}
                <span className="text-[#18CE67]">
                  {data.name.split("-")[1].trim()}
                </span>
              </>
            ) : (
              data.name
            )}
          </Link>
        </h5>

        <p className="text-[#122739] text-md md:text-lg">
          Tel:{" "}
          {data.phone?.map((num: string, index: number) => {

            if (index === 0) return <span key={num}>{num}</span>;

            const prev = data.phone[index - 1];
            let display = num;
            
            let i = 0;
            while (i < prev.length && prev[i] === num[i]) i++;
            display = num.slice(i); 

            return <span key={num}>{display}</span>;
          }).reduce((prev : any, curr :any) => [prev, "/", curr])}
        </p>

      </div>
    </div>
  );    
};

export default HospitalCard;
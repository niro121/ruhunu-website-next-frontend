import Image from "next/image";

interface ContactNumberSectionProps {
  contactNumber: string; // or string[] if multiple numbers
}

export default function ContactNumberSection ({ contactNumber }: ContactNumberSectionProps) {
    return (
        <div className="bg-[#f4f9fd] py-[48px] px-[10px] md:px-[20px] lg:px-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-2">
                    <Image
                        src="/phone.png"
                        width={31}
                        height={31}
                        alt={""}
                        className=""
                    />
                </div>
                <div className="col-span-10">
                    <h1 className="text-[#18ce67] text-[20px] font-bold">Call us</h1>
                    <h1 className="text-[20px] text-[#122739] font-bold"><a href={`tel:${contactNumber}`}>{contactNumber}</a></h1>
                </div>
            </div>
        </div>
    )
}
import { fetchDoctorById } from "@/actions/docter.action";
import { fetchPage } from "@/actions/page.action";
import Hero from "@/components/common/hero";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function DoctorsDetailsPage (props: {params: { id: string}}) {

    const { id } = props.params;

    const page = await fetchPage("docter-details");
    const data = await fetchDoctorById(id);
        
    if (!page || !page.visibility) return notFound();
        
    // Find Hero section
    const heroSection = page.sections?.find(
        (section: any) => section.type === "Hero"
    );

    return (
        <div>
            {heroSection && (
                <Hero layout={heroSection.layout} data={heroSection.data} />
            )}
            {data && (
                <>
                    <div className="pt-[70px] px-[10px] md:px-[20px] lg:px-[50px] grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Image */}
                        <div className="h-[420px] w-full relative">
                            <Image 
                                src={data.image} 
                                alt={data.name}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex flex-col justify-center col-span-2">
                            <h1 className="text-[30px] font-semibold mb-[20px]">{data.name}</h1>
                            <div className="mb-[10px]">
                                <p className="mb-[3px]">Speciality</p>
                                {data.speciality && (
                                    <p className="mb-[8px] text-[#18ce67] font-semibold">{data.speciality}</p>
                                )}
                            </div>
                            <div className="">
                                <p className="mb-[3px]">Branch</p>
                                {data.branch && (
                                    <p className="mb-[8px] text-[#18ce67] font-semibold">{data.branch}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center pt-[64px] pb-[70px]">
                        <button
                            className="bg-[#18CE67] border border-[#18CE67] hover:bg-[#122739] hover:border-[#122739] text-white text-[15px] px-[50px] py-[15px] rounded-[6px] font-bold transition-all duration-300"
                        >
                            Book Now
                    </button>
                    </div>
                </>
            )}
        </div>
    )
}
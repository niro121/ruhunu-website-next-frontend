import { fetchSingleBranche } from "@/actions/branch.action";
import { fetchPage } from "@/actions/page.action";
import TextMedia from "@/components/cms/text-media-component";
import Hero from "@/components/common/hero";
import MapSection from "@/components/common/MapSection";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/cms/gallery";

export default async function BranchesDetailsPage(props: {params: { slug: string}}) {
    const { slug } = await props.params;

    const page = await fetchPage("rh-branches-list");

    const data = await fetchSingleBranche(slug);
    
    if (!page || !page.visibility) return notFound();
    
    // Find Hero section
    const heroSection = page.sections?.find(
        (section: any) => section.type === "Hero"
    );

    const updatedHeroData = heroSection && typeof heroSection.data === "object" && heroSection.data !== null
    ? {
        ...heroSection.data,
        title: data?.name,
      }
    : null;
    console.log({data})
    return (
        
        <div>
            {heroSection && (
                <Hero layout={heroSection.layout} data={updatedHeroData} />
            )}
            <div>
                <div className="px-[10px] md:px-[20px] lg:px-[50px] py-[70px] bg-white grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    <div className="flex justify-center">
                        <div className="relative w-full h-[480px] self-center">
                            <Image
                                src={data?.image || ''}
                                alt="about us image"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-[#18CE67] mb-[16px] text-[16px]">Overviews</p>
                        <h1 className="text-[40px] font-bold text-[#122739]">
                            {data?.name?.split("-")[0]}
                            {" "}
                            <span className="text-[#18CE67]">
                                {data?.name?.split("-")[1]}
                            </span>
                        </h1>
                        <div
                            className="prose max-w-none mt-[24px]"
                            dangerouslySetInnerHTML={{ __html: data?.description || ""}}
                        ></div>
                        <div className="mt-[30px] mb-[20px] flex gap-3 items-center">
                            {/* Icon */}
                            <div className="rounded-full bg-[#d8ffea] px-[15px] py-[12px] flex items-center">
                                <Image src="/icons/3 (1).png" alt="Phone Icon" height={21} width={20} />
                            </div>

                            {/* Phone numbers */}
                            <div>
                                <p className="text-[#122739] text-md md:text-lg">
                                    {data?.phone?.map((num: string, index: number) => {
                                        if (index === 0) {
                                            return (
                                                <a key={num} href={`tel:${num}`} className="hover:underline">
                                                    {num}
                                                </a>
                                            );
                                        }

                                        const prev = data.phone[index - 1];
                                        let i = 0;
                                        while (i < prev.length && prev[i] === num[i]) i++;
                                        const display = num.slice(i);

                                        return (
                                            <span key={num}>
                                                /<a href={`tel:${num}`} className="hover:underline">{display}</a>
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <Link
                                href="/appointment"
                                className="w-fit text-center block bg-[#18CE67] border border-[#18CE67] text-white text-[15px] font-bold px-[40px] py-[10px] mt-[8px] rounded-[6px] hover:bg-[#122739] hover:border-[#122739] transition-all duration-200"
                            >
                                Doctor Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Gallery images={data?.listImage || []}/>
            <MapSection lat={Number(data?.latitude || 0)} lng={Number(data?.longitude || 0)}/>
        </div>
    )
}
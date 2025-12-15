import Image from "next/image";

type BoardOfDirectorsProps = {
    data: any;
}

export default function BoardOfDirectors ({data}:BoardOfDirectorsProps) {

    console.log(data.directors)

    const chairman = data.directors?.find((item: any) => item.title === "Chairman");
    const ceo = data.directors?.find((item: any) => item.title === "CEO");
    const directors = data.directors?.filter((item: any) => item.title === "Director");

    return (
        <section className="flex flex-col gap-16 px-[10px] md:px-[20px] lg:px-[50px] pb-[70px] text-[] text-[#122739]">
            <div>
                <h2 className="text-[39px] font-extrabold text-center mb-10">
                    Board of <span className="text-[#18CE67]">Directors</span>
                </h2>

                {/* CHAIRMAN */}
                {chairman && (
                    <div className="flex justify-center mb-8">
                        <div className="border border-[#18CE67] overflow-hidden text-center text-[#122739] shadow-xl bg-white w-full md:w-[415px] md:h-[465px]">
                            <div className="w-full h-[350px] relative">
                                <Image src={chairman.image} alt={chairman.name} fill className="object-fill" />
                            </div>
                            <div className="px-1 pt-5 pb-5">
                                <p className="font-semibold text-black">{chairman.name}</p>
                                <p>{chairman.title}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* CEO */}
                <div className="flex justify-center mb-8">
                    <div className={"border border-[#18CE67] overflow-hidden text-center text-[#122739] shadow-xl bg-white w-full md:w-[415px] md:h-[465px]"}>
                        <div className={"w-full h-[350px] relative"}>
                            <Image src={ceo.image} alt={ceo.name} fill className="object-fill" />
                        </div>
                        <div className="px-1 pt-5 pb-15">
                            <p className="font-semibold text-black">{ceo.name}</p>
                            <p>{ceo.title}</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {directors?.map((item: any, index: number) => (
                        <div className={"border border-[#18CE67] overflow-hidden text-center text-[#122739] shadow-xl bg-white w-full md:w-[305px] md:h-[390px]"}>
                            <div className={"w-full h-[257px] relative"}>
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div className="px-1 pt-5 pb-15">
                                <p className="font-semibold text-black">{item.name}</p>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
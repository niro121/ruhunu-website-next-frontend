import Image from "next/image"

const overviewData = {
    image: "/5225ac27-69a9-487b-80a8-664c440656ad.jpg",
    name: "Ruhunu Hospital Collecting Center ",
    place: "Makandura",
    decription: "Ruhunu Hospital Medical in Makandura is a healthcare facility that offers a range of medical services,. The hospital is ISO certified, which means it has met the international standards for quality management systems in healthcare.",
    teleNum: "0774783982"
}

export default function DetailOverview () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] bg-white px-[10px] md:px-[20px] lg:px-[50px] py-[80px]">
            <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] md:h-[500px]">
                    <Image
                        src={overviewData.image}
                        alt=""
                        fill
                        className=""
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-[16px] text-[#18ce67] mb-[16px]">Overview</p>
                <h1 className="text-[45px] text-[#122739] font-bold my-[8px]">
                    {overviewData.name} 
                    <span className="text-[#18ce67]">{overviewData.place}</span>
                </h1>
                <p className="text-[16px] text-black mt-[48px] mb-[16px]">{overviewData.decription}</p>
                <div className="flex justify-start items-center gap-[20px] mt-[30px] mb-[20px]">
                    <div className="bg-[#d8ffea] p-[12px] rounded-full">
                        <Image
                            src="/phone-line.png"
                            width={20}
                            height={0}
                            alt={""}
                        />
                    </div>
                    <p className="text-black text-[16px] font-bold">{overviewData.teleNum}</p>
                </div>
                <a href="#">
                    <button className="bg-[#18ce67] border border-[#18ce67] px-[40px] py-[12px] mt-[8px] text-white text-[15px] font-bold rounded-[6px] hover:bg-[#122739] hover:border-[#122739] ">Doctor Appointment</button>
                </a>
            </div>
        </div>
    )
}
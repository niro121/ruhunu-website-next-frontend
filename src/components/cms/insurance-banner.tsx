import Image from "next/image";

export default function InsuranceBanner() {
    return (
        <div className="relative px-[10px] md:px-[20px] lg:px-[50px] h-[300px] flex items-center justify-between overflow-hidden">
            {/* Background Image */}
            <Image
                src="/insurance-banner.jpg" // <-- change to your image path
                alt="Insurance banner"
                fill
                className="object-cover"
                priority
            />

            {/* image overlay */}
            {/* <div className="absolute inset-0 bg-white/40"></div> */}

            <div className="relative z-10 flex items-center justify-between w-full">
                <h1 className="text-black text-[40px] font-bold">Insurance</h1>
                <a href="/">
                    <button className="bg-[#18CE67] border border-[#18CE67] text-[16px] text-white font-medium py-[12px] px-[30px] rounded-[6px] hover:bg-[#122739] hover:border-[#122739] transition">
                        View More
                    </button>
                </a>
            </div>
        </div>
    );
}

import Image from "next/image";

export default function AboutUs () {
    return (
        <div className="px-[10px] md:px-[20px] lg:px-[50px] py-[70px] bg-white grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="relative w-full h-[570px]">
                <Image
                    src="/bf8c6ca3-16ce-406e-b3ee-41cb5701afcc.jpg"
                    alt="about us image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-[#18CE67] mb-[16px] text-[16px]">About Us</p>
                <h1 className="text-[40px] font-bold text-[#122739]">Leading the Way in Healthcare Excellence</h1>
                <p className="text-black text-[16px] mt-[48px] mb-[16px]">Ruhunu Hospitals (Pvt) Ltd, located in the medical hub of the Southern Province, has emerged as a leading private hospital since its establishment in 1995. With a strong commitment to providing high-quality and convenient medical care, Ruhunu Hospitals has become the go-to healthcare provider in the region. Its continuous innovation and focus on delivering premium healthcare services have set it apart from others in the industry.</p>
            </div>
        </div>
    )
}
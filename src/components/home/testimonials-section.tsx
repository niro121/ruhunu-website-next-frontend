import Image from "next/image"

const testimonials = [
    {
        image: "",
        name: "Shaun",
        country: "Germany",
        rate: 5,
        message: "Ruhunu IMC's wellness center program is a game changer"
    },
    {
        image: "",
        name: "Anna",
        country: "Australia",
        rate: 5,
        message: "IMC made my childbirth experience feel safe and manageable."
    },
    {
        image: "",
        name: "Russlan Boss",
        country: "Ukrain",
        rate: 4,
        message: "Outstanding surgical care at the International Medical Center! They made a daunting experience feel safe & manageable."
    },
]

export default function OurTestimonials () {
    return (
        <div className="bg-[#f4f9fd] py-[70px] px-[10px] md:px-[20px] lg:px-[50px]">
            <div className="text-center">
                <p className="text-[16px] mb-[16px] text-[#18CE67]">Our Testimonials</p>
                <h1 className="text-[40px] text-[#122739] font-bold">
                    Over  <span className="text-[#18CE67]">1,000+ </span>People Patients Trust Us
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-[10px] gap-[20px] mt-[48px]">
                {testimonials.map((testimonials,index) => (
                    <div key={index} className="p-[16px] bg-white w-full">
                        <div className="sm:p-[5px] p-[16px]">
                            <div className="grid grid-cols-8">
                                <div className="col-span-2">
                                    {testimonials.image ? (
                                        <Image
                                            src={testimonials.image}
                                            alt={testimonials.name || ""}
                                            className="w-[65px] h-[65px]"
                                        />
                                        ) : (
                                        <div className="w-[65px] h-[65px] bg-gray-300 flex items-center justify-center text-white font-bold text-lg">
                                            {testimonials.name?.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                </div>
                                <div className="col-span-6">
                                    <p className="text-[20px] text-[#2b3e4f] font-semibold">{testimonials.name}</p>
                                    <p className="text-[16px] text-[#2b3e4f] font-semibold">{testimonials.country}</p>
                                    <div className="flex gap-1">
                                        {Array.from({ length: testimonials.rate}, (_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="#FFD700" // Gold color
                                                className="w-[12px] h-[12px]"
                                            >
                                                <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.87 1.402-8.168L.132 9.211l8.2-1.193L12 .587z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[16px]">
                            <p className="p-[10px] text-[13px] text-black">
                                {testimonials.message}
                            </p>
                        </div>
                        <div className="p-[16px] flex justify-end self-end mt-auto">
                            <Image
                                src="/images/home/colean.png"
                                alt=""
                                width={36}
                                height={27}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
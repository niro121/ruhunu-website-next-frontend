import { fetchTestimonials } from "@/actions/testimonial.actions";
import Image from "next/image"


export default async function OurTestimonials () {

    const testimonials = await fetchTestimonials();
    return (
        <div className="bg-[#f4f9fd] py-[70px] px-[10px] md:px-[20px] lg:px-[50px]">
            <div className="text-center">
                <p className="text-[16px] mb-[16px] text-[#18CE67]">Our Testimonials</p>
                <h1 className="text-[40px] text-[#122739] font-bold">
                    Over  <span className="text-[#18CE67]">1,000+ </span>People Patients Trust Us
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-[10px] md:gap-[20px] lg:gap-[30px] mt-[48px]">
                {testimonials.map((testimonials,index) => (
                    <div key={index} className="p-[16px] bg-white w-full flex flex-col h-full">
                        <div className="sm:p-[5px] p-[16px]">
                            <div className="grid grid-cols-8">
                                 <div className="col-span-2">
                                     {testimonials.image ? (
                                        <Image
                                            width={65}
                                            height={65}
                                            src={testimonials.image}
                                            alt={testimonials.name || ""}
                                        />
                                        ) : (
                                        <div className="w-[65px] h-[65px] bg-gray-300 flex items-center justify-center text-white font-bold text-lg">
                                            {testimonials.name?.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                </div>
                                <div className="col-span-6">
                                    <p className="text-[20px] text-[#2b3e4f] font-semibold">{testimonials.name}</p>
                                    <p className="text-[16px] text-[#2b3e4f] font-semibold">{testimonials.designation}</p>
                                    <div className="flex gap-1">
                                        {Array.from({ length: testimonials.rating}, (_, i) => (
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
                            <p className="p-[10px] text-[16px] text-black">
                                {testimonials.testimonial}
                            </p>
                        </div>

                        {/* Bottom element */}
                        <div className="p-[16px] flex justify-end mt-auto">
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
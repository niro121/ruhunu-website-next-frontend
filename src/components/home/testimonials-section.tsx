import { fetchTestimonials } from "@/actions/testimonial.actions";
import Image from "next/image"
import { Carousel, CarouselContent } from "../ui/carousel";


export default async function OurTestimonials () {

    const testimonials = await fetchTestimonials();

    if (!testimonials || testimonials.length == 0) {
        return null;
    }

    return (
        <div className="bg-[#f4f9fd] py-[70px] px-[10px] md:px-[20px] lg:px-[50px]">
            <div className="text-center">
                <p className="text-[16px] mb-[16px] text-[#18CE67]">Our Testimonials</p>
                <h1 className="text-[40px] text-[#122739] font-bold">
                    Over  <span className="text-[#18CE67]">1,000+ </span>People Patients Trust Us
                </h1>
            </div>
            <div className="relative w-full mt-[48px]">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="gap-5">

                        {testimonials.map((testimonials,index) => (
                            <div key={index}
                            className="md:p-[26px] lg:p-[32px] bg-white w-full flex flex-col h-[320px]
                                shadow-[2px_0_6px_#00000029,-2px_0_6px_#00000029]"
                            >
                                <div className="sm:p-[5px]">
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
                                                <div className="w-[65px] h-[65px] bg-[#f4f9fd] flex items-center justify-center text-[20px] text-black font-bold text-lg">
                                                    {testimonials.name
                                                        ?.split(" ")
                                                        .filter(word => word.length > 0)
                                                        .map(word => word[0])
                                                        .slice(0, 2)
                                                        .join("")
                                                        .toUpperCase()
                                                    }
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
                                <div className="flex justify-end items-end mt-auto">
                                    <Image
                                        src="/images/home/colean.png"
                                        alt=""
                                        width={36}
                                        height={27}
                                    />
                                </div>
                            </div>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}
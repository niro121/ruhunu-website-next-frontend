import { fetchTestimonials } from "@/actions/testimonial.actions";
import TestimonialsCarousel from "../common/testimonials-carousel";

export default async function OurTestimonials() {
    const testimonials = await fetchTestimonials();

    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <div className="bg-[#f4f9fd] py-[70px] px-[10px] md:px-[20px] lg:px-[50px]">
            <div className="text-center">
                <p className="text-[16px] mb-[16px] text-[#18CE67]">
                Our Testimonials
                </p>
                <h1 className="text-[40px] text-[#122739] font-bold">
                Over <span className="text-[#18CE67]">1,000+ </span>
                People Patients Trust Us
                </h1>
            </div>

            <div className="mt-[48px]">
                <TestimonialsCarousel testimonials={testimonials} />
            </div>
        </div>
    );
}

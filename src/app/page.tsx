// app/page.tsx
import { fetchPage } from "@/actions/page.action";
import OurServices from "@/components/common/services-section";
import OurTestimonials from "@/components/home/testimonials-section";
import SectionRenderer from "@/components/sections/SectionRenderer";
import { notFound } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default async function HomePage() {
    const page = await fetchPage("home") || undefined; // <-- Fetch home page always

    if (!page || !page.visibility) {
        return notFound();
    }
    
    return (
        <div className="relative">
            {page.sections?.map((section: any) => (
                <SectionRenderer key={section.id} section={section} />
            ))}
            <a href="tel:+94917694059">
                <div className="w-[60px] h-[60px] rounded-full bg-[#25d366] text-white fixed bottom-10 md:bottom-[80px] right-5 md:right-[40px] z-50 flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110 shadow-[2px_2px_3px_#999]">
                    <i className="fa fa-phone text-[30px]"></i>
                </div>
            </a>
        </div>
    );
}
// app/page.tsx
import { fetchPage } from "@/actions/page.action";
import OurServices from "@/components/common/services-section";
import OurTestimonials from "@/components/home/testimonials-section";
import SectionRenderer from "@/components/sections/SectionRenderer";
import { notFound } from "next/navigation";

export default async function HomePage() {
    const page = await fetchPage("home") || undefined; // <-- Fetch home page always

    if (!page || !page.visibility) {
        return notFound();
    }
    
    return (
        <div className="">
            {page.sections?.map((section: any) => (
                <SectionRenderer key={section.id} section={section} />
            ))}
        </div>
    );
}
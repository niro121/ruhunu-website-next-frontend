import { fetchPage } from "@/actions/page.action";
import SectionRenderer from "@/components/sections/SectionRenderer";
import { notFound } from "next/navigation";

export default async function ServicesDetailsPage (props: { params: { slug: string } }) {
    const { slug } = await props.params;

    const page = await fetchPage(slug);
    
    if (!page || !page.visibility) {
        return notFound();
    }

    return (
        <div>
            <div className="">
                {page.sections?.map((section: any) => (
                    <SectionRenderer key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
}
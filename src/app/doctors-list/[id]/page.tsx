import { fetchPage } from "@/actions/page.action";
import Hero from "@/components/common/hero";
import { notFound } from "next/navigation";

export default async function DoctorsDetailsPage (props: { params: { id: string } }) {

    const { id } = await props.params;

    const page = await fetchPage("docter-details");

    if (!page || !page.visibility) return notFound();
    
    // Find Hero section
    const heroSection = page.sections?.find(
        (section: any) => section.type === "Hero"
    );

    console.log(heroSection?.data)

    return (
        <div>
            {heroSection && (
                <Hero layout={heroSection.layout} data={heroSection.data}/>
            )}
            {id}
        </div>
    )
}
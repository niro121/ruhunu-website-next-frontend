import { fetchPage } from "@/actions/page.action";
import Hero from "@/components/common/hero";
import BranchArrayWrapper from "@/components/rh-branches/branch-array-wrapper";
import { notFound } from "next/navigation";

export default async function BranchesListPage() {
    const page = await fetchPage("rh-branches-list");

    if (!page || !page.visibility) return notFound();

    // Find Hero section
    const heroSection = page.sections?.find(
        (section: any) => section.type === "Hero"
    );

    return (
        <div>
            {heroSection && (
                <Hero layout={heroSection.layout} data={heroSection.data} />
            )}
            <BranchArrayWrapper/>
        </div>
    )

}
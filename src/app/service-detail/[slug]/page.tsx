import { fetchPage } from "@/actions/page.action";
import { fetchSingleService } from "@/actions/services.action";
import Hero from "@/components/common/hero";
import SectionRenderer from "@/components/sections/SectionRenderer";
import { notFound } from "next/navigation";

export default async function ServiceDetailPage(props: {params: { slug: string };}) {
  const { slug } = await props.params;

  const page = await fetchPage(slug);
  const data = await fetchSingleService(slug);

  if (!page || !page.visibility || !data) {
    return notFound();
  }

  const heroSection = page.sections?.find(
    (section: any) => section.type === "Hero"
  );

  // Remove Hero from sections list
  const nonHeroSections = page.sections?.filter(
    (section: any) => section.type !== "Hero"
  );

  return (
    <div>

      {heroSection && (
        <Hero
          layout={heroSection.layout}
          data={heroSection.data}
        />
      )}

      <div className="bg-[#f4f9fd] py-[48px]"></div>

      {nonHeroSections?.map((section: any) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </div>
  );
}

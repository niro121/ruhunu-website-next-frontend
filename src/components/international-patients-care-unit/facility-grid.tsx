import { FacilityCard } from "@/components/common/facility-card";

interface Facility {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

interface FacilityGridProps {
  facilities: Facility[];
}

export function FacilityGrid({ facilities }: FacilityGridProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
}

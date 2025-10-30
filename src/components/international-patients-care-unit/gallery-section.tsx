import { GalleryCard } from "@/components/common/gallery-card";

const galleryImages = [
  {
    src: "/images/international-patient-care-unit/hospital-patient-room-luxury.jpg",
    alt: "Hospital Room",
  },
  {
    src: "/images/international-patient-care-unit/hospital-lobby-modern.jpg",
    alt: "Reception Area",
  },
  {
    src: "/images/international-patient-care-unit/hospital-lounge-comfortable.jpg",
    alt: "Lounge Area",
  },
  {
    src: "/images/international-patient-care-unit/hospital-corridor-clean.jpg",
    alt: "Hospital Corridor",
  },
  {
    src: "/images/international-patient-care-unit/medical-spa-treatment.jpg",
    alt: "Traditional Food",
  },
  {
    src: "/images/international-patient-care-unit/hospital-bathroom-modern.jpg",
    alt: "Bathroom Facilities",
  },
  {
    src: "/images/international-patient-care-unit/doctor-examining-patient.jpg",
    alt: "Medical Examination",
  },
  {
    src: "/images/international-patient-care-unit/hospital-reception.jpg",
    alt: "Reception Desk",
  },
  {
    src: "/images/international-patient-care-unit/hospital-waiting-area.jpg",
    alt: "Waiting Area",
  },
  {
    src: "/images/international-patient-care-unit/medical-staff-team.jpg",
    alt: "Medical Consultation",
  },
  {
    src: "/images/international-patient-care-unit/hospital-cafeteria-food.jpg",
    alt: "Hospital Pharmacy",
  },
  {
    src: "/images/international-patient-care-unit/chef-preparing-food.jpg",
    alt: "Cafeteria",
  },
  {
    src: "/images/international-patient-care-unit/hospital-exterior-building.jpg",
    alt: "Food Preparation",
  },
  {
    src: "/images/international-patient-care-unit/modern-hospital-room-luxury.jpg",
    alt: "Hospital Exterior",
  },
];

export function GallerySection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#18CE67]">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <GalleryCard key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
}

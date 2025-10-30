import { FacilityGrid } from "./facility-grid";

const facilities = [
  {
    id: "rooms-facilities",
    title: "Rooms & Other Facilities",
    imageSrc:
      "/images/international-patient-care-unit/modern-hospital-room-luxury.jpg",
    imageAlt: "Modern hospital room with comfortable amenities",
    href: "#rooms-facilities",
  },
  {
    id: "surgical-center",
    title: "Ruhunu Surgical Center",
    imageSrc:
      "/images/international-patient-care-unit/surgical-operating-room-modern.jpg",
    imageAlt: "State-of-the-art surgical operation theater",
    href: "#surgical-center",
  },
  {
    id: "wellness-center",
    title: "Ruhunu Wellness Center",
    imageSrc:
      "/images/international-patient-care-unit/wellness-spa-medical-center.jpg",
    imageAlt: "Relaxing wellness and spa center",
    href: "#wellness-center",
  },
];

export function FacilitiesSection() {
  return <FacilityGrid facilities={facilities} />;
}

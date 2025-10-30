import { TestimonialsSection } from "@/components/international-patients-care-unit/testimonials-section";
import Dropdown from "@/components/international-patients-care-unit/dropdown";
import { FacilitiesSection } from "@/components/international-patients-care-unit/facilities-section";
import { GallerySection } from "@/components/international-patients-care-unit/gallery-section";
import { Overview } from "@/components/international-patients-care-unit/overview";
import React from "react";
import YtVideo from "@/components/international-patients-care-unit/yt-video";
import Banner from "@/components/global/banner";

const facilities = [
  {
    id: "1",
    title: "Rooms & Other Facilities",
    imageSrc: "/images/modern-hospital-room-luxury.jpg",
    imageAlt: "Modern hospital room",
    href: "/facilities/rooms",
  },
  {
    id: "2",
    title: "Ruhunu Surgical Center",
    imageSrc: "/images/surgical-operating-room-modern.jpg",
    imageAlt: "Surgical center",
    href: "/facilities/surgical",
  },
  {
    id: "3",
    title: "Ruhunu Wellness Center",
    imageSrc: "/images/wellness-spa-medical-center.jpg",
    imageAlt: "Wellness center",
    href: "/facilities/wellness",
  },
];

const testimonials = [
  {
    id: "1",
    name: "Shawn",
    location: "Australia",
    rating: 5,
    content:
      "Ruhunu NHS is where I was cared for by a great team of doctors and nurses. The facilities are excellent and the staff is very professional and caring.",
  },
  {
    id: "2",
    name: "Anna",
    location: "Germany",
    rating: 5,
    content:
      "Well coordinated, I received excellent care and the staff was very attentive. The international patient services made everything so easy for me and my family.",
  },
  {
    id: "3",
    name: "Rustam Bose",
    location: "India",
    rating: 5,
    content:
      "Outstanding quality of care. All the services offered at Ruhunu Hospital are world-class. I highly recommend this hospital to anyone seeking quality medical care.",
  },
];

export default function InternationalPatientcarePage() {
  return (
    <div>
      <Banner
        title="International Patients Care Unit"
        backgroundImage="/images/international-patient-care-unit/International Patients Care Unit-banner.jpg"
        mobileBackgroundImage="/images/international-patient-care-unit/International Patients Care Unit-mobile-banner.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "International Services" },
        ]}
      />
      <Overview />
      <Dropdown />
      <FacilitiesSection />
      <TestimonialsSection />
      <GallerySection />
      <YtVideo />
    </div>
  );
}

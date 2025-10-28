import DoctorGrid from "@/components/doctor-list/doctorgrid";
import DoctorSearch from "@/components/doctor-list/doctorsearch";
import Banner from "@/components/global/banner";
import React from "react";


export default function page() {
  // Example specialties and branches //
  const specialties = [
    "Acting Consultant Geriatrician",
    "Alergy Immunology & Molecular Medicine",
    "Andrologist",
    "Ayurvedic",
    "Ayurvedic Surgeon",
    "Cardiac Electrophysiologist",
    "Cardiac Thoracic",
    "Cardiologist",
    "Chest Physician",
    "Clinical Psychologist",
    "Clinical Geneticist & Genetic Counselor",
    "Cnosultant Mycologist",
  ];
  const branches = [
    "Ruhunu Hospital - Makandura",
    "Ruhunu Hospital - Hikkaduwa",
    "Ruhunu Hospital - Udugama",
    "Ruhunu Hospital - Matara",
    "Ruhunu Hospital - Neluwa",
    "Ruhunu Hospital - Baadegama",
    "Ruhunu Hospital - Galle",
    "Ruhunu Hospital - Labeema",
    "Ruhunu Hospital - Ranna",
  ];

  return (
    <div>
      <Banner
        title="Doctors"
        backgroundImage="/images/bg.png"
        mobileBackgroundImage="/images/mobilebanner.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
      />

      <DoctorSearch specialties={specialties} branches={branches} />

      <div className="xl:px-32 px-4 py-8">
        <h1 className="xl:text-[34px] text-[24px] font-extrabold text-black">
          Ruhunu Hospital <span className="text-[#18CE67]">Galle</span>
        </h1>
      </div>

      <DoctorGrid />

      <div className="xl:px-32 px-4 py-4">
        <h1 className="xl:text-[34px] text-[24px] font-extrabold text-black">
          Ruhunu Hospital Medical Center <span className="text-[#18CE67]">Matara</span>
        </h1>
      </div>

      <DoctorGrid />
    </div>
  );
}

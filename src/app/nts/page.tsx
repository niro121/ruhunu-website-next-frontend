import React from "react";

import Banner from "@/components/global/banner";
import Overview from "@/components/nts/overview";
import VisionMission from "@/components/nts/visionmission";
import NursingCollegeSection from "@/components/nts/nursingcollegesection";
import NursingBanner from "@/components/nts/nursingbanner";
import Gallery from "@/components/nts/gallery";
import ContactCard from "@/components/nts/contactcard";

export default function page() {
  return (
    <div>
      <Banner
        title="Nursing Training School (NTS)"
        backgroundImage="/images/nts/ntswebbg.png"
        mobileBackgroundImage="/images/nts/ntsmobilebg.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Nursing Training School" }]}
      />

      <Overview/>
      <VisionMission />
      <NursingCollegeSection />
      <NursingBanner />
      <Gallery />
      <ContactCard />
    </div>
  );
}

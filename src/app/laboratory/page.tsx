import React from "react";
import Banner from "@/components/global/banner";
import Overview1 from "@/components/laboratory/overview1";
import LabOptions from "@/components/laboratory/laboptions";
import LabVisionMissionValues from "@/components/laboratory/labavisionmissionvalues";
import LabService from "@/components/laboratory/labservice";
import Accreditation from "@/components/laboratory/accreditation";
import RhdApplication from "@/components/laboratory/rhdapplication";
import Banner1 from "@/components/common/banner1";
import MedicalCentersCollectionCenters from "@/components/laboratory/medicalcenterscollectioncenters";
import CollectingCenters from "@/components/laboratory/collectingcenters";
import ConsultantGrid from "@/components/laboratory/consultantgrid";
import LabTestList from "@/components/laboratory/labtestlists";

export default function page() {
  return (
    <div>
      <Banner
        title="Laboratories"
        backgroundImage="/images/laboratory/labweb.png"
        mobileBackgroundImage="/images/laboratory/labmobile.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Laboratories" }]}
      />

      <Overview1 />
      <LabOptions />
      <LabVisionMissionValues />
      <LabService />
      <Accreditation />
      <LabTestList />
      <RhdApplication />
      <Banner1
        title="Online Laboratory Reports"
        description="Please enter your Bill Number and Phone Number in the given link to access your lab reports."
        buttonText="View Lab Reports"
      />
      <MedicalCentersCollectionCenters />
      <CollectingCenters />
      <Banner1
        title="Register to Ruhunu Hospital Collecting Centers"
        buttonText="Download Application"
      />
      <ConsultantGrid />
    </div>
  );
}

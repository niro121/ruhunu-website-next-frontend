import React from "react";
import { AccordionSection } from "@/components/common/accordion-section";

export default function dropdown() {
  const accordionItems = [
    {
      title: "Comprehensive Care:",
      description:
        "Our hospital offers a wide range of medical specialties, including cardiology, orthopedics, neurology, oncology, and more. With advanced treatments and diagnostic facilities, we strive to deliver the highest standard of care to our international patients.",
    },
    {
      title: "Expert Team:",
      description:
        "Ruhunu Hospital boasts a team of highly skilled doctors, surgeons, nurses, and multilingual support staff. Our medical professionals are internationally trained and stay up-to-date with the latest advancements in their respective fields.",
    },
    {
      title: "Advanced Facilities:",
      description:
        "We have invested in state-of-the-art infrastructure and cutting-edge medical technology to ensure accurate diagnoses and effective treatments. Patient safety, comfort, and convenience are our top priorities.",
    },
    {
      title: "Personalized Attention:",
      description:
        "We understand the unique needs of international patients and provide personalized care throughout their medical journey. From initial consultation to post-treatment follow-up, our dedicated team ensures your well-being and satisfaction.",
    },
    {
      title: "Convenient Location:",
      description:
        "Strategically located in the southern region, Ruhunu Hospital offers easy access to transportation hubs, hotels, and tourist attractions. Combine your medical trip with a memorable vacation, exploring the beautiful beaches and cultural heritage of the area.",
    },
    {
      title: "Affordable Pricing: ",
      description:
        "We offer competitive pricing for our medical services, making world-class healthcare accessible to international patients. Our transparent billing process and cost-effective treatment options ensure peace of mind.",
    },
    {
      title: "Insurance:",
      description:
        "Ruhunu Hospital is working with international insurance companies about your  admission. ",
    },
  ];

  return (
    <div>
      <AccordionSection
        title="Why Choose Ruhunu Hospital for Medical Tourism?"
        items={accordionItems}
      />
    </div>
  );
}

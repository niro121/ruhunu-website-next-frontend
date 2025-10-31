"use client";

import Banner from "@/components/global/banner";
import Button1 from "@/components/global/Buttons/Button1OnClick";
import ApplicationFormModal from "@/components/vacancies/[career]/ApplicationModal";
import CareerDescription from "@/components/vacancies/[career]/Description";
import CareerRequirements from "@/components/vacancies/[career]/Requirements";
import React, { useState } from "react";

export default function CareerVacancyDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Banner
          title="Career Vacancies"
          backgroundImage="/images/Vacancies/Vacancies_DesktopBG.jpg"
          mobileBackgroundImage="/images/Vacancies/Vacancies_MobileBG.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Vacancies" }]}
      />

      <CareerDescription/>
      <hr className="mx-8 md:mx-32 my-8 md:my-16 text-[#18CE67] h-4" />
      <CareerRequirements />

      <div className="flex justify-center my-8">
        {/* Button triggers modal */}
        <Button1 text="Apply Now" onClick={() => setIsModalOpen(true)} />
      </div>

      {/* Application Modal */}
      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}

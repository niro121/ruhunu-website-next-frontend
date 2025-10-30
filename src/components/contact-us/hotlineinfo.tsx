"use client";
import React from "react";

export default function HotlinesInfo() {
  const hotlineData = [
    { label: "Channeling Services", number: "+94 91721 15 50 / 917212829" },
    { label: "Ambulance & Home Visiting Services", number: "+94 775530530" },
    { label: "Dialysis", number: "+94 774318254" },
    { label: "Fertility & Research Centre", number: "+94 777994242" },
    { label: "Pharmacy", number: "+94 917212369" },
    { label: "Laboratory Services", number: "+94 766610534" },
    { label: "Surgery Center", number: "+94 766098089" },
    { label: "Maternity Center", number: "+94 772647223" },
    { label: "International Medical Center", number: "+94 762256113" },
    { label: "ICU / HDU", number: "+94 768568109" },
    { label: "MRI Unit", number: "+94 741895249" },
    { label: "XRAY Unit / CT Unit", number: "+94 777996173" },
    { label: "Information & Admission Counter", number: "+94 779917523" },
    { label: "OPD Services", number: "+94 768567233" },
  ];

  return (
    <section className="xl:px-32 lg:px-30 md:px-16 sm:px-4 xl:py-12 py-10">
      {/* Heading */}
      <h1 className="xl:text-[40px] text-[28px] font-extrabold text-[#18CE67] mb-10">
        Hotlines
      </h1>

      {/* Hotline Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-y-4 xl:gap-x-12 text-black">
        {hotlineData.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[150px_10px_auto] sm:grid-cols-[220px_15px_auto] items-start gap-x-2"
          >
            {/* Label */}
            <p className="font-normal text-[14px] xl:text-[16px]">
              {item.label}
            </p>

            {/* Colon */}
            <p className="text-[14px] xl:text-[16px] text-gray-700">:</p>

            {/* Number */}
            <p className="text-[13px] xl:text-[16px]">{item.number}</p>
          </div>
        ))}
      </div>

      {/* Footer Notes */}
      <div className="mt-10 text-black xl:text-[16px] text-[14px] leading-relaxed">
        <p>
          Have a question or feedback? You can contact us using the form below,
          and we will respond as quickly as possible.
        </p>

        <div className="flex flex-wrap mt-4">
          <p className="font-bold xl:text-[16px] text-[14px] mr-2">
            Please note:
          </p>
          <span>
            Ruhunu Hospital cannot provide personal health advice over the
            internet. Please consult your own physician for advice,
            appointments, or referral.
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";

export default function ContactCard() {
  const contactData = [
    {
      icon: "/icons/phone.png",
      title: "Call Us",
      info: "0773329660",
    },
    {
      icon: "/icons/mail.png",
      title: "Email",
      info: "nts@ruhunuhospital.lk",
    },
    {
      icon: "/icons/location.png",
      title: "Address",
      info: "No. 105/1/1, Thotawatta, Hirimbura, Galle",
    },
  ];

  return (
    <section className="xl:px-32 px-4 xl:py-16 py-10">
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {contactData.map((item, index) => (
          <div
            key={index}
            className="bg-[#EAF9F2] rounded-[10px] shadow-md transition-all duration-300 px-6 py-8 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-3">
              <Image
                src={item.icon}
                alt={item.title}
                width={22}
                height={24}
                className="object-contain"
              />
              <h3 className="xl:text-[24px] font-extrabold text-[#18CE67]">{item.title}</h3>
            </div>
            <p className="xl:text-[16px] text-[#122739] font-semibold">{item.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import React from "react";

export default function MedicalCentersCollectionCenters() {
  return (
    <div className="w-full">
      {/* Title Section */}
      <div className="text-center xl:py-16 py-10 xl:px-32 px-4 space-y-8">
        <h1 className="font-extrabold xl:text-[40px] text-[22px] text-black">
          Our Medical Centers{" "}
          <span className="text-[#18CE67]">& Collecting Centers</span>
        </h1>
        <p className="text-[17px] text-gray-700 leading-7 text-justify">
          Ruhunu Hospital boasts the largest lab chain in the Southern Province,
          with over 200 collection centers and 5 medical centers. Expanding
          beyond the region, we are also operating in Embilipitiya, Monaragala,
          Wellawaya, and other provinces, with plans to grow island-wide. Trust
          us for comprehensive medical services and accessible healthcare.
        </p>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-[500px] xl:h-[700px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792370.573709529!2d79.49383349070326!3d6.934996422926884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17305e1dbe715%3A0x76d6f2cfc7f891b7!2sRuhunu%20Hospital!5e0!3m2!1sen!2slk!4v1697029637836!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import CustomButton1 from "../common/custombutton1";
import CustomButton from "../common/custombutton";


export default function LabOptions() {
  return (
    <section className="xl:px-32 px-3 xl:py-16 py-10">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Card - OPD Lab */}
        <div className="col-span-12 xl:col-span-6 bg-[#F7FCFF] flex flex-col items-center justify-center text-center xl:py-6 py-10">
          <h2 className="text-[#122739] font-extrabold xl:text-[24px] text-[18px]">
            Ruhunu Hospital OPD Lab
          </h2>
          <p className="text-[#122739] font-normal xl:text-[16px] text-[13px] mt-2 mb-6">
            Click “View OPD Lab” button and get more Informations
          </p>
          <CustomButton
            className="xl:w-[204.91px] xl:h-[54.10px] w-[168.70px] h-[45.60px] xl:text-[16px] font-bold"
            label="View OPD Lab"
          />
        </div>

        {/* Right Card - Home Visiting */}
        <div className="col-span-12 xl:col-span-6 bg-[#122739] flex flex-col items-center justify-center text-center xl:py-6 py-10">
          <h2 className="text-white font-extrabold xl:text-[24px] text-[18px]">
            Lab Home Visiting
          </h2>
          <p className="text-white font-normal xl:text-[16px] text-[12px] mt-2 mb-6">
            Click “View Lab Home Visiting” button and get more Informations
          </p>
          <CustomButton1
            label="View Lab Home Visiting"
            width="xl:w-[230px]"
            textColor="text-[#18CE67]"
            borderColor="border border-[#18CE67]"
            hoverBgColor="hover:bg-[#18CE67]"
            hoverTextColor="hover:text-white"
            onClick={() => alert("Appointment button clicked!")}
          />
        </div>
      </div>
    </section>
  );
}

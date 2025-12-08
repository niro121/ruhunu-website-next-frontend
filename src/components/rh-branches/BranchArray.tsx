"use client";

import { useState, useEffect } from "react";
import HospitalCard from "./BranchCard";

type BranchProps = {
  hospitalData: any;
}

const BranchArraySection = ({hospitalData}: BranchProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev + 1) % hospitalData.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? hospitalData.length - 1 : prev - 1
  //   );
  // };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full px-[10px] md:px-[20px] lg:px-[50px] py-[70px]">
      {/* Desktop Grid */}
      {!isMobile && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {hospitalData.map((card : any, idx: number) => (
            <HospitalCard data = {card}/>
          ))}
        </div>
      )}

      {/* Mobile */}
      {isMobile && (
        <div className="relative max-w-md mx-auto">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {hospitalData.map((card: any, idx : number) => (
                <div key={idx} className="flex-shrink-0 w-full">
                  <HospitalCard  data = {card}/>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center space-x-2 mt-4">
            {hospitalData.map((_ :  any, idx : number) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full border-2 border-[#18CE67] transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-[#18CE67]"
                    : "bg-white hover:bg-[#18CE67]/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default BranchArraySection;

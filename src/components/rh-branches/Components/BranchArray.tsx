"use client";

import { useState, useEffect } from "react";
import HospitalCard from "./BranchCard";

interface HospitalData {
  image: string;
  title: string;
  location: string;
  tel: string;
  link: string;
}

const BranchArraySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hospitalData: HospitalData[] = [
    {
      image: "/images/Branches/CardImages/ruhunumedicalcenter-matara.jpg",
      title: "Ruhunu Hospital Medical Center",
      location: "Matara",
      tel: "0417572301/302",
      link: "/rH-branches/ruhunu-hospital-medical-center-matara",
    },
    {
      image: "/images/Branches/CardImages/ruhunuhospitalcollectingcenter-makandura.jpg",
      title: "Ruhunu Hospital Collecting Center",
      location: "Makandura",
      tel: "0774783982",
      link: "/rH-branches/ruhunu-hospital-collecting-center-makandura",
    },
    {
      image: "/images/Branches/CardImages/ruhunuhospitalcollectingcenter-hikkaduwa.jpg",
      title: "Ruhunu Hospital Collecting Center",
      location: "Hikkaduwa",
      tel: "0764624934",
      link: "/rH-branches/ruhunu-hospital-collecting-center-hikkaduwa",
    },
    {
      image: "/images/Branches/CardImages/ruhunumedicalcenter-neluwa.jpg",
      title: "Ruhunu Hospital Medical Center",
      location: "Neluwa",
      tel: "0763255559",
      link: "/rH-branches/ruhunu-hospital-medical-center-neluwa",
    },
    {
      image: "/images/Branches/CardImages/ruhunumedicalcenter-udugama.jpg",
      title: "Ruhunu Hospital Medical Center",
      location: "Udugama",
      tel: "0763255559",
      link: "/rH-branches/ruhunu-hospital-medical-center-udugama",
    },
    {
      image: "/images/Branches/CardImages/ruhunumedicalcenter-baddegama.jpg",
      title: "Ruhunu Hospital Medical Center",
      location: "Baddegama",
      tel: "0763313613",
      link: "/rH-branches/ruhunu-hospital-medical-center-baddegama",
    },
    {
      image: "/images/Branches/CardImages/ruhunuhospitalcollectingcenter-labeema.jpeg",
      title: "Ruhunu Hospital Collecting Center",
      location: "Labeema",
      tel: "0740550913",
      link: "/rH-branches/ruhunu-hospital-collecting-center-labeema",
    },
    {
      image: "/images/Branches/CardImages/ruhunuhospitalcollectingcenter-ranna.jpeg",
      title: "Ruhunu Hospital Collecting Center",
      location: "Ranna",
      tel: "0740550913",
      link: "/rH-branches/ruhunu-hospital-collecting-center-ranna",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % hospitalData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? hospitalData.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full py-10 px-8 md:px-32">
      {/* Desktop Grid */}
      {!isMobile && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {hospitalData.map((card, idx) => (
            <HospitalCard
              key={idx}
              image={card.image}
              title={card.title}
              location={card.location}
              tel={card.tel}
              link={card.link}
            />
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
              {hospitalData.map((card, idx) => (
                <div key={idx} className="flex-shrink-0 w-full">
                  <HospitalCard
                    image={card.image}
                    title={card.title}
                    location={card.location}
                    tel={card.tel}
                    link={card.link}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center space-x-2 mt-4">
            {hospitalData.map((_, idx) => (
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

"use client";

import React, { useRef, useState, useEffect } from "react";
import FacilityCard from "./FacilitiesCard";

interface Facility {
  image: string;
  title: string;
  content: string;
}

const FacilityCardArray: React.FC = () => {
  const facilities: Facility[] = [
    {
      image: "/images/Facilities/Cards/Facilities/KitchenFacilitiesCardImg.jpg",
      title: "Kitchen",
      content: `
        <p>
          Experience the epitome of cleanliness and safety at Ruhunu Hospital's kitchen. Our dedicated team of well-trained professionals is committed to crafting delicious meals while prioritizing your health and well-being. Discover a culinary journey where healthy choices are always on the menu.
        </p>
      `,
    },
    {
      image: "/images/Facilities/Cards/Facilities/EnvironmentFacilitiesCardImg.jpg",
      title: "Environment",
      content: `
        <p>
          Enjoy stunning views of Adam's Peak, the ocean, and coconut estates. Our peaceful setting promotes healing and relaxation. Experience freedom and natural beauty while receiving quality care. Book your visit today!
        </p>
      `,
    },
    {
      image: "/images/Facilities/Cards/Facilities/InsuranceFacilitiesCardImg.jpg",
      title: "Insurance Facility & Agarahara",
      content: `
        <p>
          Insurance Facility and Agarahara 
          <br><br>
          <a href="" className="text-gray-500">View More</a>
        </p>
      `,
    },
    {
      image: "/images/Facilities/Cards/Facilities/ParkingFacilitiesCardImg.jpg",
      title: "Parking",
      content: `<p>Parking Facility</p>`,
    },
    {
      image: "/images/Facilities/Cards/Facilities/VisionCareFacilitiesCardImg.jpg",
      title: "Vision Care Outlet",
      content: `<p>Vision Care</p>`,
    },
    {
      image: "/images/Facilities/Cards/Facilities/ATMFacilitiesCardImg.jpg",
      title: "ATM Facility",
      content: `
        <p>
          Ruhunu Hospital goes the extra mile to ensure convenience for our patients. With a dedicated DFCC Bank ATM on-site, accessing financial services has never been easier. Experience seamless transactions and peace of mind during your visit to Ruhunu Hospital.
        </p>
      `,
    },
    {
      image: "/images/Facilities/Cards/Facilities/CafeFacilitiesCardImg.jpg",
      title: "Cafe R",
      content: `
        <p>
          Discover the culinary delights at Cafe R, the premier 365-day open cafe nestled within the heart of Karapitiya, conveniently located inside the esteemed Karapitiya Ruhunu Hospital.
        </p>
      `,
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeGroup, setActiveGroup] = useState(0);
  const [groupSize, setGroupSize] = useState(3);

  // Detect screen size and adjust group size
  useEffect(() => {
    const updateGroupSize = () => {
      if (window.innerWidth < 1024) {
        setGroupSize(1);
      } else {
        setGroupSize(3);
      }
    };
    updateGroupSize();
    window.addEventListener("resize", updateGroupSize);
    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  const numGroups = Math.ceil(facilities.length / groupSize);

  // Drag/swipe handling
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    startX.current =
      "touches" in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    scrollLeft.current = carouselRef.current?.scrollLeft || 0;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    const x =
      "touches" in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    const walk = (x - startX.current) * -1;
    carouselRef.current.scrollLeft = scrollLeft.current + walk;
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.offsetWidth;
    const currentIndex = Math.round(carouselRef.current.scrollLeft / width);
    setActiveGroup(currentIndex);
  };

  const handleIndicatorClick = (index: number) => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
    setActiveGroup(index);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 px-6 mb-20 md:px-32 no-scrollbar overflow-hidden">
      <h2 className="text-[#122739] text-[40px] text-center font-extrabold my-10">
        <span className="text-[#18CE67]">Other </span>Facilities
      </h2>

      {/* Carousel */}
      <div
        ref={carouselRef}
        onMouseDown={startDrag}
        onMouseLeave={stopDrag}
        onMouseUp={stopDrag}
        onMouseMove={onDrag}
        onTouchStart={startDrag}
        onTouchEnd={stopDrag}
        onTouchMove={onDrag}
        onScroll={handleScroll}
        className="w-full overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-3">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex-shrink-0 scroll-snap-align-start w-full lg:w-1/3 no-scrollbar"
            >
              <FacilityCard
                image={facility.image}
                title={facility.title}
                content={facility.content}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex gap-3 mt-2">
        {Array.from({ length: numGroups }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleIndicatorClick(i)}
            className={`w-3 h-3 rounded-full border transition-all duration-300 ${
              i === activeGroup
                ? "bg-[#18CE67] border-[#18CE67]"
                : "bg-white border-[#18CE67]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FacilityCardArray;



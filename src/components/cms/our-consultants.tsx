'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import image1 from "@/../public/images/doctorlist/doctor2.jpg";
import image2 from "@/../public/images/doctorlist/doctor3.jpg";
import image3 from "@/../public/images/doctorlist/doctor4.jpg";

interface Consultant {
  id: string;
  name: string;
  specialty: string;
  image: StaticImageData;
}

const Consultants: Consultant[] = [
  {
    id: '1',
    name: 'PROF. GAYA BANDARA',
    specialty: 'Microbiologist',
    image: image1,
  },
  {
    id: '2',
    name: 'PROF. CHANDANA WICKRAMARATHNA',
    specialty: 'Hematologist',
    image: image2,
  },
  {
    id: '3',
    name: 'DR.(MRS) Harshani Thabrew',
    specialty: 'Consultant Mycologist',
    image: image3,
  },
];

export default function ConsultantSection(){

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-[#18ce67] ">Consultant</span>
        </h2>

        {/* Consultant Cards Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
          {Consultants.map((consultant) => (
            <div
              key={consultant.id}
              className="bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl max-w-md mx-auto md:max-w-none md:mx-0 w-full"
            >
              {/* Image Container */}
              <div className="relative w-full h-80 bg-gray-100">
                <Image
                  src={consultant.image}
                  alt={consultant.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 text-center">
                <h3 className="text-lg text-gray-800 mb-2">
                  {consultant.name}
                </h3>
                <p className="text-gray-600 text-xs font-extrabold mb-6">{consultant.specialty}</p>

                {/* Book Now Button */}
                <button
                  className="w-full bg-[#18ce67] hover:bg-[#16b85c] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#18ce67] focus:ring-offset-2"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionSectionProps {
  title: string;
  items?: AccordionItem[];
}

export function AccordionSection({ title, items }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex w-full items-center justify-between bg-[#F4F9FD] px-6 py-5 text-left  transition-all"
          aria-expanded={isOpen}
        >
          <h3 className="text-[12px] lg:md:text-[20px] font-medium text-black">
            {title}
          </h3>
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-black transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && items && items.length > 0 && (
          <div className="mt-0 bg-white  py-8 px-8 md:py-10">
            <ul className="space-y-6 md:space-y-12">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-base leading-relaxed text-gray-800 md:text-lg"
                >
                  <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-800" />
                  <div>
                    <strong className="font-normal text-[16px] ">
                      {item.title}
                    </strong>{" "}
                    <span className="font-normal text-[16px] ">
                      {item.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

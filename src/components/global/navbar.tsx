"use client";

import { useState, useEffect, useRef, Key, ReactElement, ReactNode, ReactPortal } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { UrlObject } from "url";

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Refs for outside-click detection
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !navbarRef.current?.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Menu list
  const menuList = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    {
      title: "Services & Facilities",
      dropdown: [
        {
          heading: "Laboratory",
          url: "/services/laboratory",
          links: [
            { name: "Hematology", href: "/services/laboratory/hematology" },
            { name: "Biochemistry", href: "/services/laboratory/biochemistry" },
            { name: "Microbiology", href: "/services/laboratory/microbiology" },
          ],
        },
        {
          heading: "Radiology",
          url: "/services/radiology",
          links: [
            { name: "X-Ray", href: "/services/radiology/x-ray" },
            { name: "CT Scan", href: "/services/radiology/ct-scan" },
            { name: "MRI", href: "/services/radiology/mri" },
          ],
        },
        {
          heading: "Pharmacy",
          url: "/services/pharmacy",
          links: [
            { name: "Prescription Drugs", href: "/services/pharmacy/prescriptions" },
            { name: "Over The Counter", href: "/services/pharmacy/otc" },
            { name: "Supplements", href: "/services/pharmacy/supplements" },
          ],
        },
        {
          heading: "Extra Services",
          url: "/services/extra",
          links: [
            { name: "Service 1", href: "/services/extra/1" },
            { name: "Service 2", href: "/services/extra/2" },
            { name: "Service 3", href: "/services/extra/3" },
            { name: "Service 4", href: "/services/extra/4" },
          ],
        },
      ],
    },
    { title: "News & Events", href: "/news" },
    { title: "Contact", href: "/contact" },
  ];

  // Dropdown grouping function (Parasails style)
  function getRows(subMenuGroups: any[]) {
    const maxColsPerRow = 3;
    const rows: any[] = [];
    let currentRow: any[] = [];
    let currentHeight = 0;
    const maxHeight = 500;
    let currentColumn: any[] = [];

    subMenuGroups.forEach((group) => {
      const groupHeight = 40 + group.links.length * 24;
      if (currentHeight + groupHeight > maxHeight) {
        if (currentColumn.length) currentRow.push(currentColumn);
        currentColumn = [];
        currentHeight = 0;
      }
      currentColumn.push(group);
      currentHeight += groupHeight;
      if (currentRow.length >= maxColsPerRow) {
        rows.push(currentRow);
        currentRow = [];
      }
    });

    if (currentColumn.length) currentRow.push(currentColumn);
    if (currentRow.length) rows.push(currentRow);

    return rows;
  }

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header
      ref={navbarRef}
      className="bg-transparent px-[10px] md:px-[20px] lg:px-[50px] fixed top-[20px] h-fit w-full z-50 flex justify-center"
    >
      <div className="bg-white h-[80px] rounded-[15px] pl-[20px] pr-[25px] flex items-center justify-between shadow-md w-full relative">
        {/* Logo */}
        <div className="relative h-[60px] w-[90px] md:w-[110px]">
          <Link href="/">
            <Image src="/logo.png" alt="logo image" fill className="object-contain" />
          </Link>
        </div>

        {/* Navigation Menu (desktop) */}
        <nav className="hidden md:flex items-center">
          {menuList.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className={`text-black text-[14px] p-[8px] mx-[5px] font-medium flex items-center gap-1 transition-all duration-200 relative
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#18CE67] after:transition-all after:duration-300 hover:after:w-full
                      ${openDropdown === index ? "after:w-full" : ""}`}
                  >
                    {item.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Canvas */}
                  {openDropdown === index && (
                    <div
                      ref={dropdownRef}
                      className="fixed left-1/2 top-[120px] -translate-x-1/2 w-[92%] h-[85vh] bg-white rounded-[10px] shadow-lg p-8 overflow-hidden z-40 flex flex-row flex-wrap gap-x-8 gap-y-6"
                    >
                      {getRows(item.dropdown).map((row, rowIndex) => (
                        <div key={rowIndex} className="flex flex-row flex-wrap gap-x-8 gap-y-6 w-full">
                          {row.map((column: any[], colIndex: Key | null | undefined) => (
                            <div key={colIndex} className="flex flex-col px-4 min-w-[200px]">
                              {column.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="mb-6">
                                  <Link
                                    href={section.url || "#"}
                                    className="font-semibold text-[#18CE67] text-[0.93rem] mb-2 block"
                                  >
                                    {section.heading}
                                  </Link>
                                  <ul className="list-none">
                                    {section.links.map((link: { href: string | UrlObject; name: any }, linkIndex: Key | null | undefined) => (
                                      <li key={linkIndex}>
                                        <Link
                                          href={link.href}
                                          className={`text-[14px] mb-1 block transition-all duration-200 ${
                                            pathname === link.href ? "text-[#18CE67] pl-[10px]" : "text-black hover:text-[#18CE67]"
                                          }`}
                                        >
                                          {link.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}

                      {/* Optionally you can keep a small spacer or extra column for CTA inside the canvas */}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`p-[8px] mx-[5px] relative text-black font-medium text-[14px] transition-all duration-200
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#18CE67] after:transition-all after:duration-300 hover:after:w-full
                    ${pathname === item.href ? "after:w-full" : ""}`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          {/* Doctor Appointment Button (desktop) */}
          <Link
            href="/appointment"
            className="ml-4 bg-[#18CE67] border border-[#18CE67] text-white text-[15px] font-bold px-[12px] py-[10px] rounded-[6px] hover:bg-[#122739] hover:border-[#122739] transition-all duration-200"
          >
            Doctor Appointment
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden block text-black text-2xl"
          onClick={() => setOpenDropdown(openDropdown === -1 ? null : -1)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
{/* Mobile Dropdown */}
{openDropdown === -1 && (
  <div className="md:hidden fixed left-1/2 top-[30px] -translate-x-1/2 w-[95vw] h-[90vh] bg-white z-[9999] flex flex-col rounded-[10px] shadow-lg">
    {/* Header with Close Button */}
    <div className="flex justify-between items-center px-5 py-4">
      <h2 className="text-[18px] font-semibold text-gray-800">Menu</h2>
      <button
        onClick={() => setOpenDropdown(null)}
        className="text-gray-500 hover:text-[#18CE67] transition-colors duration-200"
        aria-label="Close menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    {/* Scrollable Menu List */}
    <div className="flex-1 overflow-y-auto py-4 px-5">
      {menuList.map((item, index) => (
        <div key={index} className="mb-3  last:border-b-0 pb-3">
          {item.dropdown ? (
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-[16px] text-gray-800 mb-1 transition-colors duration-200 hover:text-[#18CE67]">
                {item.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              {/* Dropdown Content */}
              <div className="pl-3 mt-2">
                {item.dropdown.map((section, sIdx) => (
                  <div key={sIdx} className="mb-4">
                    <p className="text-[#18CE67] text-[14px] mb-2">
                      {section.heading}
                    </p>
                    <ul className="pl-2 space-y-1">
                      {section.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <Link
                            href={link.href}
                            className={`block text-[14px] transition-all duration-200 ${
                              pathname === link.href
                                ? "text-[#18CE67] pl-[8px]"
                                : "text-gray-700 hover:text-[#18CE67]"
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          ) : (
            <Link
              href={item.href}
              className={`block text-[16px] font-medium transition-all duration-200 ${
                pathname === item.href
                  ? "text-[#18CE67] pl-[5px]"
                  : "text-gray-800 hover:text-[#18CE67]"
              }`}
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </div>

    {/* Fixed Bottom Button */}
    <div className="sticky bottom-0 bg-white p-4 flex justify-center">
      <Link
        href="/appointment"
        className="w-full text-center block bg-[#18CE67] border border-[#18CE67] text-white text-[15px] font-bold px-[18px] py-[10px] rounded-[6px] hover:bg-[#122739] hover:border-[#122739] transition-all duration-200"
      >
        Doctor Appointment
      </Link>
    </div>
  </div>
)}
    </header>
  );
}

"use client";

import { useState, useEffect, useRef, Key } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MenuItemType } from "@/types/menu-type";

interface NavbarProps {
  items: MenuItemType[];
}

export default function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

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

  // Dropdown grouping function (splits items into columns respecting max height)
  const getRows = (subMenuGroups: MenuItemType[]) => {
    const maxColsPerRow = 3;
    const rows: MenuItemType[][][] = [];
    let currentRow: MenuItemType[][] = [];
    let currentHeight = 0;
    const maxHeight = 500; // px
    let currentColumn: MenuItemType[] = [];

    subMenuGroups.forEach((group) => {
      const groupHeight = 40 + (group.children?.length || 0) * 24;
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
  };

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

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center">
          {items.map((menu, idx) => (
            <div key={menu.id} className="relative group">
              {menu.children && menu.children.length > 0 ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(idx)}
                    className={`text-black text-[14px] p-[8px] mx-[5px] font-medium flex items-center gap-1 transition-all duration-200 relative
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#18CE67] after:transition-all after:duration-300 hover:after:w-full
                      ${openDropdown === idx ? "after:w-full" : ""}`}
                  >
                    {menu.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mega Menu / Dropdown Canvas */}
                  {openDropdown === idx && (
                    <div
                      ref={dropdownRef}
                      className="fixed left-1/2 top-[120px] -translate-x-1/2 w-[92%] h-[80vh] bg-white rounded-xl shadow-lg p-[30px] overflow-hidden z-40 flex flex-row flex-wrap gap-x-8 gap-y-6"
                    >
                      {getRows(menu.children).map((row, rowIndex) => (
                        <div key={rowIndex} className="flex flex-row flex-wrap gap-x-8 gap-y-6 w-full">
                          {row.map((column: MenuItemType[], colIndex: Key) => (
                            <div key={colIndex} className="flex flex-col px-4 min-w-[200px]">
                              {column.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="mb-6">
                                  <Link
                                    href={section.url || "#"}
                                    className="font-semibold text-[#18CE67] text-[0.93rem] mb-2 block"
                                  >
                                    {section.title}
                                  </Link>
                                  {section.children && (
                                    <ul className="list-none">
                                      {section.children.map((sub) => (
                                        <li key={sub.id}>
                                          <Link
                                            href={sub.url || "#"}
                                            className={`text-[14px] mb-1 block transition-all duration-200 ${
                                              pathname === sub.url ? "text-[#18CE67] pl-2" : "text-black hover:text-[#18CE67]"
                                            }`}
                                          >
                                            {sub.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={menu.url || "#"}
                  className={`p-[8px] mx-[5px] relative text-black font-medium text-[14px] transition-all duration-200
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#18CE67] after:transition-all after:duration-300 hover:after:w-full
                    ${pathname === menu.url ? "after:w-full" : ""}`}
                >
                  {menu.title}
                </Link>
              )}
            </div>
          ))}

          {/* Doctor Appointment button */}
          <Link
            href="/appointment"
            className="ml-4 bg-[#18CE67] border border-[#18CE67] text-white text-[15px] font-bold px-[12px] py-[10px] rounded-[6px] hover:bg-[#122739] hover:border-[#122739] transition-all duration-200"
          >
            Doctor Appointment
          </Link>
        </nav>
        <div className="md:hidden flex gap-5">
          <Link
            href="/appointment"
            className="ml-4 bg-[#18CE67] border border-[#18CE67] text-white text-[15px] font-bold px-[12px] py-[10px] rounded-[6px] hover:bg-[#122739] hover:border-[#122739] transition-all duration-200 block md:hidden"
          >
            <i className="fa-solid fa-user-doctor"></i>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden block text-black text-2xl"
            onClick={() => setOpenDropdown(openDropdown === -1 ? null : -1)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {openDropdown === -1 && (
        <div className="md:hidden fixed left-1/2 top-[30px] -translate-x-1/2 w-[95vw] h-[90vh] bg-white z-[9999] flex flex-col rounded-[10px] shadow-lg">
          {/* Header */}
          <div className="flex justify-end px-5 py-4">
            <button
              onClick={() => setOpenDropdown(null)}
              className="text-gray-500 hover:text-[#18CE67] transition-colors duration-200"
              aria-label="Close menu"
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div className="relative h-[70px] w-full md:w-[110px]">
            <div className="flex justify-center">
              <Link href="/">
                <Image src="/logo.png" alt="logo image" fill className="object-contain" />
              </Link>
            </div>
          </div>

          {/* Scrollable Menu */}
          <div className="flex-1 overflow-y-auto py-4 px-5">
            {items.map((menu,idx) => (
              <div key={menu.id} className="mb-3 last:border-b-0 pb-3">
                {menu.children && menu.children.length > 0 ? (
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer text-[16px] text-gray-800 mb-1 transition-colors duration-200 hover:text-[#18CE67]">
                      {menu.title}
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

                    <div className="pl-3 mt-2">
                      {menu.children.map((section) => (
                        <div key={section.id} className="mb-4">
                          <p className="text-[#18CE67] text-[14px] mb-2">{section.title}</p>
                          <ul className="pl-2 space-y-1">
                            {section.children?.map((sub) => (
                              <li key={sub.id}>
                                <Link
                                  href={sub.url || "#"}
                                  className={`block text-[14px] transition-all duration-200 ${
                                    pathname === sub.url ? "text-[#18CE67] pl-[8px]" : "text-gray-700 hover:text-[#18CE67]"
                                  }`}
                                >
                                  {sub.title}
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
                    href={menu.url || "#"}
                    className={`block text-[16px] font-medium transition-all duration-200 ${
                      pathname === menu.url ? "text-[#18CE67] pl-[5px]" : "text-gray-800 hover:text-[#18CE67]"
                    }`}
                  >
                    {menu.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Doctor Appointment */}
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

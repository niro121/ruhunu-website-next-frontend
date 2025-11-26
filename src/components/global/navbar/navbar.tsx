"use client";

import { useState, useEffect, useRef, Key } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MenuItemType } from "@/types/menu-type";

interface NavbarProps {
  items: MenuItemType[]; // <-- only items
}

export default function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

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

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const getRows = (subMenuGroups: MenuItemType[][]) => {
    const maxColsPerRow = 3;
    const rows: MenuItemType[][][] = [];
    let currentRow: MenuItemType[][] = [];

    subMenuGroups.forEach((group) => {
      currentRow.push(group);
      if (currentRow.length >= maxColsPerRow) {
        rows.push(currentRow);
        currentRow = [];
      }
    });

    if (currentRow.length) rows.push(currentRow);
    return rows;
  };

  return (
    <header ref={navbarRef} className="bg-transparent px-2 md:px-5 lg:px-12 fixed top-5 h-fit w-full z-50 flex justify-center">
      <div className="bg-white h-20 rounded-xl pl-5 pr-6 flex items-center justify-between shadow-md w-full relative">
        <div className="relative h-15 w-24 md:w-28">
          <Link href="/">
            <Image src="/logo.png" alt="logo" fill className="object-contain" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center">
          {items.map((menu, idx) => (
            <div key={menu.id} className="relative group">
              {menu.children && menu.children.length > 0 ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(idx)}
                    className={`text-black text-sm p-2 mx-1 font-medium flex items-center gap-1 relative
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full
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

                  {openDropdown === idx && (
                    <div
                      ref={dropdownRef}
                      className="fixed left-1/2 top-32 -translate-x-1/2 w-11/12 h-[85vh] bg-white rounded-xl shadow-lg p-6 overflow-auto z-40 flex flex-wrap gap-6"
                    >
                      {getRows([menu.children]).map((row, rIdx) => (
                        <div key={rIdx} className="flex gap-6 w-full">
                          {row.map((column, cIdx) => (
                            <div key={cIdx} className="flex flex-col min-w-[200px]">
                              {column.map((item) => (
                                <Link
                                  key={item.id}
                                  href={item.url || "#"}
                                  className={`font-semibold text-green-500 mb-2 block text-sm ${
                                    pathname === item.url ? "pl-2 text-green-700" : ""
                                  }`}
                                >
                                  {item.title}
                                </Link>
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
                  className={`p-2 mx-1 relative text-black font-medium text-sm transition-all duration-200
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full
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
            className="ml-4 bg-green-500 border border-green-500 text-white text-sm font-bold px-3 py-2 rounded-md hover:bg-dark hover:border-dark transition-all duration-200"
          >
            Doctor Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}

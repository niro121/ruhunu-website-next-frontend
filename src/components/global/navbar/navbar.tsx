"use client";

import { useState, useEffect, useRef } from "react";
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
  const [columns, setColumns] = useState<MenuItemType[][]>([[], [], []]);

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

  // Distribute items into columns with column 1 filled first
  const distributeItems = (menuItems: MenuItemType[]) => {
    const cols: MenuItemType[][] = [[], [], []];
    const colHeights = [0, 0, 0];
    const maxHeight = 80 * 16; // 80vh in px (~16px per rem)
    const padding = 30 * 2; // top + bottom padding

    let currentCol = 0;

    menuItems.forEach((item) => {
      const itemHeight = 40 + (item.children?.length || 0) * 20;

      // Move to next column if this item exceeds maxHeight
      if (colHeights[currentCol] + itemHeight + padding > maxHeight) {
        currentCol++;
        if (currentCol > 2) currentCol = 2; // max 3 columns
      }

      cols[currentCol].push(item);
      colHeights[currentCol] += itemHeight;
    });

    setColumns(cols);
  };

  useEffect(() => {
    if (openDropdown !== null) {
      const menu = items[openDropdown];
      if (menu && menu.children) {
        distributeItems(menu.children);
      }
    }
  }, [openDropdown]);

  return (
    <header
      ref={navbarRef}
      className="bg-transparent px-2 md:px-5 lg:px-12 fixed top-5 h-fit w-full z-50 flex justify-center"
    >
      <div className="bg-white h-20 rounded-xl pl-5 pr-6 flex items-center justify-between shadow-md w-full relative">
        {/* Logo */}
        <div className="relative h-15 w-24 md:w-28">
          <Link href="/">
            <Image src="/logo.png" alt="logo" fill className="object-contain" />
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

                  {/* Mega Menu */}
                  {openDropdown === idx && (
                    <div
                      ref={dropdownRef}
                      className="fixed left-1/2 top-30 -translate-x-1/2 w-11/12 h-[80vh] bg-white rounded-xl shadow-lg p-6 z-40 grid grid-cols-3 gap-6"
                    >
                      {columns.map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-4">
                          {col.map((item) => (
                            <div key={item.id} className="break-inside-avoid">
                              <Link
                                href={item.url || "#"}
                                className="font-semibold text-green-600 text-base block mb-2"
                              >
                                {item.title}
                              </Link>
                              {item.children?.length > 0 && (
                                <div className="flex flex-col ml-3">
                                  {item.children.map((sub) => (
                                    <Link
                                      key={sub.id}
                                      href={sub.url || "#"}
                                      className={`text-sm text-black mb-1 block hover:text-green-600 ${
                                        pathname === sub.url ? "pl-2 text-green-700" : ""
                                      }`}
                                    >
                                      {sub.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-black text-2xl"
          onClick={() => setOpenDropdown(openDropdown === -1 ? null : -1)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {openDropdown === -1 && (
        <div className="md:hidden fixed left-1/2 top-[105px] -translate-x-1/2 w-11/12 h-[80vh] bg-white z-50 flex flex-col shadow-lg">
          <div className="flex justify-end items-center px-5">
            <button
              onClick={() => setOpenDropdown(null)}
              className="text-gray-500 hover:text-green-500 transition-colors duration-200"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5">
            {items.map((menu) => (
              <div key={menu.id} className="mb-3 pb-3 border-b last:border-b-0">
                {menu.children ? (
                  <details>
                    <summary className="flex justify-between items-center cursor-pointer text-base text-gray-800 mb-1 hover:text-green-500">
                      {menu.title}
                    </summary>

                    <div className="pl-3 mt-2">
                      {menu.children.map((child) => (
                        <div key={child.id} className="mb-2">
                          <Link
                            href={child.url || "#"}
                            className="block text-sm text-green-500 mb-1"
                          >
                            {child.title}
                          </Link>

                          {child.children && (
                            <div className="pl-3">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.id}
                                  href={sub.url || "#"}
                                  className="block text-sm text-gray-700 mb-1 hover:text-green-500"
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={menu.url || "#"}
                    className="block text-base font-medium text-gray-800 hover:text-green-500"
                  >
                    {menu.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="sticky bottom-0 bg-white p-4 flex justify-center">
            <Link
              href="/appointment"
              className="w-full text-center block bg-green-500 border border-green-500 text-white text-sm font-bold px-3 py-2 rounded-md hover:bg-dark hover:border-dark transition-all duration-200"
            >
              Doctor Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

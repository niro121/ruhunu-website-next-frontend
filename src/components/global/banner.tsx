"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BannerProps {
  title: string;
  backgroundImage?: string; 
  mobileBackgroundImage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const Banner: React.FC<BannerProps> = ({
  title,
  backgroundImage = "/images/banner-bg.png",
  mobileBackgroundImage = "/images/banner-bg-mobile.png",
  breadcrumbs = [],
}) => {
  const router = useRouter();

  return (
    <div className="relative flex xl:justify-start xl:items-center w-full xl:h-[430px] h-[300px] md:h-[360px] overflow-hidden">
      {/* Desktop Background Image */}
      <div className="hidden xl:block absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Banner Background"
          fill
          quality={100}
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Background Image */}
      <div className="block xl:hidden absolute inset-0">
        <Image
          src={mobileBackgroundImage}
          alt="Mobile Banner Background"
          fill
          quality={100}
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full xl:px-32 lg:px-30 md:px-16 sm:px-6 flex flex-col justify-center h-full">
        <h1 className="font-extrabold text-[#122739] text-[28px] xl:text-[48px] leading-tight">
          {title}
        </h1>

        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <div className="flex justify-start gap-1 text-[14px] xl:text-[16px] flex-wrap items-center mt-2">
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.href ? (
                  <button
                    onClick={() => router.push(item.href!)}
                    className="text-[#122739] font-medium hover:text-[#18CE67] transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span
                    className={`font-medium ${
                      idx === breadcrumbs.length - 1
                        ? "text-[#122739]"
                        : "text-[#122739]"
                    }`}
                  >
                    {item.label}
                  </span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <span className="text-[#122739] px-1 font-medium">›</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;

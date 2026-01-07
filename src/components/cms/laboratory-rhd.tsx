import React from "react";
import Image from "next/image";
import laboratory_rhd from "../../../public/images/laboratory/9.png";
import appstore from "../../../public/images/laboratory/7.png";
import playstore from "../../../public/images/laboratory/8.png";

export default function LaboratoryRHD() {
  return (
    <>
      <div className="bg-green-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 pt-20">
            Laboratory - <span className="text-green-500">RHD Application</span>
          </h1>

          {/* Main Content Grid */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-2 lg:gap-48  max-w-5xl mx-auto">
            {/* Left Column - Features and App Store Buttons */}
            <div className="space-y-8 pb-5">
              {/* Features Section */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Features
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">
                      Only pathology reports are accessible
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">
                      View your reports with one click
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">
                      Ability to print, e-mail or save your reports
                    </span>
                  </li>
                </ul>
              </div>

              {/* App Store Buttons */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Now Available On
                </h2>
                <div className="flex justify-around gap-4 mb-5">
                  <a href="#" className="inline-block">
                    <Image
                      src={appstore}
                      alt="Download on App Store"
                      className="h-10 w-40 sm:h-12"
                    />
                  </a>
                  <a href="#" className="inline-block">
                    <Image
                      src={playstore}
                      alt="Get it on Google Play"
                      className="h-10 w-40 sm:h-12"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Phone Mockup (768px and above) */}
            <div className="hidden md:flex justify-center items-start lg:items-center">
              <Image
                src={laboratory_rhd}
                alt="RHD Application Phone Mockup"
                className="w-3/4 max-w-sm h-auto"
              />
            </div>
          </div>

          {/* Phone Mockup Below (Only visible between 425px and 767px) */}
          <div className="flex md:hidden justify-center items-center pt-16 ">
            <Image
              src={laboratory_rhd}
              alt="RHD Application Phone Mockup"
              className="w-3/4 max-w-sm h-auto"
            />
          </div>
        </div>
      </div>

      {/* Online Laboratory Reports Section */}
      <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Online Laboratory Reports
              </h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Please enter your Bill Number and Phone Number in the given link
                to access your lab reports.
              </p>
            </div>
            <div className="lg:flex-shrink-0">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg shadow-md">
                View Lab Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
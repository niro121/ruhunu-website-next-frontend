"use client";
import React, { useEffect } from "react";

interface ApplicationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationFormModal: React.FC<ApplicationFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Overlay with blur + subtle dark tint
    <div className="fixed inset-0 bg-[#00000033] backdrop-blur-sm flex items-center justify-center z-50">
      {/* Scrollable Modal Container */}
      <div className="relative bg-[#F4F9FD] shadow-xl w-[100%] max-w-2xl max-h-[95vh] overflow-y-auto no-scrollbar py-10 px-20">
        {/* Close Button (X) */}
        <button onClick={onClose} className="absolute top-3 right-4 text-[#18CE67] text-xl font-bold hover:border-1 hover:border-[#18CE67] hover:rounded-full px-2"
        >
          ×
        </button>

        {/* Form Title */}
        <h3 className="text-[35px] font-bold text-[#122739] text-center mb-6">
          Application Form
        </h3>

        {/* Form */}
        <form className="space-y-4 pb-4">
          <div>
            <label className="block text-black font-medium mb-1">Name *</label>
            <input
              type="text"
              className="w-full bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#18ce67]"
            />
          </div>

          <div>
            <label className="block text-black font-medium mb-1">Email *</label>
            <input
              type="email"
              className="w-full bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#18ce67]"
            />
          </div>

          <div>
            <label className="block text-black font-medium mb-1">
              Contact No. *
            </label>
            <input
              type="text"
              className="w-full bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#18ce67]"
            />
          </div>

          <div>
            <label className="block text-black font-medium mb-1">
              Which position are you applying for? *
            </label>
            <input
              type="text"
              className="w-full bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#18ce67]"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-black font-medium mb-1">
              Attach a copy of your resume
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full bg-white rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 file:mr-3 file:py-0.5 file:px-1 file:rounded-md file:border-1 file:bg-gray-200 file:text-black file:cursor-pointer hover:file:bg-gray-300"
            />
          </div>

          {/* Captcha Placeholder */}
          <div className="flex justify-center mt-4">
            <div className="bg-white rounded-md w-full h-20 flex items-center justify-center text-gray-500 text-sm">
              [ CAPTCHA placeholder ]
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="w-60 bg-[#18ce67] hover:bg-[#12283A] text-white py-2 rounded-md text-lg font-semibold mt-4">
                Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationFormModal;
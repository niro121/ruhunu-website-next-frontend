"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface ContactFormData {
  name: string;
  email: string;
  contact: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecaptcha = (token: string | null) => {
    setCaptchaToken(token);
  };

  // Form Validation

  const isFormValid =
  formData.name.trim() !== "" &&
  formData.email.trim() !== "" &&
  formData.contact.trim() !== "" &&
  formData.message.trim() !== "" &&
  captchaToken !== null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    console.log("Form submitted:", formData);
    console.log("Captcha Token:", captchaToken);
  };

  return (
    <div className="flex justify-center items-center xl:py-16 py-10 mt-10 ml-6 mr-6">
      <div className="bg-[#f4f9fd] shadow-md rounded-md xl:w-[900px] w-auto h-auto xl:p-20 p-5">
        <h2 className="text-center xl:text-[40px] text-[28px] font-extrabold text-[#0b2139] mb-14">
          Contact Us Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block xl:text-[16px] text-[14px] font-normal text-black mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="xl:w-[720px] xl:h-[37.60px] w-[320px] h-[37.60px] xl:mt-4 bg-white focus:ring-2 text-black focus:ring-[#a5a5a5] rounded-sm px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block xl:text-[16px] text-[14px] font-normal text-black mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="xl:w-[720px] xl:h-[37.60px] w-[320px] h-[37.60px] xl:mt-4 bg-white focus:ring-2 text-black focus:ring-[#a5a5a5] rounded-sm px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block xl:text-[16px] text-[14px] font-normal text-black mb-1">
              Contact No. <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="xl:w-[720px] xl:h-[37.60px] w-[320px] h-[37.60px] xl:mt-4 bg-white focus:ring-2 text-black focus:ring-[#a5a5a5] rounded-sm px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block xl:text-[16px] text-[14px] font-normal text-black mb-1">
              Your question or comment <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="xl:w-[720px] xl:h-[37.60px] w-[320px] h-[181.60px] xl:mt-4 bg-white focus:ring-2 text-black focus:ring-[#a5a5a5] rounded-sm px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Active reCAPTCHA */}
          <div className="xl:mt-12">
            <ReCAPTCHA
              sitekey="6Leo2hIsAAAAAGBpQHmn4CxqD4a751C1O6CAKJ11"
              onChange={handleRecaptcha}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center xl:mt-12 mt-12">
            <button type="submit" disabled={!isFormValid} className={`xl:text-[16px] text-[11.5px] xl:w-[200px] xl:h-[60px] w-[130px] h-[40px] px-6 py-2 rounded-[5px] font-bold transition-colors duration-200 ${isFormValid ? "bg-[#18CE67] hover:bg-[#16b85d] text-white" : "bg-gray-400 cursor-not-allowed text-white"}`}>
              Send Message
            </button>
          </div>
        </form> 
      </div>
    </div>
  );
};

export default ContactForm;
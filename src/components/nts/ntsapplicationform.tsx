"use client";

import React, { useState, useTransition } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { submitNtsApplication } from "@/actions/ntsapplication.action";

interface ApplicationFormData {
  title: string;
  name: string;
  dobDate: string;
  dobMonth: string;
  dobYear: string;
  age: string;
  gender: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  phone: string;
  nic: string;
  email: string;
}

const inputBase =
  "w-full h-[48px] rounded-md bg-white px-4 text-[14px] text-[#0b2139] border border-[#dbe5ef] focus:outline-none focus:ring-2 focus:ring-[#a5a5a5]";

const NTSApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    title: "",
    name: "",
    dobDate: "",
    dobMonth: "",
    dobYear: "",
    age: "",
    gender: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    phone: "",
    nic: "",
    email: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    formData.title &&
    formData.name &&
    formData.age &&
    formData.gender &&
    formData.address1 &&
    formData.city &&
    formData.country &&
    formData.phone &&
    formData.nic &&
    formData.email &&
    captchaToken;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify reCAPTCHA");
      return;
    }

    startTransition(async () => {
      const result = await submitNtsApplication(formData);

      if (result.isError) {
        setMessage(result.error);
      } else {
        setMessage("Application submitted successfully ✅");

        // Reset form
        setFormData({
          title: "",
          name: "",
          dobDate: "",
          dobMonth: "",
          dobYear: "",
          age: "",
          gender: "",
          address1: "",
          address2: "",
          city: "",
          country: "",
          phone: "",
          nic: "",
          email: "",
        });

        setCaptchaToken(null);
      }
    });
  };

  return (
    <div className="flex justify-center py-14 px-4">
      <div className="bg-[#f4f9fd] shadow-md rounded-md w-full max-w-[950px] px-6 py-12 xl:px-20">
        <h2 className="text-center text-[28px] xl:text-[48px] font-extrabold text-[#0b2139] mb-12">
          Application Form
        </h2>

        {message && (
          <div className="mb-6 text-center text-sm font-medium text-green-700">
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-6"
        >
          {/* Title */}
          <div>
            <label className="block mb-2 text-[16px]">Title *</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={inputBase}
            >
              <option value="">Please Select</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block mb-2 text-[16px]">Name *</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputBase}
            />
          </div>

          {/* DOB */}
          <div className="xl:col-span-2">
            <label className="block mb-2 text-[16px]">Date of Birth *</label>
            <div className="grid grid-cols-3 gap-4">
              <input
                name="dobDate"
                placeholder="Date"
                value={formData.dobDate}
                onChange={handleChange}
                className={inputBase}
              />
              <input
                name="dobMonth"
                placeholder="Month"
                value={formData.dobMonth}
                onChange={handleChange}
                className={inputBase}
              />
              <input
                name="dobYear"
                placeholder="Year"
                value={formData.dobYear}
                onChange={handleChange}
                className={inputBase}
              />
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="block mb-2 text-[16px]">Age *</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={inputBase}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 text-[16px]">Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={inputBase}
            >
              <option value="">Please Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Address */}
          <div className="xl:col-span-2">
            <label className="block mb-4 text-[16px]">Address *</label>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <input
                name="address1"
                placeholder="Address Line 1"
                value={formData.address1}
                onChange={handleChange}
                className={inputBase}
              />
              <input
                name="address2"
                placeholder="Address Line 2"
                value={formData.address2}
                onChange={handleChange}
                className={inputBase}
              />
              <input
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className={inputBase}
              />
              <input
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className={inputBase}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-[16px]">Phone *</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputBase}
            />
          </div>

          {/* NIC */}
          <div>
            <label className="block mb-2 text-[16px]">NIC *</label>
            <input
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              className={inputBase}
            />
          </div>

          {/* Email */}
          <div className="xl:col-span-2">
            <label className="block mb-2 text-[16px]">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputBase}
            />
          </div>

          {/* reCAPTCHA */}
          <div className="xl:col-span-2 mt-6">
            <ReCAPTCHA
              sitekey="6Leo2hIsAAAAAGBpQHmn4CxqD4a751C1O6CAKJ11"
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          {/* Submit */}
          <div className="xl:col-span-2 flex justify-center mt-8">
            <button
              type="submit"
              disabled={!isFormValid || isPending}
              className={`w-[160px] h-[48px] rounded-md font-semibold transition ${
                isFormValid
                  ? "bg-[#18CE67] hover:bg-[#16b85d] text-white"
                  : "bg-gray-400 cursor-not-allowed text-white"
              }`}
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NTSApplicationForm;

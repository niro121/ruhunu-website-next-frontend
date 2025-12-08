"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

export default function ReportBanner() {
    const [open, setOpen] = useState(false);

    const validationSchema = Yup.object().shape({
        billNo: Yup.string().required("Bill Number is required"),
        phoneNo: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
            .required("Phone Number is required"),
    });

    return (
        <>
            {/* ===== Banner Section ===== */}
            <section className="bg-[#f4f9fd] w-full bg-cover bg-center bg-no-repeat flex flex-col md:flex-row justify-between items-center text-white px-6 md:px-20 py-25 mt-10">
                <div>
                    <h2 className="mb-[4px] md:mb-0 text-black text-center md:text-left text-[20px] md:text-[40px] font-bold">
                        Online Laboratory Reports
                    </h2>
                    <p className="text-black text-[16px] leading-[29px]">
                        Please enter your Bill Number and Phone Number in the given link to access your lab reports.
                    </p>
                </div>

                <div>
                    <button
                        onClick={() => setOpen(true)}
                        className="w-fit text-center block bg-[#18CE67] border border-[#18CE67] text-white text-[15px] font-bold px-[40px] py-[10px] mt-[8px] rounded-[6px] hover:bg-[#122739] hover:border-[#122739] transition-all duration-200"
                    >
                        View Lab Reports
                    </button>
                </div>
            </section>

            {/* ===== Popup Modal ===== */}
            {open && (
                <div className="fixed top-0 left-0 right-0 pt-3 flex justify-center bg-black/50 z-50 h-screen">
                    <div className="bg-white w-[90%] md:w-[450px] p-6 rounded-lg shadow-lg relative h-fit">

                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-6 text-gray-600 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        {/* ===== Formik Form ===== */}
                        <Formik
                            initialValues={{ billNo: "", phoneNo: "" }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log("Form Submitted:", values);
                                // redirect here or call API
                            }}
                        >
                            {() => (
                                <Form className="mt-6 space-y-6">
                                    {/* Bill Number Row */}
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <label className="w-24 text-gray-700 font-medium">
                                                Bill No. *
                                            </label>

                                            <Field
                                                name="billNo"
                                                className="flex-1 border rounded px-3 py-2 text-black focus:outline-[#18CE67]"
                                                placeholder="Enter Bill Number"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="billNo"
                                            component="div"
                                            className="text-red-500 text-sm ml-27"
                                        />
                                    </div>

                                    {/* Phone Number Row */}
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <label className="w-24 text-gray-700 font-medium">
                                                Phone No. *
                                            </label>

                                            <Field
                                                name="phoneNo"
                                                className="flex-1 border rounded px-3 py-2 text-black focus:outline-[#18CE67]"
                                                placeholder="Enter Phone Number"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="phoneNo"
                                            component="div"
                                            className="text-red-500 text-sm ml-27"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#18CE67] text-white font-bold py-2 rounded hover:bg-[#122739] transition-all"
                                    >
                                        View My Lab Reports
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </>
    );
}

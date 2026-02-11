"use client";

import { useState } from "react";
import { MenuItemType } from "@/types/menu-type";
import Image from "next/image";
import { subscribeToNewsletter } from "@/actions/newsletter.action";

interface FooterProps {
    items: MenuItemType[];
}

const socialIcons = [
    { name: "facebook", link: "/", image: "/social-media-icons/facebook.png" },
    { name: "youtube", link: "/", image: "/social-media-icons/youtube.png" },
    { name: "instagram", link: "/", image: "/social-media-icons/instagram.png" },
    { name: "linkedin", link: "/", image: "/social-media-icons/linkedin.png" },
    { name: "skype", link: "/", image: "/social-media-icons/skype.png" },
];

export default function Footer({ items }: FooterProps) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async () => {
        if (!email || !email.includes("@")) {
            setIsError(true);
            setMessage("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        setMessage("");
        setIsError(false);

        const result = await subscribeToNewsletter(email);

        if (result.isError) {
            setIsError(true);
            setMessage(result.error);
        } else {
            setIsError(false);
            setMessage("Successfully subscribed!");
            setEmail("");
        }

        setLoading(false);
    };

    return (
        <div>
            {/* ================= Newsletter Section ================= */}
            <div className="bg-[#f4f9fd] px-[10px] md:px-[20px] lg:px-[50px] py-[70px] grid grid-cols-1 md:grid-cols-5">
                <div className="col-span-3">
                    <h1 className="text-[20px] md:text-[40px] text-[#122739] mb-[8px] font-bold">
                        Stay Informed: Ruhunu Hospital's Latest Health News & Updates
                    </h1>
                    <p className="text-[16px] text-black mb-[16px]">
                        Together for Better Health: Join Ruhunu Hospital's Newsletter Community Today
                    </p>

                    {message && (
                        <p
                            className={`text-[14px] mt-2 ${
                                isError ? "text-red-500" : "text-green-600"
                            }`}
                        >
                            {message}
                        </p>
                    )}
                </div>

                <div className="col-span-2 flex items-center">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-black bg-white py-[6px] px-[20px] h-[55px] w-[81%]"
                        placeholder="Enter Your Email"
                        disabled={loading}
                    />

                    <button
                        type="button"
                        onClick={handleSubscribe}
                        disabled={loading}
                        className="bg-[#18CE67] h-[55px] text-white px-[20px] font-semibold disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Subscribe"}
                    </button>
                </div>
            </div>

            {/* ================= Footer Section ================= */}
            <div className="bg-[#122739] px-[10px] md:px-[20px] lg:px-[50px] py-[70px]">
                {/* Social Icons */}
                <div className="flex justify-center gap-1 mb-[24px]">
                    {socialIcons.map((icon, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-full p-[5px] transition-all duration-300 ease-in-out hover:scale-[1.5] hover:bg-[#18CE67]"
                        >
                            <a href={icon.link}>
                                <Image
                                    src={icon.image}
                                    width={15}
                                    height={15}
                                    alt={icon.name}
                                />
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-white text-[12px] text-center mb-[40px]">
                    Ruhunu Hospital is the no.1 doctor channelling service located in
                    the Southern Province's medical hub. Book your appointment, at your
                    convenience and be Safe.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] text-white px-[20px]">
                    {/* Quick Links */}
                    <div className="col-span-2">
                        <h1 className="text-[24px] mb-[24px] text-[#18CE67] font-bold">
                            Quick Links
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {items.map((link, index) => (
                                <div key={index}>
                                    <a
                                        href={link.url}
                                        className="text-[12px] leading-[18px] mb-[10px]"
                                    >
                                        {link.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2">
                        <h1 className="text-[24px] mb-[24px] text-[#18CE67] font-bold">
                            Get In Touch
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <p className="text-[12px] font-bold mb-[8px]">Address</p>
                                <p className="text-[12px] mb-[16px]">
                                    <a href="https://www.google.com/maps/place/Ruhunu+Hospital/">
                                        Ruhunu Hospital (Pvt.) Ltd,<br />
                                        Karapitiya, Galle, Sri Lanka
                                    </a>
                                </p>
                            </div>

                            <div>
                                <p className="text-[12px] font-bold mb-[8px]">Email</p>
                                <p className="text-[12px] mb-[16px]">
                                    <a href="mailto:info@ruhunuhospital.lk">
                                        info@ruhunuhospital.lk
                                    </a>
                                </p>
                            </div>

                            <div>
                                <p className="text-[12px] font-bold mb-[8px]">
                                    General Line
                                </p>
                                <p className="text-[12px] mb-[16px]">
                                    <a href="tel:+94917694059">+94 91 769 4059</a> /
                                    <a href="tel:+94917694060"> 60</a>
                                </p>
                            </div>

                            <div>
                                <p className="text-[12px] font-bold mb-[8px]">
                                    Ambulance & Home Visiting
                                </p>
                                <p className="text-[12px] mb-[16px]">
                                    <a href="tel:+94775530530">+94 77 553 0530</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Copyright ================= */}
            <div className="bg-[#070c19] md:h-[50px] flex flex-col md:flex-row items-center justify-between md:px-[50px] lg:px-[100px] sm:px-[10px] gap-3">
                <p className="text-[#f8f9fa] text-[10px]">
                    Copyright © 2025 <b>Ruhunu Hospitals (Pvt) Ltd</b>. All Rights Reserved.
                </p>
                <p className="text-[#f8f9fa] text-[10px]">
                    Designed & Developed By{" "}
                    <a href="https://www.archmage.lk/">Archmage Solutions</a>
                </p>
            </div>
        </div>
    );
}

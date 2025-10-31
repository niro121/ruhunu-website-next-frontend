import Image from "next/image";

const scoialIcon = [
    { name: "facebook", link: "/", image: "/social-media-icons/facebook.png"},
    { name: "youtube", link: "/", image: "/social-media-icons/youtube.png"},
    { name: "instagram", link: "/", image: "/social-media-icons/instagram.png"},
    { name: "linkedin", link: "/", image: "/social-media-icons/linkedin.png"},
    { name: "skype", link: "/", image: "/social-media-icons/skype.png"}
]

const mainMenu = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Services & Facilities", url: "/" },
    { name: "International Patients", url: "/" },
    { name: "Home", url: "/"},
    { name: "About Us", url: "/"},
    { name: "Services & Facilities", url: "/"},
    { name: "International Patients", url: "/"},
    { name: "Home", url: "/"},
    { name: "About Us", url: "/"},
    { name: "Services & Facilities", url: "/"},
    { name: "International Patients", url: "/"},
    { name: "Home", url: "/"},
    { name: "About Us", url: "/"}
]


export default function Footer() {
    return (
        <div className="">
            <div className="bg-[#f4f9fd] px-[10px] md:px-[20px] lg:px-[50px] py-[70px] grid grid-cols-1 md:grid-cols-5 gap-[0px]">
                <div className="col-span-3">
                    <h1 className="text-[40px] text-[#122739] mb-[8px] font-bold">Stay Informed: Ruhunu Hospital's Latest Health News & Updates</h1>
                    <p className="text-[16px] text-black font-normal mb-[16px]">Together for Better Health: Join Ruhunu Hospital's Newsletter Community Today</p>
                </div>
                <div className="col-span-2 flex items-center">
                    <input type="email" className="text-black bg-white py-[6px] px-[20px] h-[55px] w-[81%]" placeholder="Enter Your Email"></input>
                    <button type="submit" className="bg-[#18CE67] h-[55px] text-white text-[15px] py-[12px] px-[20px] font-semibold">Subscribe</button>
                </div>
            </div>
            <div className="bg-[#122739] px-[10px] md:px-[20px] lg:px-[50px] py-[70px]">
                <div className="">
                    <div className="flex justify-center gap-5">
                        {scoialIcon.map((icon, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-full p-[5px] transition-all duration-300 ease-in-out hover:scale-[1.5] hover:bg-[#18CE67]"
                            >
                                <a href={icon.link} className="block">
                                    <Image
                                        src={icon.image}
                                        width={20}
                                        height={20}
                                        alt={icon.name}
                                        className="rounded-full transition-transform duration-300 ease-in-out"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                    <p className="text-white text-[12px] text-center mt-[24px] mb-[40px]">Ruhunu Hospital is the no.1 doctor channelling service located in
                  the Southern Province's medical hub. Book your appointment, at your convenience and be Safe.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px]">
                    <div className="col-span-3">
                        <h1 className="text-[24px] mb-[24px] text-[#18CE67] font-bold">Quick Links</h1>
                        <div className="w-full grid grid-cols-2 md:grid-cols-3">
                            {mainMenu.map((link,index) => (
                                <div key={index} className="">
                                    <a href={link.url} className="text-[12px] mt-[16px]">{link.name}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h1 className="text-[24px] mb-[24px] text-[#18CE67] font-bold">Get In Touch</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="">
                                <p className="text-[12px] mb-[16px] font-bold">Address</p>
                                <p className="text-[12px] mb-[16px]">
                                    <a href="https://www.google.com/maps/place/Ruhunu+Hospital/@6.0693927,80.2271645,15z/data=!4m6!3m5!1s0x3ae1717952ca850b:0xb94d15a46bb23af3!8m2!3d6.0693927!4d80.2271645!16s%2Fg%2F1vzn3_2p?entry=ttu">
                                        Ruhunu Hospital (Pvt.) Ltd,<br/>
                                        Karapitiya, Galle,Sri Lanka
                                    </a>
                                </p>
                            </div>
                            <div className="">
                                <p className="text-[12px] mb-[16px] font-bold">Email</p>
                                <p className="text-[12px] mb-[16px]">
                                    <a href="mailto:info@ruhunuhospital.lk">info@ruhunuhospital.lk</a>
                                </p>
                            </div>
                            <div className="">
                                <p className="text-[12px] mb-[16px] font-bold">General Line</p>
                                <p className="text-[12px] mb-[16px]">
                                    <a href="tel:+94917694059">+94917694059 </a>/
                                    <a href="tel:+94917694060"> 60</a>
                                </p>
                            </div>
                            <div className="">
                                <p className="text-[12px] mb-[16px] font-bold">Ambulance & Home Visiting Services</p>
                                <p className="text-[12px] mb-[16px]">
                                    <a href="tel:+94775530530">+94775530530</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#070c19] h-[50px] flex flex-col md:flex-row  items-center justify-between px-[50px]">
                <p className="text-[#f8f9fa] text-[10px]">
                    Copyright © 2025 
                    <b> Ruhunu Hospitals (Pvt) Ltd </b>
                    All Rights Reserved.
                </p>
                <p className="text-[#f8f9fa] text-[10px]">
                    Designed & Developed By 
                    <a href="https://www.archmage.lk/" className=""> Archmage Solutions </a>
                </p>
            </div>
        </div>
    )
}
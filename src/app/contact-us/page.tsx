import React from "react";
import Banner from "@/components/global/banner";
import ContactInfo from "@/components/contact-us/contactinfo";
import HotlinesInfo from "@/components/contact-us/hotlineinfo";
import Banner1 from "@/components/common/banner1";
import ContactForm from "@/components/contact-us/contactform";

export default function page() {
  return (
    <div>
      <Banner
        title="Contact Us"
        backgroundImage="/images/contactus/contactusbanner.png"
        mobileBackgroundImage="/images/contactus/contactusbanner.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <ContactInfo />
      <HotlinesInfo />
      <Banner1
        title="Online Customer Registration"
        description="Online Customer Registration"
        buttonText="Customer Registration"
      />
      <ContactForm />
    </div>
  );
}

import React from "react";

import ContactInfo from "../components/contactinfo";
import HotlinesInfo from "../components/hotlineinfo";
import ContactForm from "../components/contactform";
import Banner1 from "../components/common/banner1";

export default function page() {
  return (
    <div>
      <Banner
        title="Contact Us"
        backgroundImage="/images/contactusbanner.png"
        mobileBackgroundImage="/images/contactusbanner.jpg"
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

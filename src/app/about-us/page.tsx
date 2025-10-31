import BannerSection from "@/components/about-us/Banner";
import CompanyDetailsSection from "@/components/about-us/Company Details/CompanyDetails";
import HeroTextSection from "@/components/about-us/HeroText";
import MapSection from "@/components/about-us/MapSection";
import MediaSection from "@/components/about-us/MediaSection";
import MessageSection from "@/components/about-us/MessageSection";
import Banner from "@/components/global/banner";


export default function AboutUsPage(){
    return(
        <main className="overflow-hidden">
            <Banner
                title="About Us"
                backgroundImage="/about-us/AboutUs-DesktopBG.png"
                mobileBackgroundImage="/about-us/AboutUs-MobileBG.png"
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
            />
            <HeroTextSection/>
            <MessageSection/>
            <CompanyDetailsSection/>
            <BannerSection/>
            <MediaSection/>
            <MapSection/>
        </main>
    )
}
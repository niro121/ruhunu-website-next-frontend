import BannerSection from "./Components/Banner";
import CompanyDetailsSection from "./Components/Company Details/CompanyDetails";
import HeroTextSection from "./Components/HeroText";
import MapSection from "./Components/MapSection";
import MediaSection from "./Components/MediaSection";
import MessageSection from "./Components/MessageSection";


export default function AboutUsPage(){
    return(
        <main className="overflow-hidden">
            <HeroTextSection/>
            <MessageSection/>
            <CompanyDetailsSection/>
            <BannerSection/>
            <MediaSection/>
            <MapSection/>
        </main>
    )
}
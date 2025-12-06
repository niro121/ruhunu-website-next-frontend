import BannerSection from "../about-us/Banner";
import Hero from "../common/hero";
import WelcomePopup from "../global/welcome-popup";
import AboutUs from "../home/about-us-section";
import NewsAndArticleNews from "../home/news-and-article-new-section";
import OurServices from "../home/services-section";
import OurTestimonials from "../home/testimonials-section";

export default function SectionRenderer({ section }: any) {
    const { type, layout, data } = section;

    switch (type) {
        case "Hero":
            return <Hero layout={layout} data={data}/>;
            break;

        case "Text Only":
            return <AboutUs/>;
            break;

        case "Text-Text":
            return <AboutUs/>;
            break;

        case "Text-Media":
            return <AboutUs/>;
            break;

        case "Media Only":
            return <AboutUs/>;
            break;

        case "Media-Media":
            return <NewsAndArticleNews/>;
            break;

        case "Extra Large Text":
            return <AboutUs/>;
            break;

        case "Spacer":
            return <AboutUs/>;
            break;

        case "Award":
            return <AboutUs/>;
            break;

        case "Banner":
            return <BannerSection data={data}/>;
            break;
        
        case "Borad Of Directors":
            return <AboutUs/>;
            break;

        case "Caousel":
            return <AboutUs/>;
            break;

        case "Accordion":
          return <></>;
          break;

        case "Documents":
            return <AboutUs/>;
            break;

        case "Media":
            return <AboutUs/>;
            break;

        case "PopUp":
            return <WelcomePopup/>;
            break;

        case "Map":
            return <AboutUs/>;
            break;

        case "Services":
            return <OurServices data={data}/>;
            break;

        case "Testimonials":
            return <OurTestimonials/>;
            break;

        default:
            return (
                <div className="p-4 bg-red-100 text-red-800">
                    Unknown section: {type} (layout {layout})
                </div>
            );
    }
}
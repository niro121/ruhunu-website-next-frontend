import BannerSection from "../common/Banner";
import Hero from "../common/hero";
import Popup from "../global/popup";
import AboutUs from "../home/about-us-section";
import OurTestimonials from "../home/testimonials-section";
import ServicesWrapper from "../common/services-wrapper";
import TextMedia from "../cms/text-media-component";
import TextOnly from "../cms/text-only-section";
import MediaMedia from "../cms/media-media-section";
import LocationMap from "../cms/location-map";
import BoardOfDirectors from "../cms/board-of-directors";
import FacebookYoutube from "../cms/facebook-youtube-section";
import Gallery from "../cms/gallery";
import ContactForm from "../contact-us/contactform";
import NTSApplicationForm from "../nts/ntsapplicationform";

export default function SectionRenderer({ section }: any) {
    const { type, layout, data } = section;

    switch (type) {
        case "Hero":
            return <Hero layout={layout} data={data}/>;
            break;

        case "Text Only":
            return <TextOnly data={data} layout={layout}/>;
            break;

        case "Text-Text":
            return <AboutUs/>;
            break;

        case "Text-Media":
            return <TextMedia data={data} layout={layout} />;
            break;

        case "Media Only":
            return <AboutUs/>;
            break;

        case "Media-Media":
            return <MediaMedia data={data}/>
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
            return <BoardOfDirectors data={data}/>;
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
            return <Popup data={data}/>;
            break;

        case "Map":
            return <LocationMap lat={data.content[0].latitude} lng={data.content[0].longitude}/>;
            break;

        case "Services":
            return <ServicesWrapper data={data}/>;
            break;

        case "Testimonials":
            return <OurTestimonials/>;
            break;

        case "Facebook-Youtube":
            return <FacebookYoutube data={data} />;
            break;

        case "Contact":
            return <ContactForm/>;
            break;

        case "Gallery":
            return <Gallery data={data} layout={layout}/>;

        case "NtsApplication":
            return <NTSApplicationForm />;
        default:
            return (
                <div className="p-4 bg-red-100 text-red-800">
                    Unknown section: {type} (layout {layout})
                </div>
            );
    }
}
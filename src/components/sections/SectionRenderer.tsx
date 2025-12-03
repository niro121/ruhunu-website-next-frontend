import AboutUs from "../home/about-us-section";
import HeroSlider from "../home/hero-sider";

export default function SectionRenderer({ section }: any) {
    const { type, layout, data } = section;

    switch (type) {
        case "Hero":
            return <HeroSlider layout={layout} data={data}/>;
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
            return <AboutUs/>;
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
            return <AboutUs/>;
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
            return <AboutUs/>;
            break;

        case "Map":
            return <AboutUs/>;
            break;

        default:
            return (
                <div className="p-4 bg-red-100 text-red-800">
                    Unknown section: {type} (layout {layout})
                </div>
            );
    }
}

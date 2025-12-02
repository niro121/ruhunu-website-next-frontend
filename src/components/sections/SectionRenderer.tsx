import AboutUs from "../home/about-us-section";
import HeroSlider from "../home/hero-sider";

export default function SectionRenderer({ section }: any) {
    const { type, layout, data } = section;

    switch (type) {
        case "Hero":
            return <HeroSlider layout={layout} data={data}/>;
            break;

        case "Text Text":
            return <AboutUs/>;
            break;

        // case "Accordion":
        //   if (layout === 1) return <AccordionLayout1 data={data} />;
        //   break;

        default:
            return (
                <div className="p-4 bg-red-100 text-red-800">
                    Unknown section: {type} (layout {layout})
                </div>
            );
    }
}

import Banner from "@/components/global/banner";
import Text from "@/components/news-&-event/[news-story]/Components/Text";


export default function NewStoryPage() {
    return(
        <main className="overflow-hidden">
            <Banner
                title="News & Event"
                backgroundImage="images/NewsAndEvent/News_DesktopBG.png"
                mobileBackgroundImage="images/NewsAndEvent/News_MobileBG.jpg"
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
            />
            <Text/>
        </main>
    )
}
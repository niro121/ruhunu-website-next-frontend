import Banner from "@/components/global/banner";
import FacilityCardArray from "@/components/rooms-&-other-facilities/FacilityCardArray";
import RoomCardArray from "@/components/rooms-&-other-facilities/RoomCardArray";

export default function Facilities(){
    return(
        <main>
            <Banner
                title="Rooms & Other Facilities"
                backgroundImage="/images/Facilities/Facilities_DesktopBG.jpg"
                mobileBackgroundImage="/images/Facilities/Facilities_MobileBG.jpg"
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rooms & Other Facilities" }]}
            />
            <RoomCardArray/>
            <FacilityCardArray/>
        </main>
    )
}
import Banner from "@/components/global/banner";
import BranchArraySection from "@/components/rh-branches/Components/BranchArray";

export default function Branches(){
    return(
        <main>
            <Banner
                title="RH Branches"
                backgroundImage="/images/Branches/Branches_DesktopBG.jpg"
                mobileBackgroundImage="/images/Branches/Branches_MobileBG.jpg"
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Branches" }]}
            />
            <BranchArraySection/>
        </main>
    )
}
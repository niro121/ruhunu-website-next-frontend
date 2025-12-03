import { fetchPage } from "@/actions/page.action";
import Hero from "@/components/common/hero";
import DoctorGrid from "@/components/doctor-list/doctorgrid";
import DoctorSearch from "@/components/doctor-list/doctorsearch";
import { notFound } from "next/navigation";

export default async function DoctorsListPage() {
    const page = await fetchPage("doctors-list");

    if (!page || !page.visibility) return notFound();

    // Find Hero section
    const heroSection = page.sections?.find(
        (section: any) => section.type === "Hero"
    );

    // Dynamic specialties + branches (you can replace this later from CMS or DB)
    const specialties = [
        "Acting Consultant Geriatrician",
        "Alergy Immunology & Molecular Medicine",
        "Andrologist",
        "Ayurvedic",
        "Ayurvedic Surgeon",
        "Cardiac Electrophysiologist",
        "Cardiac Thoracic",
        "Cardiologist",
        "Chest Physician",
        "Clinical Psychologist",
        "Clinical Geneticist & Genetic Counselor",
        "Cnosultant Mycologist",
    ];

    const branches = [
        "Ruhunu Hospital - Makandura",
        "Ruhunu Hospital - Hikkaduwa",
        "Ruhunu Hospital - Udugama",
        "Ruhunu Hospital - Matara",
        "Ruhunu Hospital - Neluwa",
        "Ruhunu Hospital - Baadegama",
        "Ruhunu Hospital - Galle",
        "Ruhunu Hospital - Labeema",
        "Ruhunu Hospital - Ranna",
    ];

    return (
        <div>
            {heroSection && (
                <Hero layout={heroSection.layout} data={heroSection.data} />
            )}

            {/* Doctor Search */}
            <DoctorSearch specialties={specialties} branches={branches} />

            {/* Galle Section */}
            <div className="xl:px-32 px-4 py-8">
                <h1 className="xl:text-[34px] text-[24px] font-extrabold text-black">
                    Ruhunu Hospital <span className="text-[#18CE67]">Galle</span>
                </h1>
            </div>

            <DoctorGrid />

            {/* Matara Section */}
            <div className="xl:px-32 px-4 py-4">
                <h1 className="xl:text-[34px] text-[24px] font-extrabold text-black">
                    Ruhunu Hospital Medical Center{" "} <span className="text-[#18CE67]">Matara</span>
                </h1>
            </div>

            <DoctorGrid />
        </div>
    );
}

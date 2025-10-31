import Banner from "@/components/global/banner";
import VacancyTable from "@/components/vacancies/VacancyTable";


const jobData = [
    { role: "Customer Support Specialist", location: "Matara", closingDate: "31/01/2024" },
    { role: "Financial Assistant", location: "Matara", closingDate: "31/01/2024" },
    { role: "Medical Officer (ICU/CCU)", location: "Galle", closingDate: "31/01/2024" },
    { role: "Nurse", location: "Baddegama", closingDate: "02/02/2024" },
    { role: "Pharmacist", location: "Matara", closingDate: "05/02/2024" },
    { role: "Assistant Pharmacist", location: "Matara", closingDate: "05/02/2024" },
    { role: "Customer Specialist", location: "Matara", closingDate: "31/01/2024" },
    { role: "Financial Assistant", location: "Matara", closingDate: "31/01/2024" },
    { role: "Medical Officer (ICU/CCU)", location: "Galle", closingDate: "31/01/2024" },
    { role: "Nurse", location: "Baddegama", closingDate: "02/02/2024" },
    { role: "Pharmacist", location: "Matara", closingDate: "05/02/2024" },
    { role: "Assistant Pharmacist", location: "Matara", closingDate: "05/02/2024" },
    { role: "Customer Support Specialist", location: "Matara", closingDate: "31/01/2024" },
    { role: "Financial Assistant", location: "Matara", closingDate: "31/01/2024" },
    { role: "Medical Officer (ICU/CCU)", location: "Galle", closingDate: "31/01/2024" },
    { role: "Nurse", location: "Baddegama", closingDate: "02/02/2024" },
    { role: "Pharmacist", location: "Matara", closingDate: "05/02/2024" },
    { role: "Assistant Pharmacist", location: "Matara", closingDate: "05/02/2024" },
  ];

export default function CareerVacancies(){
    return(
        <main>
            <Banner
                title="Career Vacancies"
                backgroundImage="/images/Vacancies/Vacancies_DesktopBG.jpg"
                mobileBackgroundImage="/images/Vacancies/Vacancies_MobileBG.jpg"
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Vacancies" }]}
            />
            <VacancyTable data={jobData} />
        </main>
    )
}
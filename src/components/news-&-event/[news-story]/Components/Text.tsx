import Link from "next/link";

export default function Text() {
    return(
        <section id="News Event" className="px-32 text-[#122739] my-14">
            <h2 className="text-3xl md:text-[40px] font-extrabold mb-2">Ruhunu Hospital Opens Sri Lanka’s most Luxurious Hospital Suites 2</h2>

            <p className="text-lg text-black mt-6 mb-20 font-semibold">July 15, 2024</p>

            <p className="text-lg mb-14">
                Ruhunu Hospital, the largest private hospital in Southern Province, has announced the opening of its latest addition – the King's Court and Presidential Suite. These ultra-luxury suites offer a premium healthcare experience, coupled with utmost comfort and luxury.
            </p>

            <p className="text-lg mb-14">
                The Suites are ideal for patients who demand nothing but the best in healthcare and comfort. These are perfect for patients who value their privacy and want to recover in a calming and luxurious environment. Whether you're a local resident or an international patient, Ruhunu Hospital's King's Court and Presidential Suite offers an unmatched healthcare experience.
            </p>

            <p className="text-lg mb-14">
                The space comprises of a Marble floored living room, dining room, kitchenette, patient bed, bystander bed, powder room and a bathtub. These suites are designed to cater to the needs of patients who require specialized care in a luxurious and private environment. Both suites comprise more than 1000 Sqft in size. Ruhunu Hospital has a dedicated Team of Medical Professionals and Butlers allocated for these two rooms. 
            </p>

            <p className="text-lg mb-14">
                CO-CEO of Ruhunu Hospital Pvt Ltd, Raveen Wickramasinghe and Janith Liyanage said. “We are thrilled to provide patients with an unparalleled experience of luxury and comfort. The Hospital commits in providing the best healthcare services to its patients. Ruhunu Hospital is poised to become the go-to destination for patients who demand the best in healthcare and luxury. Patients can avail themselves of personalized medical care from the hospital's expert team of Docotrs  and nurses, all within the confines of the opulent suites. As the next step we will be focusing on International and Domestic Medical Tourism and developing Ruhunu Hospital as a global player in Health care.”
            </p>

            <p className="text-lg mb-24">
                Ruhunu Hospital in 2020 launched its state-of-the-art facility with a Tag line “ Ruhunu 2.0, Newer, Better, Stronger “  The hospital also made history by launching the first Private sector  Cath Lab in the Southern Province. On top of that the largest Private Sector ICU/HDU complex in the Southern Province comprising of 9 beds, 4 Operating Theares and the Largest Private Vascular center in Sri Lanka in the past few years. The 28 Year old Hospital is keeping up its reputation and has cemented Karapitiya, Galle as the Medical Hub of the Southern Province.
            </p>

            <p className="text-[#18CE67] text-lg font-medium hover:underline">
                <Link href="/news-&-event">
                    « Back to News & Events
                </Link>
            </p>
        </section>
    )
}
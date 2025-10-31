import Banner from "@/components/global/banner";
import NewsSection from "@/components/news-&-event/Components/CardArray";


export default function NewsAndEventPage() {
  const sampleNews = [
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card1.jpg",
      title: "Ruhunu Hospital Opens Sri Lanka’s most Luxurious Hospital Suites 2",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital, the largest private hospital in Southern Province, has announced the opening of its latest addition – the King's Court and Presidential Su...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card2.jpg",
      title: "Ruhunu Hospital invests Rs. 250m to launch the first private sector Cath Lab in the Southern Province",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital (Pvt.) Ltd, a known healthcare brand in the Southern Province, has made history by launching the first private sector Cath Lab in the South...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card3.jpg",
      title: "Ruhunu Hospital invests Rs 1.5 billion in opening its new wing; Ruhunu 2.0",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital a leading private sector healthcare provider in the Southern Province with a rich history of more than 25 years, launched its latest invest...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card4.jpg",
      title: "Ruhunu Hospitals awarded President’s Funds for spinal code compressions and brain surgeries",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospitals (Pvt) Ltd, which is spearheading the task of transforming Galle into a centre for excellence in neurosurgery and neurosciences in Sri Lank...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card5.jpg",
      title: "Ruhunu Hospital Diagnostics expands to Galle with a state-of-the-art laboratory",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital Diagnostics, in its relentless pursuit of customer satisfaction and convenience, has proudly opened its latest state-of-the-art laboratory ...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card6.jpg",
      title: "Ruhunu Hospital Diagnostics (RHD) bestowed with globally acclaimed ISO 15189 Accreditation",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital Diagnostics (RHD) achieved yet another milestone by becoming the only private healthcare provider in the Southern Province when RHD was bes...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card7.jpg",
      title: "දකුණු පළාතේ සෞඛ්‍ය ක්ෂේත්‍රයට නවීන තාක්‍ෂණය පළමුවෙන්ම අඳුන්වාදෙන රුහුණු රෝහල් පෞද්ගලික සමාගම දරු සිඟිත්තකුගේ සිහිනය සැබෑකරදීමට දකුණු පළාතට ප්‍රථමවරට IVF තාක්ෂණයද හඳුන්වාදෙයි.",
      date: "July 15, 2024",
      description:
        "දරුවකු නොමැතිව පසුතැවිල්ලෙන් සිටින ඔබට රුහුණු රෝහලේ සාඵල්‍යතා මධ්‍යස්ථානයට පැමිණීමෙන් අස්වැසිල්ලක් ලබාගත හැකිවන බව සතුටින් දැනුම් දෙමු.රුහුණු පෞද්ගලික රෝහල...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card8.jpg",
      title: "Ruhunu Hospital expands to Aluthgama with a state-of-the-art laboratory",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital (Pvt.) Ltd, the leading private healthcare provider in the Southern Province expanded its laboratory services to Aluthgama by opening a sta...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card1.jpg",
      title: "Ruhunu Hospital makes headway completing over 2,000 eye surgeries",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital (Pvt.) Ltd, pioneer in the private healthcare sector of the Southern region, having successfully completed over 2,000 eye surgeries, recent...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card9.jpg",
      title: "Galle Chamber of Commerce commends Ruhunu Hospital Chairman for entrepreneurship and leadership acumen in the Southern Province healthcare sector",
      date: "July 15, 2024",
      description:
        "Deepal Wickremasinghe, the chairman of the Southern Province’s leading private healthcare provider Ruhunu Hospital (Pvt.) Ltd, was recently endowed with an...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card10.jpg",
      title: "Ruhunu Hospital Successfully Hosts Staff Talent Show",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital (Pvt) Ltd, a market leader in providing healthcare for the people in Southern Province for 23 years successfully hosted its Staff Talent Sh...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card11.jpg",
      title: "Ruhunu Hospital to Invest the First Neuro Microscope outside Colombo in the Private Sector",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital is set to invest on a state-of-the-art Neuro Microscope in Karapitiya while further expanding their services in the Southern Province of th...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card12.jpg",
      title: "Ruhunu Hospital to Invest Rs 1.5B in uplifting healthcare in the Southern Province",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital a market leader in providing Healthcare for the people for the past 20 + years have embarked on their biggest investment to date by expandi...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card13.jpg",
      title: "Ruhunu Hospital Laboratory opens in Neluwa",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital (Pvt) Ltd, opened a new laboratory, channel service and OPD (Out Patient Department) in Neluwa, providing a wide array of services in labor...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card14.jpg",
      title: "Ruhunu Hospital Invests and Partners in Credence Genomics",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital (Pvt) Ltd a trusted name in Health Care in the Southern Province invests in Credence Genomics, a company that is changing how Diagnostics i...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card15.jpg",
      title: "First stand alone Ruhunu Hospital Laboratory opens in Tangalle",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospitals (Pvt) Ltd, a pioneer in the Southern Province healthcare opens a new laboratory and channel service in Tangalle providing a wide array of ...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card16.jpg",
      title: "Ruhunu Hospital Life Membership Now Offers Greater Benefits for Customers",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital (Pvt.) Ltd, which is one of the leading private hospitals in the Southern Province, is offering lifetime membership to its customers to enj...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card17.jpg",
      title: "Ruhunu Hospital opens Nursing College in Karapitiya",
      date: "July 15, 2024",
      description:
        "We, Ruhunu Hospital (Pvt) Ltd – one of the leading private hospitals in the Southern Province opened a new nursing training school in Karapitiya recently w...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card18.jpg",
      title: "Ruhunu Hospital Opened New Medical Centre in Baddegama",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital (Pvt.) Ltd is one of the leading private hospitals in Southern Province, which offers quality healthcare services at affordable cost. In ou...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card19.jpg",
      title: "CME Program for General Practitioners",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital organized a Continuous Medical Education (CME) program for the members of Galle, General Practitioners’ Association on 16th June 2017 at Ha...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card20.jpg",
      title: "Vesak Lantern Competition 2017",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospital organized a Vesak lantern competition amongst the inter-departments of the Hospital. The idea of this competition was to enhance the inter-...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card21.jpg",
      title: "Sinhala & Hindu New Year Celebration",
      date: "July 15, 2024",
      description:
        "‘Kona Mangalya’ the Sinhala &amp; Hindu New Year celebration which is one of the main events in our annual event calendar was celebrated in grand scale on ...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card1.jpg",
      title: "Ruhunu Hospitals to Organize ‘Ruhunu Rusiru’ for Children in Galle",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospitals (Pvt) Ltd – one of the leading private hospitals in the Southern Province is organizing an Art Competition ‘Ruhunu Rusiru’ with the partic...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card4.jpg",
      title: "Ruhunu Hospitals Relaunches Laboratory Services",
      date: "July 15, 2024",
      description:
        "Ruhunu HospitaRuhunu Hospitals in the Southern Province, equipped with modern facilities and offering its services at affordable prices to patients, is currently in the ...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
    {
      imageSrc: "/images/NewsAndEvent/CardImages/News_Card1.jpg",
      title: "Ruhunu Hospitals awarded President’s Funds for spinal code compressions and brain surgeries",
      date: "July 15, 2024",
      description:
        "Ruhunu Hospitals (Pvt) Ltd, which is spearheading the task of transforming Galle into a centre for excellence in neurosurgery and neurosciences in Sri Lank...",
      link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
    },
  ];
  

  return (
    <main className="overflow-hidden">
      <Banner
        title="News & Event"
        backgroundImage="/images/NewsAndEvent/News_DesktopBG.png"
        mobileBackgroundImage="/images/NewsAndEvent/News_MobileBG.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
      />
      <NewsSection newsItems={sampleNews} />
    </main>
  );
}

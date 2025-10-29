import Banner from "@/components/global/banner";
import NewsSection from "@/components/news-&-event/Components/CardArray";


export default function NewsAndEventPage() {
  const sampleNews = Array.from({ length: 11 }, (_, i) => ({
    imageSrc: "/NewsAndEvent/CardImages/News_Card1.jpg",
    title: `Ruhunu Hospital Opens Sri Lanka’s most Luxurious Hospital Suites 2`,
    date: "July 15, 2024",
    description: "Ruhunu Hospital, the largest private hospital in Southern Province, has announced the opening of its latest addition – the King's Court and Presidential Su...",
    link: "/news-&-event/ruhunu-hospital-opens-sri-lanka's-most-luxurious-hospital-suites",
  }));

  return (
    <main className="overflow-hidden">
      <Banner
        title="News & Event"
        backgroundImage="images/NewsAndEvent/News_DesktopBG.png"
        mobileBackgroundImage="images/NewsAndEvent/News_MobileBG.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
      />
      <NewsSection newsItems={sampleNews} />
    </main>
  );
}

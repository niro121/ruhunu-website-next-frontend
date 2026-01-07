import NewsSection from "@/components/news-&-event/Components/CardArray";
import { fetchNewsAndEvents } from "@/actions/news.action";

export default async function EventsPage() {
  const newsItems = await fetchNewsAndEvents();

  return (
    <>
      <NewsSection newsItems={newsItems} />
    </>
  );
}

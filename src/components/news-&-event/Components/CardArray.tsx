"use client";

import { useState } from "react";
import NewsCard from "./Card";
import Button1 from "./Button1";

type NewsItem = {
  imageSrc: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

type NewsSectionProps = {
  newsItems: NewsItem[];
};

const NewsSection = ({ newsItems }: NewsSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, newsItems.length));
  };

  return (
    <section className="w-full flex flex-col items-center gap-8 py-10 px-6 md:px-12">
      {/* News Cards */}
      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
        {newsItems.slice(0, visibleCount).map((item, index) => (
          <NewsCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            date={item.date}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < newsItems.length && (
        <div className="mt-6">
          <Button1 onClick={handleLoadMore} text="Load More" />
        </div>
      )}
    </section>
  );
};

export default NewsSection;

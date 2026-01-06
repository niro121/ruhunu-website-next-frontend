"use server";

import { getVisibleNewsAndEvents } from "@/../services/news.services";

export type NewsItemUI = {
  imageSrc: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

export async function fetchNewsAndEvents(): Promise<NewsItemUI[]> {
  const data = await getVisibleNewsAndEvents();

  return data.map((item) => ({
    imageSrc: item.image,
    title: item.name,
    date: item.createdAt.toLocaleDateString("en-GB"), 
    description: item.content,
    link: `/events/${item.slug}`,
  }));
}

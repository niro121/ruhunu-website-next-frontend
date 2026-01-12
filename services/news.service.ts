import { prisma } from "@/lib/prisma";

export async function getVisibleNewsAndEvents() {
  try {
    const news = await prisma.newsAndEvents.findMany({
      where: {
        visibility: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return news;
  } catch (error) {
    console.error("Failed to fetch news & events:", error);
    return [];
  }
}

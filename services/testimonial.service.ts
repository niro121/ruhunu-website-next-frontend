import { prisma } from "@/lib/prisma";

export async function getAllTestimonials() {
  try {
    return await prisma.testimonial.findMany({
      where: { visibility: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching testimonials", error);
    return [];
  }
}

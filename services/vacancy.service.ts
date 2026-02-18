"use server";

import prisma from "@/lib/prisma";

export async function getVacancies() {
  try {
    const records = await prisma.vacancy.findMany({
      where: {
        visibility: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return records;
  } catch (error) {
    console.error("get vacancies error:", error);
    return [];
  }
}

export async function getSingleVacancy(slug: string) {
  try {
    return await prisma.vacancy.findFirst({
      where: { slug },
    });
  } catch (error) {
    console.error("single vacancy error:", error);
    return null;
  }
}
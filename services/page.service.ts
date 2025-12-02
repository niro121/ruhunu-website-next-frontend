"use server";

import prisma from "@/lib/prisma";

export async function getPages(slug: string) {
    console.log({slug});
    return prisma.page.findFirst({
      where: { slug, visibility: true },
      include: {
        sections: {
          where: { visibility: true },
          orderBy: { order: "asc" },
        },
      },
    });
}
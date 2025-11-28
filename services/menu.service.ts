"use server";

import prisma from "@/lib/prisma";

export async function getMenus() {
  return prisma.menu.findMany({
    orderBy: { order: "asc" },
    include: {
      items: {
        orderBy: { order: "asc" },
        include: {
          children: {
            orderBy: { order: "asc" },
            include: {
              children: {
                orderBy: { order: "asc" }
              }
            }
          }
        }
      }
    }
  });
}

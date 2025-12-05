"use server";

import prisma from "@/lib/prisma";

export async function getMenus() {
  try {
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
  } catch (error: any) {
    console.log(" get menus error : ",error)
  };
}
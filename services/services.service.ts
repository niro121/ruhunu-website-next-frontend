"use server";

import prisma from "@/lib/prisma";

export async function getServices () {
    try {
        const records = await prisma.service.findMany({
            where: {
                visibility:true
            },
            orderBy: {createdAt: "asc"},
        })

        return records;

    } catch (error: any) {
        console.log("get service error : ",error);
    }
}

export async function getSingleService (slug: string) {
    try {
        const service = await prisma.service.findFirst({
            where: {
                slug: slug
            }
        })

        return service;
        
    } catch (error: any) {
        console.log("get single service error : ",error);
    }
}
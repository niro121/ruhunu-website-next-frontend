"use server";

import prisma from "@/lib/prisma";

export async function getBranchs () {
    try {
        const records = await prisma.branche.findMany({
            orderBy: { createdAt: "asc" },
        });

        console.log({records})

        return records;
    } catch (error: any) {
        console.log("get branchs error : ",error);
    }
}

export async function getSingleBranch (slug : string) {
    try {
        const branch = await prisma.branche.findFirst({
            where: {
                slug:slug
            }
        })

        return branch
    } catch (error: any){

    }
}
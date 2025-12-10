"use server"

import prisma from "@/lib/prisma"

// ========== Get all docters with pagination/search ==========
export const getDoctors = async () => {
    try {
        console.log("woking")
        const records = await prisma.docter.findMany({
            where: {
                visibility: true
            },
            orderBy: { order: "asc" },
        })

        console.log({records})

        
        return records;
    } catch (error) {
        console.error("getDocters error", error)
    }
}

// ========== Get single docter data ==========
export const getDoctorById = async (id: string) => {

    try {
        const result = await prisma.docter.findUnique({
            where: { id: id },
        })

        return result
    } catch (error: any) {
        throw new Error(error.message ?? "")
    }
};
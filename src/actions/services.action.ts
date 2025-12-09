"use server";

import { getServices, getSingleService } from "../../services/services.service";

export async function getAllServices () {
    try {
        const data = await getServices();
        return data;
    } catch (error: any) {
        console.log("get Services error : ",error)
    }
}

export async function fetchSingleService (id: string) {
    try {
        const data = await getSingleService(id);
        return data;
    } catch (error: any) {
        console.log("fetch Single Service error : ",error)
    }
}
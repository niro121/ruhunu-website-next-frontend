"use server";

import { getBranchs, getSingleBranch } from "../../services/branch.service";

export async function getAllBranchs () {
    try {
        return await getBranchs();
    } catch (error: any) {
        console.log("get branchs error : ",error);
    }
}

export async function fetchSingleBranche (slug : string) {
    try {
        const data = await getSingleBranch(slug);
        return data;
    } catch (error: any) {
        console.log("fetch Single Branche error : ",error);
    }
}
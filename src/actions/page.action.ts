"use server";

import { getPages } from "../../services/page.service";

export async function fetchPage(slug: string) {
    try {
        const page = await getPages(slug);
        console.log({page})
        return page;
    } catch (error) {
        console.error(error)
        return;
    }
} 
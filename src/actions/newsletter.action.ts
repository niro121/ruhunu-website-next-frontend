"use server";

import { saveSubscription } from "../../services/newsletter.service";

// ========== Frontend Action ==========
export const subscribeToNewsletter = async (email: string) => {
    try {
        // Validate email
        if (!email || !email.includes("@")) {
            return {
                isError: true,
                error: "Invalid email address",
                data: null,
            };
        }

        const result = await saveSubscription(email);

        // Safety check
        if (!result) {
            return {
                isError: true,
                error: "No response from server",
                data: null,
            };
        }

        if (result.isError) {
            return {
                isError: true,
                error: result.error,
                data: null,
            };
        }

        return {
            isError: false,
            error: "",
            data: result.data,
        };

    } catch (error) {
        console.error("Error in subscribeToNewsletter:", error);

        return {
            isError: true,
            error: "Something went wrong while subscribing",
            data: null,
        };
    }
};

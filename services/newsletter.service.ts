import prisma from "@/lib/prisma";

// ========== Create email ==========
export const saveSubscription = async (email: string) => {
    try {
        const result = await prisma.newsLetter.create({
            data: {
                email,
                createdAt: new Date(),
            },
        });

        return {
            isError: false,
            error: "",
            data: result,
        };

    } catch (error: any) {
        console.error("Error in saveSubscription:", error);

        // Prisma unique constraint error (email already exists)
        if (error.code === "P2002") {
            return {
                isError: true,
                error: "This email is already subscribed",
                data: null,
            };
        }

        return {
            isError: true,
            error: "Failed to save subscription",
            data: null,
        };
    }
};

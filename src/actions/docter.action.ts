"use server"

import { getDoctorById, getDoctors } from "../../services/docter.service"


// ========== Get all docters with pagination/search ==========
export const getAllDoctors = async () => {
    try {

        return await getDoctors()

    } catch (error: any) {
        console.error("getAllDoctors error", error)
        throw new Error(error.message ?? "Error getting data. please try again later")
    }
}

// ========== Get single docter data ==========
export const fetchDoctorById = async (id: string) => {

    try {
        if (!id) {
            throw new Error("Docter id not found");
        }

        const doctor = await getDoctorById(id);

        if (!doctor) {
            throw new Error("Docter not found");
        }

        return doctor;
    } catch (error: any) {
        console.error("Error in fetch doctor ById:", error.message);
        throw new Error(error.message || "Unable to fetch docter.");
    }
};
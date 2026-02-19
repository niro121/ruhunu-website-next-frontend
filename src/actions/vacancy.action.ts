"use server";

import {
  getVacancies,
  getSingleVacancy,
} from "../../services/vacancy.service";

export async function getAllVacancies() {
  try {
    return await getVacancies();
  } catch (error) {
    console.error("getAllVacancies error:", error);
    return [];
  }
}

export async function fetchSingleVacancy(slug: string) {
  try {
    return await getSingleVacancy(slug);
  } catch (error) {
    console.error("fetchSingleVacancy error:", error);
    return null;
  }
}
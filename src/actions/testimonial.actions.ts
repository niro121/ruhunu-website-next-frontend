"use server";

import { getAllTestimonials } from "../../services/testimonial.service";

export async function fetchTestimonials() {
    try{
      const testimonials = await getAllTestimonials();
      return testimonials;
    } catch (error) {
      console.error("Error fetching testimonials", error);
      return [];
    }
}

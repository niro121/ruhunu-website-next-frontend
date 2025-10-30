"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { TestimonialCard } from "../common/testimonial-card";

const testimonials = [
  {
    name: "Ruslan Boss",
    country: "Russia",
    flag: "🇷🇺",
    text: "Recovering quickly at the best western Medical of Colombo. The staffs is helping me feel safe & well.",
  },
  {
    name: "Shaun",
    country: "Germany",
    flag: "🇩🇪",
    text: "Ruhunu Pvt. has been crucial program in Langen Surgical.",
  },
  {
    name: "Anna",
    country: "Australia",
    flag: "🇦🇺",
    text: "MRI Scan at Ruhunu Hospital has been crucial and well organized.",
  },
];

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
    api.on("select", () => setCurrentIndex(api.selectedScrollSnap()));
  }, [api]);

  const scrollTo = (index: number) => api?.scrollTo(index);

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#F4F9FD] py-12 md:py-20">
      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#18CE67] font-semibold mb-2 text-sm md:text-base">
            Our Testimonials
          </p>
          <h2 className="text-2xl md:text-4xl font-bold">
            Over <span className="text-[#18CE67]">1,000+</span> People Patients
            Trust Us
          </h2>
        </div>

        {/* Desktop View - 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden flex justify-center">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-[296px] h-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Dots indicator */}
        <div className="md:hidden flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-[#18CE67]" : "w-2 bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

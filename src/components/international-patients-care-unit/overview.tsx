import Image from "next/image";

export function Overview() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 lg:md:gap-8 items-center">
          {/* Mobile: Text first, Desktop: Image first */}
          <div className="order-2 md:order-1">
            <Image
              src="/images/international-patient-care-unit/overview.jpg"
              alt="Medical Team"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-[#18CE67] font-semibold mb-2 text-sm md:text-base lg:md:text-start text-center justify-center">
              Overview
            </p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Our <span className="text-[#18CE67]">International</span>
              <br />
              Patients Care Unit
            </h2>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                Welcome to Ruhunu Hospital, the largest private hospital in the
                southern region, dedicated to providing top-notch medical
                services to international patients. With our focus on medical
                tourism, we offer a state-of-the-art International Patients Care
                Unit, ensuring a seamless and comfortable experience for
                individuals seeking world-class healthcare in 24 hours .At
                Ruhunu Hospital, we understand the importance of meticulous
                planning and exceptional patient care in medical tourism. Our
                specialized unit is designed to cater specifically to the needs
                of international patients, providing comprehensive and
                compassionate healthcare in a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

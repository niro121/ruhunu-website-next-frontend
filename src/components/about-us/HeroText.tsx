export default function HeroTextSection() {
    return (
      <section
        id="Hero Text Section"
        className="flex flex-col md:flex-row items-center md:items-start justify-between px-2 md:px-8 lg:px-32 py-10 text-[#122739]"
      >
        {/* Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/about-us/HeroText.jpg"
            alt="Healthcare Team"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
  
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-10">
          <p className="text-[#18CE67] text-sm font-semibold mb-2">Our Values</p>
  
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Leading the Way in Healthcare Excellence
          </h2>
  
          <p className="text-base leading-relaxed">
            Ruhunu Hospitals (Pvt) Ltd, located in the medical hub of the Southern
            Province, has emerged as a leading private hospital since its
            establishment in 1995. With a strong commitment to providing
            high-quality and convenient medical care, Ruhunu Hospitals has become
            the go-to healthcare provider in the region. Its continuous innovation
            and focus on delivering premium healthcare services have set it apart
            from others in the industry.
          </p>
        </div>
      </section>
    );
  }
  
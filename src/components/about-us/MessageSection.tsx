export default function MessageSection() {
    return (
      <section id="MessageSection" className="w-full px-4 md:px-8 lg:px-32 pb-8 flex flex-col gap-10 text-[#122739] bg-[#f4f9fd]">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-30">
            <div className="w-full md:w-5/7 text-center md:text-left md:pr-8">
                <h3 className="text-4xl font-extrabold mb-2 mt-10">
                    Chairman's Message
                </h3>

                <div className="leading-relaxed">
                    <p className="mt-10">
                        It is with great respect that I write this message to our loyal customers. Twenty-nine years ago, a motivated group of individuals and I embarked on the venture of laying the foundation for Ruhunu Hospital.
                    </p>

                    <p className="mt-10">
                        Our sheer determination and hard work over the years have helped us to become one of the premier healthcare providers in the Southern Province. We are confident that the vision we shared will be carried forward by our knowledgeable and dedicated second generation, who will take this venture to even greater heights. Product, Staff, and Customers are the three pillars on which the success of our hospital rests, and these virtues have made us what we are today. My vision is to continue being the best healthcare provider in the Southern Province and to establish Ruhunu Hospital as a benchmark company, renowned for its high ethics and values in the private sector.
                    </p>

                    <p className="mt-10">
                        We have continuously expanded and improved our facilities. In 2017, we opened a new wing comprising new channel rooms, luxury rooms, a sperm bank, and the first private sector dialysis unit in the Southern Province. We added a 64-slice CT scanner, two brand new operation theaters, and launched Ruhunu Hospital Diagnostics with state-of-the-art technology and a qualified workforce to provide quality and reliable diagnostic services.
                    </p>

                    <p className="mt-10">
                        In 2020, we began the Ruhunu 2.0 initiative, which included the construction of a new building. Today, we have over 80 bedrooms in five categories. In 2022, we inaugurated our MRI unit, the first private sector cath lab in the Southern Province, a 9-bed ICU & HDU, and a 4-operation theater complex. Ruhunu Hospital now boasts the largest lab collection center chain in the region. In 2023, we opened the most luxurious hospital suites in Sri Lanka, the King's Court and the Presidential Suite.
                    </p>

                    <p className="mt-10">
                        As we look to the years ahead, we remain committed to excellence and to expanding our services with modern technology. I would like to thank you for your loyalty over the past decades, and we are certain that you will continue to avail yourself of our premium healthcare services for years to come.
                    </p>

                    <h6 className="text-[16px] text-black font-bold mt-10">
                        Deepal Wickramasinghe
                    </h6>
                </div>
            </div>

            <div className="w-full md:w-2/7 mt-6 md:mt-0 flex justify-center md:justify-end">
                <img src="/about-us/Chairman Desktop.jpg" alt="Mr. Deepal Wickramasinghe" className="hidden md:block w-[250px] h-auto object-cover shadow-md"/>

                <img src="/about-us/Chairman Mobile.jpg" alt="Mr. Deepal Wickramasinghe" className="block md:hidden w-[250px] h-auto object-cover shadow-md"/>
            </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-5/7 text-center md:text-left md:pr-8">
                <h3 className="text-4xl font-extrabold mb-2 mt-10">
                    CEO Message
                </h3>

                <div className="leading-relaxed">
                    <p className="mt-10">
                        It is an honor to step into the role of CEO of Ruhunu Hospital, a legacy built on dedication, innovation, and a commitment to quality healthcare, which my father, Deepal Wickramasinghe, and his team established nearly three decades ago. I am proud to lead our talented team as we continue to build upon the strong foundation laid before us.
                    </p>

                    <p className="mt-10">
                        As we forge ahead, our focus remains on enhancing patient care through the integration of advanced medical technology and the expansion of our facilities. The recent additions of our MRI unit, the first private sector cath lab in the Southern Province, and luxurious hospital suites such as the King's Court and the Presidential Suite, reflect our unwavering commitment to providing state-of-the-art healthcare services.
                    </p>

                    <p className="mt-10">
                        Under my leadership, we will continue to prioritize innovation and excellence. The Ruhunu 2.0 initiative is a testament to our drive for continual improvement, with a vision to set new benchmarks in the healthcare industry. We are dedicated to expanding our diagnostic services and maintaining the highest standards of patient care.
                    </p>

                    <p className="mt-10">
                        Our patients are at the heart of everything we do, and we are devoted to making their experience as comfortable and efficient as possible. I am grateful for the trust our customers have placed in us over the years, and I look forward to leading Ruhunu Hospital into a future of continued success and unparalleled service.
                    </p>

                    <p className="mt-10">
                        Thank you for your ongoing support and loyalty. We are excited to serve you with excellence for many years to come.
                    </p>

                    <h6 className="text-[16px] text-black font-bold mt-10">
                        Raveen Wickramasinghe
                    </h6>
                </div>
            </div>

            <div className="w-full md:w-2/7 mt-6 md:mt-0 flex justify-center md:justify-end">
                <img src="/about-us/CEO Desktop.jpg" alt="Mr. Raveen Wickramasinghe" className="hidden md:block w-[250px] h-auto object-cover shadow-md"/>

                <img src="/about-us/CEO Mobile.jpg" alt="Mr. Raveen Wickramasinghe" className="block md:hidden w-[250px] h-auto object-cover shadow-md"/>
            </div>
        </div>
      </section>
    );
  }
  
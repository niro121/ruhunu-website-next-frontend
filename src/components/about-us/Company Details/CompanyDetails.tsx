import PersonCard from "./Card";

const CompanyDetailsSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-16 px-8 md:px-32 py-16 text-[] text-[#122739]">
        <div className="text-black">

            <h2 className="text-[39px] font-extrabold mb-10">
                Our <span className="text-[#18CE67]">Vision</span>
            </h2>

            <h2 className="text-[39px] font-extrabold mb-10">
                Vision
            </h2>

            <p className="mb-10">
                To be the first choice in healthcare of our society and a leader in providing quality, compassionate and patient centered care.
            </p>

            <h2 className="text-[39px] font-extrabold mb-10">
                Mission
            </h2>

            <p className="mb-10">
                Achieving our vision by providing quality healthcare services and facilities to our valued customers, promoting wellness, relieving suffering, and restoring health as safely and humanly as it can be done; and with the best service we can give at the highest value for all concerned with excellence, compassion, and proficiency.
            </p>

            <h2 className="text-[39px] font-extrabold mb-10">
                Values
            </h2>

            <div className="mb-10 pl-6">
                <ul className="list-disc">
                    <li>
                        Quality – We strive to exceed the expectations of all of our customers by committing to deliver quality and value in every aspect of our work.
                    </li>
                    <li>
                        Compassion – We provide care with dignity, concern, kindness, and a respect for the diversity of our community.
                    </li>
                    <li>
                        Teamwork – We foster an atmosphere of trust, collaboration, openness, and cooperation.
                    </li>
                    <li>
                        Enthusiasm – We remember that the true meaning of this value is “to be inspired” and we do our jobs with the same spirit and commitment that first inspired us to work in healthcare.
                    </li>
                    <li>
                        Respect – We promise to honor the dignity, individuality, and rights of everyone, and to pay particular attention to patient’s rights to privacy, confidentiality, and information.
                    </li>
                </ul>
            </div>

            <h2 className="text-[39px] font-extrabold mb-10">
                Additional Core Values
            </h2>

            <p className="mb-10 pl-6">
                <ul className="list-disc">
                    <li>
                        Integrity
                    </li>
                    <li>
                        Professionalism
                    </li>
                    <li>
                        Compassion
                    </li>
                    <li>
                        Communication
                    </li>
                </ul>
            </p>

        </div>
      {/*Board of Directors*/}
      <div>
        <h2 className="text-[39px] font-extrabold text-center mb-10">
          Board of <span className="text-[#18CE67]">Directors</span>
        </h2>

        <div className="flex justify-center mb-8">
          <PersonCard
            name="Mr. Deepal Wickramasinghe"
            title="Chairman"
            imageSrc="/about-us/Board Chairman.jpg"
            widthClass="w-64 md:w-90"
            heightClass="h-60 md:h-85"
          />
        </div>

        {/* CEO */}
        <div className="flex justify-center mb-8">
          <PersonCard
            name="Mr. Raveen Wickramasinghe"
            title="CEO"
            imageSrc="/about-us/Board CEO.jpg"
            widthClass="w-64 md:w-90"
            heightClass="h-60 md:h-85"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <PersonCard
            name="Mr. Janith K. Liyanage"
            title="Director"
            imageSrc="/about-us/Board Director Janith.jpg"
          />
          <PersonCard
            name="Mr. Raveendra Y. Kalansooriya"
            title="Director"
            imageSrc="/about-us/Board Director Raveendra.jpg"
          />
          <PersonCard
            name="Mr. C.P. Illeperuma"
            title="Director"
            imageSrc="/about-us/Board Director C.jpg"
          />
          <PersonCard
            name="Dr. R.D. Madurawe"
            title="Director"
            imageSrc="/about-us/Board Director R.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyDetailsSection;

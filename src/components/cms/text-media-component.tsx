// import Image from "next/image";

// export default function TextMedia () {
//     const data ={
//         heading: "Welcome Visitors Welcome Visitors Welcome Visitors",
//         image: "../Vacancies/Vacancies_DesktopBG.jpg",
//         content: `
//             <p class="text-black text-[16px]">We provide top-notch healthcare services including:</p>
//             <ol>
//                 <li>Consultations</li>
//                 <li>Laboratory tests</li>
//                 <li>Imaging services</li>
//             </ol>
//             <div class="bg-amber-600 p-[30px]">
//             </div>
//         `,
//     }

//     return (
//         <div className="bg-white pt-[96px]">
//             <div className="bg-[#f4f9fd]  px-[10px] md:px-[20px] lg:px-[50px] grid grid-cols-7 gap-[20px]">
//                 <div className="col-span-2 w-full relative top-[-50px]">
//                     <Image
//                         src={data.image}
//                         width={300}
//                         height={170}
//                         alt=""
//                         className=""
//                     />
//                 </div>
//                 <div className="col-span-5">
//                     <h1 className="">{data.heading}</h1>
//                     <div
//                         className="prose max-w-none mt-[24px]"
//                         dangerouslySetInnerHTML={{ __html: data.content }}
//                     ></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import Image from "next/image";
import img1 from "../../../public/images/laboratory/biochemistry.jpg";

type TextMediaProps = {
  data: any;
  layout: number;
};



export default function TextMedia({ data, layout }: TextMediaProps) {

// Sample data for layout 4
const sampledata = {
  features: [
    {
      image: img1,
      webImage: img1,
      title: "Cutting-Edge Technology",
      description:
        "Our operation theaters are equipped with the latest advancements in medical technology; ensuring surgeons have access to the most advanced tools and equipment to perform a wide range of surgical procedures with highest accuracy and efficiency.",
      alignment: "left", // This controls image position
    },
    {
      image: img1,
      webImage: img1,
      title: "Sterile Environment",
      description: "Maintaining strict adherence to international standards of hygiene and cleanliness, our theaters strictly maintained sterile environments. Stringent protocols are followed to prevent infections and ensure patient safety.",
      alignment: "right", // Image on right, text on left
    },
    {
      image: img1,
      webImage: img1,
      title: "Dedicated Support Staff",
      description: "A highly skilled and experienced team of anesthetists, nurses, and technicians work collaboratively to support surgeons during procedures, ensuring seamless operations and attentive care for every patient.",
      alignment: "left", // Image on left again
    },
  ],
};
  console.log({ data });

  let layoutValue = layout;
  console.log({ layoutValue });
  if (layoutValue === 1) {
    return (
      <div className="px-[10px] md:px-[20px] lg:px-[50px] py-[70px] bg-white grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div className="sm:hidden relative w-full h-[480px]">
          <Image
            src={data.mobileImage || ""}
            alt="about us image"
            fill
            className=""
            priority
          />
        </div>
        <div className="hidden sm:block relative w-full h-[480px]">
          <Image
            src={data.webImage}
            alt="about us image"
            fill
            className=""
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#18CE67] mb-[16px] text-[16px]">{data.title}</p>
          {data.subTitle && (
            <h1 className="text-[40px] font-bold text-[#122739]">
              {data.subTitle}
            </h1>
          )}
          <div
            className="text-black text-[16px] mt-[48px] mb-[16px]"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    );
  } else if (layoutValue === 2) {
    return (
      <div className="px-[10px] md:px-[20px] lg:px-[50px] py-[70px] bg-white grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div className="flex flex-col justify-center">
          <p className="text-[#18CE67] mb-[16px] text-[16px]">{data.title}</p>
          {data.subTitle && (
            <h1 className="text-[40px] font-bold text-[#122739]">
              {data.subTitle}
            </h1>
          )}
          <div
            className="text-black text-[16px] mt-[48px] mb-[16px]"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>

        <div className="block md:hidden relative w-full h-[480px]">
          <Image
            src={data.mobileImage || ""}
            alt="about us image"
            fill
            className=""
            priority
          />
        </div>
        <div className="hidden md:block relative w-full h-[480px]">
          <Image
            src={data.webImage}
            alt="about us image"
            fill
            className=""
            priority
          />
        </div>
      </div>
    );
  } else if (layoutValue === 3) {
    return (
      <section
        id="MessageSection"
        className="w-full px-[10px] md:px-[20px] lg:px-[50px] pb-[70px] flex flex-col gap-10 text-[#122739] bg-[#f4f9fd]"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start px-[12px]">
          <div className="w-full md:w-5/7 text-center md:text-left mt-[40px] pl-[24px] pr-[12px]:">
            <h3 className="text-4xl font-extrabold mb-2 ">{data.title}</h3>
            <div
              className="text-black text-[16px] mt-[48px] mb-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
          <div className="w-full md:w-2/7 mt-6 md:mt-0 flex justify-center md:justify-end px-[12px]">
            {/* Desktop Image */}
            <div className="hidden md:block">
              <Image
                src={data.webImage}
                alt={data.title}
                width={300}
                height={360}
                className="object-cover shadow-md"
                priority
              />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src={data.mobileImage || ""}
                alt={data.title}
                width={300}
                height={360}
                className="w-[250px] h-auto object-cover shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );
  } else if (layoutValue === 4) {
    return (
    <div className="py-20 px-5 bg-white">
      <div className="mx-auto space-y-32">
        {sampledata.features &&
          sampledata.features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                feature.alignment === "left"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12 bg-[#f4f9fd] p-8 md:p-12 relative pt-20 md:pt-12`}
            >
              {/* Image Section - with negative margin to pull it up */}
              <div 
                className={`w-[150px] md:w-[180px] lg:w-[230px] xl:w-[320px] flex-shrink-0 absolute md:relative top-0 -mt-12 md:-mt-64 lg:-mt-44 xl:-mt-28 ${
                  feature.alignment === "left" 
                    ? "left-8" 
                    : "right-8"
                } md:left-auto md:right-auto`}
              >
                <div className="relative w-full h-[100px] md:h-[120px] lg:h-[160px] xl:h-[210px] overflow-hidden">
                  <Image
                    src={feature.webImage || feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2">
                <h2 className={`text-xl md:text-2xl font-bold text-[#18CE67] mb-4 ${feature.alignment === "left" ? "text-left" : "text-right"}`}>
                  {feature.title}
                </h2>
                <p className="text-base md:text-lg text-[#2b3e4f] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
  }
}

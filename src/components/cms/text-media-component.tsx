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

type TextMediaProps = {
  data: any;
  layout: number;
};

export default function TextMedia({ data, layout }: TextMediaProps) {
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
          <h1 className="text-[40px] font-bold text-[#122739]">
            {data.subTitle}
          </h1>
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
          <h1 className="text-[40px] font-bold text-[#122739]">
            {data.subTitle}
          </h1>
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
  } else if (layoutValue >= 3) {
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
  }
}

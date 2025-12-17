import Image from "next/image";
import img1 from "../../../public/images/laboratory/biochemistry.jpg";

type TextMediaProps = {
  data: any;
  layout: number;
};



export default function TextMedia({ data, layout }: TextMediaProps) {

// Sample data for layout 4

  console.log({data});
  console.log(data.items);

  let layoutValue = layout;
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
            className="text-black text-[16px] mt-[48px] mb-[16px] custom-content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          {
            data.buttontext && data.buttonurl ? (
              <a href={data.buttonurl} target="_blank" rel="noopener noreferrer">
                <button className="w-[150px] h-[40px] bg-[#18CE67] hover:bg-green-600 text-white font-semibold py-[6px] px-[12px] rounded transition-colors">
                  {data.buttontext}
                </button>
              </a>
            ) : null
          }
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
            className="text-black text-[16px] mt-[48px] mb-[16px] custom-content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          {
            data.buttontext && data.buttonurl ? (
              <a href={data.buttonurl} target="_blank" rel="noopener noreferrer">
                <button className="w-[150px] h-[40px] bg-[#18CE67] hover:bg-green-600 text-white font-semibold py-[6px] px-[12px] rounded transition-colors">
                  {data.buttontext}
                </button>
              </a>
            ) : null
          }
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
              className="text-black text-[16px] mt-[48px] mb-[16px] leading-relaxed custom-content"
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
      <>
      <div className="text-center text-[40px] font-bold">
        {data.title.split(" ").map((word: string, index: number) => (
          <span
            key={index}
            className={index === 1 ? "text-[#18CE67]" : "text-black"}
          >
            {word}{" "}
          </span>
        ))}
      </div>
      <div className="pt-20 px-5 bg-white">
        <div className="mx-auto space-y-32">
          {data.items &&
            data.items.map((item: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col ${
                  item.alignment === 1
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12 bg-[#f4f9fd] p-8 md:p-12 relative pt-20 md:pt-12`}
              >
                {/* Image Section - with negative margin to pull it up */}
                <div 
                  className={`w-[150px] md:w-[180px] lg:w-[230px] xl:w-[320px] flex-shrink-0 absolute md:relative top-0 -mt-12 md:-mt-64 lg:-mt-44 xl:-mt-28 ${
                    item.alignment === 1 
                      ? "left-8" 
                      : "right-8"
                  } md:left-auto md:right-auto`}
                >
                  <div className="relative w-full h-[100px] md:h-[120px] lg:h-[160px] xl:h-[210px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full">
                  <h2 className={`text-xl md:text-2xl font-bold text-[#18CE67] mb-4 ${item.alignment === 1 ? "text-left" : "text-right"}`}>
                    {item.title}
                  </h2>
                  <div
                    className={`text-base md:text-lg text-[#2b3e4f] leading-relaxed ${item.alignment === 1 ? "text-left" : "text-right"}`}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
  }
}

import Button1 from "@/components/global/Buttons/Button1";

type BannerSectionProps = {
  data: any;
};

export default function BannerSection({ data }: BannerSectionProps) {
  const hasImage =
    data?.image && data.image.trim() !== "";

  const backgroundStyle = hasImage
    ? {
        backgroundImage: `url("${data.image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundColor: data?.backgroundColor || "#000000",
      };

  return (
    <section
      id="Banner Section"
      className="w-full flex flex-col md:flex-row justify-between items-center text-white px-6 md:px-20 py-25 mt-10"
      style={backgroundStyle}
    >
      <div>
        <h2 className="mb-6 md:mb-0 text-black text-center md:text-left text-[20px] md:text-[40px] font-bold">
          {data.title}
        </h2>

        <p className="text-black text-[16px] leading-[29px]">
          {data.subTitle}
        </p>
      </div>

      <Button1 text={data.title} url={data.ctaUrl} />
    </section>
  );
}

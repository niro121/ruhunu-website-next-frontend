import Button1 from "@/components/global/Buttons/Button1";

export default function BannerSection() {
  return (
    <section id="Banner Section" className="w-full bg-cover bg-center bg-no-repeat flex flex-col md:flex-row justify-between items-center text-white px-6 md:px-20 py-25 mt-10" style={{ backgroundImage: 'url("https://localwebteam.s3.amazonaws.com/5651c1fa-1c45-42a9-ba5c-08ac52e70f6b.jpg")', }}>

      <h2 className="mb-6 md:mb-0 text-black text-center md:text-left text-[20px] md:text-[40px] font-bold">
        Sustainability
      </h2>

      <Button1 text="Subscribe" url="" />
    </section>
  );
}

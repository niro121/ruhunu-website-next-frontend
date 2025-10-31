export default function TextOnly() {
    const data ={
        heading: "Welcome Visitors Welcome Visitors Welcome Visitors",
        content: `
            <p class="text-black text-[16px]">We provide top-notch healthcare services including:</p>
            <ul>
            <li>Consultations</li>
            <li>Laboratory tests</li>
            <li>Imaging services</li>
            </ul>
            <div class="bg-amber-600 p-[30px]">
            </div>
        `,
    }

  // Split heading into first word and the rest
  const [firstWord, ...restWords] = data.heading.split(" ");
  const restHeading = restWords.join(" ");

  return (
    <div className="bg-white px-[10px] md:px-[20px] lg:px-[50px] py-[80px]">
        <div className="flex items-center justify-center mb-[8px]">
            <h1 className="text-[38px] font-bold">
                <span className="text-[#122739]">{firstWord}</span>{" "}
                <span className="text-[#18CE67]">{restHeading}</span>
            </h1>
        </div>

      {/* Paragraph / HTML content */}
      <div
        className="prose max-w-none mt-[24px]"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </div>
  );
}

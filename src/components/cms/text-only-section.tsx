type TextOnlyProps = {
  data: any;
  layout: number;
}

export default function TextOnly({data,layout}:TextOnlyProps) {

  console.log({data})

  const [firstWord, ...restWords] = data.title.split(" ");
  const restHeading = restWords.join(" ");

  return (
    <div className="bg-white px-[10px] md:px-[20px] lg:px-[50px] py-[80px]">
      <div
        className="text-black text-[16px] mt-[48px] mb-[16px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </div>
  );
}

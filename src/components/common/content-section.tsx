import Image from "next/image";

interface TitlePart {
  text: string;
  highlighted?: boolean;
}

interface ContentSectionProps {
  overline?: string;
  title?: string;
  titleParts?: TitlePart[];
  highlightedText?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export function ContentSection({
  overline,
  title,
  titleParts,
  highlightedText,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
}: ContentSectionProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-[40px]">
        <div
          className={`grid md:grid-cols-2 gap-6 lg:gap-0  items-center ${
            imagePosition === "right" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className={`${imagePosition === "right" ? "md:order-2" : ""}`}>
            <div className="relative aspect-[4/3]  overflow-hidden w-[528px] h-[440px]">
              <Image
                src={imageSrc || ""}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${imagePosition === "right" ? "md:order-1" : ""}`}>
            {overline && (
              <p className="font-medium mb-2 text-[16px] text-[#18CE67]">
                {overline}
              </p>
            )}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-balance leading-tight">
              {titleParts ? (
                <>
                  {titleParts.map((part, index) => (
                    <span
                      key={index}
                      className={
                        part.highlighted ? "text-[#18CE67]" : "text-foreground"
                      }
                    >
                      {part.text}
                    </span>
                  ))}
                </>
              ) : (
                <>
                  {title}{" "}
                  {highlightedText && (
                    <span className="text-primary">{highlightedText}</span>
                  )}
                </>
              )}
            </h2>
            <div className="prose prose-gray max-w-none ">
              <p className="text-[#000000] leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

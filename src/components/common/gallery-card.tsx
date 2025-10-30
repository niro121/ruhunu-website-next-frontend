import Image from "next/image";

interface GalleryCardProps {
  src: string;
  alt: string;
}

export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden ">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}

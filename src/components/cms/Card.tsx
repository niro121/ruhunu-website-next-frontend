import Image from "next/image";

interface PersonCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  title,
  imageSrc,
}) => {
  return (
    <div className={"border border-[#18CE67] overflow-hidden text-center text-[#122739] shadow-xl bg-white"}>
      <div className={"w-full relative"}>
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>
      <div className="px-1 pt-5 pb-15">
        <p className="font-semibold text-black">{name}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default PersonCard;
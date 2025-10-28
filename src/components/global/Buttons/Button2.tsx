import Link from "next/link";

interface Button2Props {
  text: string;
  url: string;
}

const Button2: React.FC<Button2Props> = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className="bg-[#12283A] hover:bg-[#122739] focus:bg-[#18ce67] text-white px-12 py-2 rounded-lg">
                {text}
            </button>
        </Link>
    );
};

export default Button2;
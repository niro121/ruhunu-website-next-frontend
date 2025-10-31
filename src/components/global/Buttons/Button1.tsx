import Link from "next/link";

interface Button1Props {
  text: string;
  url: string;
}

const Button1: React.FC<Button1Props> = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className="bg-[#18ce67] hover:bg-[#12283A] focus:bg-[#12283A] text-white text-xl px-2 md:px-12 py-2 rounded-md">
                {text}
            </button>
        </Link>
    );
};

export default Button1;
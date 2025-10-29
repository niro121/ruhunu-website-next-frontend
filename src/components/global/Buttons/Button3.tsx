import Link from "next/link";

interface Button3Props {
  text: string;
  url: string;
}

const Button3: React.FC<Button3Props> = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className="bg-[#18ce67] hover:bg-[#3bd57e] focus:text-black text-white px-12 py-2 mx-1 my-1">
                {text}
            </button>
        </Link>
    );
};

export default Button3;
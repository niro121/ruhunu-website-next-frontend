interface Button1Props {
    text: string;
    onClick?: () => void;
  }
  
  const Button1: React.FC<Button1Props> = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-[#18ce67] hover:bg-[#12283A] text-white text-xl px-12 py-2 rounded-md"
      >
        {text}
      </button>
    );
  };
  
  export default Button1;
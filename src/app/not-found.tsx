import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl mt-4">Page Not Found</p>
            <Link
                  href="/"
                  className="mt-4 text-center block bg-[#18CE67] border border-[#18CE67] text-white text-[15px] font-bold px-[18px] py-[10px] rounded-[6px] hover:bg-[#122739] hover:border-[#122739] transition-all duration-200"
                >
                  Back To Home
            </Link>
        </div>
    );
}
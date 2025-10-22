export default function OnlineLabeReportBanner () {
    return (
        <div className="bg-[#f4f9fd] px-[10px] md:px-[20px] lg:px-[50px] py-[70px] grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-3">
                <h1 className="text-[40px] text-[#122739] font-bold">Online Laboratory Reports</h1>
                <p className="text-black text-[16px]">
                    Please enter your Bill Number and Phone Number in the given link to access your lab reports.
                </p>
            </div>
            <div className="flex justify-center items-center">
                <a
                    href="#"
                    className="ml-4 bg-[#18CE67] text-white text-[15px] font-bold px-[40px] py-[12px] rounded-[6px] hover:bg-[#122739] transition-all duration-200"
                >
                    View Lab Reports
                </a>
            </div>
        </div>
    )
}
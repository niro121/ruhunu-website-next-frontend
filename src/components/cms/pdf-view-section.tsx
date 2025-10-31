export default function PdfView () {

    const pdfData = [
        {
            title: "Surgery Information",
            pdfUrl: "/"
        },
        {
            title: "Surgery Information",
            pdfUrl: "/"
        },
        {
            title: "Surgery Information",
            pdfUrl: "/"
        }
    ]

    return (
        <div className="bg-white px-[10px] md:px-[20px] lg:px-[50px] py-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                {pdfData.map((card,index) => (
                    <div key={index} className="py-[96px] bg-[#f1f6fa] rounded-[5px] flex flex-col items-center justify-center">
                        <h1 className="text-[20px] text-black mb-[8px]">{card.title}</h1>
                        <a href={card.pdfUrl} target="_blank">
                            <button
                                className="w-[150px] h-[40px] bg-[#18CE67] hover:bg-green-600 text-white font-semibold py-[6px] px-[12px] rounded transition-colors"
                            >
                                View
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
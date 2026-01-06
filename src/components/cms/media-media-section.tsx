type MediaMediaProps = {
    data: any
}

export default function MediaMedia ({data,}: MediaMediaProps) {
    return (
        <div className="bg-white py-[70px] px-[10px] md:px-[20px] lg:px-[50px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div className="flex flex-col">
                <div className="w-full h-[350px]">
                    <iframe
                        className="w-full h-full"
                        src={data.externalVideoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-full h-[350px]">
                    <iframe
                        className="w-full h-full"
                        src={data.externalVideoUrlright}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
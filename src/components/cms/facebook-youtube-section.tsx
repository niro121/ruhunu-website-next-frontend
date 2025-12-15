type FacebookYoutubeProps = {
    data: any;
}

export default function FacebookYoutube ({data}:FacebookYoutubeProps) {
    return (
        <div className="bg-white py-[70px] px-[10px] md:px-[20px] lg:px-[50px] grid grid-cols-1 md:grid-cols-6 gap-[20px]">
        {/* Facebook Page */}
            <div className="col-span-2 flex flex-col">
                <div className="w-full h-[500px]">
                    <iframe
                        src={data.externalfacebookLink}
                        width="100%"
                        height="500px"
                        className="h-full w-full"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Page"
                    ></iframe>
                </div>
            </div>

            {/* YouTube Video */}
            <div className="col-span-4 flex justify-center items-center">
                <div className="w-full h-[498px]">
                    <iframe
                        className="w-full h-full"
                        src={data.externalyoutubelink}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
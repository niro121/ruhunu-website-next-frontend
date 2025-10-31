export default function NewsAndArticleNews() {
    return (
        <div className="bg-white py-[70px] px-[10px] md:px-[20px] lg:px-[50px] grid grid-cols-1 md:grid-cols-6 gap-[20px]">
        {/* Facebook Page */}
            <div className="col-span-2 flex flex-col">
                <div className="w-full h-[500px]">
                    <iframe
                        src="https://www.facebook.com/v21.0/plugins/page.php?adapt_container_width=true&app_id=1080730360420019&container_width=416&height=487&hide_cover=false&href=https%3A%2F%2Fweb.facebook.com%2Fruhunuhospitalgalle&locale=en_US&show_facepile=true&small_header=false&tabs=timeline&width=500"
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
                        src="https://www.youtube.com/embed/caDWEkOiPnw"
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

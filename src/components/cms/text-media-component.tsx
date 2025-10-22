import Image from "next/image";

export default function TextMedia () {
    const data ={
        heading: "Welcome Visitors Welcome Visitors Welcome Visitors",
        image: "/cent.jpg",
        content: `
            <p class="text-black text-[16px]">We provide top-notch healthcare services including:</p>
            <ul>
                <li>Consultations</li>
                <li>Laboratory tests</li>
                <li>Imaging services</li>
            </ul>
            <div class="bg-amber-600 p-[30px]">
            </div>
        `,
    }

    return (
        <div className="bg-white pt-[96px]">
            <div className="bg-[#f4f9fd]  px-[10px] md:px-[20px] lg:px-[50px] grid grid-cols-7 gap-[20px]">
                <div className="col-span-5">
                    <h1 className=""></h1>
                    <div
                        className="prose max-w-none mt-[24px]"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    ></div>
                </div>
                <div className="col-span-2 w-full relative top-[-50px]">
                    <Image
                        src={data.image}
                        width={300}
                        height={170}
                        alt=""
                        className="absolute"
                    />
                </div>
            </div>
        </div>
    )
}
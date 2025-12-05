// import Image from "next/image";

// export default function TextMedia () {
//     const data ={
//         heading: "Welcome Visitors Welcome Visitors Welcome Visitors",
//         image: "../Vacancies/Vacancies_DesktopBG.jpg",
//         content: `
//             <p class="text-black text-[16px]">We provide top-notch healthcare services including:</p>
//             <ol>
//                 <li>Consultations</li>
//                 <li>Laboratory tests</li>
//                 <li>Imaging services</li>
//             </ol>
//             <div class="bg-amber-600 p-[30px]">
//             </div>
//         `,
//     }

//     return (
//         <div className="bg-white pt-[96px]">
//             <div className="bg-[#f4f9fd]  px-[10px] md:px-[20px] lg:px-[50px] grid grid-cols-7 gap-[20px]">
//                 <div className="col-span-2 w-full relative top-[-50px]">
//                     <Image
//                         src={data.image}
//                         width={300}
//                         height={170}
//                         alt=""
//                         className=""
//                     />
//                 </div>
//                 <div className="col-span-5">
//                     <h1 className="">{data.heading}</h1>
//                     <div
//                         className="prose max-w-none mt-[24px]"
//                         dangerouslySetInnerHTML={{ __html: data.content }}
//                     ></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import Image from "next/image";

type TextMediaProps = {
    data: any;
}

export default function TextMedia ({data}: TextMediaProps) {
    console.log({data})
    return (
        <div className="px-[10px] md:px-[20px] lg:px-[50px] py-[70px] bg-white grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="relative w-full h-[480px]">
                <Image
                    src={data.image}
                    alt="about us image"
                    fill
                    className=""
                    priority
                />
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-[#18CE67] mb-[16px] text-[16px]">About Us</p>
                <h1 className="text-[40px] font-bold text-[#122739]">Leading the Way in Healthcare Excellence</h1>
                <p className="text-black text-[16px] mt-[48px] mb-[16px]">Ruhunu Hospitals (Pvt) Ltd, located in the medical hub of the Southern Province, has emerged as a leading private hospital since its establishment in 1995. With a strong commitment to providing high-quality and convenient medical care, Ruhunu Hospitals has become the go-to healthcare provider in the region. Its continuous innovation and focus on delivering premium healthcare services have set it apart from others in the industry.</p>
            </div>
        </div>
    )
}
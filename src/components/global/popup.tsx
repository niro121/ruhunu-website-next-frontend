'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import DOMPurify from 'dompurify';

type PopupProps = {
    data: any;
};

export default function Popup({ data }: PopupProps) {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[9999]">
            <div className="relative bg-white rounded-[9px] shadow-xl w-[90%] max-w-[500px] min-h-[500px] p-[24px] flex flex-col items-center justify-center gap-4 text-center animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                <div>
                    <h1>{data?.content?.title}</h1>
                </div>

                <div className="h-full flex items-center justify-center">
                    {data?.content?.image && (
                        <Image
                            src={data.content.image}
                            width={450}
                            height={315}
                            alt="popup"
                            className="mx-auto rounded-md"
                        />
                    )}
                </div>

                <div
                    className="text-black text-[16px] leading-[29px]"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data?.content?.description || '')
                    }}
                />
            </div>
        </div>
    );
}

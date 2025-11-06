'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react'; // optional, if you want a nice icon

export default function WelcomePopup() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Always show popup when site loads
        setShowPopup(true);
    }, []);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="relative bg-white rounded-[9px] shadow-xl max-w-[500px] w-[500px] h-[500px] p-[24px] text-center animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>
                <div className=''>
                    <h1 className=''></h1>
                </div>
                <div className="h-full flex items-center justify-center">
                    
                    <Image
                        src="/popup-logo.jpeg"
                        width={450}
                        height={315}
                        alt="logo"
                        className="mx-auto rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}

'use client'

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FaqCard {
    title: string;
    content: string;
}

export default function FaqCard({ title, content }: FaqCard) {
    const [clicked, setClicked] = useState(false);

    function toggle() {
        setClicked(!clicked);
    }

    return (
        <>
            {!clicked ?
                (<div className="flex justify-between items-center border-2 border-slate-300 p-5 rounded-2xl  w-full max-w-lg transition-all mx-auto my-4">
                    <span className="text-gray-950 text-xl font-medium">{title}</span>
                    <button 
                        className="flex items-center justify-center rounded-full w-10 h-10 bg-[#524FD5] text-white"
                        onClick={toggle}
                    >
                        <FaPlus />
                    </button>
                </div>)
                :
                (<div className="flex flex-col justify-between bg-[#524FD5] p-5 rounded-2xl w-full max-w-lg transition-all mx-auto my-4">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-4">
                            <span className="text-white text-xl font-semibold">{title}</span>
                            <p className="text-white text-sm">
                                {content}
                            </p>
                        </div>
                        <button 
                            className="flex items-center justify-center rounded-full w-10 h-10 bg-white text-[#524FD5]"
                            onClick={toggle}
                        >
                            <FaMinus />
                        </button>
                    </div>
                </div>)
            }
        </>
    )
}

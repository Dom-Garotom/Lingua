'use client'

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";


interface FaqCard{
    title : string;
    content : string;
}

export default function FaqCard(  prop : FaqCard ) {

    var [cliked, setCliked] = useState(false);
    function expand() {
        setCliked(true);
    }

    function decrease() {
        setCliked(false);
    }



    return (
        <>
            {cliked === false ?
                (<div className="flex justify-around items-center border-2 border-slate-300 p-5 rounded-[1.7rem] h-24  w-[37.125rem] transition-all ">
                    <span className="text-gray-950 text-xl font-medium w-[85%]">{prop.title}</span>
                    <button 
                        className="flex items-center justify-center rounded-full w-10 h-10 bg-[#524FD5]   text-xs"
                        onClick={expand}
                    >
                        <FaPlus />
                    </button>
                </div>)

                :

                (<div className="flex justify-around items-start bg-[#524FD5]  px-7  py-10 rounded-[1.7rem] w-[37.125rem]">

                    <div className="flex flex-col items-start   gap-7 ">
                        <span className="text-white text-xl font-semibold ">{prop.title}</span>
                        <p className="w-[480px] -tracking-tighter font-light">
                            {prop.content}
                        </p>
                    </div>

                    <button 
                        className="flex items-center justify-center rounded-full w-10 h-10  bg-white text-[#524FD5] text-2xls text-[#524FD] transition-all duration-1000"
                        onClick={decrease}
                    >
                        <FaMinus />
                    </button>

                </div>)

            }
        </>
    )
}

'use client'

import Image from "next/image"
import Link from "next/link"
import ButtonDefault from "../buttonDefault/buttonDeafult"
import Logo from "../../../public/Logo.svg"
import { useState } from "react"

function Header() {

    var links = [
        {
            id: 1,
            link: "Courses",
            href: ""
        },
        {
            id: 2,
            link: "About",
            href: ""
        },
        {
            id: 3,
            link: "Teachers",
            href: ""
        },
        {
            id: 4,
            link: "Pricing",
            href: ""
        },
        {
            id: 5,
            link: "Careers",
            href: ""
        },
        {
            id: 6,
            link: "Blog",
            href: ""
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="flex justify-between items-center px-10 py-4 bg-[#FFF5F1] rounded-t-3xl" >
                <div>
                    <Image src={Logo} alt="Logo da empresa Lingua" />
                </div>

                <nav className="hidden md:flex flex-row gap-3 lg:gap-5">
                    {links.map(item => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="text-[#666680] lg:text-xl md:text-lg font-normal hover:text-[#524FD5] hover:font-medium"
                        >
                            {item.link}
                        </Link>
                    ))}
                </nav>


                <div className=" flex flex-row items-center gap-5 ">
                    <ButtonDefault
                        bg="bg-white hidden md:block"
                        content="Get started"
                        color="text-[#524FD5]"
                    />

                    <div className="md:hidden relative">
                        <button
                            className="text-3xl text-gray-950"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            ☰
                        </button>
                        {isOpen && (
                            <nav className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-10 absolute ">
                                {links.map(item => (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    >
                                        {item.link}
                                    </Link>
                                ))}
                            </nav>
                        )}
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;

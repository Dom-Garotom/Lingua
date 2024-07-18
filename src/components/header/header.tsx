import Image from "next/image";
import Link from "next/link";
import ButtonDefault from "../buttonDefault/buttonDeafult";
import Logo from "../../../public/Logo.svg"

function Header (){

    var links = [
        {
            id : 1 , 
            link : "Courses",
            href : ""
        },
        {
            id : 2 , 
            link : "About",
            href : ""
        },
        {
            id : 3 , 
            link : "Teachers",
            href : ""
        },
        {
            id : 3 , 
            link : "Pricing",
            href : ""
        },
        {
            id : 4 , 
            link : "Careers",
            href : ""
        },
        {
            id : 5 , 
            link : "Blog",
            href : ""
        }
    ]


    return(
        <>
            <header className="flex justify-between items-center px-10 py-4 bg-[#FFF5F1] rounded-t-3xl" >
                <div>
                    <Image src={Logo} alt="Logo da empresa Lingua" />
                </div>

                <nav className="flex flex-row gap-5">
                    {links.map( item => (
                        <Link 
                            key={item.id} 
                            href={item.href}
                            className="text-[#666680] text-xl font-normal hover:text-[#524FD5] hover:font-medium"
                        >
                            {item.link}
                        </Link>
                    ))}
                </nav>

                <ButtonDefault 
                    bg="bg-white"
                    content="Get started"
                    color="text-[#524FD5]"
                />
            </header>
        </>
    )
}

export default Header;
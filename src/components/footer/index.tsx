import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Logo.svg";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 py-10 px-4 md:px-10 bg-[#F9FAFB]">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                <Image alt="Logo" src={Logo} />
                <span className="mt-4">20 Osgood Rd, Milford, NH 03055, USA</span>
                <span>+1283871239190213021</span>
            </div>

            <div className="flex flex-col md:items-start mb-8 md:mb-0">
                <span className="text-gray-950 font-semibold text-xl mb-4">Company</span>
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link className="hover:font-medium" href="/">
                            Careers
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:font-medium" href="/">
                            Teachers
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:font-medium" href="/">
                            Support
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:font-medium" href="/">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col md:items-start mb-8 md:mb-0">
                <span className="text-gray-950 font-semibold text-xl mb-4">Product</span>
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link className="hover:font-medium" href="/">
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:font-medium" href="/">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:font-medium" href="/">
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col md:items-start mb-8 md:mb-0">
                <span className="text-gray-950 font-semibold text-center md:text-left text-xl mb-4">Legal</span>
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link className="hover:font-medium" href="/">
                            Terms & Conditions
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:font-medium" href="/">
                            Privacy policy
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex gap-5 text-xl mt-8 md:mt-0">
                <Link className="hover:font-medium" href="/">
                    <RiFacebookFill />
                </Link>
                <Link className="hover:font-medium" href="/">
                    <FaTwitter />
                </Link>
                <Link className="hover:font-medium" href="/">
                    <SiInstagram />
                </Link>
            </div>
        </div>
    );
}

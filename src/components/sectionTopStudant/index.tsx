import Image from "next/image"
import ImageStudent from "../../../public/Mask(3).png"
import FlagSpanish from "../../../public/flag-Spanish.png"
import TitleDefault from "../titleDefault"






function SectionTopStudant() {
    return (
        <div className="flex flex-col  w-full items-start px-5 sm:px-36 md:px-5 gap-20 my-32 ">

            <TitleDefault
                title="Our  Students Say"
                subTitle="TOP STUDING"
            />

            <div className="flex w-full md:flex-row flex-col  justify-between gap-10 ">

                <Image
                            className="aspect-auto md:w-[402px]"

                    alt=""
                    src={ImageStudent}
                />

                <div className="flex flex-col items justify-center gap-2">

                    <h3 className="font-semibold text-gray-950 text-3xl">Martin Watson</h3>

                    <div className="flex gap-3 items-center mb-12">
                        <Image
                            alt=""
                            src={FlagSpanish}
                        />
                        <span className="text-gray-500">B2 course student</span>
                    </div>

                    <p className="text-gray-900 font-light text-2xl ">
                        There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.
                    </p>


                </div>
            </div>


        </div>
    )
}

export default SectionTopStudant

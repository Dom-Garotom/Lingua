import Image from "next/image"
import ImageStudent from "../../../public/Mask(3).png"
import FlagSpanish from "../../../public/flag-Spanish.png"
import TitleDefault from "../titleDefault"






function SectionTopStudant() {
    return (
        <div className="flex flex-col  w-[80-vh] items-start px-44 gap-20 my-32 ">

            <TitleDefault
                title="Our  Students Say"
                subTitle="TOP STUDING"
            />

            <div className="flex w-full  justify-between gap-10 ">

                <Image

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

                    <p className="text-gray-900 font-light text-2xl w-[600px]">
                        There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.
                    </p>


                </div>
            </div>


        </div>
    )
}

export default SectionTopStudant

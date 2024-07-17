import Image from "next/image";
import ButtonDefault from "../buttonDefault/buttonDeafult";
import PersonHero from "../../../public/personHero.png"
import FloatingCard from "./floatingCard";
import Avatar from "../../../public/Avatar.png"

function Hero() {
    return (

        <div className="flex justify-around items-center pt-10 relative bg-[#FFF5F1] rounded-b-3xl">
            <div className="flex flex-col gap-7 mb-20">


                <h1 className="text-[#181B32] text-5xl font-light w-[558px]">
                    A <span className="text-[#524FD5] font-medium"> unique </span> approach to learning foreign languages online
                </h1>

                <p className="text-gray-500 text-xl w-[350px]">
                    Learn at your own pace, with lifetime access on mobile and desktop
                </p>

                <ButtonDefault
                    bg="bg-[#524FD5]"
                    content="Get started"
                    color="text-white"
                />
            </div>

            <Image src={PersonHero} alt="" />

            <FloatingCard
                class="top-[15.625rem] right-[3.5rem]"
                classTitle="text-[#524FD5]"
                subTitle="Multiple Categories"
                title="+10 Course"
            />

            <FloatingCard
                class="top-[5.625rem] right-[35.5rem]"
                classTitle="text-gray-950"
                image={Avatar}
                title="Janer Cooper"
                subTitle="I loved the Italian course!"
            />


        </div>

    )
}

export default Hero;
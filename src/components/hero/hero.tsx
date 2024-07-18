import Image from "next/image";
import ButtonDefault from "../buttonDefault/buttonDeafult";
import PersonHero from "../../../public/personHero.png"
import FloatingCard from "./floatingCard";
import Avatar from "../../../public/Avatar.png"

function Hero() {
    return (

        <div className="flex flex-row  justify-around items-start px-10 md:px-0 lg:items-center lg:pt-10 relative bg-[#FFF5F1] rounded-b-3xl ">
            <div className="flex flex-col gap-7   lg:mt-0 mb-20">


                <h1 className="text-[#181B32] text-3xl lg:text-5xl font-light  sm:text-4xl w-[300px] sm:w-[358px] md:w-[358px] xl:w-[558px]">
                    A <span className="text-[#524FD5] font-medium"> unique </span> approach to learning foreign languages online
                </h1>

                <p className="text-gray-500  lg:text-xl sm:w-[300px] w-[300px] lg:w-[350px]">
                    Learn at your own pace, with lifetime access on mobile and desktop
                </p>

                <ButtonDefault
                    bg="bg-[#524FD5]"
                    content="Get started"
                    color="text-white"
                />
            </div>

            <div className="mb-20 hidden sm:block lg:mb-0  " >
            <Image src={PersonHero} alt="" width={504} height={504}  className=" w-[250px] sm:w-[250px] sm:h-[270px] md:h-[350px]  md:w-[350px] lg:w-[504px] lg:h-[504px]    w-full aspect-auto" />

            <FloatingCard
                class="hidden lg:flex top-[15.625rem] right-[3.5rem]"
                classTitle="text-[#524FD5]"
                subTitle="Multiple Categories"
                title="+10 Course"
            />

            <FloatingCard
                class=" hidden lg:flex top-[5.625rem] right-[35.5rem]"
                classTitle="text-gray-950"
                image={Avatar}
                title="Janer Cooper"
                subTitle="I loved the Italian course!"
            />

            </div>

        </div>

    )
}

export default Hero;
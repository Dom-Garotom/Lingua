import Image from "next/image";
import ButtonDefault from "../buttonDefault/buttonDeafult";
import ImageHero from "../../../public/hero-Image.png"
function Hero() {
    return (

        <div className="flex md:flex-row flex-col-reverse   justify-around  items-center px-10 md:px-0 lg:items-center lg:pt-10 relative bg-[#FFF5F1] rounded-b-3xl ">
            <div className="flex flex-col gap-7 items-center md:items-start   lg:mt-0 mb-20">


                <h1 className="text-[#181B32] text-center md:text-left text-3xl lg:text-5xl font-light  sm:text-4xl w-[400px] sm:w-[458px] md:w-[358px] xl:w-[558px]">
                    A <span className="text-[#524FD5] font-medium"> unique </span> approach to learning foreign languages online
                </h1>

                <p className="text-gray-500 text-center md:text-left  lg:text-xl md:w-[350px] sm:w-[450px] w-[400px] lg:w-[350px]">
                    Learn at your own pace, with lifetime access on mobile and desktop
                </p>

                <ButtonDefault
                    bg="bg-[#524FD5]"
                    content="Get started"
                    color="text-white"
                />
            </div>

            <div>
                <Image
                    className="lg:max-w-[584px] md:max-w-[484px]  aspect-auto"
                    src={ImageHero}
                    alt="A modelo da Lingua School"
                />
            </div>

        </div>

    )
}

export default Hero;
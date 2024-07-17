import Image, { StaticImageData } from "next/image";

interface FloatingCard{
    image ?: StaticImageData;
    title : string;
    subTitle : string;
    classTitle ?: string;
    class ?: string;
}

function FloatingCard( prop : FloatingCard) {
    return (

        <div className={`flex justify-around items-center px-7 gap-3 bg-white rounded-3xl h-[98px] absolute ${prop.class}`}>
            {prop.image && <Image src={prop.image} alt=""/>}
            <div className="flex flex-col items-start">
                <span className={` font-bold text-2xl  ${prop.classTitle} `}>{prop.title}</span>
                <p className={` text-gray-500 font-light text-xl  `}>{prop.subTitle}</p>
            </div>
        </div>

    )
}

export default FloatingCard;
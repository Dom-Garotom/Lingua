import Image, { StaticImageData } from "next/image"

interface cardValues{
    image : StaticImageData;
    title : string;
    content : string;
}

function CardValues( prop : cardValues ) {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={prop.image} alt=""/>
      <span className="text-gray-950 font-medium">{prop.title}</span>
      <p className="md:w-[289px] w-[270px] text-gray-600 font-light  my-5 text-center">{prop.content}</p>
    </div>
  )
}


export default CardValues;
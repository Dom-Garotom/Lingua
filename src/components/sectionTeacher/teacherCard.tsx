import Image, { StaticImageData } from 'next/image'

interface TeacherCard {
  image: StaticImageData;
  name: string;
  content: string;
  country: StaticImageData;
}

export default function TeacherCard(prop: TeacherCard) {
  return (
    <div className='flex flex-col gap-6'>
      <Image src={prop.image} alt='Imagem de um dos nossos professores' />

      <div className='flex flex-col items-start'>
        <span className='font-medium text-gray-950 text-2xl'>{prop.name}</span>

        <div className="flex items-center">
          <Image src={prop.country} alt='Image da bandeira da linguagem que o professor ensina' />
          <span className='text-gray-500 text-lg'>{prop.content}</span>

        </div>

      </div>

    </div>
  )
}

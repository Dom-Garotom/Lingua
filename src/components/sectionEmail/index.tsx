import React from 'react'
import ButtonDefault from '../buttonDefault/buttonDeafult'

export default function SectionEmail() {
  return (
    <div className='flex flex-col gap-24 items-center my-52 '>
        <div className='flex flex-col gap-5 items-center'>

        <h3 className='font-light text-6xl text-gray-950 '>Get a free trial lesson today</h3>
        <span className='font-medium text-xl text-gray-500'>Start fulfilling your language dreams with our school</span>
        </div>

        <div className='flex gap-5'>
            <input 
                placeholder='Enter your email'
                type="email" 
                required
                className='placeholder:text-gray-400 text-gray-800 text-xl px-5 py-3 border-2 w-96 border-gray-500 rounded-2xl'
            />
            <ButtonDefault
                bg='bg-[#524FD5]'
                color='text-white'
                content='Send'
            />
        </div>
    </div>
  )
}

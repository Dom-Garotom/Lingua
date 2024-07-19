import React from 'react';
import ButtonDefault from '../buttonDefault/buttonDeafult';

export default function SectionEmail() {
  return (
    <div className="flex flex-col gap-12 items-center my-20 px-4 sm:px-0">
      <div className="flex flex-col gap-5 items-center text-center">
        <h3 className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-950">
          Get a free trial lesson today
        </h3>
        <span className="font-medium text-lg sm:text-xl text-gray-500">
          Start fulfilling your language dreams with our school
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 w-full max-w-md">
        <input 
          placeholder="Enter your email"
          type="email"
          required
          className="placeholder:text-gray-400 text-gray-800 text-lg sm:text-xl px-5 py-3 border-2 border-gray-500 rounded-2xl w-full sm:w-auto"
        />
        <ButtonDefault
          bg="bg-[#524FD5]"
          color="text-white"
          content="Send"
        />
      </div>
    </div>
  );
}

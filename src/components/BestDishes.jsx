import React from 'react'
import { MdOutlineFoodBank } from "react-icons/md";

const BestDishes = () => {
  return (
    <div className='bg-[#F4F1EA] py-10 sm:py-10 sm:px-10 '>
        <div className='mx-auto max-w-8xl px-6 md:px-6 overflow-x-hidden '>
  <div className="mx-auto max-w-2xl overflow-hidden lg:max-w-4xl w-full flex flex-col items-center text-center">

          <p className="mt-2 text-lg sm:text-sm md:text-sm leading-8 font-[700] uppercase text-[#FB792F]">
            <MdOutlineFoodBank className='inline-block text-sm'/>
           popular Dishes
            <MdOutlineFoodBank className='inline-block text-sm'/>
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Best selling Dishes
          </h2>
        </div>
        </div>
      
    </div>
  )
}

export default BestDishes

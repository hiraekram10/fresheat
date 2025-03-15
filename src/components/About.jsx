import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineFoodBank } from "react-icons/md";

const About = () => {
    return (
       
        <div className='bg-[#F4F1EA] py-10 sm:py-10  h-screen'>
            <div className='mx-auto max-w-8xl sm:px-0 md:px-6 overflow-x-hidden container h-4/5'>
              
                <div className='bg-white h-full overflow-y-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-7 md:gap-3  border-gray-200 '>
                    <div className='bg-gray-400 col-span-2 relative hidden lg:flex md:items-center rounded-r-full bg-[url("https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_1.png")] bg-cover bg-center object-cover '>
                        
                            <motion.img  animate={{ rotate: 360 }}  transition={{ repeat: Infinity, duration: 20, ease: "linear" }} src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_3.png" className='absolute top-10 left-1/4 ' width={320} alt="" />
                        

                    </div>
                    <div className='bg-red-600  md:bg-green-200 mx-auto md:col-span-3 flex md:items-center md:justify-center '>
                        <div className="px-0 lg:px-12 w-full overflow-hidden flex flex-col items-center justify-center text-center">

                            <p className="mt-2 text-lg sm:text-xl md:text-xl leading-8 font-[700] uppercase text-[#FB792F]">
                                <MdOutlineFoodBank className='inline-block ' />
                                About Us
                                <MdOutlineFoodBank className='inline-block ' />
                            </p>


                            <h2 className="text-3xl  sm:text-xl md:text-4xl font-bold tracking-tight text-gray-900">
                                Variety of flavours from american cuisine
                            </h2>
                            <p className='pt-2 text-sm md:text-md font-normal  text-gray-400'>
                                It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that
                            </p>
                        </div>
                    </div>
                    <div className=' bg-gray-400 col-span-2 hidden lg:flex md:items-start relative rounded-l-full bg-[url("https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_4.png")] bg-cover bg-center object-cover '>
                        <motion.img animate={{ rotate: 360 }}  transition={{ repeat: Infinity, duration: 20, ease: "linear" }} src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_6.png" className='absolute top-10 right-1/4 ' alt="" width={320}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About

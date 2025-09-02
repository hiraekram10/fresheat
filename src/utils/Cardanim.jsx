import { motion } from 'framer-motion'
import React from 'react'

const Cardanim = () => {
   
    return (
        <div className='relative'>


            <div className="  py-8 carddown flex flex-col w-80 h-full rounded-xl items-center justify-center ">
                
                <img
                    alt=""
                    src='https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_4.png'
                    className="relative z-10 h-26 w-26 rounded-full bg-gray-50"
                />
                <div className="group">


                    <h1 className="mt-4 relative z-10  text-lg font-bold leading-6 text-[1.1rem] text-gray-900 group-hover:text-white">
                        title
                    </h1>
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                    <h1
                        className="relative z-10  bg-gray-50 px-3 py-2 font-regular text-[1rem] text-gray-600 "
                    >
                        The Registeration fees
                    </h1>
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                    <h1
                        className="relative z-10 bg-gray-50 px-3 py-2 text-[1.1rem] font-bold text-[#EB052D]"
                    >
                        price
                    </h1>
                  
                </div>
            </div>
            <motion.div 
            initial={{
                y:100,
                opacity:0,
                scale:0.98,
                filter:'blur(10px)'
            
            }}
            whileHover={{
                y:0,
                opacity:1,
                scale:0.98,
                
                filter:'blur(0px)'
            }}
            transition={{
                duration:0.3,
                ease:'easeInOut'
            }}
             className='bg-[url("https://gramentheme.com/html/fresheat/assets/img/bg/dishesThumbBG.png")] bg-cover bg-center object-cover absolute inset-0 py-8 carddown flex flex-col w-80 h-full rounded-xl items-center justify-center -z-1'>
                
            </motion.div>
            
          

        </div>
    )
}

export default Cardanim

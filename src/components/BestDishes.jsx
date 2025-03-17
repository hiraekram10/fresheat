import React from 'react'
import { MdOutlineFoodBank } from "react-icons/md";
import Cardanim from '../utils/Cardanim';

const BestDishes = () => {
  const posts = [
    {
      id: 1,
      title: 'Chiken Pizza',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png',

    },
    {
      id: 2,
      title: 'Chiken Leg Piece',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png',

    },
    {
      id: 3,
      title: 'Egg & Cucumber',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png',

    },
    {
      id: 4,
      title: 'Chiken Fried Rice',
      Price: '$10.99',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png',

    },
    {
      id: 5,
      title: 'Chiken Noodles',
      Price: '$20.89',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_4.png',

    }

  ]
  return (
    <div className='bg-[#F4F1EA] py-10 sm:py-10 sm:px-10 '>
      <div className='mx-auto max-w-8xl px-6 md:px-6 overflow-x-hidden '>
        <div className="mx-auto max-w-2xl overflow-hidden lg:max-w-4xl w-full flex flex-col items-center text-center">

          <p className="mt-2 text-lg sm:text-sm md:text-sm  font-[700] uppercase text-[#FB792F]">
            <MdOutlineFoodBank className='inline-block text-sm' />
            popular Dishes
            <MdOutlineFoodBank className='inline-block text-sm' />
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Best selling Dishes
          </h2>
        </div>
        <div className='mt-4 grid bg-rose-400 max-w-7xl grid-col-1 md:grid-cols-3 gap-x-5 gap-y-4 md:px-0'>
          {posts.map((post) => (
            <article key={post.id} className="bg-green-600 ">

              <div className="py-8 carddown flex flex-col rounded-xl items-center justify-center bg-[#fdfcfc] ">
              <img
                    alt=""
                    src={post.imageUrl}
                    className="h-26 w-26 rounded-full bg-gray-50"
                  />
                <div className="group">

                 
                  <h1 className="mt-4 text-lg font-bold leading-6 text-[1.1rem] text-gray-900 group-hover:text-gray-600">
                    {post.title}
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
                    {post.Price}
                  </h1>
                </div>
              </div>
            </article>


          ))}
<Cardanim/>

        </div>
      </div>

    </div>
  )
}

export default BestDishes

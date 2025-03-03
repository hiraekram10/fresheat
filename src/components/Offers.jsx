import React from 'react';
import offerThumb1 from '../images/offerThumb1.png'

function Offers(props) {
  const todayOffer = [
    {
      id: 1,
      title: 'Spicy Fried Chiken',
      name: 'btn-red',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_1.png',

    },
    {
      id: 2,
      title: 'Today Special Food',
      name: 'btn-orange',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_2.png',

    },
    {
      id: 3,
      title: 'Special Chiken Roll',
      name: 'btn-red',
      imageUrl:
        'https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_3.png',

    },
   
    
  ]


    return (
        <div>
            <div class="bg-[#F4F1EA] py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
 
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-x-7 gap-y-16 border-t bg-yellow-300 border-gray-200 pt-10 sm:mt-16 sm:grid-cols-1 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
     { todayOffer.map((offer)=>(
      <article key={offer.id} class="flex max-w-xl flex-row items-start justify-between bg-green-400">
      {/* <div class="flex items-center gap-x-4 text-xs">
       
      
      </div> */}
      <div class="group relative px-2 bg-red-200 ">
          <h4 class="mt-2 text-lg/2 uppercase font-[800] text-gray-900 font-[Epilogue] ">on this week</h4>
        <h3 class="mt-3 text-[2em] font-[800] text-gray-900 ">
          {offer.title}
        </h3>
        <h3 class="mt-3 text-lg/2 font-[800] text-gray-900 ">
         Limits Time Offer
        </h3>
        <button>Order Now</button>
        
      </div>
      <div class="group relative px-2 bg-green-600 ">
        <img  src={offer.imageUrl}/>
       
        
      </div>
     
    </article>
  

     ))}
      
     

      
    </div>
  </div>
</div>
            
        </div>
    );
}

export default Offers;
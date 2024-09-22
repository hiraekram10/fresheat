import React from 'react';

function Home(props) {
    return (
        <div className='w-full h-screen  text-white pt-2 bg-no-repeat bg-cover bg-[#522c168f] bg-blend-darken' style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/030/608/618/small/wall-old-surface-of-the-earth-stone-texture-rough-brick-earth-tone-use-this-for-wallpaper-or-background-image-paint-brown-texture-for-wallpaper-there-is-a-blank-space-for-text-photo.jpg')" }}>
            <div className="textstrcuture mt-40 px-20 ">
                <h1 className='text-[1.5vw] text-[#FB7911] leading-[6vw] tracking-tight uppercase font-[Epilogue] font-bold'>welcome fresheat</h1>
                {["Spicy Fried", "Chiken"].map((item, index) => {
                    return <div className="masker">
                        <div className='w-fit flex items-center'>

                            <h1 className='text-[7vw] leading-[7vw] tracking-tight uppercase font-[Epilogue] font-[900] 'key={index}>{item}</h1>
                        </div>
                    </div>
                })}
                <button className='bg-red-600 w-[12%] h-[7vh]'>Order Now</button>


            </div>




        </div>
    );
}

export default Home;
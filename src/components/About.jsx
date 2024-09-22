import React from 'react';
import { useState,useEffect } from 'react';

function About(props) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      // Start the animation after a small delay (optional)
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 500); // Delay of 500ms (you can adjust or remove this)
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);
    return (
        <div className='w-full h-screen bg-blue-950 flex'>
        <div  className={`w-100 h-24 bg-red-500 transition-all duration-1000 ${animate ? 'w-0' : 'w-72'}`}
      
      ></div>
       <div  className={`w-100 h-24 bg-red-500 transition-all duration-1000 ${animate ? 'w-0' : 'w-72'}`}
      
      ></div>
       <div  className={`w-100 h-24 bg-red-500 transition-all duration-1000 ${animate ? 'w-0' : 'w-72'}`}
      
      ></div>
       <div  className={`w-100 h-24 bg-red-500 transition-all duration-1000 ${animate ? 'w-0' : 'w-72'}`}
      
      ></div>

        </div>
    );
}

export default About;
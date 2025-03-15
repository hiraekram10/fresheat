import React from 'react';
import { FaCircleArrowDown } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import ThemeBtn from '../utils/ThemeBtn';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Fooditems from '../components/Fooditems';
import About from '../components/About';



function Home(props) {


    return (

        <div>
            <div className=' '>
                <Hero />
            </div>
            <div>
                <Fooditems/>
            </div>

            <div>
             <Offers/>
            </div>
            <div>
                <About/>
            </div>


        </div>


    );
}

export default Home;
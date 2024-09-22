import React from 'react';
import {BrowserRouter  ,Routes,Route}  from 'react-router-dom'
import Home from '../components/Home';
import Notfound from '../components/Notfound';
import About from '../components/About';
import Navsection from '../components/Navsection';
import Contact from '../components/Contact';

function Approuter(props) {
    return (
        <div>
            <BrowserRouter>
            <Navsection/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<Notfound/>}/>
                
            </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default Approuter;
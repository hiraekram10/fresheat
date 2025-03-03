import React from 'react';
import {BrowserRouter  ,Routes,Route}  from 'react-router-dom'
import Home from '../components/Home';
import Notfound from '../components/Notfound';
import About from '../components/About';
import Navsection from '../components/Navsection';
import Contact from '../components/Contact';
import Fooditems from '../components/Fooditems';
import Temlate from '../components/Temlate'


function Approuter(props) {
    return (
        <div>
            <BrowserRouter>
            <Navsection/>
            <Routes>
                
                <Route path='/' element={<Temlate><Home/></Temlate>}/>
                <Route path='/about' element={<Temlate><About/> </Temlate>}/>
                <Route path='/contact' element={<Temlate><Contact/> </Temlate>}/>
                <Route path='*' element={<Notfound/>}/>
                
            </Routes>
           
            </BrowserRouter>
            
        </div>
    );
}

export default Approuter;
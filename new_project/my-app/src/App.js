import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
//import Cena from './pages/musica';




function App(){
    return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home /> }>
           {/*  <Route ipath="Hero"  element={<Hero />} />
           <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> 
         */}</Route>

        </Routes>
    
    </BrowserRouter>
    );

    }

    export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../pages/Category';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';
import Recipe from './Recipe';
import Terminal from './Terminal';

function Main(props) {
    return (
        <div className='content container'>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/add" element={<Contact />} />
                <Route path="/category/:name" element={<Category />}/>
                <Route path="/meals/:id"  element={<Recipe />} />
                <Route path="/terminal/:id" element={<Terminal />} />
                <Route element={<NotFound/>} />
            </Routes>
    
        </div>
    );
}

export default Main;
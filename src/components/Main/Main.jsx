import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Slide } from 'react-awesome-reveal';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto mt-[50px]'>
           
            <Navbar></Navbar>
            
            
            <Outlet></Outlet>
            
            <Footer></Footer>
            

        </div>
    );
};

export default Main;
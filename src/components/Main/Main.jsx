import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto mt-[50px]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            

        </div>
    );
};

export default Main;
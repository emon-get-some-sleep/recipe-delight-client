import React from 'react';
import LazyLoad from 'react-lazy-load';

const FoodBanner = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between mt-[130px] gap-4 p-4'>
            <div className='flex-1 flex flex-col items-center lg:items-start gap-4'>
            <h1 className='text-[32px] md:text-[64px] text-center lg:text-left font-bold text-[#41203B]'>Enjoy Food All<br /> Over The World</h1>
            <p className='text-[#836C6D] text-xl md:text-2xl text-center lg:text-left font-medium'>Experience indian recipies in a way <br />you have not before. Take it To next Level</p>
           
            </div>
            <div className='rounded-lg flex-1'>
            <LazyLoad>
            <img className='rounded-lg max-w-full' src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </LazyLoad>
            </div>
        </div>
    );
};

export default FoodBanner;
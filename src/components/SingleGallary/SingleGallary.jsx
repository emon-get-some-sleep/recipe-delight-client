import React from 'react';
import './SingleGallary.css';
import LazyLoad from 'react-lazy-load';
const SingleGallary = ({data}) => {
    const {image_url, name, description} = data;
    return (
        <div className='gallary w-[300px] rounded-lg h-[200px] flex items-center justify-center py-8 px-4 relative shadow-md transition ease-in-out duration-500 hover:translate-y-[20px]'>
        <LazyLoad>
            <img src={image_url} alt="" /> 
        </LazyLoad> 
        <div className="info">
            <h2 className='font-bold text-xl'>{name}</h2>
            <p className='text-sm font-semibold mt-3'>{description}</p>
        </div>
    </div>
    );
};

export default SingleGallary;
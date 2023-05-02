import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
const SingleChef = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-8'>
                <img className='w-[150px] rounded-[50%] h-[150px]' src="https://img.freepik.com/free-photo/young-confident-caucasian-cook-girl-chef-uniform-stands-sideways-holds-rolling-pin-isolated-violet-wall-with-copy-space_141793-33236.jpg?w=740&t=st=1683029647~exp=1683030247~hmac=259ce615ffc89f5ff30be8b3c503caf6d4a6861aae6db8060bc23e3e882ade25" alt="" />
                <h2 className='text-2xl font-semibold'>Soha Sen Gupta</h2>
                <div className='flex bg-[#FE8E78] rounded-xl px-6 py-4 justify-between items-center gap-4'>
                    <p className='text-sm  font-medium'>3+ years of experience</p>
                    <p className='text-sm font-medium'>4 Recipes</p>
                    <p className='text-sm flex gap-2 items-center font-medium'> <FaRegHeart className='text-red-500' /> 7 Like</p>
                </div>
                <button className="font-medium bg-[#3A1C36] text-white border px-6 py-4 rounded-lg">View Recipies</button>
            </div>
    );
};

export default SingleChef;
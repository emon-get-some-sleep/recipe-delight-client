import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
const SingleChef = ({chef}) => {
    const {chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;
    return (
        <div className='flex flex-col items-center bg-[#538017] rounded-xl justify-center gap-8'>
                <img className='w-[150px] rounded-[50%] h-[150px]' src={chef_picture} alt="" />
                <h2 className='text-2xl font-semibold'>{chef_name}</h2>
                <div className='flex bg-[#FE8E78] rounded-xl px-6 py-4 justify-between items-center gap-4'>
                    <p className='text-sm  font-medium'>{years_of_experience} years of experience</p>
                    <p className='text-sm font-medium'>{number_of_recipes} Recipes</p>
                    <p className='text-sm flex gap-2 items-center font-medium'> <FaRegHeart className='text-red-500' /> {likes} Like</p>
                </div>
                <button className="font-medium bg-[#3A1C36] text-white border px-6 py-4 rounded-lg">View Recipies</button>
            </div>
    );
};

export default SingleChef;
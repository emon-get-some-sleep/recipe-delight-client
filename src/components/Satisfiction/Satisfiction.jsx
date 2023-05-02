import React from 'react';
import { FaBookOpen, FaBoxOpen, FaTint, FaViadeo } from 'react-icons/fa';

const Satisfiction = () => {
    return (
        <div className='mt-[100px] bg-[#FBF6F0] p-6'>
            <h1 className='text-[32px] md:text-[54px] mb-4 text-center font-bold text-[#41203B]'>Gurantee Your Satisfiction</h1>
            <div className='flex justify-between'>
                <div className='flex flex-col items-center gap-2'>
                <FaBookOpen className='text-[74px] text-green-800' />
                <p className='text-[#41203B] font-medium text-sm'>Customers all around the country</p>
                
                </div>
                <div className='flex flex-col items-center gap-2'>
                <FaBoxOpen className='text-[74px] text-orange-800' />
                <p className='text-[#41203B] font-medium text-sm'>30 minutes fast Delivery</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <FaTint className='text-[74px] text-violet-800'/>
                <p className='text-[#41203B] font-medium text-sm'>Everything cooked with Organic food</p>
                </div>
            </div>
            <div className='bg-white w-[45%] flex flex-col items-center mx-auto p-[30px] mt-[50px]'>
                <h2 className='font-bold text-2xl'>Customers Satisfiction is our Priority</h2>
                <p className='font-medium text-sm mt-4'> <FaViadeo className='text-2xl text-red-500 inline' /> Guranteed return If you do not like our food</p>
            </div>
        </div>
    );
};

export default Satisfiction;
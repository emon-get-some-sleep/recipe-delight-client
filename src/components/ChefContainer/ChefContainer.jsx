import React, { useEffect, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';

const ChefContainer = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data.chefs))
    }, [])
    
    return (
        <div className='p-4 mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                chefs.map(chef => <SingleChef key={chef.id} chef={chef}></SingleChef>)
            }
        </div>
    );
};

export default ChefContainer;
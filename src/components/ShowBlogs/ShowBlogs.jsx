import React from 'react';
import Blogs from '../Blogs/Blogs';
import { useLoaderData } from 'react-router-dom';
import { Slide } from 'react-reveal';

const ShowBlogs = () => {
    const blogs = useLoaderData();

    return (
        <div>

          
           {
                blogs.blogs.map((blog,index) => <Blogs key={index} blog={blog}></Blogs>)
            }
        </div>
    );
};

export default ShowBlogs;
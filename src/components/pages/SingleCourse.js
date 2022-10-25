import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ category }) => {
    const { img, name, title } = category;
    return (
        <div className=''>
            <img className=' h-52 w-full bg-gray-500' src={img} alt="" />
            <div className='bg-gray-900 px-3 py-6'>
                <h4 className='text-xl tracking-wider uppercase text-violet-400'>Type: {name}</h4>
                <h2 className='text-2xl'>{title}</h2>
                <Link className='bg-violet-400 px-4 py-2 rounded mt-4 inline-block hover:bg-violet-700 transition duration-500 font-semibold' to={`/course/${category.id}`}>Learn More</Link>
            </div>
        </div>
    );
};

export default SingleCourse;
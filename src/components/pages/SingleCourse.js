import React from 'react';

const SingleCourse = ({ category }) => {
    const { img, name, title } = category;
    return (
        <div className=''>
            <img className=' h-52 w-full bg-gray-500' src={img} alt="" />
            <div className='bg-gray-900 px-3 py-6'>
                <h4 className='text-xl tracking-wider uppercase text-violet-400'>Type: {name}</h4>
                <h2 className='text-2xl'>{title}</h2>
            </div>
        </div>
    );
};

export default SingleCourse;
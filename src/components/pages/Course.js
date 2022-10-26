import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const Course = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='bg-gray-800 p-5'>
                <h2 className='text-violet-400 text-2xl pb-5 font-bold'>All Courses</h2>
                {
                    categories.map(category => <p className='pb-4 text-xl text-white hover:text-violet-300 font-semibold' key={category.id}> <Link to={`/course/${category.id}`}>{category.name}: {category.title}</Link> </p>)
                }
            </div>
            <div className='col-span-2'>
                <div className='grid md:grid-cols-2 px-4 py-8 lg:grid-cols-3 gap-6 bg-gray-400 text-gray-100'>
                    {
                        categories.map(category => <SingleCourse key={category.id} category={category}></SingleCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;
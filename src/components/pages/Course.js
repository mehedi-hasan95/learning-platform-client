import React, { useEffect, useState } from 'react';
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
            <div>
                <h2>Sidebar</h2>
            </div>
            <div className='col-span-2'>
                <div className='grid md:grid-cols-2 px-4 py-8 lg:grid-cols-3 gap-6 bg-gray-800 text-gray-100'>
                    {
                        categories.map(category => <SingleCourse key={category.id} category={category}></SingleCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;
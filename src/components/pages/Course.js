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
        <div>
            <div className="bg-[url('https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=1380&t=st=1666785899~exp=1666786499~hmac=8393a5218a40b29e5138d5a5ce0f195ed8e28a897837baa74d3fda447879b2f7')] relative before:absolute before:top-0 before:h-full before:w-full before:contents('') before:bg-black before:opacity-50 mb-7">
                <section className='relative z-30'>
                    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                        <h1 className="text-4xl font-bold leading-none sm:text-5xl text-white">Start your course right now!!! Enjoy your learning
                        </h1>
                        <p className="px-8 mt-8 mb-12 text-lg text-violet-300 font-semibold">Learn with us. You will learn, we'll assist. Go ahed</p>
                    </div>
                </section>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                <div className=' bg-gray-800 p-5'>
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
        </div>
    );
};

export default Course;
import React, { useRef } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { AuthContext } from '../context/AuthProvider';

const CourseDetails = () => {

    //Start Printing properties
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Cource Download',
    });
    //End Printing Properties
    const courseDetails = useLoaderData();
    const { author, category_name, details, image_url, price, rating, thumbnail_url, title, total_student } = courseDetails;



    // Test
    const {clickHandaler} = useContext(AuthContext);

    return (
        <div>
            <div style={{ backgroundImage: `url(${image_url})` }} className="mb-6 relative py-28 md:py-52 lg:py-60 before:absolute before:top-0 before:h-full before:w-full before:contents('') before:bg-black before:opacity-50 mb-7">
                <h2 className='text-center text-white text-4xl font-extrabold tracking-widest relative z-30'>Learn: <span className='text-violet-400'>{category_name}</span></h2>
            </div>
            <div>
                <section className="bg-gray-800 text-gray-100">
                    <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl">{title}</h1>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-5">
                                <Link rel="noopener noreferrer" to='/checkout' className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-700 transition duration-500 text-gray-900 hover:text-white">Buy Now</Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src={thumbnail_url} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </section>
                <section className='grid grid-cols-3 gap-4 bg-gray-300 p-5'>
                    <div className='col-span-2'>
                        <div>
                            <img src={author.img} className="h-16 rounded-full mb-3" alt="" />
                            <h4 className='text-xl mb-2'>Author: {author.name}</h4>
                            <h4 className='text-lg'>Published: {author.published_date}</h4>
                        </div>
                        <h2 className='text-2xl my-5 text-violet-400 font-bold'>Details about this course</h2>
                        <p>{details}</p>
                    </div>
                    <div className='bg-[#FDF9F8] p-5 flex flex-col gap-4'>
                        <div ref={componentRef}>
                            <h3 className='text-xl'>{title}</h3>
                            <h4 className='text-lg'> Price: ${price}</h4>
                            <h4 className='text-lg'>Duration: 4 weeks</h4>
                            <h4 className='text-lg'>Level: All levels</h4>
                            <h4 className='text-lg'>Lectures: 4 lesson</h4>
                            <h4 className='text-lg'>Rating: {rating.number}</h4>
                            <h4 className='text-lg'>Enrolled: {total_student}</h4>
                        </div>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-5">
                            <Link onClick={()=>clickHandaler(courseDetails)} rel="noopener noreferrer" to='/checkout' className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-700 transition duration-500 text-gray-900 hover:text-white">Buy Now</Link>
                            <Link onClick={handlePrint} rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-700 transition duration-500 text-gray-900 hover:text-white">Download Details</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CourseDetails;
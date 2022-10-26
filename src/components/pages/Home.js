import React from 'react';

const Home = () => {
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Tech School</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Learn is !Fan. Learning in a dynamic process. Stay calm, learn more</p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Convince yourself that you have to learn</h3>
                            <p className="mt-3 text-lg dark:text-gray-400">This is my opinion. All work in the world is difficult. Even a thief has a tough job.</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Value of time</h4>
                                        <p className="mt-2 dark:text-gray-400">If you're a programmer, give the problem time. Problems will teach you something new.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Learn well what you learn</h4>
                                        <p className="mt-2 dark:text-gray-400">Never be too clever. Learn well what you learn. Study well and you will survive otherwise fail</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">If you can't do it once, do it a hundred times</h4>
                                        <p className="mt-2 dark:text-gray-400">I can't do it. Don't give it to me. Think about why you can't. If you can't why don't you try again? Try you can</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://img.freepik.com/premium-photo/e-learning-student-university-concept_31965-2456.jpg?w=1380" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const [btnChecked, setBtnChecked] = useState(false);
    const handleAccepeted = event => {
        setBtnChecked(event.target.checked);
    }
    return (
        <section className="p-6 bg-gray-800 text-gray-50">
            <h2 className='text-center text-3xl'>Order Page</h2>
            <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className=" text-2xl">Hello, {user.displayName}</p>
                        <p className="">Thank you for stay with us</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">First name</label>
                            <input id="firstname" type="text" placeholder="First name" className="w-full py-2 px-2 text-black rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Last name</label>
                            <input id="lastname" type="text" placeholder="Last name" className="w-full py-2 px-2 text-black rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full py-2 px-2 text-black rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm">Card Number</label>
                            <input id="address" type="text" placeholder="Your Card Number" className="w-full py-2 px-2 text-black rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label className=" pr-2">Please fill the checkbox</label>
                            <input onClick={handleAccepeted} type="checkbox" name="" id="" />
                        </div>
                        <button className='bg-violet-400 px-4 py-2 rounded mt-4 inline-block hover:bg-violet-700 transition duration-500 font-semibold' type="submit" disabled={!btnChecked}>
                            Pay Now
                        </button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Checkout;
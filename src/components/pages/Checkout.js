import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseDetails = useLoaderData();
    return (
        <div>
            <h2>Money !!!!</h2>
        </div>
    );
};

export default Checkout;
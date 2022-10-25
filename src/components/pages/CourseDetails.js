import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <h2>Details</h2>
        </div>
    );
};

export default CourseDetails;
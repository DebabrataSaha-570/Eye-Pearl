import React from 'react';
import imageNotFound from '../../Images/404.jpg'
const NotFound = () => {
    return (
        <div className='w-50 mx-auto my-5'>
            <img className="img-fluid" src={imageNotFound} alt="" />
        </div>
    );
};

export default NotFound;
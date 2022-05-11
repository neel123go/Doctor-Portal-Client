import React from 'react';

const ReviewSliderItem = ({ review }) => {
    return (
        <div className="card h-full w-full bg-white text-gray-700 shadow-xl">
            <div className="card-body">
                <p>{review.text}</p>
            </div>
            <div className='flex items-center px-8 py-2'>
                <figure><img src={review.image} className='border-4 border-emerald-300 rounded-full' alt="User Img" /></figure>
                <div className='ml-5'>
                    <h2 className='text-md sm:text-2xl'>{review.name}</h2>
                    <h2>{review.address}</h2>
                </div>
            </div>
        </div>
    );
};

export default ReviewSliderItem;
import React from 'react';
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import Quote from '../../../assets/icons/quote.svg';

const HomeReviews = () => {
    return (
        <div className='mt-20 mx-5 md:mx-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-emerald-400 font-bold text-xl'>Testimonial</h2>
                    <h2 className='text-gray-700 text-3xl mt-2'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-20 md:w-40' src={Quote} alt="" />
                </div>
            </div>
            <ReviewSlider></ReviewSlider>
        </div >
    );
};

export default HomeReviews;
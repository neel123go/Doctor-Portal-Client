import React from 'react';
import Img1 from '../../../assets/images/fluoride.png';
import Img2 from '../../../assets/images/cavity.png';
import Img3 from '../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            title: 'Fluoride Treatment',
            img: Img1,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            _id: 2,
            title: 'Cavity Filling',
            img: Img2,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            _id: 3,
            title: 'Teeth Whitening',
            img: Img3,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        }
    ]
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h2 className='font-bold text-emerald-400'>OUR SERVICES</h2>
                <h2 className='text-3xl mt-3 text-gray-700'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-2 xl:px-20 py-15 xl:py-0 lg:mt-20 mt-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
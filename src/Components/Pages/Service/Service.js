import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card w-100 shadow-xl">
            <figure className='mt-10'>
                <img src={service.img} alt="Treatment Icon" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;
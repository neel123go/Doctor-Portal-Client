import React from 'react';
import './AppointmentCard.css';

const AppointmentCard = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-full bg-white text-center shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-emerald-400 text-2xl">{name}</h2>
                <p className='text-lg text-gray-700 mt-5'>{
                    slots.length ? <span>{slots[0]}</span>
                        : <span className='text-red-500 text-lg'>No slot available. Try another day</span>
                }</p>
                <p className='text-lg text-gray-700 mb-2'>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                <div className='w-3/5 mx-auto'>
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn text-white border-0 bg-gradient-to-r from-teal-400 to-cyan-500 hover:bg-gradient-to-l neel">Book Now</label>
                </div>
            </div>
        </div >
    );
};

export default AppointmentCard;
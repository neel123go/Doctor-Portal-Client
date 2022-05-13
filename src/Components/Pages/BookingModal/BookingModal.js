import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;

    const handleSubmit = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-blur p-5 md:m-0">
                <div className="modal-box bg-white rounded-lg">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-gray-700 text-2xl">{name}</h2>
                    <form onSubmit={handleSubmit} className='text-center mt-10'>
                        <input type="text" disabled value={format(date, 'PP')} className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                        <select name="slot" className="select bg-white border-2 outline-none text-md text-gray-600 border-gray-500 w-full mb-4">
                            {
                                slots.map(slot => <option key={Math.random()} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder='Full Name' className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                        <input type="text" name="email" placeholder='Email Address' className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                        <input type="number" name="number" placeholder='Phone Number' className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                        <input type="submit" className='btn bg-gray-700 border-0 w-full' value="Book Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
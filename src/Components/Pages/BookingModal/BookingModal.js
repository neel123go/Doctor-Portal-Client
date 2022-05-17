import React, { useState } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formatedDate = format(date, 'PP');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = e.target.number.value;
        if (phone.length > 0) {
            const slot = e.target.slot.value;
            const bookings = {
                treatmentId: _id,
                treatment: name,
                date: formatedDate,
                slot,
                patientName: user?.displayName,
                patientEmail: user?.email,
                patientPhone: phone
            };
            fetch('https://intense-headland-27534.herokuapp.com/booking', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookings)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success(`Your appointment is booked on ${formatedDate} at ${slot} successfully`);
                        refetch();
                    } else {
                        toast.error(`You already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
                    }
                    setTreatment(null);
                })
        } else {
            setError('Phone number is required');
        }
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
                        <input type="text" disabled value={user.displayName} className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                        <input type="text" disabled value={user.email} className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                        <input type="number" name="number" placeholder='Phone Number' className="h-10 rounded-lg py-5 px-3 text-gray-600 text-md border-solid border-2 border-gray-500 bg-white outline-none w-full mb-4" />
                        <p className='text-red-500 text-left mt-[-12px] mb-5'>{error}</p>
                        <input type="submit" className='btn bg-gray-700 border-0 w-full' value="Book Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
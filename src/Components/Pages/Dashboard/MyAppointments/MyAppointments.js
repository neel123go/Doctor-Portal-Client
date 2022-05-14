import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    let count = 1;

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [user]);

    return (
        <div>
            <h1 className='text-2xl'>{appointments.length > 0 ? 'My Appointments' : 'You Does not have any appointment'}</h1>

            <div className="overflow-x-auto mt-5">
                {
                    appointments.length > 0 ?
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className='bg-slate-100 border-1 border-gray-500'></th>
                                    <th className='bg-slate-100 border-1 border-gray-500'>Name</th>
                                    <th className='bg-slate-100 border-1 border-gray-500'>Treatment</th>
                                    <th className='bg-slate-100 border-1 border-gray-500'>Time</th>
                                    <th className='bg-slate-100 border-1 border-gray-500'>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map((a, index) => (
                                        <tr className='border-2' key={index}>
                                            <th className='bg-slate-100'>{count++}</th>
                                            <td className='bg-slate-100'>{a.patientName}</td>
                                            <td className='bg-slate-100'>{a.treatment}</td>
                                            <td className='bg-slate-100'>{a.slot}</td>
                                            <td className='bg-slate-100'>{a.date}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table> : ''
                }
            </div>
        </div >
    );
};

export default MyAppointments;
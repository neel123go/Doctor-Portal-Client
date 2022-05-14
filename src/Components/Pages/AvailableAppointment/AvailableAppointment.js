import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/treatment')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='px-5 lg:px-20 xl:px-32 py-0 md:py-10'>
            <h4 className='text-center text-emerald-400 font-bold text-xl md:text-2xl mt-5 md:mt-10'>Available Appointments <span className='block md:inline font-sans mt-1'>{format(date, 'PP')}</span></h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-0 md:mb-20 mt-5 md:mt-10'>
                {
                    services.map(service => <AppointmentCard
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppointmentCard>)
                }
                {treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppointment;
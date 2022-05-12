import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import BackgroundImg from '../../../assets/images/chair.png';
import Chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <div className="hero min-h-auto" style={{ backgroundImage: `url(${BackgroundImg})` }}>
                <div className="hero-overlay bg-opacity-95 bg-white"></div>
                <div className="hero-content flex-col md:flex-row-reverse py-10 px-0 md:py-20 lg:py-44">
                    <div className='w-full px-7 md:w-1/2'>
                        <img src={Chair} alt="" />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='flex justify-center items-center'>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate} />
                        </div>
                    </div>
                </div>
            </div>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div >
    );
};

export default Appointment;
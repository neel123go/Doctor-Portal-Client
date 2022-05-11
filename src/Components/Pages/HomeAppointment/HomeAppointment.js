import React from 'react';
import Doctor from '../../../assets/images/doctor-small.png';
import Button from '../../Button/Button';
import Background from '../../../assets/images/appointment.png';

const HomeAppointment = () => {
    return (
        <div className='relative mt-28 block text-center md:text-left lg:flex justify-center items-center w-full' style={{ backgroundImage: `url(${Background})` }}>
            <div className='flex-1 flex justify-center items-center'>
                <img className="absolute inset-x-0 bottom-0 xl:pl-20 h-[550px] hidden lg:block" src={Doctor} alt="" />
            </div>
            <div className='flex-1 pr-5 md:pr-20 p-5 md:p-20'>
                <h3 className='text-emerald-400 font-bold text-xl'>Appointment</h3>
                <h2 className='text-white text-3xl my-5'>Make an appointment Today</h2>
                <p className='text-white mb-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button routeName='appointment'></Button>
            </div>
        </div>
    );
};

export default HomeAppointment;
import React from 'react';
import icon1 from '../../../assets/icons/clock.svg';
import icon2 from '../../../assets/icons/marker.svg';
import icon3 from '../../../assets/icons/phone.svg';

const InfoCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-2 xl:px-20 py-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl px-5 py-5 lg:py-0 text-white bg-gradient-to-r from-teal-400 to-cyan-500">
                <figure><img src={icon1} alt="Icon1" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl px-5 py-5 lg:py-0 text-white">
                <figure><img src={icon2} alt="Icon2" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl px-5 py-5 lg:py-0 text-white border-0 bg-gradient-to-r from-teal-400 to-cyan-500">
                <figure><img src={icon3} alt="Icon3" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
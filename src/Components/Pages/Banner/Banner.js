import React from 'react';
import BackgroundImg from '../../../assets/images/chair.png';
import Chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <div className="hero-overlay bg-opacity-90 bg-white"></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'>
                    <img src={Chair} alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold text-gray-700">Your New Smile Starts Here</h1>
                    <p className="py-6 text-gray-500 pr-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam distinctio rem veniam minima iusto assumenda commodi ad culpa neque. Ad dolorem amet corrupti</p>
                    <button className="btn text-white border-0 bg-gradient-to-r from-teal-400 to-cyan-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
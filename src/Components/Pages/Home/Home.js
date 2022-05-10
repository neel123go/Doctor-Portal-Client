import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Home;
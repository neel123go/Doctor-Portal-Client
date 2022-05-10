import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
        </div>
    );
};

export default Home;
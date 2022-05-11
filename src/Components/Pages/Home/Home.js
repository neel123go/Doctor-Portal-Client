import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import HomeReviews from '../HomeReviews/HomeReviews';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className='px-5'>
                <Banner></Banner>
                <InfoCard></InfoCard>
                <Services></Services>
                <DentalCare></DentalCare>
            </div>
            <HomeAppointment></HomeAppointment>
            <HomeReviews></HomeReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
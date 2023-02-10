import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import HomeAppointment from '../HomeAppointment/HomeAppointment';

const Home = () => {
    return (
        <div className='mx-5 h-[100vh] bg-gray-100'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
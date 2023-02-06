import React from 'react';
import fluoride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
import ServicesCard from './ServicesCard';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: fluoride
        },

        {
            id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: whitening
        },
    ]
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-3xl font-bold text-primary'>Our services</h3>
                <h3 className='text-4xl font-bold'>Services we provide</h3>
            </div>
            <div className='grid my-10 grid-colse-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    servicesData.map(service => <ServicesCard
                        key={service.id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;
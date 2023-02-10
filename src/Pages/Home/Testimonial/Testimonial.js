import React from 'react';
import icon from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const tesmonialData = [
        {
            id: 1,
            name: "Winson Herry",
            location: "California",
            img: people1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 2,
            name: "leo Messi",
            location: "Bonani",
            img: people2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 3,
            name: "Atar ali",
            location: "malysia",
            img: people3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <div className='p-8'>
            <div className='flex justify-between my-6'>
                <div >
                    <h3 className='text-primary text-xl font-semibold'>Testimonial</h3>
                    <h1 className='text-3xl font-bold'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-20' src={icon} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    tesmonialData.map(feedback => <TestimonialCard
                        feedback={feedback}
                        key={feedback.id}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;
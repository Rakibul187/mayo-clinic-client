import React from 'react';

const TestimonialCard = ({ feedback }) => {
    const { name, location, img, description } = feedback;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className="card-actions">
                    <div>
                        <img src={img} alt="" className='w-12 h-12 border-[2px] border-primary rounded-full' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>{name}</h3>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
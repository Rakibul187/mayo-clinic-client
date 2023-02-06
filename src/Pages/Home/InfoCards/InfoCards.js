import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData = [
        {
            "id": 1,
            "name": "Opening ours",
            "description": "Open 9 am to 5pm",
            "icon": clock,
            "cardClass": "bg-gradient-to-r from-primary to-secondary"
        },
        {
            "id": 2,
            "name": "Visit our location",
            "description": "Brooklyn, NY 10036, United States",
            "icon": marker,
            "cardClass": "bg-accent"
        },
        {
            "id": 3,
            "name": "Contact us now",
            "description": "+000 123 456789",
            "icon": phone,
            "cardClass": "bg-gradient-to-r from-primary to-secondary"
        },
    ]
    return (
        <div className='grid my-16 mx-auto gap-6 text-white lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>
                )
            }
        </div>
    );
};

export default InfoCards;
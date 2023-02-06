import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, cardClass, icon } = card;
    return (
        <div className={`card  ${cardClass} shadow-xl flex items-center lg:flex-row p-5 `}>
            <figure><img src={icon} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
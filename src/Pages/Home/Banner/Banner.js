import React from 'react';
import chair from "../../../assets/images/chair.png"
import bgImage from "../../../assets/images/bg.png"
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div>
            <div className="hero px-10 py-14 "
                style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat' }}
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
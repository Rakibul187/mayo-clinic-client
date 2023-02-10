import React from 'react';
import dcare from "../../../assets/images/treatment.png"
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const DentalCare = () => {
    return (
        <div className=" mx-auto ">
            <div className="hero-content flex flex-col lg:flex-row">
                <div className='w-1/2'>
                    <div className='lg:h-[458px] lg:w-[576px]'>
                        <img src={dcare} alt="" className="w-full h-full rounded-lg shadow-2xl" />
                    </div>
                </div>
                <div className='w-1/2 '>
                    <h1 className="lg:text-3xl md:text-2xl text-2xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;
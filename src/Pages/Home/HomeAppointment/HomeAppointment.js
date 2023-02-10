import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import doctor from "../../../assets/images/doctor-small.png"
import appointment from "../../../assets/images/appointment.png"
const HomeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})`, borderRadius: "20px", backgroundRepeat: "no-repeat" }} className="mt-48 mb-10">
            <div className="hero">
                <div className="hero-content flexlg:flex-row">
                    <div className='lg:w-1/2 lg:-mt-40 -mb-4 hidden lg:block'>
                        <img src={doctor} alt="" className="rounded-lg  shadow-2xl" /></div>
                    <div className='lg:w-1/2 '>
                        <h1 className=' text-primary text-xm font-bold'>Appointment</h1>
                        <h1 className="text-3xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;
import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from "../../../assets/images/appointment.png"
const Contact = () => {
    return (
        <div className='flex justify-center font-sans items-center rounded-xl my-10' style={{ background: `url(${appointment})` }}>
            <div className="card flex-shrink-0 w-full max-w-sm text-center">
                <div className="card-body flex flex-col justify-center text-center">
                    <h3 className='text-lg -mb-1 text-primary font-bold'>Contact us</h3>
                    <h1 className='text-xl mb-2 text-white font-bold'>Stay connected with us</h1>
                    <div className="form-control">
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <textarea name="" id="" placeholder='What you want?' className='p-3 h-24 rounded-xl border-none'></textarea>
                    </div>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;
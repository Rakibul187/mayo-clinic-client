import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [appoinmentOptions, setAppoinmentOptions] = useState([])
    const [treatment, setTreanment] = useState(null)

    useEffect(() => {
        fetch("appointmentOptions.json")
            .then(res => res.json())
            .then(data => setAppoinmentOptions(data))
    }, [])
    return (
        <div className='my-16'>
            <h1 className='text-center font-bold text-secondary'>Available apppontment on {format(selectedDate, 'PP')} </h1>
            <div className='grid my-10 gap-6 grid-cols-a lg:grid-cols-3 md:grid-cols-2'>

                {
                    appoinmentOptions?.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreanment={setTreanment}
                    ></AppointmentOption>)
                }
            </div>
            {treatment &&
                <BookingModal
                    setTreanment={setTreanment}
                    treatment={treatment}
                    selectedDate={selectedDate}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreanment] = useState(null)
    const date = format(selectedDate, 'PP')

    const { data: appoinmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ["appointmentOptions", date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
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
                    refetch={refetch}
                    setTreanment={setTreanment}
                    treatment={treatment}
                    selectedDate={selectedDate}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;
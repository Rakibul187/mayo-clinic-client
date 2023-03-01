import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, setTreanment, selectedDate, refetch }) => {
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const bookingData = {
            patient: name,
            treatment: treatment.name,
            email,
            phone,
            appointmentDate: date,
            slot
        }

        if (user?.uid) {
            fetch("http://localhost:5000/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookingData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setTreanment(null)
                        toast.success("Booking confirmed")
                        refetch()
                    }
                    else {
                        setTreanment(null)
                        toast.error(data.message)
                    }
                })
        }

        console.log(bookingData)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-72">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment.name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-4' >
                        <input type="text" readOnly defaultValue={date} className="input input-bordered w-full input-sm" />
                        <select name="slot" className="input input-bordered w-full input-sm">
                            {
                                treatment.slots.map(slot =>
                                    <option value={slot}>{slot}</option>
                                )
                            }
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full input-sm" />
                        <input name="email" type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full input-sm" />
                        <input name="phone" type="number" placeholder="Phone number" className="input input-bordered w-full input-sm" required />
                        <button type='submit' className='btn w-full btn-secondary text-white btn-sm'>Confirm</button>
                    </form>


                </div>
            </div>
        </>
    );
};

export default BookingModal;
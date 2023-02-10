import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreanment, selectedDate }) => {
    const date = format(selectedDate, 'PP')

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
        setTreanment(null)
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
                        <input type="text" disabled defaultValue={date} className="input input-bordered w-full input-sm" />
                        <select name="slot" className="input input-bordered w-full input-sm">
                            {
                                treatment.slots.map(slot =>
                                    <option value={slot}>{slot}</option>
                                )
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full input-sm" />
                        <input name="email" type="email" placeholder="Your email" className="input input-bordered w-full input-sm" />
                        <input name="phone" type="number" placeholder="Phone number" className="input input-bordered w-full input-sm" />
                        <button type='submit' className='btn w-full btn-secondary text-white btn-sm'>Confirm</button>
                    </form>


                </div>
            </div>
        </>
    );
};

export default BookingModal;
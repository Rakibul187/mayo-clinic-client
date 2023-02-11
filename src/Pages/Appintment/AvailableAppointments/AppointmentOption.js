import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreanment }) => {
    const { name, slots } = appointmentOption

    return (
        <div>
            <div className="w-[400px] h-[210px] mx-auto rounded-xl bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-secondary font-bold">{name}</h2>
                    <p>{slots?.length ? slots[0] : "try another day"}</p>
                    <p>{slots.length} {slots.length > 1 ? "spaces" : "space"}</p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreanment(appointmentOption)}
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white">Book Now</label
                        >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
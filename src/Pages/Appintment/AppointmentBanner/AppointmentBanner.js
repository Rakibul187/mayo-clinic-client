import { DayPicker } from 'react-day-picker';
import chair from "../../../assets/images/chair.png"
import bgchair from "../../../assets/images/bg.png"
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <banner className="hero "
            style={{ backgroundImage: `url(${bgchair})`, backgroundRepeat: 'no-repeat' }}
        >
            <div
                className="hero-content mt-10 flex-col lg:flex-row-reverse">
                <img src={chair} alt="" className="w-1/2 rounded-lg shadow-2xl" />
                <div className='w-1/2 flex justify-center items-center'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </banner >
    );
};

export default AppointmentBanner;
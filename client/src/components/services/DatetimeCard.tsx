import { useEffect, useState } from "preact/hooks";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const DatetimeCard = () => {
    return (
        <div className="service-card">
            <div className="datetime-card-container">
                <section className="datetime-section">
                    <header className="datetime-card-current-time">12:12:12 PM</header>
                    <p className="datetime-card-day">Wed, 5 May, 2023</p>
                </section>
                <section className="datetime-calender-section">
                    <Calendar className="datetime-calendar" />
                </section>
            </div>
        </div>
    )
}
export default DatetimeCard;
import { useState } from "preact/hooks";

const DatetimeCard = () => {
    const date = new Date();
    const [ time, setTime ] = useState(`${date}`);
    // const timeInterval = setInterval(() => setTime(date.toLocaleString()), 1000)
    // clearInterval(timeInterval)
    return (
        <div className="service-card">
            <div className="datetime-card-container">
                <header>{time}</header>
            </div>
        </div>
    )
}
export default DatetimeCard;
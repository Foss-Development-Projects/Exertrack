import { useEffect, useState } from "preact/hooks";

const DatetimeCard = () => {
    const now = new Date();
    const [ time, setTime ] = useState(now)
    
    setInterval(() => setTime(now), 1000)
    return (
        <div className="service-card">
            <div className="datetime-card-container">
                <header>{time.toLocaleTimeString()}</header>
            </div>
        </div>
    )
}
export default DatetimeCard;
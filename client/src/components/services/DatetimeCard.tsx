import { useEffect, useState } from "preact/hooks";
const DatetimeCard = () => {
    const now = new Date();
    return (
        <div className="service-card">
            <div className="datetime-card-container">
                <header>{now.toLocaleDateString()}</header>
            </div>
        </div>
    )
}
export default DatetimeCard;
import { BsArrowRight } from 'react-icons/bs'
const UserCard = (props: any) => {
    return (
        <div className="service-card">
            <div className="user-card-container">
                <header className="user-card-greeting-header">
                    Good Evening, Foster
                </header>
                <section className="user-card-greeting-link-section">
                    <a href="/user/workouts" className="user-card-greeting-link">
                        Head To Workouts
                        <span className="form-input-icon">
                            <BsArrowRight />
                        </span>
                    </a>
                </section>
            </div>
        </div>
    )
}
export default UserCard;
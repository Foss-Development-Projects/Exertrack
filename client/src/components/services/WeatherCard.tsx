import { 
    BsFillCloudLightningFill,
    BsFillCloudRainHeavyFill,
    BsFillCloudLightningRainFill

} from 'react-icons/bs'
import { FaCloudSunRain, FaCloudMoonRain } from 'react-icons/fa';

const WeatherCard = () => {
    return (
        <div className="service-card">
            <div className="weather-card-container">
                <header className="weather-card-header">
                    <p className="weather-card-temperature">15<sup>o</sup> C</p>
                    <span className="form-input-icon">
                        <BsFillCloudLightningFill size={45} />
                    </span>
                </header>
                <section className="weather-card-future-section">
                    <div className="weather-card-future-status">
                        <header className="weather-card-future-status-header">
                            <p className="weather-card-future-temperature">17<sup>o</sup> C</p>
                        </header>
                    </div>
                    <div className="weather-card-future-status">
                        <header className="weather-card-future-status-header">
                            <p className="weather-card-future-temperature">14<sup>o</sup> C</p>
                        </header>
                    </div>
                    <div className="weather-card-future-status">
                        <header className="weather-card-future-status-header">
                            <p className="weather-card-future-temperature">24<sup>o</sup> C</p>
                        </header>
                    </div>
                    <div className="weather-card-future-status">
                        <header className="weather-card-future-status-header">
                            <p className="weather-card-future-temperature">24<sup>o</sup> C</p>
                        </header>
                    </div>
                    <div className="weather-card-future-status">
                        <header className="weather-card-future-status-header">
                            <p className="weather-card-future-temperature">24<sup>o</sup> C</p>
                        </header>
                    </div>
                    <div className="weather-card-future-status">
                        <header className="weather-card-future-status-header">
                            <p className="weather-card-future-temperature">24<sup>o</sup> C</p>
                        </header>
                    </div>
                    <div className="weather-card-future-status">
                        <header className="weather-card-future-status-header">
                            <p className="weather-card-future-temperature">24<sup>o</sup> C</p>
                        </header>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default WeatherCard;
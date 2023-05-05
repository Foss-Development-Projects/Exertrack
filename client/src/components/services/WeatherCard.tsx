import {
	BsFillCloudLightningFill,
	BsFillCloudRainHeavyFill,
	BsFillSunFill,
	BsFillCloudLightningRainFill,
} from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { FaCloudSunRain, FaCloudMoonRain, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

import { useEffect, useState } from "preact/hooks";

const data = [
	{ temp: "29", day: "Thursday", icon: BsFillCloudLightningFill },
	{ temp: "26", day: "Monday", icon: BsFillSunFill },
	{ temp: "24", day: "Friday", icon: BsFillCloudRainHeavyFill },
	{ temp: "21", day: "Sunday", icon: BsFillCloudLightningRainFill },
	{ temp: "27", day: "Tuesday", icon: FaCloudSunRain },
	{ temp: "27", day: "Tuesday", icon: FaCloudMoonRain },
];

const WeatherCard = () => {
	const temperature = 38;
	const [tempColor, setTempColor] = useState("");
	useEffect(() => {
		if (temperature < 0) {
			setTempColor("lightblue");
		} else if (temperature > 0 && temperature <= 10) {
			setTempColor("royalblue");
		} else if (temperature >= 10 && temperature <= 25) {
			setTempColor("goldenrod");
		} else if (temperature > 25 && temperature < 35) {
			setTempColor("orange");
		} else {
			setTempColor("orangered");
		}
	});
	return (
		<div className="service-card">
			<div className="weather-card-container">
				<header className="weather-card-header">
					<section className="weather-card-header-top-section">
						<p
							className="weather-card-temperature"
							style={{ color: tempColor }}
						>
							{temperature}
							<sup>o</sup> C
						</p>
						<span className="form-input-icon">
							<MdWbSunny size={45} />
						</span>
					</section>
					<section className="weather-card-header-lower-top-section">
						<p className="weather-card-header-current-area-indicator">
							London, United Kingdom
						</p>
						<p className="weather-card-header-current-weather-indicator">
							Fully Sunny
						</p>
					</section>
					<section className="weather-card-header-middle-section" title="Wind">
						<span className="form-input-icon">
							<FaWind size={18} />
						</span>
						<p className="weather-card-wind">15 km/H</p>
					</section>
					<section
						className="weather-card-header-bottom-section"
						title="Humidity"
					>
						<span className="form-input-icon">
							<WiHumidity size={28} />
						</span>
						<p className="weather-card-humidity">70%</p>
					</section>
				</header>
				<section className="weather-card-future-section">
					{data.map((item: any, index: number) => {
						return (
							<div className="weather-card-future-status" key={index}>
								<header className="weather-card-future-status-header">
									<p className="weather-card-future-temperature">
										{item.temp}
										<sup>o</sup> C
									</p>
								</header>
								<span className="form-input-icon">
									<item.icon size={30} />
								</span>
								<p className="weather-card-future-status-day">{item.day}</p>
							</div>
						);
					})}
				</section>
			</div>
		</div>
	);
};
export default WeatherCard;

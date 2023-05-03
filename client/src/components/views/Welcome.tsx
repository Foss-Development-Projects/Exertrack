import Clock from 'react-live-clock';

import WeatherCard from '../services/WeatherCard';
import UserCard from '../services/UserCard';
import DatetimeCard from '../services/DatetimeCard';
import MotivationCard from '../services/MotivationCard';

import EveningBG from './../../assets/images/evening.jpg';
import NightBG from './../../assets/images/night.jpg';
import MorningBG from './../../assets/images/morning.jpg';
import MoonLogo from './../../assets/images/moon.png';
import SunLogo from './../../assets/images/sun.png';

const Welcome = () => {
	return(
		<div className="welcome" style={{ backgroundImage: `url('${MorningBG}')` }}>
			<WeatherCard />
			<UserCard />
			<DatetimeCard />
			<MotivationCard />
		</div>
	)
}
export default Welcome;
import Clock from 'react-live-clock';

import EveningBG from './../../assets/images/evening.jpg';
import NightBG from './../../assets/images/night.jpg';
import MorningBG from './../../assets/images/morning.jpg';
import MoonLogo from './../../assets/images/moon.png';
import SunLogo from './../../assets/images/sun.png';

const Welcome = () => {
	return(
		<div className="welcome" style={{ backgroundImage: `url('${NightBG}')` }}>
			<section className="welcome-header-section">
				<h2 className="welcome-header">Good Night, Foster</h2>
				<img className="welcome-daytime-logo-section" src={MoonLogo} alt="Day Time Icon Indicator" title="Night" loading="lazy" />
			</section>
			<h1></h1>
		</div>
	)
}
export default Welcome;
import EveningBG from './../../assets/images/evening.jpg';
import NightBG from './../../assets/images/night.jpg';
import MorningBG from './../../assets/images/morning.jpg';
import MoonLogo from './../../assets/images/moon.png';
import SunLogo from './../../assets/images/sun.png';

const Welcome = () => {
	return(
		<div className="welcome" style={{ backgroundImage: `url('${MorningBG}')` }}>
			<section className="welcome-header-section">
				<h2 className="welcome-header">Good Morning, Foster</h2>
				<img className="welcome-daytime-logo-section" src={SunLogo} alt="Day Time Icon Indicator" title="Evening" loading="lazy" />
			</section>
		</div>
	)
}
export default Welcome;
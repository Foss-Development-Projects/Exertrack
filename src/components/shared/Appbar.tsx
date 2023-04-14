import Logo from './../../assets/images/exertrack.png';
import ProfileLogo from './../../assets/images/sample.webp';
import ThemeSwitch from '../modules/ThemeSwitch';
const Appbar = () => {
	return(
		<nav className="appbar">
			<a href="/" className="appbar-header">
				<img className="appbar-header-logo" src={Logo} alt="Site Logo" />
				<h1 className="appbar-header-title">Exertrack</h1>
			</a>
			<section className="appbar-body">
				<span className="appbar-body-theme">
					<ThemeSwitch />
				</span>
				<img className="appbar-body-profile" src={ProfileLogo} alt="User Profile Picture" loading="lazy" />
			</section>
			
		</nav>
	)
}
export default Appbar;
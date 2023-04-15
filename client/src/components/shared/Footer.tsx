import Logo from './../../assets/images/exertrack.png';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
	return(
		<footer className="footer">
			<header>
				<a href="/" className="footer-header">
					<img className="footer-header-logo" src={Logo} alt="Site Logo" />
					<h1 className="footer-header-title">Exertrack</h1>
				</a>
				<p className="footer-intro">Most Advanced Exercise Management Application</p>
			</header>
			<p className="footer-copyright"><AiOutlineCopyrightCircle /> Copyright 2023, Exertrack, Foster</p>
		</footer>
	)
}
export default Footer;
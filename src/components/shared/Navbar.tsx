import Logo from './../../assets/images/exertrack.png';

import { BsReverseLayoutSidebarReverse } from 'react-icons/bs'

const Navbar = () => {
	return(
		<nav className="navbar">
			<a href="/" className="navbar-header">
				<img className="navbar-header-logo" src={Logo} alt="Site Logo" />
				<h1 className="navbar-header-title">Exertrack</h1>
			</a>
			<button className="navbar-toggle-button">
				<BsReverseLayoutSidebarReverse size={24} color='whitesmoke' />
			</button>
		</nav>
	)
}
export default Navbar;
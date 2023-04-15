import Logo from './../../assets/images/exertrack.png';

import { BsReverseLayoutSidebarReverse } from 'react-icons/bs'

const Navbar = (props: any) => {
	const toggleSidebar = () => {
			props.sidebar.current.classList.toggle("hide-sidebar")
		}
	
	return(
		<nav className="navbar">
			<a href="/" className="navbar-header">
				<img className="navbar-header-logo" src={Logo} alt="Site Logo" />
				<h1 className="navbar-header-title">Exertrack</h1>
			</a>
			<button className="navbar-toggle-button" onClick={toggleSidebar}>
				<BsReverseLayoutSidebarReverse size={24} />
			</button>
		</nav>
	)
}
export default Navbar;
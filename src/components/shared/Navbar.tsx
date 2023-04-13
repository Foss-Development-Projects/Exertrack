import { useEffect } from 'preact/hooks'
import Logo from './../../assets/images/exertrack.png';

import { BsReverseLayoutSidebarReverse } from 'react-icons/bs'

const Navbar = (props: any) => {
	useEffect(() => {
		const sidebar: any = document.getElementById("sidebar")
	}, [])
	const toggleSidebar = () => {
			sidebar.classList.toggle("hide-sidebar")
		}
	
	return(
		<nav className="navbar">
			<a href="/" className="navbar-header">
				<img className="navbar-header-logo" src={Logo} alt="Site Logo" />
				<h1 className="navbar-header-title">Exertrack</h1>
			</a>
			<button className="navbar-toggle-button" onClick={toggleSidebar}>
				<BsReverseLayoutSidebarReverse size={24} color='whitesmoke' />
			</button>
		</nav>
	)
}
export default Navbar;
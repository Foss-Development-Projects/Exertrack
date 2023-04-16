import { useState, useEffect } from 'preact/hooks';
import { BsReverseLayoutSidebarReverse } from 'react-icons/bs';

import Logo from './../../assets/images/exertrack.png';
import classes from './../../assets/css/border.module.css';
const Navbar = (props: any) => {
	const [ sidebar, setSidebar ]: any = useState(null);
      useEffect(() => {
            setSidebar(props.sidebar.current)
      }, [sidebar])
	const toggleSidebar = () => {
			sidebar.classList.toggle("hide-sidebar")
		}
	
	return(
		<nav className={`navbar ${classes.add_border}`}>
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
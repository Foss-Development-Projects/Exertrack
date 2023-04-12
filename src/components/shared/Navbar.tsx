import Logo from './../../assets/images/exertrack.png';

const Navbar = () => {
	return(
		<nav className="navbar">
			<a href="#" className="navbar-header">
				<img className="navbar-header-logo" src={Logo} alt="Site Logo" />
				<h1 className="navbar-header-title">Exertrack</h1>
			</a>
		</nav>
	)
}
export default Navbar;
import { FaBeer, FaAirbnb, FaAccusoft, FaAlipay } from 'react-icons/fa';

const sidebarRoutes: Array<Object> = [
	{ id: 1, name: "Home", path: "/", icon: FaBeer },
	{ id: 2, name: "Account", path: "/account", icon: FaAirbnb },
	{ id: 3, name: "Logout", path: "/logout", icon: FaAccusoft },
	{ id: 4, name: "About", path: "/about", icon: FaAlipay },
		{ id: 1, name: "Home", path: "/", icon: FaBeer },
	{ id: 2, name: "Account", path: "/account", icon: FaAirbnb },
	{ id: 3, name: "Logout", path: "/logout", icon: FaAccusoft },
	{ id: 4, name: "About", path: "/about", icon: FaAlipay },
		{ id: 1, name: "Home", path: "/", icon: FaBeer },
	{ id: 2, name: "Account", path: "/account", icon: FaAirbnb },
	{ id: 3, name: "Logout", path: "/logout", icon: FaAccusoft },
	{ id: 4, name: "About", path: "/about", icon: FaAlipay },
		{ id: 1, name: "Home", path: "/", icon: FaBeer },
	{ id: 2, name: "Account", path: "/account", icon: FaAirbnb },
	{ id: 3, name: "Logout", path: "/logout", icon: FaAccusoft },
	{ id: 4, name: "About", path: "/about", icon: FaAlipay },
]

const Sidebar = () => {
	return(
		<nav className="sidebar">
			<ul className="sidebar-list">
			{sidebarRoutes.map((item: any) => {
				return(
					<li key={item.id} className="sidebar-list-item">
						<a href={item.path}>{item.name}</a>
					</li>
				)
			})}
			</ul>
		</nav>
	)
}
export default Sidebar;
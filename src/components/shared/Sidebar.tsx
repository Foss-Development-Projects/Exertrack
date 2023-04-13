import { Link } from 'preact-router/match';
import ProfileLogo from './../../assets/images/sample.webp';

import { VscAccount, VscSettings } from 'react-icons/vsc';
import { MdFitnessCenter, MdSearch } from 'react-icons/md';

import { BiLogOutCircle } from 'react-icons/bi';

const sidebarRoutes: Array<Object> = [
	{ id: 1, name: "Account", path: "/account", icon: VscAccount },
	{ id: 2, name: "Settings", path: "/settings", icon: VscSettings },
	{ id: 3, name: "Workouts", path: "/workouts", icon: MdFitnessCenter },
	{ id: 4, name: "Search", path: "/about", icon: MdSearch },
	{ id: 5, name: "Logout", path: "/logout", icon: BiLogOutCircle },
]

const Sidebar = () => {
	return(
		<nav className="sidebar">
			<ul className="sidebar-list">
			{sidebarRoutes.map((item: any) => {
				return(
					<li key={item.id} className="sidebar-list-item">
						<Link href={item.path} activeClassName='active-sidebar-link'>
							<item.icon size={24} />
							<p className="sidebar-list-item-title">{item.name}</p>
						</Link>
					</li>
				)
			})}
			</ul>
			<ul className="sidebar-profile">
				<li className="sidebar-profile-item">
					<img src={ProfileLogo} alt="User Profile Picture" loading="lazy" />
					<article className="sidebar-profile-item-detail">
						<p className="sidebar-profile-item-fname">Foster Z</p>
						<p className="sidebar-profile-item-uname">Foster0123</p>
					</article>
				</li>
			</ul>
		</nav>
	)
}
export default Sidebar;
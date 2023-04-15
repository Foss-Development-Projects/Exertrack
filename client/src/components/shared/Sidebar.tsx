import { Link } from 'preact-router/match';
import ProfileLogo from './../../assets/images/user.png';

import { VscAccount, VscSettings } from 'react-icons/vsc';
import { MdFitnessCenter, MdSearch } from 'react-icons/md';
import { SiWelcometothejungle } from 'react-icons/si';
import { BiLogOutCircle, BiInfoCircle } from 'react-icons/bi';

import ThemeSwitch from '../modules/ThemeSwitch';
import { useEffect } from 'preact/hooks';

const sidebarRoutes: Array<Object> = [
	{ name: "Welcome", path: "/", icon: SiWelcometothejungle },
	{ name: "Account", path: "/account", icon: VscAccount },
	{ name: "Settings", path: "/settings", icon: VscSettings },
	{ name: "Workouts", path: "/workouts", icon: MdFitnessCenter },
	{ name: "Search", path: "/search", icon: MdSearch },
	{ name: "Logout", path: "/logout", icon: BiLogOutCircle },
	{ name: "About", path: "/about", icon: BiInfoCircle },
]


const Sidebar = (props: any) => {
	let sidebar: any;
	useEffect(() => {
		sidebar = props.sidebar.current;
	}, [props.sidebar.current])
	
	window.onload = () => {
		if(window.innerWidth < 800 && !sidebar.classList.contains("hide-sidebar")) {
			sidebar.classList.add("hide-sidebar")
		}
		else {
			sidebar.classList.remove("hide-sidebar")
		}
	}
	window.onresize = () => {
		if(window.innerWidth < 800 && !sidebar.classList.contains("hide-sidebar")) {
			sidebar.classList.add("hide-sidebar")
		}
		else {
			sidebar.classList.remove("hide-sidebar")
		}
	}
	return(
		<nav className="sidebar" id="sidebar" ref={sidebar}>
			<ul className="sidebar-list">
			{sidebarRoutes.map((item: any) => {
				return(
					<li key={item.id} className="sidebar-list-item">
						<Link href={`/user${item.path}`} activeClassName='active-sidebar-link'>
							<item.icon size={24} />
							<p className="sidebar-list-item-title">{item.name}</p>
						</Link>
					</li>
				)
			})}
			</ul>
			<ul className="sidebar-profile">
				<li className="sidebar-profile-item">
					<ThemeSwitch id="theme-switch" name="theme-switch" />
					<p className="sidebar-profile-item-detail">Appearance</p>
				</li>
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
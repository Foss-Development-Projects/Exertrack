import Router from 'preact-router';

import About from '../views/About';
import Account from '../views/Account';
import Workout from '../views/Workout';
import Danger from '../views/Danger';
import Search from '../views/Search';
import Settings from '../views/Settings';
import Welcome from '../views/Welcome';

import classes from './../../assets/css/border.module.css';

const previewRoutes = [
	{ name: Welcome, path: "/" },
	{ name: Welcome, path: "/search" },
	{ name: Welcome, path: "/account" },
	{ name: Welcome, path: "/settings" },
	{ name: Welcome, path: "/about" },
	{ name: Welcome, path: "/danger" },
	{ name: Welcome, path: "/workouts" },
]

const Preview = () => {
	return(
		<div className={`preview ${classes.add_border}`}>
			<Router>
			{/*{previewRoutes.map((item: any, index: number) => {
				return(
					<item.name path={`/user${item.path}`} key={index} />
				)
			})}*/}
				<Welcome path="/user/" />
				<Search path="/user/search" />
				<Account path="/user/account" />
				<Settings path="/user/settings" />
				<Search path="/user/search" />
				<About path="/user/about" />
				<Danger path="/user/danger" />
				<Workout path="/user/workouts" />
			</Router>
		</div>
	)
}
export default Preview;
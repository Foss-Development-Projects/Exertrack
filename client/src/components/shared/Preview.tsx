import Router from 'preact-router';

import About from '../views/About';
import Account from '../views/Account';
import Workout from '../views/Workout';
import Danger from '../views/Danger';
import Search from '../views/Search';
import Settings from '../views/Settings';
import Welcome from '../views/Welcome';

import classes from './../../assets/css/border.module.css';
import Password from '../views/Password';
 import Profile from '../pages/Profile';
const Preview = () => {
	return(
		<div className={`preview ${classes.add_border}`}>
			<Router>
				<Welcome path="/user/" />
				<Search path="/user/search" />
				<Account path="/user/account" />
				<Password path="/user/password" />
				<Settings path="/user/settings" />
				<Search path="/user/search" />
				<About path="/user/about" />
				<Danger path="/user/danger" />
				<Workout path="/user/workouts" />
				<Profile path="/user/search/profile" />
			</Router>
		</div>
	)
}
export default Preview;
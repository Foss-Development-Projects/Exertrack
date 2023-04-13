import Router from 'preact-router';

import About from '../views/About';
import Account from '../views/Account';
import Workout from '../views/Workout';
import Logout from '../views/Logout';
import Search from '../views/Search';
import Settings from '../views/Settings';
import Welcome from '../views/Welcome';
const Preview = () => {
	return(
		<div className="preview">
			<Router>
				<Welcome path="/" />
				<Search path="/search" />
				<Account path="/account" />
				<Settings path="/settings" />
				<Search path="/search" />
				<About path="/about" />
				<Logout path="/logout" />
				<Workout path="/workouts" />
			</Router>
		</div>
	)
}
export default Preview;
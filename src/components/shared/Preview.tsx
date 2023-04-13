import Router from 'preact-router';

import About from '../views/About';
import Account from '../views/Account';
import Workout from '../views/Workout';
import Logout from '../views/Logout';
import Search from '../views/Search';
import Settings from '../views/Settings';

const Preview = () => {
	return(
		<div className="preview">
			<Router>
				<Search path="/search" />
				<Account path="/account" />
				<Settings path="/settings" />
				<About path="/about" />
				<Logout path="/logout" />
				<Workout path="/workouts" />
			</Router>
		</div>
	)
}
export default Preview;
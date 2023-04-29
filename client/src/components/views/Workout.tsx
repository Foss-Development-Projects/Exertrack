import { BiPlusCircle, BiTrash, BiEdit } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';

import { Checkbox } from '@mui/material';
import SearchBar from '../modules/SearchBar';

const Workout = () => {
	return(
		<div>
			<header className="form-header">Workouts</header>
			<div className="workout-toolbar">
				<section className="workout-toolbar-checkbox-section">
					<Checkbox name='workout' color='warning' className='checkbox' />
				</section>
				<section className="workout-toolbar-searchbar-section">
					<SearchBar />
				</section>
				<section className="workout-toolbar-button-section">
					<button className="workout-button icon-add">
						<BiPlusCircle className='icon' size={30} />
					</button>
					<button className="workout-button icon-delete">
						<BiTrash className='icon' size={30} />
					</button>
				</section>
			</div>
			<ul className="workout-list">
				<li className="workout-list-item">
					<section className="workout-checkbox">
						<Checkbox name='workout' color='primary' className='checkbox' />
					</section>
					<section className="workout-content">
						<p className="workout-content-name">WorkoutNameSection</p>
						<p className="workout-content-duration">5:00 Mins</p>
					</section>
					<section className="workout-modify">
						<button className="workout-button icon-edit">
							<BiEdit className='icon' size={22} />
						</button>
						<button className="workout-button icon-delete">
							<MdOutlineCancel className='icon' size={22} />
						</button>
					</section>
				</li>
				<li className="workout-list-item">
					<section className="workout-checkbox">
						<Checkbox name='workout' color='primary' className='checkbox' />
					</section>
					<section className="workout-content">
						<p className="workout-content-name">WorkoutNameSection</p>
						<p className="workout-content-duration">5:00 Mins</p>
					</section>
					<section className="workout-modify">
						<button className="workout-button icon-edit">
							<BiEdit className='icon' size={22} />
						</button>
						<button className="workout-button icon-delete">
							<MdOutlineCancel className='icon' size={22} />
						</button>
					</section>
				</li>
			</ul>
		</div>
	)
}
export default Workout;
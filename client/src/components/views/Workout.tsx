import { useState, useRef } from 'preact/hooks';
import { BiPlusCircle, BiTrash, BiEdit } from 'react-icons/bi';
import { TiTick, TiTickOutline } from 'react-icons/ti'
import { MdOutlineCancel } from 'react-icons/md';

import { Checkbox } from '@mui/material';
import SearchBar from '../modules/SearchBar';

const data = [
	{ name: "WorkoutName234232342342342", time: "5:00 Mins" },
	{ name: "WorkoutName", time: "6:00 Mins" },
	{ name: "WorkoutName", time: "4:00 Mins" }
]

const Workout = () => {
	const workoutListRef : any = useRef(null);
	const [ empty, setEmpty ]: any = useState(null)
	const [ allCheck, setAllCheck ] = useState(false);
	const [ completed, setCompleted ] = useState(false);
	
	return(
		<div className="workout">
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
			<ul className="workout-list" ref={workoutListRef}>
				{empty ? <p className="workout-list-empty">You haven't created any workouts yet</p> :  null}
				{data.map((item: any) => {
					return(
						<li className="workout-list-item">
							<section className="workout-checkbox">
								<Checkbox name='workout' color='primary' className='checkbox' />
							</section>
							<section className="workout-content">
								<p className="workout-content-name">{item.name}</p>
								<p className="workout-content-duration">{item.time}</p>
							</section>
							<section className="workout-modify">
								<button className={`workout-button ${completed ? 'icon-tick': ''}`} onClick={() => setCompleted(!completed)}>
									{ completed ? <TiTick className='icon' size={22} /> : <TiTickOutline className='icon' size={22} /> }
								</button>
								<button className="workout-button icon-edit">
									<BiEdit className='icon' size={22} />
								</button>
								<button className="workout-button icon-delete">
									<MdOutlineCancel className='icon' size={22} />
								</button>
							</section>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Workout;
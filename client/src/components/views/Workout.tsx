import { useState, useRef, useEffect } from 'preact/hooks';
import { BiPlusCircle, BiTrash, BiEdit } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';

import { Checkbox } from '@mui/material';
import SearchBar from '../modules/SearchBar';

const Workout = () => {
	const workoutListRef : any = useRef(null);
	const [ empty, setEmpty ]: any = useState(null)
	const [ allCheck, setAllCheck ] = useState(false);
	useEffect(() => {
		if(workoutListRef.current.getElementsByTagName("li").length === 0){
			console.log("No Element")
			setEmpty(true)
		}
		else {
			setEmpty(false)
		}
	}, [empty])
	
	// if(workoutListRef.current)
	return(
		<div className="workout">
			<header className="form-header">Workouts</header>
			<div className="workout-toolbar">
				<section className="workout-toolbar-checkbox-section">
					<Checkbox checked={ allCheck ? true : false } name='workout' color='warning' className='checkbox' />
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
			
				<li className="workout-list-item">
					<section className="workout-checkbox">
						<Checkbox checked={ allCheck ? true : false } name='workout' color='primary' className='checkbox' />
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
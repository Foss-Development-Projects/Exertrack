import EveningBG from './../../assets/images/evening.jpg';
const Welcome = () => {
	return(
		<div className="welcome" style={{ backgroundImage: `url('${EveningBG}')` }}>
			<h2 className="welcome-header">Good Evening, Foster</h2>
		</div>
	)
}
export default Welcome;
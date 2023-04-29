import { useState } from 'preact/hooks'
import { Checkbox, Button, FormControlLabel } from "@mui/material";
import ProfileLogo from './../../assets/images/user.png';
const Danger = () => {
	const [ check, setCheck ] = useState(false);
	return(
		<div className="danger">
			<header className="form-header">
				Danger Zone
			</header>
			<section className="danger-zone-profile-section">
				<img src={ProfileLogo} alt="User Profile Picture" loading="lazy" />
			</section>
			<section className="danger-zone-button-section">
				<button disabled={check ? false : true} className="danger-delete-button">Delete Account</button>
				<FormControlLabel label="Delete Account" control={<Checkbox content='Delete' className='checkbox' onChange={() => setCheck(!check)} color='error' placeholder='asda' />} />
					
				<p className="danger-warning">Pressing the Above Button Will Delete Your Account & All The Data Instantly. Proceed With Caution. No Going Back.</p>
			</section>
		</div>
	)
}
export default Danger;
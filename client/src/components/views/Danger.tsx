import { useState } from 'preact/hooks'
import { Checkbox, Button, FormControlLabel } from "@mui/material";
const Danger = () => {
	const [ check, setCheck ] = useState(false);
	return(
		<div>
			<header className="form-header">
				Danger Zone
			</header>
			<section className="danger-zone-button-section">
				<Button disabled={check ? true : false} className="danger-delete-button">Delete Account</Button>
				<FormControlLabel label="I Confirm Deleting My Account" control={<Checkbox content='Delete' className='checkbox' onChange={() => setCheck(!check)} color='error' placeholder='asda' />} />
					
				<p className="danger-warning">Pressing the Above Button Will Delete Your Account & All The Data Instantly. Proceed With Caution</p>
			</section>
		</div>
	)
}
export default Danger;
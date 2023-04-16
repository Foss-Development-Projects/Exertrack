import { BsCamera2 } from 'react-icons/bs';
import { FaSignature } from 'react-icons/fa';

import ProfileLogo from './../../assets/images/user.png';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
const Account = () => {
	return(
		<div className="account">
			<section className="account-profile-section">
				<section className="account-profile-container">
					<img src={ProfileLogo} alt="User Profile Picture" loading="lazy" />
					<label htmlFor="profile-picture" className="profile-picture-input-label">
						<BsCamera2 size={24} />
					</label>
					<input className="profile-picture-input" id="profile-picture" type="file" name="profile_picture" />
				</section>
			</section>
			<section className="account-input-field-section">
				<div className="input-field">
					<span className="input-field-title">
						<p>Fullname:</p>
					</span>
					<EditText 
						showEditButton
						defaultValue='What should u be called ?'
						placeholder='Fullname'
						className='input-box'
						name='profile_fname'
						inputClassName='input-editable' 
					/>
				</div>
				<div className="input-field">
					<span className="input-field-title">
						<p>Username:</p>
					</span>
					<EditText 
						showEditButton
						defaultValue='How about a custom name ?'
						placeholder='Username'
						className='input-box'
						name='profile_uname'
						inputClassName='input-editable' 
					/>
				</div>
				<div className="input-field">
					<span className="input-field-title">
						<p>Email:</p>
					</span>
					<EditText 
						showEditButton
						defaultValue='Gmail, Yahoo, Microsoft..., anything will work'
						placeholder='Email'
						className='input-box'
						name='profile_email'
						inputClassName='input-editable' 
					/>
				</div>
			</section>
		</div>
	)
}
export default Account;
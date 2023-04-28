import { BsCamera2 } from 'react-icons/bs';
import { EditableText } from '@blueprintjs/core'

import ProfileLogo from './../../assets/images/user.png';
import '@blueprintjs/core/lib/css/blueprint.css'
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
					<EditableText confirmOnEnterKey type='text' className='editable-input' placeholder='Fullname' />
				</div>
				<div className="input-field">
					<EditableText confirmOnEnterKey type='text' className='editable-input' placeholder='Username' />
				</div>
				<div className="input-field">
					<EditableText confirmOnEnterKey type='text' className='editable-input' placeholder='Email' />
				</div>
				<div className="input-field">
					<EditableText maxLength={250} multiline minLines={6} confirmOnEnterKey contentId='account-bio-input-field' type='text'  className='editable-input' placeholder='Bio' />
				</div>
			</section>
		</div>
	)
}
export default Account;
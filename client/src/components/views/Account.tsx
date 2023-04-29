import { BsCamera2 } from 'react-icons/bs';
import { BiUserCircle, BiUser, BiEnvelope } from 'react-icons/bi';
import { useState } from 'preact/hooks';
import { GiBookAura } from 'react-icons/gi';
import ProfileLogo from './../../assets/images/user.png';
const Account = () => {
	const maxLength = 250;
	const [ charCount, setCharCount ] = useState(0);
	return (
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
			<form className="account-section">
				<section className="form-input-section">
					<span className="form-input-icon">
						<BiUser />
					</span>
					<input type='text' name="account_change_fullname" className="form-input-field" placeholder="Change Name" />
				</section>
				<section className="form-input-section">
					<span className="form-input-icon">
						<BiUserCircle />
					</span>
					<input type='text' name="account_change_username" className="form-input-field" placeholder="Change Username" />
				</section>
				<section className="form-input-section">
					<span className="form-input-icon">
						<BiEnvelope />
					</span>
					<input type='text' name="account_change_email" className="form-input-field" placeholder="Change Email" />
				</section>

				<section className="form-input-section">
					<p 
						className="form-textarea-char-count" 
						style={charCount == maxLength ? {color:'orangered'} : {color:'inherit'}}
					>
					{charCount}/{maxLength}
					</p>
					<span className="form-textarea-icon">
						<GiBookAura />
					</span>
					<textarea 
						maxLength={maxLength} 
						rows={6} 
						name='account_bio' 
						type='text' 
						className='form-textarea-field' 
						placeholder='Bio' 
						onChange={(e: any) => setCharCount(e.target.value.length)}
					></textarea>
				</section>
				<section className="form-submit-section">
					<button className="form-submit-button" type="submit">Update</button>
				</section>
			</form>
		</div>
	)
}
export default Account;
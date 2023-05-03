import { BiLockAlt } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'preact/hooks';

const Password = () => {
	const [eye1, setEye1] = useState(true);
	const [eye2, setEye2] = useState(true);
	const [eye3, setEye3] = useState(true);
	return (
		<div className="password">
		<div className="password-section">
			<header className="form-header">Change Password</header>
			<form className="form-body">
				<section className="form-input-section">
					<span className="form-input-icon">
						<BiLockAlt />
					</span>
					<input type={eye1 ? 'password' : 'text'} name="account_current_password" className="form-input-field" placeholder="Current Password..." />
					<span className="form-input-eye-icon" onClick={() => setEye1(!eye1)}>
						{eye1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
					</span>
				</section>
				<section className="form-input-section">
					<span className="form-input-icon">
						<BiLockAlt />
					</span>
					<input type={eye2 ? 'password' : 'text'} name="account_new_password" className="form-input-field" placeholder="New Password..." />
					<span className="form-input-eye-icon" onClick={() => setEye2(!eye2)}>
						{eye2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
					</span>
				</section>
				<section className="form-input-section">
					<span className="form-input-icon">
						<BiLockAlt />
					</span>
					<input type={eye3 ? 'password' : 'text'} name="account_confirm_password" className="form-input-field" placeholder="Confirm Password..." />
					<span className="form-input-eye-icon" onClick={() => setEye3(!eye3)}>
						{eye3 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
					</span>
				</section>
				<section className="form-helper-section">
					<a className="form-submit-link" href="../forgot-password">Forgot Current Password?</a>
				</section>
				<section className="form-submit-section">
					<button className="form-submit-button" type="submit">Update</button>
				</section>
			</form>
		</div>
		</div>
	)
}
export default Password;
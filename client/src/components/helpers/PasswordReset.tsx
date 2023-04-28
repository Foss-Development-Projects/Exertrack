import { Link } from 'preact-router'
import { useState } from 'preact/hooks';
import { BiLockAlt } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Appbar from '../shared/Appbar';
import './../../assets/scss/components/styles/forgot-password.scss';

const PasswordReset = () => {
	const [ eye1, setEye1 ] = useState(true);
	const [ eye2, setEye2 ] = useState(true);
	return(
		<div className="form-container">
			<Appbar />
			<div className="form">
				<header className="form-header">Forgot Password ?</header>
				<form className="form-body">
					<section className="form-input-section">
						<span className="form-input-icon">
							<BiLockAlt />
						</span>
						<input type={eye1 ? 'password' : 'text'} name="register_password" className="form-input-field" placeholder="Password..." />
						<span className="form-input-eye-icon" onClick={() => setEye1(!eye1)}>
							{ eye1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
						</span>
					</section>
					<section className="form-input-section">
						<span className="form-input-icon">
							<BiLockAlt />
						</span>
						<input type={eye2 ? 'password' : 'text'} name="register_confirm_password" className="form-input-field" placeholder="Confirm Password..." />
						<span className="form-input-eye-icon" onClick={() => setEye2(!eye2)}>
							{ eye2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
						</span>
					</section>
					<section className="form-submit-section">
						<button className="form-submit-button" type="submit">Register</button>
						<Link className="form-submit-link" href="/">Return To Home</Link>
					</section>
				</form>
			</div>
		</div>
	)
}
export default PasswordReset;